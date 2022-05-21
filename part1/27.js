// array push pop 

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// push ( add first element to the end and changes the original array)
fruits.push("banana");
console.log(fruits);
// pop (remove first element from the end and changes the original array )
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruits is", poppedFruit);

// unshift ( add element to the start )
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

// shift (remove first element from the start )
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit);