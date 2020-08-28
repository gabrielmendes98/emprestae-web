import styled from 'styled-components';

export const Container = styled.div`
  background: #f0f0f5;
  border-radius: 5px;
  border: 0;
  padding: 15px 23px;
  color: #6c6c80;
  display: flex;
  align-items: center;

  border: 1px solid transparent;

  &:focus-within {
    border: 1px solid var(--primary-color);
  }

  input {
    flex: 1;
    border: none;
    background: none;
    font-size: 16px;
    outline: 0;
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: 12px;
    color: var(--primary-color);
  }
`;
