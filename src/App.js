import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import SetupPage from './pages/SetupPage';
import PlayPage from './pages/PlayPage';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: []
    };
  }

  addPlayer = (player) => {
    this.setState({
      players: [...this.state.players, player]
    });
  }

  render() {

    return (
      <div className="App">
        <h1>Pig</h1>
        <Switch>
          <Route path="/setup" render={props => <SetupPage {...props} onAddPlayer={this.addPlayer} players={this.state.players} />} />
          { this.state.players.length >= 2 &&
            <Route path="/play" render={props => <PlayPage {...props} players={this.state.players} />} />
          }
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
