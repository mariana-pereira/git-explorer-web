import React from 'react';
import formatDistance from 'date-fns/formatDistance';

import { Container, RepositoryInfo } from './styles';

interface Repository {
  id: number;
  name: string;
  full_name: string;
  language: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  pushed_at: Date;
}

interface Props {
  repository: Repository;
}

const Repository: React.FC<Props> = ({ repository }) => (
  <Container>
    <RepositoryInfo>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>
      <div>
        <span>{repository.language}</span>
        <span>
          Updated
          <span> </span>
          {formatDistance(new Date(repository.pushed_at), Date.now())}
          <span> </span>
          ago
        </span>
      </div>
      <button type="button" data-testid="repo-github">
        <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
          See in Github
        </a>
      </button>
      <ul>
        <li>
          <strong>stars</strong>
          <span>{repository.stargazers_count}</span>
        </li>
        <li>
          <strong>forks</strong>
          <span>{repository.forks_count}</span>
        </li>
        <li>
          <strong>issues</strong>
          <span>{repository.open_issues_count}</span>
        </li>
        <li>
          <strong>watchers</strong>
          <span>{repository.watchers_count}</span>
        </li>
      </ul>
    </RepositoryInfo>

  </Container>
);

export default Repository;
