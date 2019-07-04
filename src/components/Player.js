import React from 'react';

import styled from 'styled-components';

const PlayerContainer = styled.div`
  height: 15rem;
  width: 10rem;
  border: 3px solid #9C9C9C;
  border-radius: 5%;
  margin: 1rem;
`;

const PlayerIcon = styled.div`
  height: 8rem;

  div:first-child {
    height: 3rem;
    width: 3rem;
    background: #2D2D2D;
    border-radius: 50%;
    margin: 1rem auto;
  }

  div:nth-child(2) {
    height: 4rem;
    border-radius: 2rem 2rem 0 0;
    width: 4rem;
    background: #2D2D2D;
    margin: -1rem auto;
  }
`;

const Player = ({ name, score }) => {
  return (
    <PlayerContainer>
      <PlayerIcon>
        <div></div>
        <div></div>
      </PlayerIcon>
      <p>{name}</p>
      <p>score: {score}</p>
    </PlayerContainer>
  )
};

export default Player;
