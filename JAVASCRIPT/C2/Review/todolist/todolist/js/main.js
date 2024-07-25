

function createCard(obj){
    let body = document.querySelector('body');

    let container = document.createElement('div');
    container.classList.add("container");

    let div = document.createElement('div');
    div.classList.add('row');

    let colum = document.createElement('div');
    colum.classList.add("col-6", "mt-5")

    let h2 = document.createElement('h2');
    h2.textContent = "All tasks";

    let row = document.createElement('div');
    row.classList.add('row');

    let card = document.createElement('div');
    card.classList.add("card", "p4", "boder-danger", "mt-2");

    let span = document.createElement('span');

    let input = document.createElement('input');

    input.type = "checkbox";
    input.name = "markAsDone";
    input.setAttribute("id", "markAsDone");

    let p = document.createElement('p');
    p.textContent = obj.paragraph;

    let a = document.createElement('a');
    a.href = obj.link;
    a.textContent = "Read me";

    let btn = document.createElement('button');
    btn.classList.add("btn" , "btn-danger");
    btn.textContent = "Delete";

    container.appendChild(div);
    div.appendChild(colum);
    colum.appendChild(h2);
    colum.appendChild(row);
    row.appendChild(card);
    card.appendChild(span);
    card.appendChild(btn);
    span.appendChild(input);
    span.appendChild(p);
    span.appendChild(a);
    body.appendChild(container);

}

function display(){
    for (let obj of lates){
        createCard(obj)
    }

};



let lates = [
    {paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. tiae voluptates labore?1" , link: "google.com" },
    {paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. tiae voluptates labore?2" , link: "facebook.com" },
    {paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. tiae voluptates labore?3" , link: "youtube.com" },
];

display();

