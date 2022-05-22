// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }
for ( let f in fruits){
    console.log(f);
}
/* 
Difference for..in and for..of:
Both for..in and for..of are looping constructs which are used to iterate over data structures. The only difference between them is the entities they iterate over:

for..in iterates over all enumerable property keys of an object
for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.
 
Example:
let arr = ['el1', 'el2', 'el3'];

arr.addedProp = 'arrProp';

// elKey are the property keys
for (let elKey in arr) {
  console.log(elKey);
}

// elValue are the property values
for (let elValue of arr) {
  console.log(elValue)
}
 */