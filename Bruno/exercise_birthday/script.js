const hoje = new Date();
/* const diaAtual = hoje.getUTCDate();
const mesAtual = hoje.getMonth(); */

// Continue
//!Data do aniversário
let dataAniversario = new Date('06/30/2022');

let diference = hoje.getTime() - dataAniversario.getTime();
let proximoAniversario = new Date('06/30/2023');
let diferenceNext = proximoAniversario.getTime() - hoje.getTime();

//Calculando a quantidade de dias desde o meu último aniversário
console.log(
  `Já se passaram: ${Math.floor(
    diference / (1000 * 3600 * 24)
  )} dias desde o meu aniversário`
);

//Calculando a quantidade de dias até meu próximo aniversário
console.log(
  `Faltam ${Math.floor(
    diferenceNext / (1000 * 3600 * 24)
  )} dias até meu próximo aniversário`
);
