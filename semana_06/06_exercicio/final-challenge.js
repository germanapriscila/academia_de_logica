// Desafio final - integrando todos os conceitos

// Dados de alunos
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

// Desafio

// Variáveis globais
let mediaAluno = [];
let situacaoAluno = [];
let maiorMedia = 0;
let mediaGeral = 0;
let nome = "";
let media = 0;
let contadorMedia = 0;
let i = 0;
let j = 0;
let alunoMaiorMedia = "";

for (const aluno of students.values()) {
    // Variáveis 
    nome = aluno.name;
    let nota = 0;
    let contadorNotas = 0;    

    // Soma as notas de cada aluno
    for (const grade of aluno.grades.values()) {
        nota += grade;
        contadorNotas++;
    }

    // Calcula a média das notas
    media = nota / contadorNotas;
    media = parseInt(media.toFixed());
    mediaAluno.push({nome, media});

    // Determina se cada aluno foi aprovado ou reprovado (média >= 70 para aprovar)
    const situacao = media >= 70 ? "Aprovado" : "Reprovado";
    situacaoAluno.push({nome, situacao});

    // Contagem de alunos aprovados e reprovados
    situacao == "Aprovado" ? i++ : j++;
    
    // Encontra o aluno com a maior média    
    if (media > maiorMedia) {
        maiorMedia = media;
        alunoMaiorMedia = nome;        
    }
    
    // Calcula a média geral da turma
    mediaGeral += media;
    contadorMedia++;
}

console.log("~~~~~~~~~~~~~~~~~~~~");
Object.values(mediaAluno).forEach(item => console.log(`O aluno(a) ${item.nome} ficou com média: ${item.media} pontos.`));
console.log("~~~~~~~~~~~~~~~~~~~~");
Object.values(situacaoAluno).forEach(item => console.log(`O aluno(a) ${item.nome} está com a situação: ${item.situacao}.`));
console.log("~~~~~~~~~~~~~~~~~~~~");
console.log(`O total de alunos aprovados é: ${i} aluno(s).\nO total de alunos reprovados é: ${j} aluno(s).`)
console.log("~~~~~~~~~~~~~~~~~~~~");
console.log(`O aluno(a) ${alunoMaiorMedia} tem a maior média: ${maiorMedia} pontos.`);
console.log("~~~~~~~~~~~~~~~~~~~~");
console.log(`A média geral da turma é: ${(mediaGeral / contadorMedia).toFixed()} pontos.`);
console.log("~~~~~~~~~~~~~~~~~~~~");
