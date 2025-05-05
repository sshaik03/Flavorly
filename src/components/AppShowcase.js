import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import screenshots (you'll need to add these files to your assets folder)
import discoveryScreenshot from '../assets/screenshots/discovery.png';
import leaderboardsScreenshot from '../assets/screenshots/leaderboards.png';
import recipeScreenshot from '../assets/screenshots/recipe.png';
import shoppingListScreenshot from '../assets/screenshots/shopping-list.png';
import addItemsScreenshot from '../assets/screenshots/add-items.png';

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

const ScreenshotsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 1.5rem;
  padding: 1rem 0;
  justify-content: center;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #FF6B6B;
    border-radius: 10px;
  }
`;

const ScreenshotCard = styled(motion.div)`
  flex: 0 0 auto;
  width: 280px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: relative;
`;

const Screenshot = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ScreenshotLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 107, 107, 0.9);
  color: white;
  padding: 0.5rem;
  font-weight: 600;
`;

const AppShowcase = () => {
  const screenshots = [
    {
      image: discoveryScreenshot,
      label: "Social Feed",
      alt: "Flavorly social discovery feed showing user posts"
    },
    {
      image: leaderboardsScreenshot,
      label: "Leaderboards",
      alt: "Flavorly leaderboards showing top users"
    },
    {
      image: recipeScreenshot,
      label: "Recipe Generation",
      alt: "Flavorly recipe generation screen"
    },
    {
      image: shoppingListScreenshot,
      label: "Shopping List",
      alt: "Flavorly shopping list with price comparison"
    },
    {
      image: addItemsScreenshot,
      label: "Add Ingredients",
      alt: "Flavorly add ingredients by taking a photo"
    }
  ];

  return (
    <Section id="app-showcase">
      <SectionTitle>See Flavorly in Action</SectionTitle>
      <SectionSubtitle>
        Get a sneak peek at the app that's going to transform your cooking experience
      </SectionSubtitle>
      <ScreenshotsContainer>
        {screenshots.map((screenshot, index) => (
          <ScreenshotCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Screenshot src={screenshot.image} alt={screenshot.alt} />
            <ScreenshotLabel>{screenshot.label}</ScreenshotLabel>
          </ScreenshotCard>
        ))}
      </ScreenshotsContainer>
    </Section>
  );
};

export default AppShowcase;