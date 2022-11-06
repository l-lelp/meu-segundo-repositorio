// Crie uma função que recebendo como argumento uma lista de seriados quaiquer, exiba na tela cada um dos seriados com o índice de cada um na lista.




const lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];


function ordenarLista (lista) {
lista.forEach(function(item, indice) {
    console.log(`[${indice}] ${[item]}`);
    return lista
})
}

ordenarLista(lista)
