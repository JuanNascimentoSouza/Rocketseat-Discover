// Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

/* 
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

let date = new Date("2020-12-01")

console.log(date)

// function Person(name) {

function Person(name) {
	this.name = name
	this.walk() = function() {
		return this.name + ("está andando")
	}
}
const mayk = new Person("Mayk")
const joao = new Person("João")
console.log(mayk.walk())
console.log(joao.walk())