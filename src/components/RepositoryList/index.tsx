import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import { Container, RepositoryItem } from './styles';

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
      {repositories.map((repository) => (
        <RepositoryItem key={repository.id}>
          <div className="repo-info">
            <strong>{repository.name}</strong>
            <span>{repository.language}</span>
            <p>{repository.description}</p>
          </div>
          <div className="repo-icon">
            <MdKeyboardArrowRight size={20} />
          </div>
        </RepositoryItem>
      ))}
    </Container>
  );
};

export default RepositoryList;
