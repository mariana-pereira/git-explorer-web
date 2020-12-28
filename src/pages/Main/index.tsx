import React, { createRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdSearch, MdKeyboardArrowRight } from 'react-icons/md';

import * as UserActions from '../../store/ducks/users/actions';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import { ApplicationState } from '../../store';

import {
  Container, Content, Error, User, UserInfo, UserStats, RepositoryList, RepositoryItem,
} from './styles';

const Main: React.FC = () => {
  const user = useSelector((state: ApplicationState) => state.user.data);
  const repositories = useSelector(
    (state: ApplicationState) => state.repositories.data,
  );
  const dispatch = useDispatch();
  const username = createRef<HTMLInputElement>();

  const [inputError, setInputError] = useState('');
  const [visible, setVisible] = useState(() => {
    if (user.id) {
      return true;
    }

    return false;
  });

  useEffect(() => {
    function loadRepositories() {
      dispatch(RepositoriesActions.loadRequest(user?.login));
    }

    loadRepositories();
  }, [dispatch, user, user.login]);

  function fetchUser() {
    if (!username.current?.value) {
      setInputError('Type the username');
      return;
    }

    dispatch(UserActions.loadRequest(String(username.current?.value)));
    if (user.id) {
      setVisible(true);
      setInputError('');
    } else {
      setInputError('Error searching user.');
    }
  }

  return (
    <Container>
      <div id="input-content">
        <input
          type="text"
          placeholder="Username"
          data-testid="search-input"
          ref={username}
        />
        <button type="button" data-testid="search-button" onClick={fetchUser}>
          <MdSearch size={20} color="#fff" />
        </button>
      </div>
      { inputError && (
        <Error>
          <span>{inputError}</span>
        </Error>
      )}
      {visible && (
        <Content data-testid="user-card">
          <User>
            {user && (
            <>
              <img src={user.avatar_url} alt={user.name} />
              <UserInfo>
                <strong>{user.name}</strong>
                <span>{user.login}</span>
                <p>{user.bio}</p>

                <button type="button" data-testid="user-github">
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
          </User>
          <RepositoryList data-testid="repo-list">
            {repositories.map((repository) => (
              <RepositoryItem key={repository.id}>
                <Link to={`/repository/${repository.full_name}`}>
                  <div className="repo-info">
                    <strong>{repository.name}</strong>
                    <span>{repository.language}</span>
                    <p>{repository.description}</p>
                  </div>
                  <div className="repo-icon">
                    <MdKeyboardArrowRight size={20} />
                  </div>
                </Link>
              </RepositoryItem>
            ))}
          </RepositoryList>
        </Content>
      )}
    </Container>
  );
};

export default Main;
