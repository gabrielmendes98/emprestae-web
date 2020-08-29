import React, { useState, useContext } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Auth from '../../services/auth';
import AuthContext from '../../contexts/auth';

import { Container } from './styles';

const SignUp: React.FC<RouteComponentProps> = ({ history }) => {
  const { signIn } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // validar email e senhas (formato e igualdade)
    // se estiver errado, mostra toast de erro

    // http request pro backend pedindo cadastro e login com aqueles dados
    // se der tudo certo, cria, loga e redireciona
    // se nao, manda um toast de erro
    if (password !== confirmPassword) {
      console.log('suas senhas devem ser iguais');
      return;
    }

    try {
      await Auth.signUp(name, email, password);
      await signIn(email, password);

      history.push('/profile/12345');
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
        <h2>Cadastre-se</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input icon={FiUser} placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
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
          <Input
            icon={FiLock}
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button>Cadastrar</Button>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
