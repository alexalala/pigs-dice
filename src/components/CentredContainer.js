import styled from 'styled-components';

const CentredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CentredPlayersContainer = styled(CentredContainer)`
  > div:nth-child(${(props) => props.current + 1}) {
    border: 3px solid #2D2D2D;
  }
`;

export { CentredPlayersContainer };
export default CentredContainer;
