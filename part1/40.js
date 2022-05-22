// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];
// console.log(newArray);

// spread operator in objects
const obj1 = {
  key1: "valueZZZ",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

const newObject = { ...obj1, ...obj2, key69: "value69" };
// const newObject = { ...["item1", "item2"] };
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(newObject);


/* 
important--

line 20 output you will see only one key1 with obj1 as priority as no similar key repeats within same object 
i.e, newObject 
NOTE :In the case of a key collision, the right-most (last) object's value wins out
 
 */