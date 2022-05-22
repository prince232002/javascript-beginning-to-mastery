// object destructuring
const band = {
  bandName: "led zepplin",
  cbandName: "led zepplign",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { cbandName, famousSong:var1, ...rest } = band;   //...rest can be named anything except special keywords
// console.log(cbandName);
console.log(rest);
//wrong syntax 
console.log(var1);
console.log(band);
/* 
rest-  rest  properties allow you to extract the remaining properties from an object into a new object. It excludes every other property listed in the destructuring pattern.
 */

/* 
For example,
 if we want to get the value of the name and age properties from the user object, we can do this:
const user = { 
    'name': 'Alex',
    'addrgs': '15th Park Avenue',
    'age': 43
}
without object destructing ------------------------------------
let name = user.name;
let age = user.age;
console.log(name, age);
---------------------------------------------------------------
with object destructing----------------------------------------
const { name, age } = user;
console.log(name, age); // Output, Alex 43

NOTE
This is undoubtedly a bit more typing. We have to explicitly mention the name and age property with the user object in dot(.) notation, then declare variables accordingly and assign them.

We can simplify this process using the new object destructuring syntax introduced in ES6.
 */


/* 
NOTE :
What if we declare the variable in advance and then try to destructure the same name's key from the object? Nope, not much luck here either. It is still syntactically incorrect.

let name;

{ name  } = user; // Uncaught SyntaxError: Unexpected token '='
In this case, the correct syntax is to put the destructuring exprgsion inside parenthesis ((...)).

Please note that the parenthesis are required when you want to omit the let or const keyword in the destructuring exprgsion itself.
let name;

({ name  } = user);

console.log(name); // Output, Alex
 */

//  FOR MORE :
//https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter/