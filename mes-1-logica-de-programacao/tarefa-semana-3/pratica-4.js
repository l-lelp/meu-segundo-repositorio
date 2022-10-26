
let listaDeSeriados = lista => {
    for (let i = 0; i < lista.length; i++)
        console.log(`[${i}] ${lista[i]}`)
}

const seriadosLista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
listaDeSeriados(seriadosLista)