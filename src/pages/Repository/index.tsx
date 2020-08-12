import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Container, Content, RepositoryInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <Container>
      <Content>
        <RepositoryInfo>
          <strong>Tindev</strong>
          <p>Aplicação desenvolvida durante a semana omnistack 8</p>
          <div>
            <span>
              Javascript
            </span>
            <span>
              Updated 12 days ago
            </span>
          </div>
        </RepositoryInfo>
      </Content>
    </Container>
  );
};

export default Repository;
