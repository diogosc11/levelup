import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'diogosc11'}>
          diogosc11
        </Link>
        <span>/</span>
        <Link className={'reponame'} to={'diogosc11/levelup'}>
          levelup
        </Link>
      </Breadcrumb>

      <p>Contém os desafios</p>

      <Stats>
        <li>
          <StarIcon />
          <b>8</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>4</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/diogosc11/levelup'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;