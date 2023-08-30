import './App.css';
import React, { Component } from "react";


export default class AppComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            randNumVal: this.newRandomNumber()
        };

        this.updateRandNumVal = this.updateRandNumVal.bind(this);
    }

    render() {
        return (
            <div className="App">
                <header className="header">
                    <p>
                        Random Number Generator
                    </p>
                </header>
                <p className='text-desc'>Click the button below to generate a new number!</p>
                <button className="generate" onClick={this.updateRandNumVal}>Generate!</button>
                <br />
                <p className="value">{this.state.randNumVal}</p>
            </div>
        );
    }

    updateRandNumVal() {
        this.setState({
            ...this.state,
            randNumVal: this.newRandomNumber()
        });
    }

    newRandomNumber() {
        return Math.floor(Math.random() * 2000) - 1000;
    }

}