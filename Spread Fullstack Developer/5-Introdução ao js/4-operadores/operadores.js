const args = process.argv;

function iguais(a, b) {
	let resultado = '';
	a == b
		? (resultado = `Os números ${a} e ${b} são iguais.`)
		: (resultado = `Os números ${a} e ${b} não são iguais.`);

	return resultado;
}

function maiorQue(a, b) {
	let resultado = '';
	a > b
		? (resultado = `${a} é maior que ${b}.`)
		: (resultado = `${a} é menor que ${b}.`);

	return resultado;
}

function resultado(a, b) {
	soma = parseInt(a) + parseInt(b);
	compara = iguais(a, b);
	dez = maiorQue(soma, 10);
	vinte = maiorQue(soma, 20);

	let resultados = [compara, dez, vinte];
	resultado = resultados.join(' ');

	console.log(resultado);
}

resultado(args[2], args[3]);
