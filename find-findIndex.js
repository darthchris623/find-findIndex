console.log('find-findIndex practice');
/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/
// let users = [
//   {username: 'mlewis'},
//   {username: 'akagen'},
//   {username: 'msmith'}
// ];
// console.log(users);
// const username = 'msmith';

// for (let i = 0; i < users.length; i++){
//   if (users[i].hasOwnProperty(username)) {
//     console.log(users[i]);
//   };
// };


// First attempt with a simple for loop.
// function findUserByUsername(array, username) {
  
// };

function findUserByUsername(usersArray, username) {
  return usersArray.find(function (user) {
    // return user[username]; // <-- Undefined
    // return username[user]; // <-- Undefined
    // return usersArray[user] === username; // <-- first username without second parameter, undefined when using second parameter
    // return user[usersArray] === username; // <-- Same as previous
    // return user === username; // <-- Undefined
    // return username === user; // <-- Undefined
    // return usersArray[username] === user; // <-- Undefined
    return user.username === username;
  });
};

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/
let newUsers = [];
for (let i = 0; i < users.length; i++){
  if (users[i].username === username) {
    usersArray.slice(usersArray[i], usersArray[i] + 1);
  };
};

// users.findIndex(function (user) {
//   return users.slice(user);
// });

// function removeUser(usersArray, username) {
//   return usersArray.findIndex(function (user) {
//     return 
//   });
// };

// Given answer
function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  })
  if(foundIndex === -1) return;

  return usersArray.splice(foundIndex,1)[0];
}

// console.log(users.slice(0, 0)); // []
// console.log(users.slice(0, 1)); // [{username: 'mlewis'}]
// console.log(users.slice(0, 2)); // [{username: 'mlewis'}, {username: 'akagen'}]
// console.log(users.slice(0, 3)); // [{username: 'mlewis'}, {username: 'akagen'}, {username: 'msmith'}]
// console.log(users.slice(0, 4)); // [{username: 'mlewis'}, {username: 'akagen'}, {username: 'msmith'}]

// console.log(users.slice(1, 0)); // []
// console.log(users.slice(1, 1)); // []
// console.log(users.slice(1, 2)); // [{username: 'akagen'}]
// console.log(users.slice(1, 3)); // [{username: 'akagen'}, {username: 'msmith'}]
// console.log(users.slice(1, 4)); // [{username: 'akagen'}, {username: 'msmith'}]

// console.log(users.slice(2, 0)); // []
// console.log(users.slice(2, 1)); // []
// console.log(users.slice(2, 2)); // []
// console.log(users.slice(2, 3)); // [{username: 'msmith'}]
// console.log(users.slice(2, 4)); // [{username: 'msmith'}]

// console.log(users.slice(3, 0)); // []
// console.log(users.slice(3, 1)); // []
// console.log(users.slice(3, 2)); // []
// console.log(users.slice(3, 3)); // []
// console.log(users.slice(3, 4)); // []