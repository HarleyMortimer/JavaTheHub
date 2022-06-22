console.log("Hello World")
console.dir(document)
console.table({first:"test",val:9});
// ReferenceError: document is not defined
//at Object.<anonymous> (C:\Users\Harle\workspace\JavaTheHub\src\week-6.js:2:13)
//at Module._compile (node:internal/modules/cjs/loader:1103:14)
//at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
//at Module.load (node:internal/modules/cjs/loader:981:32)
//at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//at node:internal/main/run_main_module:17:47
//[nodemon] app crashed - waiting for file changes before starting...
console.error("Hello World")
function exampleJavaScript(arr)
{
   let newArr = [];
  for (let i = 0; i < arr.length; i++)
   {
     let largest = arr[i][0];
   for (let j = 0; j < arr[i].length; j++)
   {
        {
              largest = arr[i][j]
           }
       }
     newArr.push(largest)
  }
   return newArr
}

console.log(exampleJavaScript([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))