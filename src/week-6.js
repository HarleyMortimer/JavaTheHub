//console.log("hello world")
//var a = "hello"
//a
//console.log(a);


//var myName = "Harley";
//var myCourse = "JavaScript";
//console.log(myName);
//alert("Welcome");
//var myAge = 26; //Thats my real age baby...
//console.log(myAge)
/*
*/ 

/*var welcome = "Welcome to the house of fun.." //welcome message
var friendsName = "Jimi Russell" //friends name
console.log(welcome) // output message
console.log(friendsName) // output name
console.log(welcome, friendsName)*/

// var message;
// console.log(message);
// message = null;
// console.log(message);
// var myLight = false;
// console.log(myLight);
// myLight = true;
// if(myLight){
//     console.log(myLight);
// }
// var score1, score2, score3, score4;
// var a = "hello";
// var b = 10;
// var c = false;
// console.log(a);


// let name = "SDV503"
// console.log(name)
// name = "harley"
// console.log(name)

// //1- local scope -inside {}


// // const msg = "Hello World"
// // console.log(msg)
// if(true) {
//     const msg ="Hello World";
//     console.log(msg);
//}

// block scope  - conditions in a if/while/for/log statement
// const msg = "Hello World"
// if(false) {
//     const msg = "Hello World"
//     console.log(msg)
//}
//console.log(msg)
//function scope
// function call(){
//     var msg = "Hello World"
//     console.log(msg)

// }
//  console.log(call())
// console.log(msg)

// // Global scope
// var msg = "Hello World"
// function readMessage(){
//     console.log(msg)
// }
// console.log(readMessage())

// Keyword Lexical scope

function outerFunc(){
    var msg = "Hello World"


function innerFunc(){
    console.log(msg)
}

console.log(innerFunc())
}

console.log(outerFunc())
