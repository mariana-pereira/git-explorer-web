import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../store';
import { load } from '../../store/slices/repository';

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
		<ul>
			{repositories.map((repository) => (
				<li key={repository.id}>{repository.name}</li>
			))}
		</ul>
	);
}

export default RepositoryList;