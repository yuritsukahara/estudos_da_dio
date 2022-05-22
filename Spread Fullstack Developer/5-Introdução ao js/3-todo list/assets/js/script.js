console.log('🔥');
let btn = document.getElementById('btn');
let form = document.getElementById('form');
let inputTarefa = document.getElementById('input');
let tarefas = document.getElementById('tarefas');

function adTarefa() {
	let valor = document.getElementById('input').value;

	if (valor != '') {
		tarefa = document.createElement('div');
		label = document.createElement('label');
		input = document.createElement('input');

        // Setup
		input.type = 'checkbox';
		input.name = valor;
		label.htmlFor = valor;
		label.innerText = valor;

        input.classList.add('item', 'check-box', 'g-0');
		label.classList.add('item', 'check-box', 'g-0');
        tarefa.classList.add('aic', 'flex', 'tarefas', 'g-0');

		tarefa.appendChild(input);
		tarefa.appendChild(label);

		tarefas.appendChild(tarefa);
        inputTarefa.value = '';
	}
}

function adTarefaEnter(e) {
	if (e.key === 'Enter') {
		e.preventDefault();
		adTarefa();
	}
}

btn.addEventListener('click', adTarefa);

form.addEventListener('keypress', (e) => {
	adTarefaEnter(e);
});

