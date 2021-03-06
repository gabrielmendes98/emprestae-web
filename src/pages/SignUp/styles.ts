import styled from 'styled-components';

import { Container as Button } from '../../components/Button/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;

  margin: 0 auto;

  h1 {
    margin-bottom: 30px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;

    > *:not(:last-child) {
      margin-bottom: 20px;
    }

    form {
      > *:not(:last-child) {
        margin-bottom: 20px;
      }
    }

    ${Button} {
      margin-top: 10px;
      width: 100%;
      justify-content: center;
    }

    > h2 {
      color: var(--primary-color);
    }

    > a {
      align-self: flex-start;
      svg {
        color: var(--primary-color);
        height: 20px;
        width: 20px;
      }
    }
  }
`;
