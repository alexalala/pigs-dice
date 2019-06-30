import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: 0,
      turnScore: 0,
      gameStarted: false,
      gameWon: false
    };

    // Bind this to each function instance
    this.addPlayer = this.addPlayer.bind(this);
    this.startGame = this.startGame.bind(this);
    this.changeTurn = this.changeTurn.bind(this);
    this.rollDice = this.rollDice.bind(this);
    this.endTurn = this.endTurn.bind(this);
    this.isGameWon = this.isGameWon.bind(this);
  }

  addPlayer = () => {
    // Add Object to players array in state
    // Spread in current players array and add new player
    // Player Obj has name & overall score
    // Name should count how many items in array and append 'Player '
  }

  startGame = () => {
    // Flip 'gameStarted' bool to true
  }

  changeTurn = () => {
    // Detect whether it's the final player
    // If so, change currentPlayer back to 0
    // If not, currentPlayer++
  }

  rollDice = () => {
    // Set 2x random variable from 1-6
    // Detect whether both dice are a 1
    // If so, set player score to 0 and endTurn()
    // Detect whether either dice are a 1
    // if so, endTurn()
    // else, add dice total to turnScore
  }

  endTurn = () => {
    // Add turnScore to player score
    // set turnScore back to 0
    // isGameWon()
    // changeTurn()
  }

  isGameWon = () => {
    // Check whether current player score is 100+
    // If it is, flip gameWon bool to true
  }

  render() {
    return (
      <div className="App">
        <h1>Pigs!</h1>
      </div>
    );
  }
}

export default App;
