import React, { useContext, useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';
import AuthContext from '../../contexts/auth';

import { Container } from './styles';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // validar email e senha (formato)
    // se estiver errado, mostra toast de erro

    // http request pro backend pedindo login com aqueles dados
    // se der tudo certo, loga e redireciona
    // se nao, manda um toast de erro
    try {
      const user = await signIn(email, password);
      history.push(`/profile`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <Link to="/">
          <FiArrowLeft />
        </Link>
        <h2>Login</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            icon={FiMail}
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={FiLock}
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Entrar</Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
