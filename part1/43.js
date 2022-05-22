// nested object destructuring using array
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'natasha', gender: 'female'},
]

const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
// , is used to skip the inbetween object in an array
console.log(user1firstName);
console.log(userId);
console.log(user3gender);
// for(let user of users){
    console.log(users);
// }