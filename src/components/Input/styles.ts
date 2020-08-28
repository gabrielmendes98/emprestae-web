import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  background: #f0f0f5;
  border-radius: 15px;
  border: 0;
  padding: 16px 24px;
  color: #6c6c80;
  display: flex;
  align-items: center;

  &:focus-within {
    border: 2px solid var(--primary-color);
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
