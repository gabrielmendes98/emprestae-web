import React from 'react';
import { FiDollarSign, FiEye, FiLock, FiLogOut } from 'react-icons/fi';

import Button from '../../components/Button';

import { Container } from './styles';

const Profile = () => {
  return (
    <Container>
      <h1>Emprestaê</h1>
      <h2>Bem-vindo(a), Gabriel Santiago!</h2>
      <h3>O que deseja fazer?</h3>
      <Button icon={FiDollarSign}>Solicitar empréstimo</Button>
      <Button icon={FiEye}>Ver meus empréstimos</Button>
      <Button icon={FiLock}>Mudar senha</Button>
      <Button icon={FiLogOut}>Sair</Button>
    </Container>
  );
};

export default Profile;
