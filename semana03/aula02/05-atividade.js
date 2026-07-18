// Função que calcula a média

function calculaMedia(nota1, nota2){
    const soma = nota1 + nota2;
    const media = soma / 2;

    return media;
}

const resultado = calculaMedia(6,8);
console.log(resultado);


const media = (nota1, nota2) => (nota1 + nota2) / 2;
console.log(media(7,9));