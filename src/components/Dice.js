import React, { Fragment } from 'react';

import styled from 'styled-components';

const DiceContainer = styled.div`
  height: 2rem;
  width: 2rem;
  border: 2px solid black;
  background: white;
  border-radius: 10px;
  display: flex;
  margin: 0.5rem;

  p {
    margin: auto;
  }
`;

const Dice = (props) => {
  return (
    <Fragment>
      <DiceContainer>
        <p>{props.dice[0]}</p>
      </DiceContainer>
      <DiceContainer>
        <p>{props.dice[1]}</p>
      </DiceContainer>
    </Fragment>
  )
};

export default Dice;
