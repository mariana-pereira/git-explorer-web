import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import formatDistance from 'date-fns/formatDistance';
import { MdKeyboardArrowRight } from 'react-icons/md';
import api from '../../services/api';

import {
  Container, RepositoryItem, RepositoryInfo, IssueList, IssueItem,
} from './styles';

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

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <Container>
      {repository && (
        <>
          <RepositoryItem>
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
          </RepositoryItem>
          <div id="space" />
          <IssueList data-testid="issue-list">
            {issues.map((issue) => (
              <IssueItem key={issue.id}>
                <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                  <div className="repo-info">
                    <strong>{issue.title}</strong>
                    <p>{issue.user.login}</p>
                  </div>
                  <div className="repo-icon">
                    <MdKeyboardArrowRight size={20} />
                  </div>
                </a>
              </IssueItem>
            ))}
          </IssueList>
        </>
      )}
    </Container>
  );
};

export default Repository;
