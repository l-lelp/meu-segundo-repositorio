// Crie uma função que receba uma lista de objetos de filmes como parâmetro. Exiba as informações de cada item da lista de acordo com a saída esperada abaixo.


const exibefilme = (filme) => {

    console.log(`${filme.titulo} (Nota: ${filme.avaliacao}))`);
    console.log(`• Duração: ${filme.duraçao} minutos`);
    console.log(`• Ano de Publicação: ${filme.estreia}`);
    console.log(`• Gênero: ${filme.genero} `);

}

let filme1 = {
  titulo: "Estrelas Além do Tempo",
  avaliacao: 7.8,
  duraçao: 127,
  estreia: 2016,
  genero: ["Biografia", "Drama", "História"]
}

exibefilme(filme1);

filme1.titulo= "Top Gun";
filme1.avaliacao= 8.6;
filme1.duraçao= 130;
filme1.estreia= 2022;
filme1.genero= ["Ação", "Drama"];

exibefilme(filme1);

filme1.titulo= "O jogo da Imitação";
filme1.Avaliacao= 8.0;
filme1.duraçao= 114;
filme1.estreia= 2014;
filme1.genero= ["Bibliografia", "Drama","suspense","Guerra"];

exibefilme(filme1);