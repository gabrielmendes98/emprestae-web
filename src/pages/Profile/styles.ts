import styled from 'styled-components';

import { Container as Button } from '../../components/Button/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;

  > * {
    margin-bottom: 30px;
  }

  h3 {
    color: var(--text-color);
  }

  ${Button} {
    width: 250px;
  }
`;
