import React from 'react';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const Login = () => {
  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <FiArrowLeft />
        <h2>Login</h2>
        <Input icon={FiMail} placeholder="Digite seu e-mail" />
        <Input icon={FiLock} placeholder="Digite sua senha" />
        <Button>Entrar</Button>
      </div>
    </Container>
  );
};

export default Login;
