import styled from 'styled-components';

import { Container as Input } from '../../components/Input/styles';
import { Container as Button } from '../../components/Button/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;

  > h1 {
    margin-bottom: 50px;
  }

  > div {
    background-color: #fff;
    padding: 25px;
    border-radius: 5px;

    > a {
      display: inline-block;
      margin-bottom: 30px;

      svg {
        height: 20px;
        width: 20px;
        color: var(--primary-color);
      }
    }

    form {
      display: flex;
      flex-direction: column;

      ${Input} {
        height: 40px;
      }

      > div {
        margin-bottom: 30px;
      }

      ${Button} {
        align-self: center;
        width: 250px;
      }
    }
  }

  > div h3 {
    margin-bottom: 40px;
  }

  h2 {
    color: var(--primary-color);
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  width: 100%;
  background: #f0f0f5;
  border-radius: 5px;
  border: 0;
  padding: 0px 15px;
  font-size: 16px;
  color: #6c6c80;
  display: flex;
  align-items: center;
  height: 40px;
  outline: 0;
`;

export const NameContainer = styled.div``;

export const CPFBankContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-column-gap: 40px;

  @media (max-width: 589px) {
    display: flex;
    flex-direction: column;
    > *:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

export const AgencyAccountTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  grid-column-gap: 40px;

  @media (max-width: 770px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 30px;
  }

  @media (max-width: 589px) {
    grid-row-gap: 0px;

    display: flex;
    flex-direction: column;
    > *:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

export const ValueParcelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  grid-column-gap: 40px;

  @media (max-width: 770px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 505px) {
    grid-row-gap: 0px;

    display: flex;
    flex-direction: column;
    > *:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;
