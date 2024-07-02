
import Header from '../../components/Header';
import RepositoryList from '../../components/RepositoryList';
import { Container } from './styles';

export function Main() {
	return (
		<Container>
			<Header />
			<RepositoryList />
		</Container>
	);
}