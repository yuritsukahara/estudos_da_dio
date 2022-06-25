import React from 'react';

const buttonA = <button>Histórico dos clientes</button>
const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true;

const App = () => {

	const renderShowHistory = () => {
		return <div>
		Clique no botão abaixo para visualizar o histórico dos clientes.
		<br />
		{buttonA}
		</div>
	}



	return (
		<div>
			<p>Digital Innovation One</p>
			<p>Bem vindo a nossa aula =D</p>
			{hasCustomer ? renderShowHistory() : (
				<div>
					Clique abaixo para cadastar o clientes
					<br />
					{buttonB}
				</div>
			)}
		</div>
	);
};
export default App;