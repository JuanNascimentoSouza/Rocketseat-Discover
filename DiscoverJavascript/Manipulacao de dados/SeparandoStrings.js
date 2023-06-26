
/* Separe um texto que contem espaços,
em um novo array. Depois disso, transforme
o array em um texto e onde eram os espaços,
coloque_
*/

let phrase = "Eu só posso dizer o que vivo"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())