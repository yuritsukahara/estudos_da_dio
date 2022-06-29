import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Button from './Button'


function soma(a,b) {
     alert(a+b)
}

function App(){
    return (
        <div className="app">
        Hello World
        <Button onClick={ () => soma(10,20)} name="Soma" />
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)