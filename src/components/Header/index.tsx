import { Compass } from 'lucide-react';
import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => (
	<Container>
		<Compass size={30} color="#fff" />
	</Container>
);

export default Header;