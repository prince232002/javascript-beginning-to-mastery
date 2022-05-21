// [[difference between dot and bracket notaion
const key = "email";
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]

}

console.log(person.age);                    //dot notation 
console.log(person["person hobbies"]);      // bracket notation 
// person["key"] = "harshitvashisth@gmail.com";
//how to add key in person ---
person[key] = "harshitvashisth@gmail.com";  //adding element to objec 
console.log(person);
  
/* 
dot notation -- for eg to access object without spaces we use it 
bracket notation -- to access object with spaces name we use it 
 */