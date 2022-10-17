// Retornando números aleatórios entre 0-10000

function numeroAleatorio() {
    const min = 0;
    const max = 10000;
    const numero = Math.random()*(max - min) + 0;
    return numero;
}

console.log(numeroAleatorio())