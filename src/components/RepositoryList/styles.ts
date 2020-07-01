import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  background: ${(props) => props.theme.colors.card};
  border-radius: 10px;
  padding: 20px;
  height: 100%;

  ul li {
    margin-bottom: 8px;
  }

  ul li span {
    font-size: 18px;
    color: ${(props) => props.theme.colors.text}
  }
`;
