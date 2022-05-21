// template string --
/* Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions
 Without template literals, when you want to combine output from expressions with strings, you’d concatenate them
 using the "+" (plus sign) (addition operator):
// syntax : `string text ${expression} string text` */
let age = 22;
let firstName = "harshit"

// "my name is harshit and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

let aboutMe = `my name is ${firstName} and my age is ${age}`

console.log(aboutMe);