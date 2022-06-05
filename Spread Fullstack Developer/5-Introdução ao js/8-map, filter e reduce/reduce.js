// ### Reduce
// 1. Some todos os números de um array
// 2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const MEU_ARRAY = [1, 2, 3, 4, 5, 6, 7];

function somaNumeros(arr) {
	return arr.reduce((prev, curr) => prev + curr);
}

console.log(somaNumeros(MEU_ARRAY));

function saldo(lista, saldo) {
	return lista.reduce( (prev, curr) =>  prev - curr.preco
	, saldo);
}

const LISTA = [
	{
		nome: 'arroz',
		preco: 20,
	},
	{
		nome: 'frango',
		preco: 22,
	},
	{
		nome: 'feijão',
		preco: 10,
	},
];

const SALDO_DISPONIVEL = 100;
console.log(saldo(LISTA, SALDO_DISPONIVEL));
