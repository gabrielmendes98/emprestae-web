import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container, NumbersContainer } from './styles';

interface Props {
  max: number;
}

const Pagination: React.FC<Props> = ({ max }) => {
  const location = useLocation();

  const [page, setPage] = useState(1);

  useEffect(() => {
    const _page = Number(new URLSearchParams(location.search).get('page'));
    setPage(_page);
  }, [location.search]);

  return (
    <Container>
      {page > 1 && (
        <Link to={`/my-loans?page=${page - 1}`}>
          <FiChevronLeft />
        </Link>
      )}

      <NumbersContainer>
        <span>{page}</span>
      </NumbersContainer>

      {page < max && (
        <Link to={`/my-loans?page=${page + 1}`}>
          <FiChevronRight />
        </Link>
      )}
    </Container>
  );
};

export default Pagination;
