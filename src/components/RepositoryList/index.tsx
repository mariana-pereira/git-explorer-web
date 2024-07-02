import { ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../store';
import { load } from '../../store/slices/repository';
import { Container, Info, RepositoryItem, User, UserImage, UserInfo } from './styles';

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
					<strong>Mariana Pereira</strong>
					<span>mariana-pereira</span>
					<p>FullStack Developer | Node.js | ReactJS | React Native</p>
					<button type="button">
						<a href="https://github.com/mariana-pereira" target="_blank" rel="noopener noreferrer">
              See in Github
						</a>
					</button>
				</UserInfo>
			</User>
			<Info>
				<div>
					<strong>followers</strong>
					<span>52</span>
				</div>
				<div>
					<strong>following</strong>
					<span>20</span>
				</div>
				<div>
					<strong>stars</strong>
					<span>52</span>
				</div>
			</Info>
			<ul>
				<RepositoryItem>
					<div className="repo-info">
						<strong>chat-me-node</strong>
						<span>Typescript</span>
						<p>Chat App API made with Node.js, Typescript, Express and MongoDB</p>
					</div>
					<div className="repo-icon">
						<ChevronRight size={20} />
					</div>
				</RepositoryItem>
			</ul>
		</Container>
	);
}

export default RepositoryList;