import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Extract keyframes for reusability
const gradientBreathe = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeBreathe = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 0.3; }
  100% { opacity: 0.2; }
`;

// Theme constants for consistency
const theme = {
  colors: {
    primary: '#10b981',
    primaryDark: '#059669',
    secondary: '#3b82f6',
    secondaryDark: '#2563eb',
    textLight: '#d1d5db',
    white: '#ffffff',
  },
  breakpoints: {
    md: '768px',
  },
  gradients: {
    main: 'linear-gradient(45deg, #10b981, #3b82f6, #059669, #2563eb)',
    text: 'linear-gradient(235deg, #10b981, #3b82f6, #059669, #2563eb)',
  },
};

const HeroStyled = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: ${theme.gradients.main};
  background-size: 400% 400%;
  animation: ${gradientBreathe} 8s ease infinite;
`;

const HeroImage = styled(motion.img)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
  animation: ${fadeBreathe} 8s ease infinite;
  will-change: opacity; // Optimize for animations
`;

const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;
  text-align: center;
`;

const HeroTitle = styled(motion.h1)` // Changed from h2 to h1 for proper heading hierarchy
  font-size: clamp(2.5rem, 5vw, 4.5rem); // Fluid typography
  font-weight: 700;
  background: ${theme.gradients.text};
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  padding-bottom: 0.2rem;
  animation: ${gradientBreathe} 8s ease infinite;
  line-height: 1.1; // Better line height for large text
  will-change: background-position;
`;

const HeroText = styled(motion.p)`
  font-size: clamp(1.125rem, 2.5vw, 1.25rem); // Fluid typography
  max-width: 32rem;
  margin: 0 auto 2rem;
  color: ${theme.colors.textLight};
  line-height: 1.6; // Better readability
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: ${theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
  }
  
  &:focus {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Animation variants for better organization
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 }
};

const fadeInUpLarge = {
  initial: { opacity: 0, y: 180 },
  animate: { opacity: 1, y: 0 }
};

const scaleIn = {
  initial: { scale: 1.2 },
  animate: { scale: 1 }
};

const Hero = () => {
  return (
    <HeroStyled>
      <HeroImage
        src="https://images.unsplash.com/photo-1721228529190-f5a0e5a25304?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0"
        alt="Beautiful Somerset countryside landscape with rolling hills and green fields"
        loading="eager" // Since it's above the fold
        variants={scaleIn}
        initial="initial"
        animate="animate"
        transition={{ duration: 2.5, ease: 'easeOut' }}
      />
      <HeroContent>
        <HeroTitle 
          variants={fadeInUpLarge}
          initial="initial"
          animate="animate"
          transition={{ duration: 1, delay: 0.3 }}
        >
          Sleek, AI-Powered Web Design
        </HeroTitle>
        <HeroText 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 1, delay: 0.5 }}
        >
          Transform your Somerset business with modern, AI-assisted websites that drive organic traffic and leads—built faster, smarter, and more affordably.
        </HeroText>
        <HeroButton
          href="#services"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Learn more about our web design services"
        >
          Discover More
        </HeroButton>
      </HeroContent>
    </HeroStyled>
  );
};

export default Hero;