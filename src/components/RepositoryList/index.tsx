import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../store';
import { load } from '../../store/slices/repository';
import { Container, RepositoryItem, User, UserImage, UserInfo } from './styles';

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
			<User>
				<UserImage>
					<img src="https://avatars1.githubusercontent.com/u/26336279?v=4" alt="mariana" />
				</UserImage>
				<UserInfo>
					<div>
						<strong>Mariana Pereira</strong>
						<span>mariana-pereira</span>
					</div>
					<div className="info">
						<div>
							<strong>Repositories</strong>
							<span>54</span>
						</div>
						<div>
							<strong>Followers</strong>
							<span>52</span>
						</div>
						<div>
							<strong>Following</strong>
							<span>20</span>
						</div>
					</div>
				</UserInfo>
			</User>
			<ul>
				{repositories.map((repository) => (
					<RepositoryItem key={repository.id}>
						<span>{repository.name}</span>
					</RepositoryItem>
				))}
			</ul>
		</Container>
	);
}

export default RepositoryList;