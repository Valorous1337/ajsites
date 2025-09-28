import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

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
  background: linear-gradient(45deg, #10b981, #3b82f6, #059669, #2563eb);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientBreathe 8s ease infinite;
  cursor: pointer;
  @keyframes gradientBreathe {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 767px) {
    display: none;
  }
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

const Burger = styled.div`
  display: none;
  cursor: pointer;
  z-index: 60;
  @media (max-width: 767px) {
    display: block;
  }
`;

const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background: linear-gradient(45deg, #10b981, #3b82f6, #059669, #2563eb);
  background-size: 400% 400%;
  margin: 5px 0;
  animation: gradientBreathe 8s ease infinite;
  transition: all 0.3s ease;
  ${props => props.isOpen && `
    &:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }
  `}
  @keyframes gradientBreathe {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #111827;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 40;
  @media (max-width: 767px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
  }
`;

const MobileNavLink = styled(motion.a)`
  color: #d1d5db;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  transition: color 0.3s ease;
  &:hover {
    color: #10b981;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <GlobalStyle />
      <HeaderStyled initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
        <Container>
          <motion.a href="#top" style={{ textDecoration: 'none' }}>
            <Logo initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} whileHover={{ scale: 1.1 }}>
              AJSites
            </Logo>
          </motion.a>
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
          <Burger onClick={toggleMenu}>
            <BurgerLine isOpen={isOpen} />
            <BurgerLine isOpen={isOpen} />
            <BurgerLine isOpen={isOpen} />
          </Burger>
          <MobileMenu isOpen={isOpen} initial={{ opacity: 0 }} animate={{ opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3 }}>
            {['Services', 'About', 'Growth', 'Contact'].map((item, index) => (
              <MobileNavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </MobileNavLink>
            ))}
          </MobileMenu>
        </Container>
      </HeaderStyled>
    </>
  );
};

export default Header;