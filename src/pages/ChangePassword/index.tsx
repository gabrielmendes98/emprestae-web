import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const ChangePassword: React.FC<RouteComponentProps> = ({ history }) => {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // senhas (formato e igualdade)
    // se estiver errado, mostra toast de erro

    // http request pro backend pedindo troca de senha com aqueles dados
    // se der tudo certo, redireciona para o perfil
    // se nao, manda um toast de erro

    history.push('/user/12345');
  }

  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <Link to="/user/12345">
          <FiArrowLeft />
        </Link>
        <h2>Mudar senha</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input placeholder="Digite sua senha atual" />
          <Input placeholder="Digite sua nova senha" />
          <Input placeholder="Confirmar nova senha" />
          <Button>Cadastrar</Button>
        </form>
      </div>
    </Container>
  );
};

export default ChangePassword;
