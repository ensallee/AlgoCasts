// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//MY ORIGINAL SOLUTION
// function reverseInt(n) {
//   if (n === 0) {
//     return 0
//   } else {
//     let reversed = n.toString().split('').reverse()
//     for (let el of reversed) {
//       if (el == 0) {
//         reversed.shift()
//       }
//     }
//     let newString = reversed.join('')
//     let number = parseInt(newString)
//     if (Math.sign(n) === 1) {
//       return parseInt(newString)
//     } else {
//       return -Math.abs(number)
//     }
//   }
// }

// GRIDERS SOLUTION:
// Parse Int is getting rid of 0's at the beginning.
function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('')

  return parseInt(reversed) * Math.sign(n)
}


























reverseInt(500);

module.exports = reverseInt;
