import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import { Container } from './styles';

const RepositoryList: React.FC = () => {
  const repositories = useSelector((state: ApplicationState) => state.repositories.data);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadRepositories() {
      dispatch(RepositoriesActions.loadRequest());
    }

    loadRepositories();
  }, [dispatch]);

  return (
    <Container>
      <ul>
        {repositories.map((repository: Repository) => (
          <li key={repository.id}>
            <span>{repository.name}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default RepositoryList;
