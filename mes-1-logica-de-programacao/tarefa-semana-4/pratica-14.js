// Crie uma função que recebe um objeto com a lista de avaliações de um restaurante, calcula a média de suas avaliações de acordo com a entrada de cada cliente e exibe a média de avaliação.



let mediaAvaliacoes = function (avaliacaoDosClientes) {
    let i = 0;
    let soma = 0;
    avaliacaoDosClientes.avaliacoes.forEach(function(X) {
        soma += X.nota;
        i++
           
    });
    media = (soma / i).toFixed(2);
    console.log(`A média de avaliações do restaurante Turing Gourmet foi de ${media}.`);
}


let avaliacaoDosClientes = {
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
  }

  mediaAvaliacoes(avaliacaoDosClientes);