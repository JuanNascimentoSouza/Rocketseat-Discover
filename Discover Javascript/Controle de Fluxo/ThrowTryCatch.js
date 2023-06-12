
function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
        // ou
        throw new Error("Nome é obrigatório")
    }

    console.log(name)
}

// Após o throw se não houver try/catch não será executado nenhum código

//Nesse caso, se o nome vier vazio, será disparada uma mensagem.

//Precisamos agora usar o try/catch para capturarmos esse erro, 
//caso contrário, ele irá encerrar a aplicação, e nós o faremos da seguinte maneira:

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')

//O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, 
//que só existe dentro do catch. Após isso, mesmo com o erro, a aplicação não será interrompida por completo.