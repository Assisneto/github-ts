import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input type="text" placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/32393870?s=460&u=b74e0eb482dfe985720af46759fd99594576a5da&v=4"
            alt="Assisneto Damasceno"
          />
          <div>
            <strong>Assisneto/my-ts-boilerplate</strong>
            <p>
              boilerplate for backend applications with ts (in improvements)
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/32393870?s=460&u=b74e0eb482dfe985720af46759fd99594576a5da&v=4"
            alt="Assisneto Damasceno"
          />
          <div>
            <strong>Assisneto/my-ts-boilerplate</strong>
            <p>
              boilerplate for backend applications with ts (in improvements)
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/32393870?s=460&u=b74e0eb482dfe985720af46759fd99594576a5da&v=4"
            alt="Assisneto Damasceno"
          />
          <div>
            <strong>Assisneto/my-ts-boilerplate</strong>
            <p>
              boilerplate for backend applications with ts (in improvements)
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
