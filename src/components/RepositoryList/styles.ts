import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  background: ${(props) => props.theme.colors.card};
  border-radius: 10px;
  padding: 20px;
  height: 100%;
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

  .info {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
  }
  div {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
  }

  span {
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    opacity: 0.5;
  }
`;

export const RepositoryItem = styled.li`
  padding: 10px 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

  span {
    font-size: 18px;
    color: ${(props) => props.theme.colors.text}
  }
`;
