const mines = [
    [0, 0, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
  ]
  // create something that has a constant value of 'x'
const changeMines = 'x' // this made my life hell

 

  //create a function to count how many mines, are close to 0 
  // use .map tools an if statements to return c instead of "for loops"
  //if statements to set conditions
  function countMines(data, i, j) {
    let c = 0; 
  
    const previousRow = data[i - 1];
    const currentRow = data[i]
    const nextRow = data[i + 1];
   
    
   
    [previousRow, currentRow, nextRow].map((row => {
      if (row) {
        if (row[j - 1] == 1 ) c++; 
        if (row[j] == 1) c++;
        if (row[j + 1] == 1) c++;
        
      }
     }))
    
    return c;
  }
 
    
 //update the outcome of "data" array using prototype methods to create a function
 //using .map return values
 // if b == 1 ? change 'x' with ternary operators then use countMines function
  function updateBoard(data) {
    
    return mines.map((a, i) => {
      return a.map((b, j) => {
        return b == 1  ? changeMines : countMines(data, i, j);  //change 1 to changeMines'x'  if b = 1 and then count mines with ternary
      }) 
    });
    
  }
 
  
// use the function update() method to update an object(mines) and call it "minesweeper" oh so cool


  console.log(updateBoard(mines))

