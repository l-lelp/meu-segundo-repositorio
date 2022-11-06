// Escreva uma função que, dado uma lista de números, retorne a lista em ordem crescente de valor.



let numerosOrdenados = [4, 9, 7, 1, 8, 12];

numerosOrdenados.sort(function (x,y) {
  if(x > y) return 1;
  if(x < y) return -1;
  return 0 ;  
})
console.log(numerosOrdenados);
