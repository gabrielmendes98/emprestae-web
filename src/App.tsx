import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { AuthProvider } from './contexts/auth';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
