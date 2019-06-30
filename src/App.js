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
    // Name should count how many items in array and append 'Player '
    const new_player_name = 'Player ' + (this.state.players.length + 1);
    // Create new object with name & overall score
    const new_player = {
      name: new_player_name,
      score: 0
    }
    // Add Object to players array in state
    // Spread in current players array and add new player
    this.setState({ players: [...this.state.players, new_player]});
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
    let dice_one = Math.floor(Math.random() * 6) + 1;
    let dice_two = Math.floor(Math.random() * 6) + 1;
    // Detect whether both dice are a 1
    if (dice_one && dice_two === 1) {
      // If so, set player score to 0 and changeTurn()
      this.setState({ [this.state.players[this.state.currentPlayer].score]: 0 });
      this.changeTurn();
    }
    // Detect whether either dice are a 1
    else if (dice_one || dice_two) {
      // if so, changeTurn()
      this.changeTurn();
    }
    // else, add dice total to turnScore
    else {
      this.endTurn();
    }
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
        <button onClick={this.addPlayer}>Add Player</button>
      </div>
    );
  }
}

export default App;
