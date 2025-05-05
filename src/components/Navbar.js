import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #FF6B6B;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FF6B6B;
  }
`;

const CTAButton = styled(motion.button)`
  background-color: #FF6B6B;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #ff5252;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Nav>
      <Logo>Flavorly</Logo>
      <NavLinks>
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#how-it-works">How It Works</NavLink>
        <NavLink href="#waitlist">Join Waitlist</NavLink>
      </NavLinks>
      <CTAButton 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => document.getElementById('waitlist').scrollIntoView()}
      >
        Join Waitlist
      </CTAButton>
      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        ☰
      </MobileMenuButton>
    </Nav>
  );
};

export default Navbar;