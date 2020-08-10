import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import {
  Container, User, UserImage, UserInfo, RepositoryItem,
} from './styles';

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
      <User>
        <UserImage>
          <img src="https://avatars1.githubusercontent.com/u/26336279?v=4" alt="mariana" />
        </UserImage>
        <UserInfo>
          <strong>Mariana Pereira</strong>
          <span>mariana-pereira</span>
          <p>FullStack Developer | Node.js | ReactJS | React Native</p>
          <button type="button">
            <a href="https://github.com/mariana-pereira" target="_blank" rel="noopener noreferrer">
              See in Github
            </a>
          </button>
        </UserInfo>
      </User>
      <div className="info">
        <div>
          <strong>followers</strong>
          <span>52</span>
        </div>
        <div>
          <strong>following</strong>
          <span>20</span>
        </div>
        <div>
          <strong>stars</strong>
          <span>52</span>
        </div>
      </div>
      <ul>
        {repositories.map((repository: Repository) => (
          <RepositoryItem key={repository.id}>
            <span>{repository.name}</span>
          </RepositoryItem>
        ))}
      </ul>
    </Container>
  );
};

export default RepositoryList;
