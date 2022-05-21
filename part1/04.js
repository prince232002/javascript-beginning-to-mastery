// let keyword 
// declare variable with let keyword 

let firstName = "harshit";
firstName = "Mohit";
console.log(firstName);


// block scope vs funtion scope (covered later in this video)

               
/* 
var	let	const---------------------------------------------------------------------------------------------------------
1. The scope of a var variable is functional scope.	The scope of a let variable is block scope.	The scope of a const variable is block scope.
2. It can be updated and re-declared into the scope.	It can be updated but cannot be re-declared into the scope.	It cannot be updated or re-declared into the scope.
3. It can be declared without initialization.	It can be declared without initialization.	It cannot be declared without initialization.
4. It can be accessed without initialization as its default value is “undefined”.	It cannot be accessed without initialization, as it returns an error.	It cannot be accessed without initialization, as it cannot be declared without initialization.

# Note: Sometimes, users face the problem while working with the var variable as they change the value of it in the particular block. So, users should use the let and const keyword to declare a variable in JavaScript. 

 */