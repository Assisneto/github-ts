import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';

import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Dashboard: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/32393870?s=460&u=b74e0eb482dfe985720af46759fd99594576a5da&v=4"
            alt="Ass"
          />
          <div>
            <strong>dasdaasd/asdasd</strong>
            <p>dasdasadasd</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>123</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>42134</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>865</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="aasdasd">
          <div>
            <strong>aasdasd</strong>
            <p>asdasd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Dashboard;
