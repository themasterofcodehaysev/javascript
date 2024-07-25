let numbers = [1, 3, 5, 0, 2, 0, 1, 1, 2, 3];
// TODO: 
// YOUR CODE HERE
let result = 0;
isRun = false;
for (let value in numbers){
    if (numbers[value] === 1 && ! isRun){
        isRun = true;
    }
    else if ( numbers[value] === 0){
        isRun = false;
    }
    else if (isRun){
        result += numbers[value];
    }
    
}
console.log(result)

// output: 14 becuase 3 + 5 + 1 + 2 + 3





