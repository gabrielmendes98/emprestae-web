import React, { useEffect, useContext, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

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
  const location = useLocation();

  const [loans, setLoans] = useState([] as Loan[]);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    const page = Number(new URLSearchParams(location.search).get('page'));

    if (user)
      api.get(`/users/${user!.id}/loans?_page=${page}&_limit=5`).then((response) => {
        setLoans(response.data);
        setMaxPage(Math.ceil(Number(response.headers['x-total-count']) / 5));
        console.log(Math.ceil(Number(response.headers['x-total-count']) / 5));
      });
  }, [user, location.search]);

  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <Link to="/profile">
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
            <Pagination max={maxPage} />
          </>
        ) : (
          <h2>Você ainda não tem empréstimos.</h2>
        )}
      </div>
    </Container>
  );
};

export default MyLoans;
