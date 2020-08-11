import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import * as UserActions from '../../store/ducks/users/actions';

import {
  Container, User, UserImage, UserInfo, RepositoryItem,
} from './styles';

const RepositoryList: React.FC = () => {
  const repositories = useSelector((state: ApplicationState) => state.repositories.data);
  const user = useSelector((state: ApplicationState) => state.user.data);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadRepositories() {
      dispatch(RepositoriesActions.loadRequest());
      dispatch(UserActions.loadRequest());
    }

    loadRepositories();
  }, [dispatch]);

  return (
    <Container>
      <User>
        <UserImage>
          <img src={user.avatar_url} alt={user.name} />
        </UserImage>
        <UserInfo>
          <strong>{user.name}</strong>
          <span>{user.login}</span>
          <p>{user.bio}</p>
          <button type="button">
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              See in Github
            </a>
          </button>
        </UserInfo>
      </User>
      <div className="info">
        <div>
          <strong>followers</strong>
          <span>{user.followers}</span>
        </div>
        <div>
          <strong>following</strong>
          <span>{user.following}</span>
        </div>
        <div>
          <strong>repos</strong>
          <span>{user.public_repos}</span>
        </div>
      </div>
      <ul>
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
      </ul>
    </Container>
  );
};

export default RepositoryList;
