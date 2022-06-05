// ### Filter
// - Filtre e retorne todos os números pares de um array.



function ePar(numero) {
	return numero % 2 === 0;
}

function pares(arr) {
	return arr.filter(ePar);
}

console.log(pares(MEU_ARRAY));
