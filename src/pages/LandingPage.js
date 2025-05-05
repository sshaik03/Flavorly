import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Waitlist from '../components/Waitlist';
import Footer from '../components/Footer';

const PageContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

const LandingPage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Waitlist />
      <Footer />
    </PageContainer>
  );
};

export default LandingPage;