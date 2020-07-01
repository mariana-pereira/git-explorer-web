import React from 'react';

import Header from '../../components/Header';
import RepositoryList from '../../components/RepositoryList';

import { Container } from './styles';

const Main: React.FC = () => (
  <Container>
    <Header />
    <RepositoryList />
  </Container>
);

export default Main;
