import React from 'react';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Field, Select } from './styles';

const LoanRequest = () => {
  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <FiArrowLeft />
        <h1>Solicitação de empréstimo</h1>
        <h3>Preencha os campos com os dados do beneficiário</h3>
        <form>
          <Field>
            <label>Nome completo</label>
            <Input />
          </Field>

          <Field>
            <label>CPF</label>
            <Input />
          </Field>

          <Field>
            <label>Banco</label>
            <Select />
          </Field>

          <Field>
            <label>Agência</label>
            <Input />
          </Field>

          <Field>
            <label>Conta</label>
            <Input />
          </Field>

          <Field>
            <label>Tipo de conta</label>
            <Select />
          </Field>

          <Field>
            <label>Valor</label>
            <Input />
          </Field>

          <Field>
            <label>Número de parcelas</label>
            <Select />
          </Field>

          <h2>Valor final a pagar:</h2>
          <h3>3 parcelas de R$ 0000,00</h3>

          <Button icon={FiCheck}>Solicitar empréstimo</Button>
        </form>
      </div>
    </Container>
  );
};

export default LoanRequest;
