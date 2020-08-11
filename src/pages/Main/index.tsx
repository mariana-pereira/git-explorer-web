import React from 'react';
import { MdSearch } from 'react-icons/md';

import RepositoryList from '../../components/RepositoryList';
import User from '../../components/User';

import { Container, Content } from './styles';

const Main: React.FC = () => (
  <Container>
    <div id="input-content">
      <input type="text" placeholder="Username" />
      <button type="button">
        <MdSearch size={20} color="#fff" />
      </button>
    </div>
    <Content>
      <User />
      <div id="space" />
      <RepositoryList />
    </Content>
  </Container>
);

export default Main;
