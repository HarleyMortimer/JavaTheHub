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

// function outerFunc(){
//     var msg = "Hello World"


// function innerFunc(){
//     console.log(msg)
// }

// console.log(innerFunc())
// }

// console.log(outerFunc())

//DataType
/*
1- Numbers
2- Boolean
3- Strings
4- Objects

*/

// let a = 1 // A Number dataType
// let b = "Hello" // B is a string
// let c = true //C is a boolean 
// let d; // D is undefined

// let sum = 1 + 1
// console.log(sum)

// let test = 100 / 2
// console.log(test)

// const value1 = '5'
// const value2 = '2'
// let sum = Number('5') + Number('2')

// let love = "terry cruise loves"
// console.log(love)
// let happiness = "yoghurt"
// console.log(happiness)

// let loveHappiness = love + " " + happiness
// console.log(loveHappiness)

// let newStr = `Hello to my new string! who likes what? ${love} ${happiness}` //uses back ticks
// console.log(newStr)
// let output = `the sum of value1 ${value1} and value2 ${value2} is ${sum}` // uses back ticks  // ${} add variable
// console.log(output) // always outputs to terminal

// Boolean only two keywords true and false

// let boo = true
// console.log(boo)
// console.log(5 > 3)
// // >=or <= or ==
// console.log(1>0.5)

// let test = ["Hello","Harley", 26, 2022] // Square Brackets = Array
// console.log(test)

// console.log(test[2])
// for(i =0; i<test.length; i++) { //prints out wole array // i=index
//     console.log(test[i])
// }

//Objects
//  var cat = {
//      fur:'black',
//      whiskers: 'many',
//      toeBeans: 5
//  }
 

//  var Box = {  //Objects
//      Height: '1m',
//      Depth: '2m',
//      Lenghth: '3m',
        
//  }
//         console.log(Box)
     
//  var toys = ["yo-yo", "dinosour", "rubix cube", "car"] //Array
 
//  //Function, a block of code designed to perform a task
 
// function div(Box, toys){ 
//     return Box/toys //awlays return the value
// }

//  console.log(Box + toys)
// var a = 5
// var b = 6
// var c = 7
// var d = 8

function div(a, b, c, d){
    let result = a + b + c + d  
    return `sum of four variables is = ${result}` 
}

console.log(div(5,6,7,8))

// let div2 = `the sum of ${a} + ${b} + ${c} + ${d} will equal.. ${div(a,b,c,d)} ` 

// console.log(div2)
// var speak = "woof woof" //strings
// console.log(speak)

function fourNumbers(num1,num2,num3,num4){   // object string   no more than (255) this has (4)
    let result = num1 + num2 + num3 + num4
    return `sum of four numbers is ${result} `
}

console.log(fourNumbers(12,32,43,46))