import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  background: ${(props) => props.theme.colors.card};
  height: 100%;
  border-radius: 10px;
  padding: 20px;

  .info {
    width: 100%;
    margin-top: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    div {
      width: 100%;
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
  }
  ul {
    margin-top: 15px;
  }
  `;

export const User = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 30px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 170px 1fr;
`;

export const UserImage = styled.div`
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const UserInfo = styled.div`
display: flex;
flex-direction: column;

strong {
    font-size: 18px;
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.textTitle};
  }

  span {
    font-size: 16px;
    margin-top: 6px;
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.text};
  }

  p {
    margin-top: 6px;
    color: ${(props) => props.theme.colors.text};
    max-width: 100%;
  }
  button {
    width: 300px;
    height: 28px;
    border: 0;
    border-radius: 6px;
    align-self: center;
    margin: 20px;
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

export const Info = styled.div`
  display: flex;
  margin-top: 70px;
  padding: 0 100px;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const RepositoryItem = styled.li`
  padding: 10px 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;

  .repo-info {
    display: flex;
    flex-direction: column;
    strong {
    font-size: 16px;
    color: ${(props) => props.theme.colors.textTitle}
    }
    span {
      margin-top: 10px;
      font-size: 14px;
      color: ${(props) => props.theme.colors.text}
    }
    p {
      margin-top: 10px;
      font-size: 14px;
      color: ${(props) => props.theme.colors.text}
    }
  }
  .repo-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: ${(props) => props.theme.colors.text}
    }
  }
`;