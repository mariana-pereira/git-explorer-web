import React, { createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdSearch } from 'react-icons/md';

import * as UserActions from '../../store/ducks/users/actions';
import { ApplicationState } from '../../store';

import RepositoryList from '../../components/RepositoryList';
import User from '../../components/User';

import { Container, Content } from './styles';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: ApplicationState) => state.user.data);
  const username = createRef<HTMLInputElement>();

  function fetchUser() {
    dispatch(UserActions.loadRequest(String(username.current?.value)));
  }

  return (
    <Container>
      <div id="input-content">
        <input type="text" placeholder="Username" ref={username} />
        <button type="button" onClick={fetchUser}>
          <MdSearch size={20} color="#fff" />
        </button>
      </div>
      {user
        ? (
          <Content>
            <User />
            <div id="space" />
            <RepositoryList />
          </Content>
        )
        : null}
    </Container>
  );
};

export default Main;
