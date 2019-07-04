import React, { Component, Fragment } from 'react';

import styled from 'styled-components';

import Dice from '../components/Dice';
import Player from '../components/Player';
import CentredContainer, { CentredPlayersContainer } from '../components/CentredContainer';

const PlayCopy = styled.div`
  margin: 1rem;
  font-size: 1.25rem;
`;

class PlayPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayerIndex: 0,
      scores: [],
      turnScore: 0,
      winner: undefined,
      dice: [0,0]
    };
  }

  getNextPlayer = () => {
    if (this.props.players.length === (this.state.currentPlayerIndex + 1)) {
      return 0;
    } else {
      return this.state.currentPlayerIndex + 1;
    }
  }

  rollDice = () => {
    let diceOne = Math.floor(Math.random() * 6) + 1;
    let diceTwo = Math.floor(Math.random() * 6) + 1;

    let diceTotal = diceOne + diceTwo;
    let turnTotal = this.state.turnScore + diceTotal;
    let copyOfScores = [...this.state.scores];
    let dice = [diceOne, diceTwo];
    let currentPlayerIndex = this.state.currentPlayerIndex;

    if (diceOne === 1 && diceTwo === 1) {
      copyOfScores[this.state.currentPlayerIndex] = 0;
      turnTotal = 0;
      currentPlayerIndex = this.getNextPlayer();
    }
    else if (diceOne === 1 || diceTwo === 1) {
      turnTotal = 0;
      currentPlayerIndex = this.getNextPlayer();
    }

    this.setState({
      turnScore: turnTotal,
      scores: copyOfScores,
      dice,
      currentPlayerIndex,
    });
  }

  endTurn = () => {
    let {
      scores,
      currentPlayerIndex,
      turnScore
    } = this.state;

    let copyOfScores = [...scores];
    let newScore = (copyOfScores[currentPlayerIndex] || 0) + turnScore;
    let winner;
    
    copyOfScores[currentPlayerIndex] = newScore;
    if (newScore >= 100) {
      winner = this.props.players[currentPlayerIndex];
    }
    this.setState({ scores: copyOfScores, turnScore: 0, currentPlayerIndex: winner ? currentPlayerIndex : this.getNextPlayer(), winner });
  }

  render() {
    let {
      currentPlayerIndex,
      winner,
      turnScore,
      dice,
      scores
    } = this.state;
    let { players } = this.props;

    return (
      <Fragment>
        <h2>It's {players[currentPlayerIndex]}'s turn!</h2>
        <CentredPlayersContainer current={currentPlayerIndex}>
          { players.map((name, i) =>
            <Player name={name} key={i} score={scores[i] || 0} />
          )}
        </CentredPlayersContainer>
          { (dice[0] + dice[1] > 0) &&
            <Fragment>
              <CentredContainer>
                <Dice dice={dice} />
              </CentredContainer>
              { winner ? <PlayCopy>We have a winner! Congratulations {winner}.</PlayCopy> : <PlayCopy>Current turn score is {turnScore}</PlayCopy>}
            </Fragment>
          }
        { !winner && (
            <Fragment>
              <button onClick={this.rollDice}>Roll Dice</button>
              <button onClick={this.endTurn}>End Turn</button>
            </Fragment>
        )}
      </Fragment>
    )
  }
};

export default PlayPage;
