//receber dados do usuário pelo terminal

const prompt = require("prompt-sync")()

let nome = prompt("Qual o seu nome? ")
let idade = prompt("Qual a sua idade? ")

console.log(nome)
console.log(idade)

//olá, Priscila! Ano que vem você fará 24 anos!
//console.log("Olá, "+ nome + "! Ano que vem vocë fará "+ (number(idade) + 1) + "anos! ")
console.log("Olá, " + nome + "! Ano que vem você fará " + (++idade) + " anos!")


 