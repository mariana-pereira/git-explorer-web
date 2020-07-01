import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <FaGithub color="#fff" size={50} />
  </Container>
);

export default Header;
