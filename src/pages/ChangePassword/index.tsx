import React, { useContext, useState, ChangeEvent } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import AuthContext from '../../contexts/auth';

import { Container } from './styles';

interface FormData {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const schema = Yup.object().shape({
  confirmNewPassword: Yup.string()
    .min(6, 'Sua senha deve ter no mínimo 6 caracteres')
    .required('A confirmação de senha é obrigatória'),
  newPassword: Yup.string()
    .min(6, 'Sua nova senha deve ter no mínimo 6 caracteres')
    .required('A nova senha é obrigatória'),
  currentPassword: Yup.string()
    .min(6, 'Sua senha deve ter no mínimo 6 caracteres')
    .required('A senha atual é obrigatória'),
});

const ChangePassword: React.FC<RouteComponentProps> = ({ history }) => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({} as FormData);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const { currentPassword, newPassword, confirmNewPassword } = formData;

      await schema.validate({ currentPassword, newPassword, confirmNewPassword });

      if (newPassword !== confirmNewPassword) {
        return toast.error('Sua nova senha deve ser igual nos dois campos');
      }
      // Estou usando o patch, pois o put no json server nao altera apenas uma chave, ou seja, eu teria que passar o objeto user inteiro
      await api.patch(`/users/${user!.id}`, { password: newPassword });

      toast.success('Sua senha foi alterada com sucesso!');

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

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <Link to="/profile">
          <FiArrowLeft />
        </Link>
        <h2>Mudar senha</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            name="currentPassword"
            type="password"
            placeholder="Digite sua senha atual"
            onChange={handleInputChange}
          />
          <Input name="newPassword" type="password" placeholder="Digite sua nova senha" onChange={handleInputChange} />
          <Input
            name="confirmNewPassword"
            type="password"
            placeholder="Confirmar nova senha"
            onChange={handleInputChange}
          />
          <Button>Confirmar</Button>
        </form>
      </div>
    </Container>
  );
};

export default ChangePassword;
