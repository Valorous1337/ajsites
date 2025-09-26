import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutStyled = styled.section`
  padding: 5rem 0;
  background: #111827;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const AboutContent = styled(motion.div)`
  flex: 1;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #10b981, #3b82f6, #059669, #2563eb);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  animation: gradientBreathe 8s ease infinite;
  @keyframes gradientBreathe {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const AboutText = styled.p`
  color: #d1d5db;
  margin-bottom: 2rem;
`;

const AboutButton = styled(motion.a)`
  display: inline-block;
  background: #10b981;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;
  &:hover {
    background: #059669;
  }
`;

const AboutImage = styled(motion.img)`
  flex: 1;
  width: 100%;
  border-radius: 0.5rem;
`;

const About = () => {
  return (
    <AboutStyled id="about">
      <Container>
        <AboutContent initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <AboutTitle>Built for Somerset’s Growth</AboutTitle>
          <AboutText>
            We empower small Somerset businesses with AI-driven web solutions that deliver measurable results—faster builds, lower costs, and more organic leads.
          </AboutText>
          <AboutButton href="#growth" whileHover={{ scale: 1.05 }}>
            Learn More
          </AboutButton>
        </AboutContent>
        <AboutImage
          src="https://images.unsplash.com/photo-1680783954745-3249be59e527?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=500&q=80"
          alt="AI Technology"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </Container>
    </AboutStyled>
  );
};

export default About;