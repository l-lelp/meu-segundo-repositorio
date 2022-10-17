// Função que calcula o desconto.

function calcularDescontos (valor, desconto) {
    let descontoAplicado = desconto/100
    descontoAplicado = descontoAplicado.toFixed(2)
    
    const valorFinal = valor*(1 - descontoAplicado)
    return valorFinal
}

const valorDoDesconto = calcularDescontos (100, 10)

console.log(valorDoDesconto)