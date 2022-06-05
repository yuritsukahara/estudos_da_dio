// ### Map
// - Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro `this` de um objeto criado por você, e depois sem ele.

const MEU_ARRAY = [1, 2, 3, 4, 5, 6, 7];

const MACA = {
	value: 2,
};

const LARANJA = {
	value: 3,
};

function mapComThis(arr, thisArg) {
	return arr.map(function (item) {
		return item * this.value;
	}, thisArg);
}

const NUMS = [1, 2];

console.log('this maça', mapComThis(NUMS, MACA));
console.log('this laranja', mapComThis(NUMS, LARANJA));

function mapSemThis(arr, num) {
	return arr.map(function (item) {
		return item * num;
	});
}

console.log(mapSemThis(NUMS, 4));
