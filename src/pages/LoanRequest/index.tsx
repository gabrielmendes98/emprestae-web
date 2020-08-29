import React, { useState, ChangeEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import AuthContext from '../../contexts/auth';

import {
  Container,
  Field,
  Select,
  NameContainer,
  CPFBankContainer,
  AgencyAccountTypeContainer,
  ValueParcelContainer,
} from './styles';

interface FormData {
  name: string;
  cpf: number;
  agency: number;
  account: number;
  value: number;
  accountType: string;
  bank: string;
  parcels: number;
}

const LoanRequest = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    accountType: 'corrente',
    parcels: 1,
    bank: 'itau',
  } as FormData);

  function handleFormChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { name, cpf, agency, account, value, accountType, bank, parcels } = formData;

    await api.post(`/loans`, { name, cpf, agency, account, value, accountType, bank, parcels, userId: user!.id });
  }

  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <Link to="/profile/12345">
          <FiArrowLeft />
        </Link>
        <h1>Solicitação de empréstimo</h1>
        <h3>Preencha os campos com os dados do beneficiário</h3>
        <form onSubmit={handleSubmit}>
          <NameContainer>
            <Field>
              <label>Nome completo</label>
              <Input name="name" onChange={handleFormChange} />
            </Field>
          </NameContainer>

          <CPFBankContainer>
            <Field>
              <label>CPF</label>
              <Input name="cpf" onChange={handleFormChange} />
            </Field>

            <Field>
              <label>Banco</label>
              <Select name="bank" onChange={handleFormChange}>
                <option value="itau">Itau</option>
                <option value="banco-do-brasil">Banco do Brasil</option>
              </Select>
            </Field>
          </CPFBankContainer>

          <AgencyAccountTypeContainer>
            <Field>
              <label>Agência</label>
              <Input name="agency" onChange={handleFormChange} />
            </Field>

            <Field>
              <label>Conta</label>
              <Input name="account" onChange={handleFormChange} />
            </Field>

            <Field>
              <label>Tipo de conta</label>
              <Select name="accountType" onChange={handleFormChange}>
                <option value="corrente">Corrente</option>
                <option value="poupanca">Poupança</option>
              </Select>
            </Field>
          </AgencyAccountTypeContainer>

          <ValueParcelContainer>
            <Field>
              <label>Valor</label>
              <Input name="value" onChange={handleFormChange} />
            </Field>

            <Field>
              <label>Número de parcelas</label>
              <Select name="parcels" onChange={handleFormChange}>
                <option value={1}>1</option>
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={7}>7</option>
                <option value={9}>9</option>
                <option value={12}>12</option>
              </Select>
            </Field>
          </ValueParcelContainer>

          <h2>Valor final a pagar:</h2>
          <h3>3 parcelas de R$ 0000,00</h3>

          <Button icon={FiCheck}>Solicitar empréstimo</Button>
        </form>
      </div>
    </Container>
  );
};

export default LoanRequest;
