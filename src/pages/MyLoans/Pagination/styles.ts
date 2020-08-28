import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    color: var(--primary-color);
  }
`;

export const NumbersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  background-color: #b99bfd;
  border-radius: 50px;

  span {
    color: #000;
  }
`;
