let datas = [
    // {name: "Keyboad" , instock: 40 , price: '10$'},
    // {name: "mouse" , instock: 30 , price: '10$'},
    // {name: "monitor" , instock: 10 , price: '200$'},
    // {name: "laptop" , instock: 20 , price: '400$'},
];

function save(){
    localStorage.setItem("datas",JSON.stringify(datas));
}
// save();
function loadData(){
    datas = JSON.parse(localStorage.getItem("datas"));

}


loadData();


function createProduct(){
    let i = 0;
    for (product of datas){
        let card = document.createElement('div');
        card.classList.add('product');

        let product_name = document.createElement('h3');
        product_name.textContent = product.name;

        let product_stock = document.createElement('p');
        product_stock.textContent = "Total in stock: ";
        let stock_value = document.createElement('span');
        stock_value.textContent = product.instock;

        let price_text = document.createElement('p');
        price_text.textContent = "Price: ";
        let price_value = document.createElement('span');
        price_value.textContent = product.price;

        let btn = document.createElement('button');
        btn.classList.add('btn');
        btn.setAttribute("id","id")
        btn.id = i;
        btn.textContent = "add to cart";
        btn.addEventListener('click', addToCart)
       
        
        price_text.appendChild(price_value)
        product_stock.appendChild(stock_value)
        card.appendChild(product_name);
        card.appendChild(product_stock);
        card.appendChild(price_text);
        card.appendChild(btn);
        list_container.appendChild(card)

        i++;
    }
}



let list_container = document.querySelector('.list-container');
createProduct()




function addToCart(e){
    let isNotExit = true;
    let indexOfProduct = e.target.id;
    let productAddToCart = datas[indexOfProduct];
    for(product of list_order_container.children){
        if(product.children[0].textContent === productAddToCart.name){
            if(productAddToCart.instock > product.children[2].children[0].textContent){
                product.children[2].children[0].textContent = parseInt(product.children[2].children[0].textContent ) + 1;
                product.children[1].children[0].textContent = parseInt(productAddToCart.price) * parseInt(product.children[2].children[0].textContent) + "$";
            }
            
            isNotExit = false;
            
        }

    }
    if(isNotExit){
        let card = document.createElement('div');
        card.classList.add('list-order');
    
        let h3Name = document.createElement('h3');
        h3Name.classList.add('product-price');
        h3Name.textContent = productAddToCart.name;
    
        let pPriceText = document.createElement('span');
        pPriceText.classList.add('product-price');
        pPriceText.textContent = "Price: ";
        let pPriceSpan = document.createElement('span');
        pPriceSpan.textContent = productAddToCart.price;
        pPriceText.appendChild(pPriceSpan);
    
    
        let pQuantityText = document.createElement('span');
        pQuantityText.classList.add('quantity');
        pQuantityText.textContent = "Quantity: ";
        let quantityspan = document.createElement('span');
        quantityspan.textContent = 1;
        pQuantityText.appendChild(quantityspan);
    
        card.appendChild(h3Name);
        card.appendChild(pPriceText);
        card.appendChild(pQuantityText);
    
        list_order_container.appendChild(card);
    }
    
    
    


}

let list_order_container = document.querySelector('.list-order-container');




