import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container, NumbersContainer } from './styles';

const Pagination = () => {
  const location = useLocation();

  const [page, setPage] = useState(1);

  useEffect(() => {
    const _page = Number(new URLSearchParams(location.search).get('page'));
    setPage(_page);
  }, [location.search]);

  return (
    <Container>
      <Link to={`/my-loans?page=${page - 1}`}>
        <FiChevronLeft />
      </Link>

      <NumbersContainer>
        <span>{page}</span>
      </NumbersContainer>

      <Link to={`/my-loans?page=${page + 1}`}>
        <FiChevronRight />
      </Link>
    </Container>
  );
};

export default Pagination;
