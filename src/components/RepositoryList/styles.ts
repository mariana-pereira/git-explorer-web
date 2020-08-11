import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-width: 280px;
  background: ${(props) => props.theme.colors.card};
  border-radius: 10px;
  padding: 10px 20px;

  @media (min-width: 400px) {
    max-width: 350px;
  }

  @media (min-width: 700px) {
    max-width: 600px;
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
