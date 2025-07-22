// Exercício com estruturas condicionais

// Verificação de idade
const age = 17;

if (age >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}

// Verificação com múltiplas condições
const hour = 14;

if (hour < 12) {
    console.log("Bom dia!");
} else if (hour < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// Operadores lógicos
const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("Não precisa trabalhar hoje!");
} else {
    console.log("Dia de trabalho!");
}

// Operador ternário
const estado = age >= 18 ? "Adulto" : "Menor";
console.log("Estado: ", estado);

// Desafio
console.log("===============");
console.log("Sistema de classificação de notas:");
score = 78;
if (score >= 0 && score <= 59) {
    console.log("Nota: F");
} else if (score >= 60 && score <= 69) {
    console.log("Nota: D");
} else if (score >= 70 && score <= 79) {
    console.log("Nota: C");
} else if (score >= 80 && score <= 89) {
    console.log("Nota: B");
} else if (score >= 90 && score <= 100) {
    console.log("Nota: A");
} else {
    console.log("Valor incorreto.");
}
console.log("===============");

console.log("Par ou ímpar:");
valor = 4;
if (valor % 2 == 0) {
    console.log(`O número ${valor} é par!`);
} else {
    console.log(`O número ${valor} é ímpar!`);
}

console.log("===============");
console.log("Verificação de permissão para dirigir:");

const idade = 24;
const maiorIdade = idade >= 18 ? true : false;
const temHabilitacao = false;

if (maiorIdade && temHabilitacao) {
    console.log("Você tem permissão para dirigir!");
} else {
    console.log("Você não tem permissão para dirigir.");
}