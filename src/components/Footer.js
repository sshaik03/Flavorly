import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FooterColumn = styled.div``;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #FF6B6B;
  margin-bottom: 1rem;
`;

const FooterDescription = styled.p`
  color: #aaa;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FF6B6B;
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #fff;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: #aaa;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #FF6B6B;
    }
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #aaa;
  font-size: 0.9rem;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: #aaa;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #FF6B6B;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>Flavorly</FooterLogo>
          <FooterDescription>
            Your personal meal planning, recipe generation, and grocery assistance app that makes healthy eating easy and fun.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="https://www.linkedin.com/company/flavorlyai/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </SocialLink>
            <SocialLink href="https://www.instagram.com/flavorlyai" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialLink>
            <SocialLink href="https://x.com/FlavorlyAI" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Company</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="/#about">About Us</a></FooterLink>
            <FooterLink><a href="/#careers">Careers</a></FooterLink>
            <FooterLink><a href="/#blog">Blog</a></FooterLink>
            <FooterLink><a href="/#press">Press</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Features</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="#features">Recipe Generation</a></FooterLink>
            <FooterLink><a href="#features">Grocery Assistance</a></FooterLink>
            <FooterLink><a href="#features">Nutrition Tracking</a></FooterLink>
            <FooterLink><a href="#features">Social Cooking</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Support</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="/#help">Help Center</a></FooterLink>
            <FooterLink><a href="/#contact">Contact Us</a></FooterLink>
            <FooterLink><a href="/#privacy">Privacy Policy</a></FooterLink>
            <FooterLink><a href="/#terms">Terms of Service</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
      </FooterContent>
      
      <BottomBar>
        <Copyright>&copy; {new Date().getFullYear()} Flavorly. All rights reserved.</Copyright>
        <BottomLinks>
          <a href="/#privacy">Privacy Policy</a>
          <a href="/#terms">Terms of Service</a>
          <a href="/#cookies">Cookies</a>
        </BottomLinks>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;