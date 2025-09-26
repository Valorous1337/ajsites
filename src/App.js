// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Growth from './components/Growth';
import CTA from './components/CTA';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Inter', sans-serif;
  background: #111827;
  color: #ffffff;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <Services />
      <About />
      <Growth />
      <CTA />
      <Footer />
    </AppContainer>
  );
}

export default App;