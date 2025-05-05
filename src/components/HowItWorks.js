import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const StepsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const StepNumber = styled(motion.div)`
  background-color: #FF6B6B;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 2rem;
  flex-shrink: 0;
  
  ${Step}:nth-child(even) & {
    margin-right: 0;
    margin-left: 2rem;
    
    @media (max-width: 768px) {
      margin: 0 auto 1rem;
    }
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 1rem;
  }
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const HowItWorks = () => {
  const steps = [
    {
      title: "Snap a Photo of Your Ingredients",
      description: "Take a photo of the ingredients you already have in your pantry or fridge. Flavorly will recognize them automatically."
    },
    {
      title: "Answer a Few Quick Questions",
      description: "Tell us what type of meal you want, your cuisine preferences, cooking time available, and any dietary restrictions."
    },
    {
      title: "Get Personalized Recipe Suggestions",
      description: "Receive custom recipe suggestions based on your ingredients and preferences, complete with nutrition information."
    },
    {
      title: "See Prices for Missing Ingredients",
      description: "For any ingredients you don't have, Flavorly shows you real-time prices at nearby grocery stores."
    },
    {
      title: "Cook and Share Your Creation",
      description: "Follow the recipe, cook your meal, and share a photo with friends to earn points and maintain your cooking streak."
    }
  ];

  return (
    <Section id="how-it-works">
      <SectionTitle>How Flavorly Works</SectionTitle>
      <SectionSubtitle>
        From ingredients to finished meal in just a few simple steps
      </SectionSubtitle>
      <StepsContainer>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepNumber
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {index + 1}
            </StepNumber>
            <StepContent>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
          </Step>
        ))}
      </StepsContainer>
    </Section>
  );
};

export default HowItWorks;