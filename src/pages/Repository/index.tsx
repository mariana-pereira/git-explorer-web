import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import formatDistance from 'date-fns/formatDistance';
import api from '../../services/api';

import { Container, Content, RepositoryInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

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

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });
  }, [params.repository]);

  return (
    <Container>
      {repository && (
        <Content>
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
            <button type="button">
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
        </Content>
      )}
    </Container>
  );
};

export default Repository;
