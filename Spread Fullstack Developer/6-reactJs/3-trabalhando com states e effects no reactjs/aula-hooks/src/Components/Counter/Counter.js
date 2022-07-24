function Counter() {
	let quantity = 10;

	function incrementQuantity() {
		quantity += 1;
		console.log(quantity);
		document.getElementById('counter-box').innerText = quantity;
	}

	return (
		<>
			<h1 id='counter-box'>{quantity}</h1>
			<button onClick={incrementQuantity}>Incrementar</button>
		</>
	);
}

export default Counter;
