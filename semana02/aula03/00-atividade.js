//Montanha rusa com crit[erios de altura

const prompt = require("prompt-sync")()

let alturaTexto = prompt("Digite a sua altura: ")
let altura = Number(alturaTexto)

//console.log(typeof(alturaTexto))
//console.log(typeof(altura))

// se == if

if (altura >= 140) {
    console.log("Você pode entrar")
} 
else if (altura < 140 && altura >= 120){
    console.log("Você pode entrar com acompanhante")
} else {
    console.log("Você não pode entrar")
}

