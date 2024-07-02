import RepositoryList from '../../components/RepositoryList';
import { Container, Content } from './styles';

export function Main() {
	return (
		<Container>
			<Content>
				<RepositoryList />
			</Content>
		</Container>
	);
}