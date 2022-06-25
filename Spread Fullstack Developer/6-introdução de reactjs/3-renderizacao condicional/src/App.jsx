import React from 'react';

const buttonA = <button>Histórico dos clientes</button>
const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = false;

const App = () => {

	const renderShowHistory = () => {
		return <div>
		Clique no botão abaixo para visualizar o histórico dos clientes.
		<br />
		{buttonA}
		</div>
	}

	const renderAddCustomer = () => {
		<div>
					Clique abaixo para cadastar o clientes
					<br />
					{buttonB}
				</div>
	}

	const showCustomer = () => {
		if (!hasCustomer) return null
		return (
			<div>
				<h1>Nome do Cliente: Aristeu Ninguém</h1>
			</div>
		)
	}

	return (
		<div>
			<p>Digital Innovation One</p>
			<p>Bem vindo a nossa aula =D</p>
			Valor da variável hasCustomer: {hasCustomer.toString()}
			{hasCustomer ? renderShowHistory() : renderAddCustomer()}
			<div>
				{showCustomer()}
			</div>
		</div>
	);
};
export default App;