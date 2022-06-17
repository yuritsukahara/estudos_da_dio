const input2 = document.getElementById('input') as HTMLInputElement;

input2.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
})