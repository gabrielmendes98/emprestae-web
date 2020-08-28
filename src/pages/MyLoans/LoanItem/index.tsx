import React from 'react';

import StatusIcon from './StatusIcon';

import { Container, Line } from './styles';

interface Props {
  status: string;
  number: number;
  value: number;
  agency: number;
  account: number;
  received?: string;
  due?: string;
  paid?: string;
}

const LoanItem: React.FC<Props> = ({ status, number, value, agency, account, received, due, paid }) => {
  return (
    <Container>
      <StatusIcon status={status} />
      <div>
        <Line>
          <span>Número: </span>
          <span>{number}</span>
        </Line>

        <Line>
          <span>Valor: </span>
          <span>R$ {value}</span>
        </Line>

        <Line>
          <span>Agência: </span>
          <span>{agency}</span>
        </Line>

        <Line>
          <span>Conta: </span>
          <span>{account}</span>
        </Line>

        {received && (
          <Line>
            <span>Recebido: </span>
            <span>{received}</span>
          </Line>
        )}

        {due && (
          <Line>
            <span>Vencimento: </span>
            <span>{due}</span>
          </Line>
        )}

        {paid && (
          <Line>
            <span>Pago dia: </span>
            <span>{paid}</span>
          </Line>
        )}

        {status === 'analise' && <span>Em análise</span>}
        {status === 'reprovado' && <span>Reprovado. Entre em contato para saber mais</span>}
      </div>
    </Container>
  );
};

export default LoanItem;
