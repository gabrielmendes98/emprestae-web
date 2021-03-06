import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 600px;
  margin: 0 auto;

  > h1 {
    margin-bottom: 30px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 390px;

    @media (min-width: 430px) {
      min-width: 390px;
    }

    background: #fff;
    border-radius: 5px;
    padding: 20px;

    > a {
      align-self: flex-start;

      svg {
        width: 20px;
        height: 20px;
        margin-bottom: 20px;
        color: var(--primary-color);
      }
    }

    > h2 {
      color: var(--text-color);
      text-align: center;
    }

    > h2:first-of-type {
      color: var(--primary-color);
      margin-bottom: 30px;
    }
  }
`;

export const LoanList = styled.ul`
  margin-bottom: 40px;
  width: 100%;

  li {
    margin: 0 20px;
    padding: 12px 0;
    border-bottom: 1px solid #ccc;
  }

  @media (max-width: 350px) {
    li {
      margin: 0;
      padding: 12px 0;
      border-bottom: 1px solid #ccc;
    }
  }

  li:first-of-type {
    padding: 0px 0px 12px 0px;
  }

  li:last-of-type {
    padding: 12px 0px 0px 0px;
    border-bottom: none;
  }
`;
