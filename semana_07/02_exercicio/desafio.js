const products = [
	{ id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
	{ id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
	{ id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
	{ id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
	{ id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
]

// Desafio 1
console.log("Nome do Produto - Categoria:");
products.forEach((product) => {
        console.log(`${product.name} - ${product.category}`);
    }
);

// Desafio 2
console.log("~~~~~~~~~~~~~~~~~~~~~");
console.log("Preço dos produtos com imposto de 15%:");
products.forEach((product) => {
        let taxPrice = product.price + (product.price * 0.15)
        console.log(`${product.name} - Original: R$ ${product.price.toFixed(2)},
            Com imposto 15%: R$ ${taxPrice.toFixed(2)}`);
    }
);

// Desafio 3
console.log("~~~~~~~~~~~~~~~~~~~~~");
let total = 0;
products.forEach((product) => {
    total += product.price;
});
console.log(`Valor total de todos os produtos: R$ ${total.toFixed(2)}`);
