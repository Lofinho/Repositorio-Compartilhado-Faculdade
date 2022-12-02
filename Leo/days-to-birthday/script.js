// Crie uma aplicação que solicite ao usuário o dia e o mês de seu aniversário.

// O programa deve informar para o usuário quantos dias faltam para o seu aniversário ou quantos dias já se passaram.

// O Arquivo script.js já contém as variáveis que pegam o dia e o mês atual, em tempo de execução.

const hoje = new Date();
const diaAtual = hoje.getUTCDate();
const mesAtual = hoje.getMonth();

// Continue daqui

let dia, mes, diferenca, totalDeDias;
let ano = hoje.getFullYear()

while (!(dia >= 1 && dia <= 31)) {
  dia = Number(prompt('Digite o dia do seu aniversário'));
}

while (!(mes >= 1 && mes <= 12)) {
  mes = Number(prompt('Digite o mes do seu aniversário'));
}

let dataAniversario = new Date(`${mes}/${dia}/${ano}`);

if (dataAniversario < hoje) {
    diferenca = hoje - dataAniversario;
    totalDeDias = Math.floor(diferenca / (1000 * 3600 * 24));
    alert(`Seu aniversário já passou, agora faltam ${totalDeDias}`);
} else {
    diferenca = dataAniversario - hoje;
    totalDeDias = Math.ceil(diferenca / (1000 * 3600 * 24));
    alert(`Faltam ${totalDeDias} para o seu aniversário`);
}