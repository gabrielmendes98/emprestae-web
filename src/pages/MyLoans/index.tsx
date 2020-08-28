import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import LoanItem from './LoanItem';
import Pagination from './Pagination';

import { Container, LoanList } from './styles';

const MyLoans = () => {
  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <Link to="/profile/12345">
          <FiArrowLeft />
        </Link>

        <h2>Meus Empréstimos</h2>
        <LoanList>
          <LoanItem status="analise" number={12345} value={320.0} agency={1234} account={123456} />
          <LoanItem status="reprovado" number={12345} value={320.0} agency={1234} account={123456} />
          <LoanItem
            status="aprovado"
            number={12345}
            value={320.0}
            agency={1234}
            account={123456}
            received="28/08/2020"
            due="28/08/2020"
          />
          <LoanItem
            status="pago"
            number={12345}
            value={320.0}
            agency={1234}
            account={123456}
            received="28/08/2020"
            paid="28/08/2020"
          />
        </LoanList>
        <Pagination />
      </div>
    </Container>
  );
};

export default MyLoans;
