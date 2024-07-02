import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../store';
import { load } from '../../store/slices/repository';
import { Container } from './styles';

export interface Repository {
  id: number;
  name: string;
}

export function RepositoryList() {
	const repositories = useAppSelector((state) => state.repositories.repositories);

	const dispatch = useDispatch();

	useEffect(() => {
		async function loadRepositories() {
			dispatch(load('test'));
		}

		loadRepositories();
	}, [dispatch]);

	return (
		<Container>
			<ul>
				{repositories.map((repository) => (
					<li key={repository.id}>
						<span>{repository.name}</span>
					</li>
				))}
			</ul>
		</Container>
	);
}

export default RepositoryList;