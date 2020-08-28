import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Field,
  Select,
  NameContainer,
  CPFBankContainer,
  AgencyAccountTypeContainer,
  ValueParcelContainer,
} from './styles';

const LoanRequest = () => {
  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <Link to="/user/12345">
          <FiArrowLeft />
        </Link>
        <h1>Solicitação de empréstimo</h1>
        <h3>Preencha os campos com os dados do beneficiário</h3>
        <form>
          <NameContainer>
            <Field>
              <label>Nome completo</label>
              <Input />
            </Field>
          </NameContainer>

          <CPFBankContainer>
            <Field>
              <label>CPF</label>
              <Input />
            </Field>

            <Field>
              <label>Banco</label>
              <Select>
                <option value="itau">Itau</option>
                <option value="banco-do-brasil">Banco do Brasil</option>
              </Select>
            </Field>
          </CPFBankContainer>

          <AgencyAccountTypeContainer>
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
              <Select>
                <option value="corrente">Corrente</option>
                <option value="poupanca">Poupança</option>
              </Select>
            </Field>
          </AgencyAccountTypeContainer>

          <ValueParcelContainer>
            <Field>
              <label>Valor</label>
              <Input />
            </Field>

            <Field>
              <label>Número de parcelas</label>
              <Select>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="7">7</option>
                <option value="9">9</option>
                <option value="12">1</option>
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
