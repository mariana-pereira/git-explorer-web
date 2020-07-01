import React from 'react';

import RepositoryList from '../../components/RepositoryList';

import { Container, Content } from './styles';

const Main: React.FC = () => (
  <Container>
    <Content>
      <RepositoryList />
    </Content>
  </Container>
);

export default Main;
