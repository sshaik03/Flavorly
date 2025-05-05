import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Remove or comment out the unused import
// import { heroImage } from '../assets/placeholder';

const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  background-color: #FF6B6B;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  margin-right: 1rem;
  
  &:hover {
    background-color: #ff5252;
  }
`;

const SecondaryButton = styled(motion.button)`
  background-color: transparent;
  color: #333;
  border: 2px solid #FF6B6B;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 107, 107, 0.1);
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

const HeroImg = styled(motion.img)`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  right: -5%;
  top: 10%;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(255, 107, 107, 0.05));
  border-radius: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BetaLaunchText = styled.div`
  font-weight: 600;
  color: #FF6B6B;
  font-size: 1.1rem;
  text-align: center;
  line-height: 1.4;
  max-width: 80%;
`;

const FloatingBadge = styled(motion.div)`
  position: absolute;
  background-color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  font-weight: 600;
  z-index: 3;
  
  &:nth-of-type(1) {
    top: 15%;
    right: 5%;
  }
  
  &:nth-of-type(2) {
    bottom: 15%;
    right: 15%;
  }
  
  span {
    margin-left: 0.5rem;
  }
`;

const HeroHighlight = styled.span`
  color: #FF6B6B;
  font-weight: 700;
`;

const FeatureBadges = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Badge = styled.div`
  background-color: rgba(255, 107, 107, 0.1);
  color: #FF6B6B;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  
  svg, i {
    margin-right: 0.5rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Cook, Share, <HeroHighlight>Compete</HeroHighlight> with Flavorly
        </HeroTitle>
        <FeatureBadges>
          <Badge><i className="fas fa-fire"></i> Daily Streaks</Badge>
          <Badge><i className="fas fa-trophy"></i> Leaderboards</Badge>
          <Badge><i className="fas fa-star"></i> Earn Points</Badge>
        </FeatureBadges>
        <HeroSubtitle>
          Turn cooking into a social adventure! Create delicious meals from what you have, 
          share your culinary masterpieces, maintain daily streaks, and climb the leaderboards 
          among friends and worldwide. It's not just meal planning—it's a cooking revolution.
        </HeroSubtitle>
        <div>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('waitlist').scrollIntoView()}
          >
            Join Waitlist
          </CTAButton>
          <SecondaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('features').scrollIntoView()}
          >
            Learn More
          </SecondaryButton>
        </div>
      </HeroContent>
      <HeroImageContainer>
        <BackgroundDecoration>
          <BetaLaunchText>Beta Launch Coming Summer 2025</BetaLaunchText>
        </BackgroundDecoration>
        <HeroImg 
        //   src={heroImage} 
        //   alt="Flavorly App Preview"
        //   initial={{ opacity: 0, scale: 0.9 }}
        //   animate={{ opacity: 1, scale: 1 }}
        //   transition={{ duration: 0.5, delay: 0.2 }}
        />
        <FloatingBadge
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <i className="fas fa-utensils" style={{ color: "#FF6B6B" }}></i>
          <span>Endless Recipe Inspiration</span>
        </FloatingBadge>
        <FloatingBadge
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <i className="fas fa-users" style={{ color: "#FF6B6B" }}></i>
          <span>Join Our Foodie Community</span>
        </FloatingBadge>
      </HeroImageContainer>
    </HeroSection>
  );
};

export default Hero;