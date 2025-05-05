import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PricingCard = styled(motion.div)`
  background-color: #ffffff;
  padding: 3rem 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  width: 300px;
  position: relative;
  overflow: hidden;
  
  ${props => props.popular && `
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 768px) {
      transform: scale(1);
      margin: 2rem 0;
    }
  `}
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #FF6B6B;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-bottom-left-radius: 10px;
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const PlanPrice = styled.div`
  margin: 1.5rem 0;
`;

const Price = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: #FF6B6B;
`;

const PriceDetail = styled.span`
  font-size: 1rem;
  color: #666;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  text-align: left;
`;

const Feature = styled.li`
  margin-bottom: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  
  &:before {
    content: "✓";
    color: #FF6B6B;
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const CTAButton = styled(motion.button)`
  background-color: ${props => props.primary ? "#FF6B6B" : "transparent"};
  color: ${props => props.primary ? "white" : "#333"};
  border: ${props => props.primary ? "none" : "2px solid #FF6B6B"};
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.primary ? "#ff5252" : "rgba(255, 107, 107, 0.1)"};
  }
`;

const Pricing = () => {
  return (
    <Section id="pricing">
      <SectionTitle>Simple, Transparent Pricing</SectionTitle>
      <SectionSubtitle>
        Choose the plan that works best for your cooking needs
      </SectionSubtitle>
      <PricingContainer>
        <PricingCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <PlanName>Free</PlanName>
          <PlanPrice>
            <Price>$0</Price>
            <PriceDetail>/month</PriceDetail>
          </PlanPrice>
          <FeaturesList>
            <Feature>Recipe generation (3 per day)</Feature>
            <Feature>Basic nutrition tracking</Feature>
            <Feature>Local grocery price comparison</Feature>
            <Feature>Social sharing with friends</Feature>
          </FeaturesList>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </CTAButton>
        </PricingCard>
        
        <PricingCard
          popular
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <PopularBadge>Most Popular</PopularBadge>
          <PlanName>Premium</PlanName>
          <PlanPrice>
            <Price>$4.99</Price>
            <PriceDetail>/month</PriceDetail>
          </PlanPrice>
          <FeaturesList>
            <Feature>Unlimited recipe generation</Feature>
            <Feature>Advanced nutrition tracking</Feature>
            <Feature>Detailed price comparison</Feature>
            <Feature>Meal planning calendar</Feature>
            <Feature>Recipe customization</Feature>
            <Feature>Ad-free experience</Feature>
          </FeaturesList>
          <CTAButton
            primary
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial
          </CTAButton>
        </PricingCard>
        
        <PricingCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <PlanName>Family</PlanName>
          <PlanPrice>
            <Price>$9.99</Price>
            <PriceDetail>/month</PriceDetail>
          </PlanPrice>
          <FeaturesList>
            <Feature>Everything in Premium</Feature>
            <Feature>Up to 5 user profiles</Feature>
            <Feature>Family meal planning</Feature>
            <Feature>Shared grocery lists</Feature>
            <Feature>Family nutrition dashboard</Feature>
            <Feature>Priority customer support</Feature>
          </FeaturesList>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial
          </CTAButton>
        </PricingCard>
      </PricingContainer>
    </Section>
  );
};

export default Pricing;