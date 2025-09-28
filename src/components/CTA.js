import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

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

const CTAForm = styled(motion.form)`
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
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  ${props => props.success && 'background: #10b981; color: white;'}
  ${props => props.error && 'background: #ef4444; color: white;'}
`;

const CTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // 'success', 'error', or ''
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(''); // Reset status

    if (!executeRecaptcha) {
      setStatus('error');
      return;
    }

    // Generate reCAPTCHA token
    const recaptchaToken = await executeRecaptcha('submit');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
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
        <CTAForm onSubmit={handleSubmit} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
          <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <Textarea name="message" placeholder="Tell us about your project" rows="4" value={formData.message} onChange={handleChange} required />
          <CTAButton type="submit">Get Started</CTAButton>
          {status && <Message success={status === 'success'} error={status === 'error'}>
            {status === 'success' ? 'Thanks! We\'ll be in touch soon.' : 'Something went wrong. Please try again.'}
          </Message>}
        </CTAForm>
      </Container>
    </CTAStyled>
  );
};

export default CTA;