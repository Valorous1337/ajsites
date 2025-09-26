import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CTAStyled = styled.section`
  padding: 5rem 0;
  background: linear-gradient(to right, #10b981, #3b82f6, #059669, #2563eb);
  background-size: 400% 400%;
  animation: gradientBreathe 8s ease infinite;
  @keyframes gradientBreathe {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

const CTATitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #10b981, #3b82f6, #059669, #2563eb);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: #ffffff;
  margin-bottom: 1.5rem;
  animation: gradientBreathe 8s ease infinite;
  @keyframes gradientBreathe {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const CTAText = styled(motion.p)`
  font-size: 1.125rem;
  max-width: 32rem;
  margin: 0 auto 2rem;
`;

const CTAForm = styled(motion.div)`
  max-width: 28rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  background: #374151;
  color: #ffffff;
  font-size: 1rem;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #10b981;
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  background: #374151;
  color: #ffffff;
  font-size: 1rem;
  resize: vertical;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #10b981;
  }
`;

const CTAButton = styled.button`
  background: #ffffff;
  color: #10b981;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #e5e7eb;
  }
`;

const CTA = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! We’ll get back to you soon.');
  };

  return (
    <CTAStyled id="contact">
      <Container>
        <CTATitle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          Let’s Build Your Future
        </CTATitle>
        <CTAText initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          Contact us to start your AI-powered web journey and grow your Somerset business.
        </CTAText>
        <CTAForm initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Tell us about your project" rows="4" required />
          <CTAButton onClick={handleSubmit}>Get Started</CTAButton>
        </CTAForm>
      </Container>
    </CTAStyled>
  );
};

export default CTA;