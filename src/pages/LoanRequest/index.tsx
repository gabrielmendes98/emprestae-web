import React, { useState, ChangeEvent, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

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

interface Bank {
  id: number;
  name: string;
  value: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatória'),
  cpf: Yup.number().min(11, 'Digite um CPF válido').max(11, 'Digite um CPF válido').required('O CPF é obrigatório'),
  agency: Yup.number().min(4, 'Digite uma agência válida').required('A agência é obrigatória'),
  account: Yup.number().min(6, 'Digite uma conta válida').required('A conta é obrigatória'),
  value: Yup.string().required('O valor é obrigatório'),
});

const LoanRequest = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    accountType: 'corrente',
    parcels: 1,
    bank: 'itau',
  } as FormData);
  const [finalValue, setFinalValue] = useState(0);
  const [banks, setBanks] = useState([] as Bank[]);

  function handleFormChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { name, cpf, agency, account, value, accountType, bank, parcels } = formData;

    // Aqui estou passando o status no post, pois tenho um fake backend.
    // Em uma aplicacao real, o proprio servidor backend iria setar o status para 'analise'
    await api.post(`/loans`, {
      name,
      cpf,
      agency,
      account,
      value,
      accountType,
      bank,
      parcels,
      userId: user!.id,
      status: 'analise',
    });
  }

  useEffect(() => {
    api.get('/banks').then((response) => setBanks(response.data));
  }, []);

  useEffect(() => {
    if (formData.value !== undefined) {
      setFinalValue((1 + formData.parcels / 50) * formData.value);
      console.log((1 + formData.parcels / 50) * formData.value);
    }
  }, [formData.value, formData.parcels]);

  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <Link to="/profile">
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
              <Input name="cpf" onChange={handleFormChange} maxLength={11} type="number" />
            </Field>

            <Field>
              <label>Banco</label>
              <Select name="bank" onChange={handleFormChange}>
                {banks.length !== 0 &&
                  banks.map((bank) => (
                    <option key={String(bank.id)} value={bank.value}>
                      {bank.name}
                    </option>
                  ))}
              </Select>
            </Field>
          </CPFBankContainer>

          <AgencyAccountTypeContainer>
            <Field>
              <label>Agência</label>
              <Input name="agency" onChange={handleFormChange} type="number" />
            </Field>

            <Field>
              <label>Conta</label>
              <Input name="account" onChange={handleFormChange} type="number" />
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
          {finalValue !== 0 ? (
            <h3>
              {formData.parcels} parcelas de R$ {(finalValue / formData.parcels).toFixed(2)} = R${' '}
              {finalValue.toFixed(2)}
            </h3>
          ) : (
            <h3> </h3>
          )}

          <Button icon={FiCheck}>Solicitar empréstimo</Button>
        </form>
      </div>
    </Container>
  );
};

export default LoanRequest;
