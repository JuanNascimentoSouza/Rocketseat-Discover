
let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos
console.log(techs.slice(1,3))
// remover 1 ou mais items em qualquer posição do array
// encontrar a posição de um elementos no array
let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)