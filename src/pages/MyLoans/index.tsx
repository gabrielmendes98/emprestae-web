import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import LoanItem from './LoanItem';

import { Container } from './styles';

const MyLoans = () => {
  return (
    <Container>
      <h1>Emprestaê</h1>
      <FiArrowLeft />
      <h2>Meus Empréstimos</h2>
      <ul>
        <LoanItem status="analise" number={12345} value={320.0} agency={1234} account={123456} />
      </ul>
    </Container>
  );
};

export default MyLoans;
