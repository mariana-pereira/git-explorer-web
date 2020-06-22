import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';

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
    <ul>
      {repositories.map((repository: Repository) => (
        <li key={repository.id}>{repository.name}</li>
      ))}
    </ul>
  );
};

export default RepositoryList;
