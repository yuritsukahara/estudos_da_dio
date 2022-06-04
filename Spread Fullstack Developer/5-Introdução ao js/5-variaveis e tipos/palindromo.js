function palindromo1(palavra) {
	if (!palavra) return;

	let split = palavra.split('');
	let reverse = palavra.split('').reverse();

	for (let i = 0; i < split.length; i++) {
		if (split[i] !== reverse[i]) {
			return console.log('Não é Palíndromo');
		} else {
			return console.log('É Palíndromo');
		}
	}
}


function palindromo2(palavra){
    if (!palavra) return;

    return palavra.split('').reverse().join('') === palavra;
}

palindromo1('ama');
palindromo1('asd');

palindromo2('ama');
palindromo2('asd');

