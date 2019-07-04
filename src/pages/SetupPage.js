import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import CentredContainer from '../components/CentredContainer';
import Player from '../components/Player';

class SetupPage extends Component {
  handleAddPlayer = () => {
    this.props.onAddPlayer(`Player ${this.props.players.length + 1}`);
  }

  render() {
    let { players } = this.props;

    if (!players.length) {
      return (
        <Fragment>
          <h2>Add your first player...</h2>
          <button onClick={this.handleAddPlayer}>Add Player</button>
        </Fragment>
      )
    };

    return (
      <Fragment>
        <CentredContainer>
          {players.map((player, i) =>
            <Player name={player} key={i} score={0}/>
          )}
        </CentredContainer>
        <button onClick={this.handleAddPlayer}>Add Player</button>
        {(players.length >= 2) && <Link to="/play">Start Game</Link>}
      </Fragment>
    )
  }
};

export default SetupPage;
