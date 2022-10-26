// Ordenação //

let listaDeOrdenacao = lista => {
    for (let i = 0; i < lista.length; i++) {
        let indiceMenorAtual = i

        for (let j = i+1; j < lista.length; j++)
            if (lista[j] < lista[indiceMenorAtual]) {
                indiceMenorAtual = j
            }

        // trocando os valores
        const aux = lista[i]
        lista[i] = lista[indiceMenorAtual]
        lista[indiceMenorAtual] = aux
    }

    return lista
}

let lista = [10, 345, 23, 1, -7, 15, 32, 38, 227, 31, 1392824]
console.log(listaDeOrdenacao(lista))