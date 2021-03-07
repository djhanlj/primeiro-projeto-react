import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// import api from '../../services/api';
import { Header, RepositoryInfo, Issue } from './styled';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://xesque.rocketseat.dev/users/avatar/profile-d3cc11ac-faee-4da8-a7b9-924aec6801a2-1614858393544.jpg"
            alt="Github explorer"
          />
          <div>
            <strong>nome/repositorio</strong>
            <p> teste teste teste teste teste</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issue>
        <Link to="/repository/">
          <div>
            <strong>aaaaa</strong>
            <p>teste teste</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issue>
    </>
  );
};

export default Repository;
