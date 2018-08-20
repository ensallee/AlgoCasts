// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let counter = 0;
  let resultsArray =[];
  // let startRow = 0
  // let endRow = n-1
  // let startColumn = 0
  // let endColumn = n-1
  while (counter < n) {
    resultsArray.push([])
    counter++
  }
  return resultsArray;
  //
  // while (startColumn <= endColumn && startRow <= endRow) {
  //   let counter = 1
  //   for(let i=0; i < resultsArray.length; i++) {
  //     resultsArray[startRow][i] = counter
  //     counter++
  //   }
  //   startRow++
  //   for(let i=0; i <resultsArray.length; i++) {
  //     resultsArray[i][endColumn] = counter
  //     counter ++
  //   }
  //   endRow--
  // }
}

module.exports = matrix;
