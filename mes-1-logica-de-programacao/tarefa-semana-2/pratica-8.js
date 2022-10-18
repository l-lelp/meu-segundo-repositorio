// Par ou ímpar?


const numero = 3
const numeroPar = numero % 2 == 0

function parOuImpar() {
if (numeroPar) {
    console.log(`O número ${numero} é par.`)
} else {
    console.log(`O número ${numero} é ímpar.`)
}
}

parOuImpar(3)
