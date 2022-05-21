// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "harshit";

// console.log(firstName.length);
// firstName = firstName.trim(); // "harshit"
// console.log(firstName)
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index 
// end index

// let newString = firstName.slice(1); 
let newString = firstName.slice(1,5); // hars
console.log(newString);

/* 
--> trim() method removes whitespace from both ends of a string and returns a new string, without modifying the 
original string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.)

-->The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to 
end ( end not included) where start and end represent the index of items in that array. The original array will not 
be modified.
 */