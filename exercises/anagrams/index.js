// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   let newA = stringA.replace(/[^\w]/g, "").toLowerCase()
//   let newB = stringB.replace(/[^\w]/g, "").toLowerCase()
//   debugger
//   let charsA = {}
//   let charsB = {}
//
//   for (char of newA) {
//     if (charsA[char]) {
//       charsA[char]++
//     } else {
//       charsA[char] = 1
//     }
//   }
//
//   for (char of newB) {
//     if (charsB[char]) {
//       charsB[char]++
//     } else {
//       charsB[char] = 1
//     }
//   }
//
//   if (Object.keys(charsA).length > Object.keys(charsB).length) {
//     for (let el in charsA) {
//       if (charsA[el] === charsB[el]) {
//         console.log('true')
//       } else {
//         return "False"
//       }
//     }
//     return "True"
//   } else {
//     for (let el in charsB) {
//       if (charsB[el] === charsA[el]) {
//         console.log('true')
//       } else {
//         return "False"
//       }
//     }
//     return "True"
//   }
// }

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA)
  const bCharMap = buildCharMap(stringB)

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false
    }
  }
  return true
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

anagrams('rail safety', 'fairy tales')

module.exports = anagrams;
