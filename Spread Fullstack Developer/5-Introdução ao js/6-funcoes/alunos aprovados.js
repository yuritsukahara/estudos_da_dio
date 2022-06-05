// ## Atividade 1: Alunos Aprovados

// 1. Crie uma função que recebe o array `alunos` e um número que irá representar a média final;
// 2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
// 3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

// Eu simplifiquei os parametros para receber apenas a array dos alunos. Assim a média é adquirida através do loop for.
function Aprovados(alunos, media) {
	let alunosAprovados = [];

	for (aluno of alunos) {
		let { mediaFinal } = aluno;
		atingiuMedia = mediaFinal >= media;
		if (atingiuMedia) {
			alunosAprovados.push(aluno);
		}
	}

	return alunosAprovados;
}

let alunos = [
	{ nome: 'Ana', mediaFinal: 9 },
	{ nome: 'Clara', mediaFinal: 7 },
	{ nome: 'Fonseca', mediaFinal: 5 },
	{ nome: 'Yuri', mediaFinal: 8 },
];

console.log(Aprovados(alunos, 8));
