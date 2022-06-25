import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            clock: 1000,
            copo: 'água'
        }
    }

    alterarCopo = () => {
        this.setState({
            copo: 'refrigerante'
        })
    } 

    componentDidMount(){
        window.setTimeout(() =>{
            this.setState({
                copo: 'suco'
            })
        }, 2000)
    }


    render(){

        const { clock, copo } = this.state

        return (
            <div>
                <div>
                    <h1>{clock}</h1>
                    <button onClick={() => this.alterarCopo()}>{copo}</button>
                </div>
            </div>
        )
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)