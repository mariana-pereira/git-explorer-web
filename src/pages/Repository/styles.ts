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
`;
