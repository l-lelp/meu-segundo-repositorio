// Calculando o valor final //

let valorFinal = lista => {
    let saldoFinal = 0
    for (item of lista)
        saldoFinal += item
    const positivoOuNegativo = saldoFinal > 0 ? "positivo" : "negativo"
    console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${(valorFinal)}.`)
}

let listaDepositosRetiradas = [-100, -20, -30, 10, -7, -21, -5]
valorFinal(listaDepositosRetiradas)
listaDepositosRetiradas = [-100, -20, -30, 10, -7, -21, -5]
valorFinal(listaDepositosRetiradas)