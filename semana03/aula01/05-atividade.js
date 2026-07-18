//contagem regressiva 5 até 1

/*console.log(`contagem regressiva...`)
for(let j = 5; j >= 1; j --){
    console.log(`${j}`)
}
console.log(`Já!`)
*/

// 1+2+3+4+5+6+7+8+9+10 = 55 usando while

/*et soma = 0
let contador = 1
while (contador <= 10){
    soma += contador
    console.log(`Resultado parcial: ${soma}`)
    contador++
}
console.log(`Resultado final: ${soma}`)
*/

// Atividade 3 - Cofrinho da viagem (WHILE: repita ATÉ bater a meta)
// Cenário: Você quer juntar R$ 100 para uma viagem e guarda R$ 15 no cofrinho toda semana. Em quantas semanas você vai conseguir juntar o valor necessário?
let cofrinho = 0 // mostrar o saldo guardado nas semanas
const deposito = 15 // valor fixo de R$15
let semanas = 0 // contador de semanas

while (cofrinho <= 100){
cofrinho += deposito
semanas++
console.log(`Saldo atual; R$: ${cofrinho}`)
}
console.log(`Quantidade de semanas necessárias: ${semanas}`)