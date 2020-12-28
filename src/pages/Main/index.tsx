import React, { FormEvent, useEffect, useState } from 'react';
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
  const error = useSelector((state: ApplicationState) => state.user.error);
  const repositories = useSelector(
    (state: ApplicationState) => state.repositories.data,
  );
  const dispatch = useDispatch();

  const [inputError, setInputError] = useState('');
  const [username, setUsername] = useState('');
  const [visible, setVisible] = useState(() => {
    if (user.id) {
      return true;
    }

    return false;
  });

  useEffect(() => {
    function loadRepositories() {
      if (!user?.login) return;
      dispatch(RepositoriesActions.loadRequest(user.login));
    }

    loadRepositories();
  }, [dispatch, user]);

  function fetchUser(event: FormEvent) {
    event.preventDefault();

    if (!username) {
      setInputError('Type the username');
      return;
    }

    dispatch(UserActions.loadRequest(username));
    if (error) {
      setInputError('Error searching user.');
    } else {
      setVisible(true);
      setInputError('');
    }
  }

  return (
    <Container>
      <form onSubmit={fetchUser} id="input-content">
        <input
          type="text"
          placeholder="Username"
          data-testid="search-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" data-testid="search-button">
          <MdSearch size={20} color="#fff" />
        </button>
      </form>
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
