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

if (!args[2]) {
	console.log('Digite dois números separados por espaço na execução do js');
} else {
	if (!parseInt(args[2]) || !parseInt(args[3])) {
		console.log('Insira números');
	} else {
		resultado(args[2], args[3]);
	}
}
