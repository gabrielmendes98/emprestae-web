import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiDollarSign, FiEye, FiLock, FiLogOut } from 'react-icons/fi';

import Button from '../../components/Button';
import AuthContext from '../../contexts/auth';

import { Container } from './styles';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <h1>Emprestaê</h1>
      <h2>Bem-vindo(a), {user ? user.name : ''}!</h2>
      <h3>O que deseja fazer?</h3>
      <Link to="/loan-request">
        <Button icon={FiDollarSign}>Solicitar empréstimo</Button>
      </Link>
      <Link to="/my-loans?page=1">
        <Button icon={FiEye}>Ver meus empréstimos</Button>
      </Link>
      <Link to="/change-password">
        <Button icon={FiLock}>Mudar senha</Button>
      </Link>
      <Button icon={FiLogOut}>Sair</Button>
    </Container>
  );
};

export default Profile;
