// and  or operator 



// if(firstName[0] === "H"){
//     console.log("your name starts with H")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age>18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }
let firstName = "arshit";
let age = 16;

if(firstName[0] === "H" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");
}


/* 
= is used for assigning values to a variable in JavaScript.
== is used for comparison between two variables irrespective of the datatype of variable.
=== is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.
 */