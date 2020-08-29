import React, { useEffect, useContext, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import LoanItem from './LoanItem';
import Pagination from './Pagination';
import AuthContext from '../../contexts/auth';
import api from '../../services/api';

import { Container, LoanList } from './styles';

interface Loan {
  id: number;
  status: string;
  value: number;
  agency: number;
  account: number;
  received?: string;
  due?: string;
  paid?: string;
}

const MyLoans = () => {
  const { user } = useContext(AuthContext);

  const [loans, setLoans] = useState([] as Loan[]);

  useEffect(() => {
    if (user) api.get(`/users/${user!.id}/loans`).then((response) => setLoans(response.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <Link to="/profile/12345">
          <FiArrowLeft />
        </Link>

        <h2>Meus Empréstimos</h2>
        {loans.length !== 0 ? (
          <>
            <LoanList>
              {loans.map((loan) => (
                <LoanItem
                  key={loan.id}
                  status={loan.status}
                  number={loan.id}
                  value={loan.value}
                  agency={loan.agency}
                  account={loan.account}
                  due={loan.due}
                  received={loan.received}
                  paid={loan.paid}
                />
              ))}
            </LoanList>
            <Pagination />
          </>
        ) : (
          <h2>Você ainda não tem empréstimos.</h2>
        )}
      </div>
    </Container>
  );
};

export default MyLoans;
