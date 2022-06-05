// ## Atividade 2: This

// Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

// ```js
// function calculaIdade(anos) {
// 	return `Daqui a ${anos} anos, ${this.nome} terá ${
// 		this.idade + anos
// 	} anos de idade.`;
// }
// ```

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Yuri',
	idade: 29,
};

const pessoa2 = {
	nome: 'Yuki',
	idade: 6,
};

console.log(calculaIdade.apply(pessoa1, [30]));
