O JavaScript é uma linguagem fracamente tipada e dinâmica, ou seja, ao declarar uma variável não é necessário estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código.

<script>
    //Fortemente tipada
    let clima:string

    //Dinâmica
    let clima2 = true //boolean para string
    clima = ""

    console.log(typeof clima)

    //const não pode ser alterada
</script>