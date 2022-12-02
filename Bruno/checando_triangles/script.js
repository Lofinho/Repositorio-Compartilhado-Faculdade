/* Crie uma aplicação que solicite ao usuário o tamanho de cada um dos lados de um triângulo e o informe se os três valores informados podem realmente formar um triângulo.

Dica: a soma de quaisquer dois lados de um triângulo sempre é maior que o tamanho do lado restante. */

/* alert('Digite 3 valores para saber se eles formam um triângulo');
let lado1 = prompt('digite o primeiro valor');
let lado2 = prompt('digite o segundo valor');
let lado3 = prompt('digite o terceiro valor');

alert(
  lado1 + lado2 < lado3
    ? 'não formam'
    : lado1 + lado3 < lado2
    ? 'não formam'
    : lado3 + lado2 < lado1
    ? 'não formam'
    : 'formam um triângulo'
);
 */

let arr = ['nome1', 'nome2', 'nome3'];
let escolha = prompt('Digite o nome');

console.log(arr.includes(escolha));
