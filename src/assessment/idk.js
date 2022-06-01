

//make exact copy but mines are x's

let mines2 = [
  [0, 0, "x", 0],
  ["x", 0, 0, "x"],
  [0, "x", 0, 0],
  [0, 0, 0, "x"],
]


function countMines2(data, i, j) {
  let c = 0;

  let prevRow = data[i - 1];
  let currentRow = data[i]
  let nextRow = data[i + 1];



  [prevRow, currentRow, nextRow].forEach(row => {
    if (row) {

      if (row[j - 1] == "x") c++;
      if (row[j] == "x") c++;
      if (row[j + 1] == "x") c++;

    }
  })

  return c;
}

function update2(data) {
  return data.map((a, i) => {
    return a.map((b, j) => {
      return b == "x" ? b : countMines2(data, i, j);
    })
  });

}

const result2 = update2(mines2)
console.log(result2)