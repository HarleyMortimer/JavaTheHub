//week 10 lessh go!

//create a function that takes an array and return both the min and max number in order

// //findMinMax([1,2,3,4,5]) -> [1,5]

// function findMinMax(){ //decleared the fuction return both min and max number in order
//     let arr= []; // empty array
//     let min = arr[0] //1 i=2
//     let max = arr[0] //1

//     for (let i = 0; i < arr.length; i++){ //for loop  declared a value of i to zero
//         if(arr[i] < min){ // if array i is less than min, i = 0 
//             min = arr[i] //
//         }
//         if(arr[i] > max){ // return false
//             max = arr[i]
//         }
//     }

//     array.push(min)
//     array.push(max)

//     return array

// }

// console.log(findMinMax([1,2,3,4,5]))

// create a function that concentreates a number of arrays together

// arraysConcat([1,2,3,4,5], [6,7,8,9]), -> [1,2,3,4,5,6,7,8,9]

//create a function that an array of numbers, 
// a string and return an array of numbers as per the following rules:
// ArrayRules([4,3,2], "Asc") -> [1,2,3,4]
// ArrayRules([5,6,7,8,9], "des") -> [9,8,7,6,5]
// ArrayRules([4,3,2,1], "none") -> [4,3,2,1]

// function ArrayRules(arr, str){

//     switch(str){
//         case 'Asc':
//         return arr.sort((a,b) =>a-b);

//         case 'des':
//             return arr.sort((a,b) => b-a)

//         default:
//             return arr
//     }
// }

//create a fuction the returns the lenght of nested arrays.

//nestedArrays([1,2,3]) -> 3
// nestedArray([1,[2,[3,4]]]) -> 4

const nestedArrays = arr => arr.flat(Infinity).length;
console.log()


var car = {
    windows: 4,
    doors: 4,
    Wheels: 4,
    make: "toyota"

}
    
console.log(car)
