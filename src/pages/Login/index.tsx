import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    history.push('/user/12345');
  }

  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <FiArrowLeft />
        <h2>Login</h2>
        <form>
          <Input icon={FiMail} placeholder="Digite seu e-mail" />
          <Input icon={FiLock} placeholder="Digite sua senha" />
          <Button onClick={(e) => handleClick(e)}>Entrar</Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
