const tasks = [
	{ id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
	{ id: 2, title: "Ler emails", completed: true, priority: "média" },
	{ id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
	{ id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
	{ id: 5, title: "Estudar JavaScript", completed: false, priority: "média" },
]

// 1. Use findIndex para encontrar a posição da primeira tarefa incompleta
const incompleteFirstTask = tasks.findIndex(task => !task.completed);
console.log("\nPrimeira tarefa incompleta - posição:", incompleteFirstTask);

// 2. Use some para verificar se existe alguma tarefa de baixa prioridade completa
const lowPriorityCompleteTask = tasks.some(
    task => task.priority === "baixa" && task.completed
);
console.log("\nAlguma tarefa de baixa prioridade completa:", lowPriorityCompleteTask);

// 3. Use every para verificar se todas as tarefas de alta prioridade estão incompletas
const highPriorityTask = tasks.filter(task => task.priority === "alta");
const highPriorityIncompleteTask = highPriorityTask.every(task => !task.completed);
console.log("\nTodas as tarefas de alta prioridade estão incompletas:", highPriorityIncompleteTask);

// 4. Use findIndex para encontrar a posição de uma tarefa com id = 10.
const idPosition = tasks.findIndex(task => task.id === 10);
const result = idPosition >= 0 ? idPosition : "A tarefa com esse id não existe"
console.log("\nPosição da tarefa com id 10:", result);

// Lide com o caso em que a tarefa não existe (dica: findIndex retorna -1 quando não encontra)