import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import screenshots
// Add this import with the other screenshot imports
import discoveryScreenshot from '../assets/screenshots/discovery.png';
import leaderboardsScreenshot from '../assets/screenshots/leaderboards.png';
import recipeScreenshot from '../assets/screenshots/recipe.png';
import shoppingListScreenshot from '../assets/screenshots/shopping-list.png';
import addItemsScreenshot from '../assets/screenshots/add-items.png';
import postCreationScreenshot from '../assets/screenshots/post-creation.png';

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #ffffff;
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

const FeatureBlock = styled.div`
  margin-bottom: 6rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const FeatureRow = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
    text-align: center;
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
    }
  }
`;

const FeatureContent = styled.div`
  flex: 1;
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #FF6B6B;
`;

const FeatureImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const FeatureImage = styled(motion.img)`
  max-width: 280px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const Features = () => {
  const mainFeatures = [
    {
      icon: "🍽️",
      title: "AI-Powered Recipe Magic",
      description: "Snap a photo of your ingredients and watch as Flavorly creates personalized, mouthwatering recipes tailored just for you. Our AI analyzes what you have and suggests creative ways to combine them into delicious meals.",
      image: recipeScreenshot,
      alt: "Recipe generation screen showing a Middle-Eastern dish"
    },
    {
      icon: "🏆",
      title: "Cooking Challenges & Social Feed",
      description: "Share your culinary masterpieces with friends, compete for the top spot on leaderboards, and maintain your cooking streak. Earn points, unlock badges, and get inspired by what others are cooking.",
      image: discoveryScreenshot,
      alt: "Social feed showing user posts of their meals"
    },
    {
      icon: "📱",
      title: "Share Your Culinary Creations",
      description: "Snap a photo of your finished dish, rate your own creation, and share it with the Flavorly community. Get feedback, likes, and comments from fellow food enthusiasts as you build your cooking portfolio.",
      image: postCreationScreenshot,
      alt: "Post creation screen for sharing recipes"
    },
    {
      icon: "🛒",
      title: "Smart Grocery Shopping",
      description: "Never overpay again! For ingredients you don't have, Flavorly compares real-time prices at local stores and builds a smart shopping list to help you find the best deals.",
      image: shoppingListScreenshot,
      alt: "Shopping list with price comparison across stores"
    },
    {
      icon: "📸",
      title: "Pantry Photo Recognition",
      description: "Simply take a photo of your pantry or fridge, and our advanced image recognition identifies your ingredients automatically. No more manual entry of every item you have.",
      image: addItemsScreenshot,
      alt: "Add ingredients screen with photo recognition"
    }
  ];

  const additionalFeatures = [
    {
      icon: "👨‍🍳",
      title: "For Every Skill Level",
      description: "Never cooked before? Or a seasoned chef? Flavorly adjusts recipe complexity to match your experience, helping you grow your skills at your own pace."
    },
    {
      icon: "⏱️",
      title: "Meals in Minutes",
      description: "Short on time? Find perfect recipes that match your available cooking time, from quick 15-minute meals to weekend feasts."
    },
    {
      icon: "📊",
      title: "Effortless Nutrition",
      description: "Track your calories and macros without the hassle. Flavorly makes healthy eating simple and stress-free."
    },
    {
      icon: "🌍",
      title: "Global Flavor Explorer",
      description: "Embark on a culinary journey with recipes from every corner of the world, expanding your palate one dish at a time."
    },
    {
      icon: "🏅",
      title: "Competitive Leaderboards",
      description: "Climb the ranks on our global and friends leaderboards. Maintain your streak, earn points for each meal, and show off your cooking prowess.",
      image: leaderboardsScreenshot,
      alt: "Leaderboards showing top users"
    }
  ];

  return (
    <FeaturesSection id="features">
      <SectionTitle>Unlock Your Culinary Potential</SectionTitle>
      <SectionSubtitle>
        Flavorly transforms everyday cooking into an exciting adventure with these game-changing features.
        Whether you're a complete beginner or a seasoned chef, our recipes adapt to your skill level!
      </SectionSubtitle>
      
      <FeatureBlock>
        {mainFeatures.map((feature, index) => (
          <FeatureRow key={index} reverse={index % 2 === 1}>
            <FeatureContent>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureContent>
            <FeatureImageContainer>
              <FeatureImage 
                src={feature.image} 
                alt={feature.alt}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </FeatureImageContainer>
          </FeatureRow>
        ))}
      </FeatureBlock>
      
      <SectionTitle>More Amazing Features</SectionTitle>
      <FeatureGrid>
        {additionalFeatures.map((feature, index) => (
          <FeatureCard 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
            {feature.image && (
              <FeatureImage 
                src={feature.image} 
                alt={feature.alt}
                style={{ maxWidth: '100%', marginTop: '1rem' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            )}
          </FeatureCard>
        ))}
      </FeatureGrid>
    </FeaturesSection>
  );
};

export default Features;