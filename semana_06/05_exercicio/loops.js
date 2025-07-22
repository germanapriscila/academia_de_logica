// Loop for básico
console.log("Loop contando de 1 a 5:")
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("===============");

// Loop for com break
console.log("Loop com break");
for (i = 1; i <= 10; i++) {
    if (i == 6) {
        console.log(`O número ${i} para o loop.`);
        break;
    }
    console.log(i);
}
console.log("===============");

// Loop for com continue
console.log("Pulando números pares:");
for (i = 1; i <=10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}
console.log("===============");

console.log("Iterando sobre arrays:");
const listaFruta = ["Uva", "Maçã", "Banana", "Laranja"];
for (i = 0; i < listaFruta.length; i++) {
    console.log(`${i + 1}: ${listaFruta[i]}`);
}
console.log("===============");

// Desafio
console.log("Tabuada de 7:");
for (i = 0; i <= 10; i++) {
    console.log(`${i} x 7 = ${i * 7}`);
}
console.log("===============");

const numeros = [1,2,3,4,5,6,7,8,9];
soma = 0;
for (i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log("Soma dos números de um array:", soma);
console.log("===============");

const valores = [23, 12, 7, 61, 45];
menorNumero = 100;
for (i = 0; i < valores.length; i++) {   
    if (valores[i] < menorNumero) {
        menorNumero = valores[i];  
    } 
}
console.log("Menor valor:", menorNumero);