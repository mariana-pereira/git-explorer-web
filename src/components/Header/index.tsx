import { Compass } from 'lucide-react';
import { shade } from 'polished';
import { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

export function Header({ toggleTheme }: Props) {
	const { colors, title } = useContext(ThemeContext);

	return (
		<Container>
			
			<div />
			<div className="icon-container">
				<Compass size={30} color="#fff" />
				<span>GitExplorer</span>
			</div>
			<ReactSwitch
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
}
