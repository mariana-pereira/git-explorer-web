import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from '../../services/api';

import RepositoryItem from '../../components/Repository';
import IssueList from '../../components/IssueList';

import { Container } from './styles';

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
          <RepositoryItem repository={repository} />
          <div id="space" />
          <IssueList issues={issues} />
        </>
      )}
    </Container>
  );
};

export default Repository;
