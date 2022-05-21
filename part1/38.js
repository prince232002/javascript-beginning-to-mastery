// how to iterate object 
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for in loop 
// Object.keys 
// to iterate key value pair -----------------------------------------
for(let key in person){
    //for key value pair ---
    // console.log(`${key} : ${person[key]}`);
    console.log(key," : " ,person[key]);
} 
                              /*  OR  */
//to iterate key value of the keys------------------------------------
for(let key of Object.keys(person)){
    console.log(key ," : ",person[key]);
    // console.log(person[key]);
}

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

/* 

Difference for..in and for..of:
Both for..in and for..of are looping constructs which are used to iterate over data structures. The only difference between them is the entities they iterate over:

-> for..in iterates over all enumerable property keys of an object
-> for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.

 */

/* REFER for more--------------- 
https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements#:~:text=Difference%20for..in%20and%20for,values%20of%20an%20iterable%20object.
 */