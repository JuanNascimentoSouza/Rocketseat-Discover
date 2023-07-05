
let aceitar = true
console.log('pediu')

const Promessa = new Promise((reject, resolve) => {
    if (aceitar){
        return resolve ('deu certo')
    }
    return reject('deu errado')
})

console.log('aguardou')

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('finalizada '))