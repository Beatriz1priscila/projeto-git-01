// ATIVIDADE 1 — Preço com desconto 🏷️
// Escreva a função "precoComDesconto(preco, desconto)" que DEVOLVE
// o preço já com o desconto aplicado (desconto em %).
// Pratica: função, parâmetros, return

function precoComDesconto (preco, desconto){
    const valorComDesconto = preco - (preco * desconto) / 100;

    return valorComDesconto;
}

console.log(precoComDesconto(100, 10))

const precoDescontoArrow = (preco, desconto) => preco - (preco * desconto) / 100

console.log(precoDescontoArrow(120, 10))

// DESAFIO 2 - Maior de dois
// Escreva "maiorDeDois(a, b)" que DEVOLVE  o maior dos dois números
// Prática: função + if/else + return dentro da decisão

function maiorDeDois (a, b){
    if (a > b){
        return a
    } else{
        return b
    }
}

console.log(maiorDeDois(2, 5))
console.log(maiorDeDois(12, 17))
console.log(maiorDeDois(22, 5))
console.log(maiorDeDois(19, 90))
console.log(maiorDeDois(34, 6))
