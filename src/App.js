import React, { Component, Fragment } from 'react';

import styled from 'styled-components';

import Dice from './components/Dice';
import Player from './components/Player';

const CentredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CentredPlayersContainer = styled(CentredContainer)`
  > div:nth-child(${(props) => props.current + 1}) {
    border: 3px solid #2D2D2D;
  }
`;

const TurnCopy = styled.div`
  margin: 1rem;
  font-size: 1.25rem;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayerIndex: 0,
      turnScore: null,
      dice: [],
      gameStarted: false,
      winner: ""
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
    const new_player_name = 'Player ' + (this.state.players.length + 1);
    const new_player = {
      name: new_player_name,
      score: 0
    }
    this.setState({ players: [...this.state.players, new_player]});
  }

  startGame = () => {
    this.setState({ gameStarted: true });
  }

  changeTurn = () => {
    if (this.state.players.length === (this.state.currentPlayerIndex + 1)) {
      this.setState({ currentPlayerIndex: 0 });
    } else {
      const next_player = this.state.currentPlayerIndex + 1;
      this.setState({ currentPlayerIndex: next_player });
    }
  }

  rollDice = () => {
    let dice_one = Math.floor(Math.random() * 6) + 1;
    let dice_two = Math.floor(Math.random() * 6) + 1;

    let dice_total = dice_one + dice_two;
    let turn_total = this.state.turnScore + dice_total;
    let players_copy = this.state.players;

    let diceRoll = async() => {
      await this.setState({ dice: [dice_one, dice_two] });

      if (dice_one === 1 && dice_two === 1) {
        players_copy[this.state.currentPlayerIndex].score = 0;
        this.setState({ players: players_copy, turnScore: 0 });
        this.changeTurn();
      }
      else if (dice_one === 1 || dice_two === 1) {
        this.setState({ turnScore: 0 });
        this.changeTurn();
      }
      else {
        this.setState({ turnScore: turn_total });
      }
    }
    diceRoll();
  }

  endTurn = () => {
    let players_copy = this.state.players;
    let new_score = this.state.players[this.state.currentPlayerIndex].score + this.state.turnScore;

    players_copy[this.state.currentPlayerIndex].score = new_score;
    this.setState({ players: players_copy, turnScore: 0 });
    this.isGameWon();
    this.changeTurn();
  }

  isGameWon = () => {
    if (this.state.players[this.state.currentPlayerIndex].score >= 100) {
      this.setState({ winner: this.state.players[this.state.currentPlayerIndex].name });
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Pig</h1>
          {/* First state - Game not started */}
          { (!this.state.gameStarted && !this.state.winner) &&
            <Fragment>
              { (this.state.players === undefined || this.state.players.length === 0)
                ? (
                  <Fragment>
                    <h2>Add a player to start the game...</h2>
                    <button onClick={this.addPlayer}>Add Player</button>
                  </Fragment>
                ) : (
                  <Fragment>
                    <CentredContainer>
                      {this.state.players.map(player =>
                        <Player player={player} key={player.name}/>
                      )}
                    </CentredContainer>
                    <button onClick={this.addPlayer}>Add Player</button>
                    <button onClick={this.startGame}>Start Game</button>
                  </Fragment>
                )
              }
            </Fragment>
          }

          {/* Second state - Game started */}
          { (this.state.gameStarted && !this.state.winner) &&
            <Fragment>
              <h2>It's {this.state.players[this.state.currentPlayerIndex].name}'s turn!</h2>
              <CentredPlayersContainer current={this.state.currentPlayerIndex}>
                { this.state.players.map(player =>
                  <Player player={player} key={player.name} />
                )}
              </CentredPlayersContainer>
                { this.state.turnScore !== null &&
                  <Fragment>
                    <CentredContainer>
                      <Dice dice={this.state.dice} />
                    </CentredContainer>
                    <TurnCopy>Current turn score is {this.state.turnScore}.</TurnCopy>
                  </Fragment>
                }
              <button onClick={this.rollDice}>Roll Dice</button>
              <button onClick={this.endTurn}>End Turn</button>
            </Fragment>
          }
          {/* Third state - Game won */}
          { this.state.winner &&
            <Fragment>
              <h2>We have a winner - congratulations {this.state.winner}!</h2>
              <CentredContainer>
                {this.state.players.map(player =>
                  <Player player={player} key={player.name}/>
                )}
              </CentredContainer>
            </Fragment>
          }
        </div>
      </div>
    );
  }
}

export default App;
