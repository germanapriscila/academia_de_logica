
const inventory = [
	{
		id: 1,
		name: "Smartphone",
		price: 500,
		stock: 10,
		category: "Eletrônicos",
		reviews: [4, 5, 3, 5, 4],
	},
	{
		id: 2,
		name: "Notebook",
		price: 1200,
		stock: 5,
		category: "Eletrônicos",
		reviews: [5, 4, 5, 5, 3],
	},
	{
		id: 3,
		name: "Camiseta",
		price: 25,
		stock: 20,
		category: "Vestuário",
		reviews: [4, 3, 4, 5],
	},
	{
		id: 4,
		name: "Cafeteira",
		price: 100,
		stock: 8,
		category: "Cozinha",
		reviews: [3, 2, 5, 4, 2],
	},
	{
		id: 5,
		name: "Fones de Ouvido",
		price: 80,
		stock: 15,
		category: "Eletrônicos",
		reviews: [4, 4, 5, 5, 5, 4],
	},
	{
		id: 6,
		name: "Calça Jeans",
		price: 45,
		stock: 0,
		category: "Vestuário",
		reviews: [4, 3, 4],
	},
	{
		id: 7,
		name: "Liquidificador",
		price: 70,
		stock: 3,
		category: "Cozinha",
		reviews: [3, 4, 3, 5],
	},
]

// 1. Mostrar uma lista formatada de todos os produtos usando forEach
console.log("\nLista de produtos:");
inventory.forEach(item => console.log(
    `Id: ${item.id} | Produto: ${item.name} | Preço: ${item.price.toFixed(2)} | Estoque: ${item.stock} | Categoria: ${item.category}`
));

// 2. Filtrar produtos que estão em estoque (stock > 0)
console.log("\nProdutos que estão em estoque:")
const stockProduct = inventory.filter(item => item.stock > 0);
stockProduct.forEach(item => console.log(
    `Produto: ${item.name} | Qtd estoque: ${item.stock}`
));

// 3. Filtrar produtos da categoria "Eletrônicos" com preço < 1000
console.log("\nProdutos eletrônicos mais baratos:");
const categoryProduct = inventory.filter(item => 
    item.category === "Eletrônicos" && item.price < 1000);
categoryProduct.forEach(item => console.log(
    `Produto: ${item.name} | Categoria: ${item.category} | Preço: ${item.price.toFixed(2)}`
));

// 4. Verificar se há algum produto sem estoque
const stockOutProduct = inventory.some(item => item.stock === 0);
console.log("\nTem algum produto sem estoque:", stockOutProduct);

// 5. Verificar se todos os produtos têm pelo menos uma avaliação (review)
const hasReviewProduct = inventory.every(item => item.reviews.length > 0);
console.log("\nTodos os produtos tem pelo menos uma avaliação:", hasReviewProduct);

// 6. Encontrar o índice do produto "Cafeteira"
const indexCoffeeMaker = inventory.findIndex(item => item.name === "Cafeteira");
console.log("\nÍndice do produto Cafeteira:", indexCoffeeMaker);

// 7. Encontrar o primeiro produto da categoria "Vestuário"
const firstCategoryProduct = inventory.find(item => item.category === "Vestuário");
console.log("\nPrimeiro produto da categoria vestuário:", firstCategoryProduct.name); 

// 8. Criar uma função de busca que retorna produtos cujo nome contenha um termo específico
function searchProduct(productName) {
	const product = inventory.filter(
		item => item.name.toLowerCase().includes(productName.toLowerCase())
	);
	return product;
}
console.log("\nBuscando o produto:", searchProduct("cafe").map(item => item.name));

// 9. Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"
console.log("\nMédia de avaliação dos produtos:");
const reviewsProducts = inventory.map(item => {
	const sumReviews = item.reviews.reduce(
		(accumulator, currentValue) => accumulator + currentValue, 0,
	)
	const averageReviews = (sumReviews / item.reviews.length).toFixed(1);

	return { ...item, averageRating: Number (averageReviews) }
});
reviewsProducts.forEach(item => console.log(
	`${item.name}: ${item.averageRating} estrelas`
));

// 10. Encontrar o produto com a maior média de avaliações
const averagesProducts = reviewsProducts.reduce((best, current) => {
	return parseFloat(current.averageRating) > parseFloat(best.averageRating) ? current : best;
}, reviewsProducts[0]);
console.log(`\nProduto melhor avaliado: ${averagesProducts.name} com ${averagesProducts.averageRating} estrelas`);

