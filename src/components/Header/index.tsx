import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { MdExplore } from 'react-icons/md';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <div />
      <div className="icon-container">
        <MdExplore color="#fff" size={35} />
        <span>GitExplorer</span>
      </div>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        handleDiameter={20}
        onColor={colors.secondary}
        offColor={shade(0.15, colors.primary)}
      />
    </Container>
  );
};

export default Header;
