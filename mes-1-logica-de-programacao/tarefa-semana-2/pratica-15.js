// Cálculo do IMC (Modularizado)

function CalculoDoIMC(imc) {
    if (imc < 18.5){
        console.log(`Abaixo do Peso: IMC abaixo de 18.5`);

    } else if (imc < 25) {
        console.log(`Peso Normal: IMC entre 18.5 e 25`);

    } else if (imc < 30) {
        console.log(`Sobrepeso: IMC entre 25 e 30`);

    } else {
        console.log(`Obesidade: IMC maior que 30`);

    }
}
let calculandoIMC = (peso, altura) => {
    let imc = (peso/(altura*altura));
    let imcResultado = Math.floor(imc);
    return imcResultado
}

CalculoDoIMC(calculandoIMC(80, 1.84))