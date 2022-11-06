// Crie uma função que receba um objeto como parâmetro e imprima a lista de chaves que ele possui.

function item() {
    let produto = {
        marca: "Tramontina",
        produto: "Jogo de talheres",
        preco: 500,
        quantidade: 132,
        categoria: "Utensilhos domésticos"
      };
    
     return console.log(Object.keys(produto));
    }
    
    item();