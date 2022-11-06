// "Crie uma função que recebendo como argumento uma lista de seriados e o seriado que esteja querendo pesquisar, retorne a posição que se encontra o seriado. Caso não tenha encontrado o seriado, retorne undefined".

function buscarSeries(series, termodebusca) {
    let indice = undefined
    series.forEach((item, i) => {
        if(item === termodebusca){
            indice = i
        } else {
            undefined
        }
    });
        console.log(indice);
}
    

let listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
buscarSeries(listaSeriados, "Dexter")
buscarSeries(listaSeriados, "Friends")

//teste

buscarSeries(listaSeriados, "The Last Dance")