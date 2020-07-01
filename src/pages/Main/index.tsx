import React from 'react';

import Header from '../../components/Header';
import RepositoryList from '../../components/RepositoryList';

import { Container, Content } from './styles';

const Main: React.FC = () => (
  <Container>
    <Header />
    <Content>
      <RepositoryList />
    </Content>
  </Container>
);

export default Main;
