import React from 'react';
import { Link } from 'react-router-dom';

import { FiMail, FiLogIn, FiUserPlus } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import Button from '../../components/Button';

import { Container, ActionsContainer, HowItWorksContainer, WelcomeContainer, HelpContainer } from './styles';

const Home = () => {
  return (
    <Container>
      <h1>Emprestaê</h1>
      <div>
        <WelcomeContainer>
          <h2>Seja bem-vindo(a)!</h2>
          <h2>Precisa de um empréstimo sem dor de cabeça?</h2>
          <p>Faça login ou crie sua conta para solicitar e acompanhar seus empréstimos de forma simples e rápida.</p>
        </WelcomeContainer>
        <ActionsContainer>
          <Link to="/login">
            <Button icon={FiLogIn}>Login</Button>
          </Link>
          <Link to="/signup">
            <Button icon={FiUserPlus}>Cadastre-se</Button>
          </Link>
        </ActionsContainer>
        <HowItWorksContainer>
          <h2>Como funciona?</h2>
          <ul>
            <li>1. Faça login</li>
            <li>2. Solicite um empréstimo</li>
            <li>3. Escolha a melhor proposta para você</li>
            <li>4. Acompanhe seus empréstimos</li>
          </ul>
        </HowItWorksContainer>
        <HelpContainer>
          <h2>Precisa de ajuda?</h2>
          <p>Entre em contato</p>
          <div>
            <FaWhatsapp />
            <span>34 9 9999-9999</span>
          </div>
          <div>
            <FiMail />
            <span>ajuda@emprestae.com</span>
          </div>
        </HelpContainer>
      </div>
    </Container>
  );
};

export default Home;
