import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const SignUp: React.FC<RouteComponentProps> = ({ history }) => {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // validar email e senhas (formato e igualdade)
    // se estiver errado, mostra toast de erro

    // http request pro backend pedindo cadastro e login com aqueles dados
    // se der tudo certo, cria, loga e redireciona
    // se nao, manda um toast de erro

    history.push('/profile/12345');
  }

  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <Link to="/">
          <FiArrowLeft />
        </Link>
        <h2>Cadastre-se</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input icon={FiUser} placeholder="Digite seu nome" />
          <Input icon={FiMail} placeholder="Digite seu e-mail" />
          <Input icon={FiLock} placeholder="Digite sua senha" />
          <Input icon={FiLock} placeholder="Confirmar senha" />
          <Button>Cadastrar</Button>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
