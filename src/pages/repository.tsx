import { useAppSelector } from '../store';

export function Repository() {
	const repositories = useAppSelector(state => {
		return state.repositories.repositories;
	});

	return (
		<>
			<h1>Repository</h1>
			<ul>
				{repositories.map((repository) => {
					return (
						<li key={repository.id}>{repository.name}</li>
					);
				})}
			</ul>
		</>
	);
}