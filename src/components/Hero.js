import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroStyled = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(45deg, #10b981, #3b82f6, #059669, #2563eb);
  background-size: 400% 400%;
  animation: gradientBreathe 8s ease infinite;
  @keyframes gradientBreathe {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const HeroImage = styled(motion.img)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
  animation: fadeBreathe 8s ease infinite;
  @keyframes fadeBreathe {
    0% { opacity: 0.2; }
    50% { opacity: 0.3; }
    100% { opacity: 0.2; }
  }
`;

const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;
  text-align: center;
`;

const HeroTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(45deg, #10b981, #3b82f6, #059669, #2563eb);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  animation: gradientBreathe 8s ease infinite;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
  @keyframes gradientBreathe {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const HeroText = styled(motion.p)`
  font-size: 1.125rem;
  max-width: 32rem;
  margin: 0 auto 2rem;
  color: #d1d5db;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  background: #10b981;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;
  &:hover {
    background: #059669;
  }
`;

const Hero = () => {
  return (
    <HeroStyled>
      <HeroImage
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        alt="Somerset Landscape"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      <HeroContent>
        <HeroTitle initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          Sleek, AI-Powered Web Design
        </HeroTitle>
        <HeroText initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          Transform your Somerset business with modern, AI-assisted websites that drive organic traffic and leads—built faster, smarter, and more affordably.
        </HeroText>
        <HeroButton
          href="#services"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
        >
          Discover More
        </HeroButton>
      </HeroContent>
    </HeroStyled>
  );
};

export default Hero;