//Crie uma função que receba como argumento uma lista de seriados e um termo de pesquisa, retorne uma lista com todos os seriados que possuem aquele termo.


let listaDeSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

let termoDeBusca ="Th";

let listaFiltrada = listaDeSeries.filter((item) =>
 item.includes(termoDeBusca));

console.log(listaFiltrada)