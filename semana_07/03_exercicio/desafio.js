const students = [
	{ id: 1, name: "João", age: 20, grades: [85, 90, 78], active: true },
	{ id: 2, name: "Maria", age: 19, grades: [92, 95, 89], active: true },
	{ id: 3, name: "Pedro", age: 21, grades: [70, 65, 80], active: false },
	{ id: 4, name: "Ana", age: 18, grades: [60, 75, 68], active: true },
	{ id: 5, name: "Carlos", age: 22, grades: [90, 88, 92], active: false },
]

// 1. Desafio
const studentInactive = students.filter((student) => student.active === false);
console.log("Estudantes inativos:");
studentInactive.forEach((student) => console.log(student.name));  

// 2. Desafio
const studentId = students.find((student) => student.id === 3);
console.log("Estudante com id 3:", studentId.name);

// 3. Desafio
const studentDownGrade = students.filter((student) => {
    return student.grades.some((item) => item < 70);
});
console.log("Estudantes que tem pelo menos uma nota abaixo de 70:");
studentDownGrade.forEach((student) => console.log(student.name));

// 4. Desafio
const studentHighGrade = students.map((student) => {
    const studentAverage = student.grades.reduce((sum, grade) => sum + grade, 0) /
    student.grades.length;    
    return { 
        nome: student.name, 
        media: studentAverage 
    };
});
const highGrade = studentHighGrade.filter(item => item.media > 85);
console.log("Estudantes com média acima de 85:");
highGrade.forEach(student => console.log(`Aluno: ${student.nome}, média: ${student.media}`));