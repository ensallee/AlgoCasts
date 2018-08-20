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

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }
//   return true
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }

// anagrams('rail safety', 'fairy tales')

function anagrams(string1, string2) {
  let map1 = generateMap(string1)
  let map2 = generateMap(string2)

  if (Object.keys(map1).length !== Object.keys(map2).length) {
    return false
  } else {
    for (let key in map1) {
      if (map1[key] !== map2[key]) {
        return false
      }
    }
    return true
  }
}

function generateMap(str) {
  let strippedString = str.replace(/[^\w]/g, "").toLowerCase()
  let charMap = {}

  for (let char of strippedString) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  return charMap
}
























module.exports = anagrams;
