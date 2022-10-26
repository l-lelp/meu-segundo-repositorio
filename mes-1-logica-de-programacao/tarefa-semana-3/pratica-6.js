//Processo de busca mais refinado//

let buscaRefinada = (lista, valor) => {
    let novaLista = []
    for (item of lista)
        if (item.includes(valor))
            novaLista.push(item)
    return novaLista
}

const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
console.log(buscaRefinada(listaSeriados, "xt"))
console.log(buscaRefinada(listaSeriados, "la"))