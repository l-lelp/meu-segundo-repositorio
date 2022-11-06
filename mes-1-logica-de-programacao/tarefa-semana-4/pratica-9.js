// Crie uma função que recaba uma lista de filmes como parâmetro. Ordene a lista por notas de avaliação. Imprima o item melhor avaliado da lista.

const exibeFilmes = (listaDeFilmes) => {
    const melhorAvaliado = lista.reduce(function(acumulador, avaliacaoAtual) {
        return (acumulador.notaAvaliacao > avaliacaoAtual.notaAvaliacao) ? acumulador: avaliacaoAtual
    })
        console.log(`O filme de melhor avaliação com nota ${lista[0].notaAvaliacao} é: ${lista[0].titulo}.`);


};

let lista = [{
    titulo: "Um Sonho de Liberdade",
    notaAvaliacao: 9.2,
    duracao: 142,
    anoPublicacao: 1994,
    categoria: "Drama"
  },
  {
    titulo: "Clube da Luta",
    notaAvaliacao: 8.7,
    duracao: 139,
    anoPublicacao: 1999,
    categoria: "Drama"
  },
  {
    titulo: "Toy Story 3",
    notaAvaliacao: 8.3,
    duracao: 103,
    anoPublicacao: 2010,
    categoria: "Animação"
  }]

  exibeFilmes();

