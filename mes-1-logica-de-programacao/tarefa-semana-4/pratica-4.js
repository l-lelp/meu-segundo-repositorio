// Escreva uma função que recebendo uma lista com valores do tipo number, retorne uma lista com a raiz quadrada de cada um dos elementos. Qual método de iteração é o mais apropriado para este problema? .forEach(), .map() ou .filter()? Utilize o método mais apropriado para este problema.



let lista = [4, 9, 16, 25, 36, 49];

function calculadoraDeRaizQuadrada(lista) {
    let raizQuadradaDaLista = lista.map(function(item){
        return Math.sqrt(item);
});
    return raizQuadradaDaLista;
}

console.log(calculadoraDeRaizQuadrada(lista));