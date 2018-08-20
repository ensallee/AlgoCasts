// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//SOLUTION ONE:
// function reverse(str) {
//   return str.split("").reverse().join("")
// }

//SOLUTION TWO, USING FOR OF LOOP
// function reverse(str) {
//   let reversed = '';
//
//    for (let character of str) {
//      reversed = character + reversed;
//    }
//
//    return reversed;
// }

//SOLUTION THREE, BUT YOU COULD REMOVE CURLY BRACES AND RETURN STATEMENT.
//THIS IS A GOOD WAY TO WOW THE INTERVIEWER.
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed
//   }, '')
// }

// reverse('asdf')


function reverse(str) {
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed
  }

  return reversed;
}



































module.exports = reverse;
