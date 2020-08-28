import styled from 'styled-components';

export const Container = styled.li`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;

  svg {
    margin-right: 35px;
    margin-left: 16px;
  }
`;

export const Line = styled.div`
  margin-bottom: 3px;

  span:first-of-type {
    color: #000;
  }
`;
