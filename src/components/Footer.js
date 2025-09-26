import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterStyled = styled.footer`
  padding: 3rem 0;
  background: #111827;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FooterText = styled.p`
  color: #d1d5db;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  color: #d1d5db;
  text-decoration: none;
  &:hover {
    color: #10b981;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterText>&copy; 2025 AJSites. Serving Somerset’s small businesses with pride.</FooterText>
        <SocialLinks>
          {['Twitter', 'LinkedIn', 'Instagram'].map((platform, index) => (
            <SocialLink
              key={platform}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              {platform}
            </SocialLink>
          ))}
        </SocialLinks>
      </Container>
    </FooterStyled>
  );
};

export default Footer;