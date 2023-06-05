# let
```js

// const e let são locais e só funcionam no escopo onde foi criada

console.log('>existe x antes do bloco', y)

console.log('>existe x antes do bloco', z)

{
    {
        {
            let y = 0
            const z = 0
        }
    }
}

console.log('>existe x depois do bloco', y)


console.log('>existe x depois do bloco', z)