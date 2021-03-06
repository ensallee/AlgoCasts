// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// MY SOLUTION
// function capitalize(str) {
//   return str.split(" ").map(word => {
//     let cap = word[0].toUpperCase()
//     return cap += word.slice(1)
//   }).join(" ")
// }

//GRIDERS SOLUTION
// function capitalize(str) {
//   const words = []
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }
//
//   return words.join(' ');
// }

// GRIDERS SECOND SOLUTION
// function capitalize(str) {
//   let result = str[0].toUpperCase()
//
//   for (let i = 1; i < str.length; i++) {
//     if (str[i -1] === ' ') {
//       result += str[i].toUpperCase()
//     } else {
//       result += str[i]
//     }
//   }
//   return result
// }

function capitalize(str) {
  let array = str.split(' ')
  let newArray = array.map(word => {
    let cap = word[0].toUpperCase()
    return cap + word.slice(1)
  })
  return newArray.join(' ')
}

























module.exports = capitalize;
