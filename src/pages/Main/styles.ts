import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  #input-content {
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 100%;
      max-width: 230;
      height: 32px;
      margin-right: 5px;
      border: 0;
      padding: 0 10px;
      border-radius: 6px;
    }

    button {
      height: 32px;
      width: 32px;
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme.colors.primary};
    }
  }

  @media (min-width: 700px) {
    input {
      max-width: 500px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #space {
    height: 20px;
  }
`;

export const Error = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #c02d0d;
  margin-top: 8px;
`;
