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
          <div>
            <strong>Mariana Pereira</strong>
            <span>mariana-pereira</span>
          </div>
          <div className="info">
            <div>
              <strong>Repositories</strong>
              <span>54</span>
            </div>
            <div>
              <strong>Followers</strong>
              <span>52</span>
            </div>
            <div>
              <strong>Following</strong>
              <span>20</span>
            </div>
          </div>
        </UserInfo>
      </User>
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
