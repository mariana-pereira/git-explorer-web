import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { ApplicationState } from '../../store';

import { Container, RepositoryItem } from './styles';

const RepositoryList: React.FC = () => {
  const repositories = useSelector((state: ApplicationState) => state.repositories.data);

  return (
    <Container>
      {repositories.map((repository) => (
        <RepositoryItem key={repository.id}>
          <Link to={`/repository/${repository.full_name}`}>
            <div className="repo-info">
              <strong>{repository.name}</strong>
              <span>{repository.language}</span>
              <p>{repository.description}</p>
            </div>
            <div className="repo-icon">
              <MdKeyboardArrowRight size={20} />
            </div>
          </Link>
        </RepositoryItem>
      ))}
    </Container>
  );
};

export default RepositoryList;
