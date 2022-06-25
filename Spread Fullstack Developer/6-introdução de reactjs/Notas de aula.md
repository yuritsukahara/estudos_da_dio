# Instalando o ReactJS

## Inicializar o projeto

`npm init`

## Instalar os pacotes

`--save` salva como dev dependency
`npm install --save react@16.8.6 react-dom@16.8.6 react-scripts@3.0.1`

## JSX

Utiliza marcação html e js em conjunto em arquivos chamados componentes. Precisa ser transpilado, geralmente é utilizado o Babel.

`class` é uma palavra reservada no js. É utilizado `classNAME` no lugar.

## Creating app
`npx create-react-app my-app`

## Grossário

### Elementos

É uma estrutura básica, unitário, pode fazer parte de um componente

### Componente

`<App />`

São peças modulares, que permitem a reutilização.

São Funções e Classes.

O estado é local ao componente, caso precise enciar o estado é enviado via `props`.

### Props

É a parte do componente que contém as informações. Em caso de um componente com filhos, é necessário chamar o `props.children` para renderizar os filhos que estão contidos dentro desse componente 'raiz'.

# Webpack

É um module bundler, empacotador de módulos para aplicações JS.

[Site oficial](https://webpack.js.org/)

## Configuração

- Entry: caminho dos arquivos.
- Output: saída do projeto.
- Loaders: gerenciar arquivos  não JS.
- Plugins:
- Mode: production, development ou none.

`npm i -D webpack webpack-cli`
o -D instala modo de desenvolvimento

`"build": "webpack --mode production"`

Criar arquivo: webpack.config.js

```js
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    }
}
```

No package.json criar entrada de script chamando o webpack:

`"build": "webpack --mode production"`


### Instalando babel

`npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev`

`npm i -D babel-preset-react`

criar arquivo .babelrc

```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"]
}
```

## Instalando webpack htmlbundler e dev server

`npm install --save-dev html-webpack-plugin`

No webpack.config.js

```js
 const HtmlWebPackPlugin = require("html-webpack-plugin")

// adicionar em plugins
 plugins:[
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
```

Instalar `npm i -D webpack-dev-server`
adicionar no package.json: `"start:dev": "webpack-dev-server --mode development"`

A vantagem é que vem com hot reload entre outras coisas. Depois é só chamar no cl `npm run start:dev`

## Webpack sourcemap;
 Debugar melhor o código, adicionar nos modulos do webpack.config.js: `devtool:'source-map'`
## Instalação do EsLint

`npm i --save-dev eslint babel-eslint eslint-plugin-react eslint-watch`

Adicionar nos scripts de package.json> `"eslint": "eslint .;src/*.js"`

Executar ´npm run eslint´

É sempre bom aplicar o eslint antes de mandar o projeto.

# Renderização Condicional

React é declarativo, apresenta ou não. Com isso condicionais são muito úteis na hora de exibir certo componente.
