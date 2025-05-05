import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: #FF6B6B;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
  margin-right: 1rem;
  overflow: hidden;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserDetails = styled.div``;

const UserName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #333;
`;

const UserRole = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

const Testimonials = () => {
  const testimonials = [
    {
      text: "Flavorly has completely changed how I cook. I used to waste so much food, but now I can use what I have and get creative recipe ideas!",
      name: "Sarah Johnson",
      role: "Graduate Student",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      text: "The price comparison feature has saved me so much money on groceries. I love being able to see where the best deals are without checking multiple stores.",
      name: "Michael Chen",
      role: "Young Professional",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      text: "As someone who's trying to eat healthier, the nutrition tracking in Flavorly has been a game-changer. I can make informed choices without obsessing over calories.",
      name: "Jessica Williams",
      role: "Fitness Enthusiast",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <Section id="testimonials">
      <SectionTitle>What Our Users Say</SectionTitle>
      <SectionSubtitle>
        Join thousands of satisfied users who have transformed their cooking and eating habits with Flavorly
      </SectionSubtitle>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <QuoteIcon>"</QuoteIcon>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <UserInfo>
              <UserAvatar>
                <UserImage src={testimonial.avatar} alt={testimonial.name} />
              </UserAvatar>
              <UserDetails>
                <UserName>{testimonial.name}</UserName>
                <UserRole>{testimonial.role}</UserRole>
              </UserDetails>
            </UserInfo>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </Section>
  );
};

export default Testimonials;