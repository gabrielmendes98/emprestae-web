import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;

  h1 {
    margin-bottom: 40px;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 290px;
    grid-gap: 40px;
  }

  @media (max-width: 650px) {
    > div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const WelcomeContainer = styled.div`
  h2:not(:first-child) {
    margin-bottom: 30px;
  }

  p {
    font-size: 18px;
    max-width: 500px;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 290px;
  height: 160px;
  background: #fff;
  border-radius: 5px;

  a:first-child {
    margin-bottom: 20px;
  }
`;

export const HowItWorksContainer = styled.div`
  h2 {
    margin-bottom: 30px;
  }
`;

export const HelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 290px;
  height: 160px;
  background: #fff;
  border-radius: 5px;

  padding: 0 30px;

  p {
    margin-bottom: 20px;
  }

  div:first-of-type {
    margin-bottom: 10px;
  }

  div {
    display: flex;
    align-items: center;

    svg {
      color: var(--primary-color);
      margin-right: 10px;
    }
  }
`;
