import styled from 'styled-components';

export const Container = styled.button`
  height: 40px;
  width: 190px;
  background: var(--button-color);
  border-radius: 5px;
  text-decoration: none;

  display: flex;
  align-items: center;
  overflow: hidden;

  border: none;
  outline: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  div {
    display: block;
    background: var(--primary-color);
    min-width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }

  span {
    width: 100%;
    color: #fff;
    font-size: 16px;
  }
`;
