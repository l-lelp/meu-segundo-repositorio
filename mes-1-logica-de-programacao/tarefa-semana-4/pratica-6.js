/* Crie uma função que recebe como argumento um objeto que tem informações de um filme e exibe o nome do filme o seu tempo de duração. O objeto deverá ter as seguintes propriedades:

Titulo (string)
Nota de avaliação (number)
Duração (number)
Ano de publicação (number)
Categoria (string)

*/


function exibeFilme() {
    
    let filme = {
    título: "Estrelas Além do Tempo",
    notaDeAvaliação: 7.8,
    duração: 127,
    anoDePublicação: 2016,
    categoria: "Drama",
    }

    return console.log(`O filme ${filme.título} que estreou em ${filme.anoDePublicação} tem a avaliação de ${filme.notaDeAvaliação} pelo IMDb.`);
    
}
    
    exibeFilme()