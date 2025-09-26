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
  color: #ffffff;
  min-height: 100vh;
  background: linear-gradient(45deg, #10b981, #3b82f6, #059669, #2563eb);
  background-size: 400% 400%;
  animation: gradientBreathe 10s ease infinite;
  @keyframes gradientBreathe {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
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