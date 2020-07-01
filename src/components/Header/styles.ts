import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  background: ${(props) => props.theme.colors.primary};
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
