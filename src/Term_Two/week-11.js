//write a function that divides an arra into a sub array based on n number giviing where n is in the lenght of each array

/**
 * subarrays([1,2,3,4,5,6,7,8,9,10],2) -> [[1,2],[3,4],[5,6],[7,8],[9,10]]
 */


// function subarrays(arr,n){
// let x = []
// let y = []

// for(let i = 0; i < arr.length; i++){    //for loop, that starts counter for the 0 = start of array.
//                 x.push(arr[i]) // pushes the array 
//                 if(x.length%n === 0){  // is the array is devided by n = 0 then push x into the array. if not (else) push x
//                     y.push(x)
//                     x=[]
//                 }
//                 else{
//                     y.push(x)
//                 }
//                 return [... new Set(x)]  // creates a set object
// }
// }

// console.log(subarrays([1,2,3,4,5,6,7,8,9,10],2))

// create a function that reorders the numbers of element in the array based on accending or descending order





// const numbers = [432,832,653,856,233]    //How to sort an ascending array
// numbers.sort(function(a,b){
//     return a - b;

// })

// console.log(numbers)


/*
given an object with students and the grades that they made on the tests that they took, determine which 
student has the best test average. the key will be the student has the best Test Average.

the key will be the student's name and the value will be an array of their grades.
you will only have to return the students name. you do not need to return their test average.

exaple:
getBestStudent({
    Ali: [67,84,75,63],
    James: [87,98,64,71],
    Matt: [90, 58, 73, 86]
}) => "james"
 */

// let user = new object(); // "object constructor"
// let user = {};           //"object literal" syntax

// console.log(user)


// let user = {      //an object
//     Name: 'John',  // by key "name" stores the value 'John"
//     Age: 30  // by key "age" stores the value '30'
// }


// //get fields of the object
// alert(user.name); //john   = console.log
// alert(user.age)   // 30

// var item = {  //object
//     item: "laptop",   // item
//     price: 1200       //price of object
    
// };

// for(key in object) {
//     // executes the body for each key among object properties
// }

// let user = {
//     name: "john",
//     age: 30,
//     isAdmin: true
// }

// for (let key in user) {
//     //keys
//     console.log(key); // name, age, isAdmin
//     // values for the keys
//     console.log(user[key]); //john, 30, true
// }

// var salaries = {
//     John: 100,
//     Ann: 160
//     Peter: 130,

// let user = { name: "John"};
// let admin = user; // copy the reference

// admin.name = "david"; //changed by the "admin" reference
// console.log(admin.name)



//example of references
// let a = {};
// let b = a; // copy the reference

// console.log(a === b) // true because both references are the same

// let c = {}; 
// let d = {};

// console.log( c === d) // false because it has same value but different reference


//example of a const that won't work
// const user = "john" 
// user = "matt"

// console.log(user) // will come up with error because "const" can't be changed

// user = {
//     name: david
// }


// const user = {
//     name: "John",
// }

// user.age = 30


// console.log(user)

//Cloning Objects
// let user = {
//     name: "john",
//     age: 30,


// }
// let clone = Object.assign({}, user);  // clones the user without changing the user as a whole

// // now clone is a fully independent clone
// clone.name = "David"; // change data in it
// clone.age = 22

// console.log(clone)

// adding functions in objects
let user = {
    name: "john",
    age: 30
};
user.sayHi = function (){ //adds "sayhi" into user 
    console.log("Hello!")

};

user.sayHi(); //Hello!

//sayHi: function (){} = sayHi(){}




