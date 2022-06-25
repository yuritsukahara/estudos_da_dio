import React from 'react'
import reactDOM from 'react-dom'
import './style.css'

const App = () =>{
    return {
        <div className="app">
        Hello World
        </div>
    }
}

const rootElement = document.getElementById('root')
reactDom.render(<App />, rootElement)