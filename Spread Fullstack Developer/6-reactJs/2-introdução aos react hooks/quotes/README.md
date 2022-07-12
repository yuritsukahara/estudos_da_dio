# Notas de aula

## TDD

-   Fazer o teste falhar primeiro
-   Fazer o teste passar

Os testes são muito mais voltados para as funções do que visual.

Exemplo:

```js
import { render, screen } from '@testing-library/react';

test('renders button with text', () => {
	render(<Button>Test</Button>);

	const buttonEl = screen.getByText(/Test/i);

	expect(buttonEl).toBeInTheDocument();
});
```

Em React é utilizado o Jest, com ele também podemos utilizar funções espiões para auxiliar nos testes.

```jsx

test('calls a callback when button is pressed', () => {
  const callback = jest.fn();

  render(<Quotes quote={quote} speaker={speaker} onUpdate={callback} />);

  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl);
  expect(callback).toHaveBeenCalledTimes(1);
});


```

## Estrutura de projeto

Separar componentes por funções específicas para auxiliar na manutenção.

## Styled components

permite a estilização e o reaproveitamento herdadno características.

Exemplo:

```js
import styled from 'styled-componentes';

const Quote = styled.p`
	font-size: 2em;
`;

const Quote2 = styled(Quote)`
	color: black;
`;
```

## Tipar propriedades em componentes

É uma boa prática tipar propriedades para auxiliar nos testes e por conseguinte o desenvolvimento do projeto a longo prazo.

Exemplo:

```js
import { string } from 'prop-types';
```
