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

export const User = styled.div`
  width: 100%;
  max-width: 280px;
  background-color: ${(props) => props.theme.colors.card};
  margin-top: 10px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.text};
  }

  @media (min-width: 400px) {
    max-width: 350px;
  }

  @media (min-width: 700px) {
    max-width: 600px;
    padding: 30px;
    display: grid;
    grid-template-areas:
      "image info info"
      "stats stats stats";

    img {
      grid-area: image;
      margin-right: 50px;
    }
  }
`;

export const UserInfo = styled.div`
  margin-top: 10px;
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
    margin-top: 10px;
    color: ${(props) => props.theme.colors.text};
    max-width: 100%;
  }

  button {
    width: 250px;
    height: 28px;
    border: 0;
    border-radius: 6px;
    align-self: center;
    margin-top: 50px;
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

  @media (min-width: 500px) {
    grid-area: info;
  }
`;

export const UserStats = styled.div`
  width: 100%;
  margin-top: 25px;
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

  @media (min-width: 500px) {
    grid-area: stats;
  }
`;
