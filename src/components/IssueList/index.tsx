import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Container, IssueItem } from './styles';

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

interface Props {
  issues: Issue[];
}

const IssueList: React.FC<Props> = ({ issues }) => (
  <Container data-testid="issue-list">
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
  </Container>
);

export default IssueList;
