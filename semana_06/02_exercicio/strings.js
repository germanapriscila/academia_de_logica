// Exercício de manipulação de strings

// 1. Declaração e concatenação
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log("Nome completo: ", fullName);
console.log("=========================");

// 2. Template strings (ES6)
const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);
console.log("=========================");

// 3. Propriedades e métodos de string
console.log("Comprimento do nome: ", fullName.length);
console.log("Nome em maiúsculas: ", fullName.toUpperCase());
console.log("Nome em minúsculas: ", fullName.toLowerCase());
console.log("=========================");

// 4. Desafio
console.log("Slice: ", fullName.slice(0, 5));
console.log("=========================");

counter = 0;
for (let i = 0; i < fullName.length; i++) {
  if ("a" == fullName[i]) {
    counter++;
  }
}
console.log(`A letra "a" aparece ${counter} vezes!`);
console.log("=========================");

console.log(fullName.replace("Silva", "Brandão"));
