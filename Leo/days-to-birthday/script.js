// Crie uma aplicação que solicite ao usuário o dia e o mês de seu aniversário.

// O programa deve informar para o usuário quantos dias faltam para o seu aniversário ou quantos dias já se passaram.

// O Arquivo script.js já contém as variáveis que pegam o dia e o mês atual, em tempo de execução.

const hoje = new Date();
const diaAtual = hoje.getUTCDate();
const mesAtual = hoje.getMonth();

// Continue daqui

let dia, mes, diferenca, totalDeDias, newDiferenca, newTotalDeDias;
let ano = hoje.getFullYear();

while (!(dia >= 1 && dia <= 31 && Number.isInteger(dia))) {
    dia = Number(prompt('Digite o dia do seu aniversário'));
}

while (!(mes >= 1 && mes <= 12 && Number.isInteger(mes))) {
    mes = Number(prompt('Digite o mes do seu aniversário'));
}

let dataAniversario = new Date(`${mes}/${dia}/${ano}`);

if (dataAniversario < hoje) {
    diferenca = hoje - dataAniversario;
    totalDeDias = Math.floor(diferenca / (1000 * 3600 * 24));
    alert(`Já se passaram ${totalDeDias} dias do seu aniversário`);
    let newDataAniversario = new Date(`${mes}/${dia}/${++ano}`);
    newDiferenca = newDataAniversario - hoje;
    newTotalDeDias = Math.ceil(newDiferenca / (1000 * 3600 * 24));
    alert(`Faltam ${newTotalDeDias} para o seu próximo aniversário`);

} else {
    diferenca = dataAniversario - hoje;
    totalDeDias = Math.ceil(diferenca / (1000 * 3600 * 24));
    alert(`Faltam ${totalDeDias} para o seu aniversário`);
}
