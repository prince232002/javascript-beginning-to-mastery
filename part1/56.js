// important array methods 

 const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }
// for (let i=0; i<numbers.length; i++){
//     myFunc(numbers[i],i);
// }

//above code replaced b  y ussing for each
//for each - using it we dont need to use for loop syntax as below-

numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`);
});

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }


