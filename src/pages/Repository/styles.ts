import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 280px;
  background: ${(props) => props.theme.colors.card};
  border-radius: 10px;
  padding: 10px;
  margin: 10px auto;

  display: flex;
  flex-direction: column;

  @media (min-width: 400px) {
    max-width: 350px;
  }

  @media (min-width: 700px) {
    max-width: 600px;
    padding: 10px 20px;
  }
`;

export const RepositoryInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  strong {
    font-size: 20px;
    color: ${(props) => props.theme.colors.textTitle};
  }

  p {
    font-size: 16px;
    margin-top: 10px;
    color: ${(props) => props.theme.colors.text};
    max-width: 100%;
  }

  div {
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme.colors.text};
    }
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
    }
  }

  ul {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    span {
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const Issue = styled.li`
  margin-top: 15px;
  padding: 10px 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

  a {
    display: flex;
    justify-content: space-between;

    .repo-info {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 16px;
        color: ${(props) => props.theme.colors.textTitle};
      }

      span {
        margin-top: 10px;
        font-size: 14px;
        color: ${(props) => props.theme.colors.text};
      }

      p {
        margin-top: 10px;
        font-size: 14px;
        color: ${(props) => props.theme.colors.text};
      }
    }

    .repo-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${(props) => props.theme.colors.text};
      }
    }
  }
  
`;
