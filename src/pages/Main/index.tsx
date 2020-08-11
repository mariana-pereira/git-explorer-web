import React from 'react';

import RepositoryList from '../../components/RepositoryList';
import User from '../../components/User';

import { Container, Content } from './styles';

const Main: React.FC = () => (
  <Container>
    <Content>
      <User />
      {/* <RepositoryList /> */}
    </Content>
  </Container>
);

export default Main;
