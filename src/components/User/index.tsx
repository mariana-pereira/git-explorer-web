import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import { Container, UserInfo, UserStats } from './styles';

const User: React.FC = () => {
  const user = useSelector((state: ApplicationState) => state.user.data);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadRepositories() {
      dispatch(RepositoriesActions.loadRequest(user?.login));
    }

    loadRepositories();
  });

  return (
    <Container>
      {user && (
        <>
          <img src={user.avatar_url} alt={user.name} />
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
          <UserStats>
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
          </UserStats>
        </>
      )}
    </Container>
  );
};

export default User;
