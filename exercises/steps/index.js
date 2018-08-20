// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//MY SOLUTION
// function steps(n) {
//   let array = []
//   let char = "#"
//   for (let i = 1; i <= n; i++) {
//     let counter = 0
//     let el = ""
//     while (counter < i) {
//       el += "#"
//       counter += 1
//     }
//     array.push(el)
//   }
//   array.map(el => {
//     if (el.length < array.length) {
//       let difference = array.length - el.length
//       let counter = 0
//       let spaces = ""
//       while (counter < difference) {
//         spaces += " "
//         counter += 1
//       }
//       debugger
//       return el += spaces
//     } else {
//       return el
//     }
//   }).forEach(el => console.log(el))
// }

//GRIDERS FIRST (RECOMMENDED) SOLUTION:
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

//GRIDERS SECOND (RECURSIVE) SOLUTION:
// function steps(n, row = 0, stair = '') {
//    if (n === row) {
//      return;
//    }
//    if (n === stair.length) {
//      console.log(stair);
//      return steps(n, row + 1);
//    }
//
//    if (stair.length <= row) {
//      stair += "#"
//    } else {
//      stair += " ";
//    }
//
//    steps(n, row, stair);
// }

module.exports = steps;
