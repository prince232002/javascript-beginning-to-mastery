// arrow functions
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

const singHappyBirthday = () => {                  //function replaced by ()
    console.log("happy birthday to you ......");
}

singHappyBirthday();

const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}

const ans = sumThreeNumbers(2,3,4);
console.log(ans);

// const isEven = function(number){
//     return number % 2 === 0;
// }

//arrow function for return type function ---

const isEven = number => number % 2 === 0;


console.log(isEven(4));

const firstChar = anyString => anyString[0];

console.log(firstChar("harshit"));


const findTarget = (array, target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}