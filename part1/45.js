// function expression 
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

const singHappyBirthday = function(){
    console.log("happy birthday to you ......");
}

// singHappyBirthday();

const sumThreeNumbers = function(number1, number2, number3){
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,4);
// console.log(ans);


// function isEven(number){
//     return number % 2 === 0;
// }
const isEven = function(number){
    return number % 2 === 0;
}
// console.log(isEven(2));

const firstChar = function(anyString){
    return anyString[0];
}

const findTarget = function(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

// const sum= function(a,b){
//  return a+b;
// }
// const add= sum(4,44);
// console.log(add)

/* 
What does a JavaScript function return if no return is given?
A function without a return statement will return a default value. In the case of a constructor called with the new 
keyword, the default value is the value of its this parameter. For all other functions, the default return value is 
undefined
 */