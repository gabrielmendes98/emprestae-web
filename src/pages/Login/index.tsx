import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // validar email e senha (formato)
    // se estiver errado, mostra toast de erro

    // http request pro backend pedindo login com aqueles dados
    // se der tudo certo, loga e redireciona
    // se nao, manda um toast de erro

    history.push('/user/12345');
  }

  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <FiArrowLeft />
        <h2>Login</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input icon={FiMail} placeholder="Digite seu e-mail" />
          <Input icon={FiLock} placeholder="Digite sua senha" />
          <Button>Entrar</Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
