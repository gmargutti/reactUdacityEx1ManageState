import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  constructor(props) {
   super(props);
    let value1 = Math.floor(Math.random() * 100);
    let value2 = Math.floor(Math.random() * 100);
    let value3 = Math.floor(Math.random() * 100);
    let proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    this.state = {
    	 numQuestions: 0,
        numCorrect: 0,
        value1: value1,
        value2: value2,
        value3: value3,
        proposedAnswer: proposedAnswer
    }
  }
	incrementValues = answer => {
      let value1 = Math.floor(Math.random() * 100);
      let value2 = Math.floor(Math.random() * 100);
      let value3 = Math.floor(Math.random() * 100);
      let proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    	this.setState((prevState) => ({
        	numQuestions: prevState.numQuestions + 1,
          	numCorrect: prevState.numCorrect + (((prevState.value1 + prevState.value2 + prevState.value3) === prevState.proposedAnswer) === answer ? 1 : 0),
            value1: value1,
            value2: value2,
            value3: value3,
            proposedAnswer: proposedAnswer
        }))  
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.incrementValues(true)}>True</button>
          <button onClick={() => this.incrementValues(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
