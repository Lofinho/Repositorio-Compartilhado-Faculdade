const hoje = new Date();
/* const diaAtual = hoje.getUTCDate();
const mesAtual = hoje.getMonth(); */

// Continue
//!Data do aniversário ---------------------------------------
let dia = prompt('Digite o dia do seu aniversário');
let mes = prompt('Digite o mês do seu aniversário');
let ano = hoje.getFullYear();

let dataAniversario = new Date(`${mes}/${dia}/${ano}`);

let diference = hoje.getTime() - dataAniversario.getTime();
let diasCalculados = Math.floor(diference / (1000 * 3600 * 24));

//! método para ver se é positivo ou negativo --------------
console.log(Math.sign(diference));
//se maior 1
// se menor -1

//! if else para ver a saída do código ----------------------
if (Math.sign(diference) == 1) {
  alert(`Já se passaram ${diasCalculados} dias do seu aniversário`);
} else {
  alert(`Seu aniversário será daqui ${diasCalculados * -1} dias`);
}
