let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

function increment() {
	if (currentNumber < 10) {
		currentNumber += 1;
	} else {
		alert('número máximo 10');
	}

	currentNumberWrapper.innerHTML = currentNumber;
	setColor(currentNumber);
}

function decrement() {
	if (currentNumber > -10) {
		currentNumber -= 1;
	} else {
		alert('número mínimo -10');
	}
	currentNumberWrapper.innerHTML = currentNumber;
	setColor(currentNumber);
}

function setColor(number) {
	if (number > 0) {
		currentNumberWrapper.style.color = 'green';
		console.log('green');
	}
	else if (number < 0) {
		currentNumberWrapper.style.color  = 'red';
		console.log('red');
	} else {
		currentNumberWrapper.style.color  = 'gray';
		console.log('black');
	}
}

document.getElementsByName('adicionar')[0].addEventListener('click', increment)
document.getElementsByName('subtrair')[0].addEventListener('click', decrement)