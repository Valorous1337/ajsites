import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderStyled = styled(motion.header)`
  position: fixed;
  width: 100%;
  background: rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(8px);
  z-index: 50;
  padding: 1rem 0;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.h1)`
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(to right, #10b981, #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(motion.a)`
  color: #d1d5db;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  &:hover {
    color: #10b981;
  }
`;

const Header = () => {
  return (
    <HeaderStyled initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
      <Container>
        <Logo initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
          AJSites
        </Logo>
        <Nav>
          {['Services', 'About', 'Growth', 'Contact'].map((item, index) => (
            <NavLink
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </NavLink>
          ))}
        </Nav>
      </Container>
    </HeaderStyled>
  );
};

export default Header;