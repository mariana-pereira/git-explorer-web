import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  #blank {
    display: none;
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-container span {
    font-size: 20px;
    color: #fff;
  }

  @media (min-width: 400px) {
    justify-content: space-between;
    padding: 0 20px;
  }
`;
