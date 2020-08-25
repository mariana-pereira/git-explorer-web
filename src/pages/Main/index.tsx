import React, { createRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdSearch } from 'react-icons/md';

import * as UserActions from '../../store/ducks/users/actions';
import { ApplicationState } from '../../store';

import RepositoryList from '../../components/RepositoryList';
import User from '../../components/User';

import { Container, Content } from './styles';

const Main: React.FC = () => {
  const user = useSelector((state: ApplicationState) => state.user.data);
  const [visible, setVisible] = useState(() => {
    if (user.id) {
      return true;
    }

    return false;
  });

  const dispatch = useDispatch();
  const username = createRef<HTMLInputElement>();

  function fetchUser() {
    dispatch(UserActions.loadRequest(String(username.current?.value)));
    setVisible(true);
  }

  return (
    <Container>
      <div id="input-content">
        <input type="text" placeholder="Username" ref={username} />
        <button type="button" onClick={fetchUser}>
          <MdSearch size={20} color="#fff" />
        </button>
      </div>
      {visible && (
        <Content>
          <User />
          <div id="space" />
          <RepositoryList />
        </Content>
      )}
    </Container>
  );
};

export default Main;
