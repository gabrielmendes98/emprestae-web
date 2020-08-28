import React from 'react';
import { FiArrowLeft, FiMail } from 'react-icons/fi';

import Input from '../../components/Input';

import { Container } from './styles';

const Login = () => {
  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <FiArrowLeft />
        <h2>Login</h2>
        <Input icon={FiMail} placeholder="Digite seu e-mail" />
      </div>
    </Container>
  );
};

export default Login;
