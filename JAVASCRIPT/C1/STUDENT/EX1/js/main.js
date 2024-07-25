let text = "hello world [JavaScript] we [are] strong!";
// TODO: 
// YOUR CODE HERE

let newText = "";
isRun = true;
for (let value in text){
    if (text[value] === "["){
        isRun == false;
    }
    else if (text[value] === "]"){
        isRun = true;
        
    }
    else if (isRun){
        newText += text[value]
    }
}
console.log(newText)


// output: hello world we strong!


