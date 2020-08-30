import React, { useContext, useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import AuthContext from '../../contexts/auth';

import { Container } from './styles';

const schema = Yup.object().shape({
  password: Yup.string().min(6, 'Sua senha deve ter no mínimo 6 caracteres').required('A senha é obrigatória'),
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
});

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const { signIn, user } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(user);
    try {
      await schema.validate({ email, password });

      await signIn(email, password);

      history.push(`/profile`);
    } catch (err) {
      if (err.name === 'ValidationError') {
        toast.error(err.message);
      } else if (err.response.data !== undefined) {
        toast.error(err.response.data.message);
      } else {
        toast.error('Erro no servidor');
      }
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
            type="password"
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
