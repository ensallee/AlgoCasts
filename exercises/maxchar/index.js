// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//MY SOLUTION
// function maxChar(str) {
//   let array = str.split('')
//   let chars = {}
//
//   for (let el of array) {
//     chars[el] ? chars[el]++ : chars[el] = 1
//   }
//
//   return Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b)
// }

//SOLUTION FROM VIDEO:
function maxChar(str) {
  const charMap = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char
    }
  }
  return maxChar;
}

module.exports = maxChar;
