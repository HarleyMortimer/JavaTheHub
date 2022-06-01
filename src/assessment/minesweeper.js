//create a basic array with 1 = mines 0= mine detectors

var mines = [
    [0, 0, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
  ]

 
   
   console.log(mines)

  //create a function to count how many 0, are close to 1 
  function countMines(data, i, j) {
    let c = 0; 
  
    const prevRow = data[i - 1];
    const currentRow = data[i]
    const nextRow = data[i + 1];
   
    
    //The forEach() method executes a provided function once for each array element.
    [prevRow, currentRow, nextRow].forEach(row => {
      if (row) {
        if (row[j - 1] == 1 ) c++; 
        if (row[j] == 1) c++;
        if (row[j + 1] == 1) c++;
        
      }
    })
    
    return c;
  }
 
    
  
  function update(data) {
    
    return data.map((a, i) => {
      return a.map((b, j) => {
        return b == 1  ? b : countMines(data, i, j); // if 1 is true, return b in false update countmines using turnary operator.
      }) 
    });
    
  }
 
  

  const result = update(mines)

  console.log(result)

