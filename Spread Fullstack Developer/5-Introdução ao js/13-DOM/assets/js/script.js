let elements = document.querySelectorAll('h1, button, footer, body');
let modeSelector = document.getElementById('mode-selector');

modeSelector.addEventListener('click', changeMode);

function changeMode() {
   	for (element of elements) {
		element.classList.toggle('dark-mode');
	}

    let hasDarkMode = elements[0].classList.contains('dark-mode');
    
    if (hasDarkMode) {
		modeSelector.innerText = 'Light Mode';
	} else {
        modeSelector.innerText = 'Dark Mode';
    }
}
