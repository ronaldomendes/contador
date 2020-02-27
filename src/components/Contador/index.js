import React, { Component } from 'react';
import { Button } from "reactstrap";
import './contador.css'

class Contador extends Component {
    state = {
        numero: 0
    }

    plus = () => this.setState({ numero: this.state.numero += 1 })
    minus = () => {
        if (this.state.numero == 0) {
            alert('Fim da contagem...')
        } else {
            this.setState({ numero: this.state.numero -= 1 })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.numero}</h1>
                <Button color="success" outline onClick={this.plus}>+</Button>
                <Button color="danger" outline onClick={this.minus}>-</Button>
            </div>
        )
    }
}

export default Contador