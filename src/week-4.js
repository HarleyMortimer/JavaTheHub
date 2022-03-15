//NOTE
/* Var = Variables 
Enter nodemon = "npm run dev"
Exit nodemon = "Ctrl C"
{} = Object
using a "." or [""] in console reads sub-catagory

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
