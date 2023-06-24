
const h1 = document.querySelector('h1')

h1.addEventListener('click', print)
h1.addEventListener('mouseover', print)

function print() {
    console.log('funciona')
}