import React, { useState, useContext } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Auth from '../../services/auth';
import AuthContext from '../../contexts/auth';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Container } from './styles';

const schema = Yup.object().shape({
  confirmPassword: Yup.string()
    .min(6, 'Sua confirmação de senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  password: Yup.string().min(6, 'Sua senha deve ter no mínimo 6 caracteres').required('A senha é obrigatória'),
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  name: Yup.string().required('O nome é obrigatório'),
});

const SignUp: React.FC<RouteComponentProps> = ({ history }) => {
  const { signIn } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await schema.validate({ name, email, password, confirmPassword });

      if (password !== confirmPassword) {
        return toast.error('Sua senha deve ser igual nos dois campos');
      }

      await Auth.signUp(name, email, password);

      toast.success('Sua conta foi criada com sucesso!');

      await signIn(email, password);

      history.push('/profile');
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
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            icon={FiLock}
            placeholder="Confirmar senha"
            value={confirmPassword}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button>Cadastrar</Button>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
