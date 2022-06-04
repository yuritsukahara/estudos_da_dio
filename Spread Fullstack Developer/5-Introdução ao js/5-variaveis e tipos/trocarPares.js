function trocarPares(array) {
	if (!array.length) {
		return -1;
	}

	for (let i = 0; i < array.length; i++) {
		console.log[i];
		if (array[i] % 2 === 0) {
			array[i] = 0;
		}
	}

	return array;
}

let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeros2 = [];

console.log(trocarPares(numeros1));
console.log(trocarPares(numeros2));
