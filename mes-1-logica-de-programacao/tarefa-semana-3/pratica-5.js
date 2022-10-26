// Qual seriado escolher?

let escolhendoSeriados = (lista, valor) => {
    for (var i = 0; i < lista.length; i++)
        if (lista[i] === valor)
            return i
    return undefined
}

const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
console.log(escolhendoSeriados(listaSeriados, "The Last Dance"))
console.log(escolhendoSeriados(listaSeriados, "Friends"))