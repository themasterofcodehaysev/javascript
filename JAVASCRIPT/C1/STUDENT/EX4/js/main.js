// case 1:
let arr = [1, 3, 6, 7, 9];
// TODO: 
// YOUR CODE HERE
let newArr = [];
for (value of arr){
    if (value > 5){
        newArr.push(value);
    }
    else if (value < 5){
        newArr.push(9);
    }
}
console.log(newArr)
// output: [9, 9, 6, 7, 9]

