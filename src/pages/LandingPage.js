import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Instructions = styled.div`
  margin: 2rem;
`;

const InstructionsList = styled.ul`
  text-decoration: none;
  list-style: none;
  margin: 1.5rem 0;
  padding: 0;

  li {
    margin: 0.5rem 0;
  }
`;

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <h2>Welcome to Pig!</h2>
        <Instructions>
          <p>The first player to score 100 points or more is the winner.</p>
          <p>When it is your turn, roll the dice. Your points for the turn will accumulate as you roll until either:</p>
          <InstructionsList>
            <li>You roll a 1 - points accumulated for your turn are lost and it is the next player's turn.</li>
            <li>You roll two 1's - points accumulated for your turn are lost, as well as all of your accumulated points so far. It is the next player's turn.</li>
            <li>You decide to 'End Turn' - This adds all of your turn points to your points total and play passes to the next player.</li>
          </InstructionsList>
          <p>Add players to get started!</p>
          <Link to="/setup">Add players</Link>
        </Instructions>
      </Fragment>
    )
  }
};

export default LandingPage;
