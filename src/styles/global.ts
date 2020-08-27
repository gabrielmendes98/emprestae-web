import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    --primary-color: #3700B3;
    --secondary-color: #4700E9;
    --text-color: #6c6c80;
    --input-color: #F0F0F5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
    color: var(--text-color);
  }

  body,
  input,
  button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--primary-color);
    font-family: Ubuntu;
  }
`;