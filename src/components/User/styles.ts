import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const UserInfo = styled.div`
  margin-top: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  strong {
    font-size: 18px;
    color: ${(props) => props.theme.colors.textTitle};
  }

  span {
    font-size: 16px;
    margin-top: 6px;
    color: ${(props) => props.theme.colors.text};
  }

  p {
    margin-top: 6px;
    color: ${(props) => props.theme.colors.text};
    max-width: 100%;
  }

  button {
    width: 250px;
    height: 28px;
    border: 0;
    border-radius: 6px;
    align-self: center;
    margin-top: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    transition: background-color 0.2s;
    opacity: 1;

    &:hover {
      background: ${(props) => props.theme.colors.primaryDark};
      
    }
    
    a {
      color: ${(props) => props.theme.colors.buttonText};
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

export const UserStats = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;

  div {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;

    strong {
      font-size: 18px;
      color: ${(props) => props.theme.colors.textTitle};
    }

    span {
      font-size: 16px;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;
