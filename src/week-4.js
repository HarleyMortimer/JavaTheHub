//NOTE
/* Var = Variables 
Enter nodemon = "npm run dev"
Exit nodemon = "Ctrl C"
{} = Object
using a "." or [""] in console reads sub-catagory
const = keeps value of// padlocks value 
let = lets you change the value

*/

//TODO
/*
JavaScript Variables
*/

var FullName = "Harley Mortimer"
var classCode = 503

console.log(FullName)
console.log(classCode)

// JavaScript Objectives
var full_name = 
{
  first_name: "Harley",
  last_name:  "Mortimer",
  course_number: 503
}

console.log(full_name)
console.log(full_name.first_name)
console.log(full_name["last_name"])

//JavaScript Functions
function addTwoNumbers(num1, num2) {
return num1+num2
}
console.log(addTwoNumbers(2,3))

function addThreeNumbers(num1, num2, num3) {
    return num1+num2+num3
}

console.log(addThreeNumbers(4.3,2.3,6))

//JavaScript Loops
for(var i=0; i< 10; i++) {
    console.log(i)
}

// JavaScript if statements
var number = 9
if (number === 10){
  console.log("answer = " + number)
} else {
  console.log("error")
}

//const and let
let num = 3
console.log(num)

num = "TrojanError!"
console.log(num)

const Alpha = "Harley"
console.log(Alpha)

//javascript comments
/*
 hellow world
 class sdv503
 */
var sdv503 = "javascript"
 
var x = 3

var fullName = "text"


function foo(p1, p2) {
return p2 - p1
}

foo(5, 10)

function sum(x1, x2) {
  return x1 + x2
}

sum(10, 3)

// (=) vs (===) 
/**  (=) asigns value (===) compares two values
*/

//statements vs expressions

//  var numbers 

// var new_value = function sum(x1, x2) {
//   return x1 + x2
// }
//statement
// var x 
// var y 
// if(y >= 0) {
//   x = y
// } else {
//   x = -y
// }

// function statements(x,y) {
//   if(y >= 0)
//   return x = y
// } else {
//   return x = -y
// }

// expression ES6
// var x = y >= 0 ? y : -y

var word = "HowLongIsThisWord?"
console.log(word.length)

var object = {}
console.log(object)

object.foo = 123
console.log(object)
console.log(word.toUpperCase())

//javascript values (primitives vs ojectives)
//these have different = no assigned value
var obj1 = {}
var obj2 = {}

console.log(obj1 === obj1)
// these have same value = 123
var number_one = 123
var number_two = 123

console.log(number_one === number_two)

//Boolean: true and false
//Numbers: 1234, 1224.4
//strings: "text", "WordsHere"
//non-values: null and undefined

var str = "Morty"
console.log(str.length = 2)
console.log(str.length)

// index array starts at "0"
var numbers = [1, 2, 3, 4, 5]
console.log(numbers[3] = 420)
console.log(numbers)
