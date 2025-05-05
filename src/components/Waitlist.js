import React, { useState } from 'react';
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
  margin-bottom: 1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const HighlightText = styled.p`
  font-size: 1.3rem;
  color: #FF6B6B;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #FF6B6B;
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: #FF6B6B;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #ff5252;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const SuccessMessage = styled(motion.div)`
  background-color: rgba(46, 204, 113, 0.1);
  border: 1px solid #2ecc71;
  color: #2ecc71;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Create the waitlist entry
    const waitlistEntry = {
      name,
      email,
      timestamp: new Date().toISOString()
    };
    
    try {
      // First try to submit to the server if we're in development
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        const response = await fetch('http://localhost:3001/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(waitlistEntry),
        });
        
        if (!response.ok) {
          throw new Error('Server error. Please try again later.');
        }
      } else {
        // For production/GitHub Pages, use a serverless function or store locally
        // Option 1: Store in localStorage as a temporary solution
        const waitlistEntries = JSON.parse(localStorage.getItem('waitlistEntries')) || [];
        waitlistEntries.push(waitlistEntry);
        localStorage.setItem('waitlistEntries', JSON.stringify(waitlistEntries));
        
        // Option 2: Use a form submission service (uncomment and configure as needed)
        // const formData = new FormData();
        // formData.append('name', name);
        // formData.append('email', email);
        // await fetch('https://formspree.io/f/your-form-id', {
        //   method: 'POST',
        //   body: formData,
        //   headers: {
        //     'Accept': 'application/json'
        //   }
        // });
      }
      
      // Set success state
      setSubmitted(true);
      setName('');
      setEmail('');
    } catch (err) {
      console.error('Error:', err);
      
      // Fallback to localStorage if the server request fails
      try {
        const waitlistEntries = JSON.parse(localStorage.getItem('waitlistEntries')) || [];
        waitlistEntries.push(waitlistEntry);
        localStorage.setItem('waitlistEntries', JSON.stringify(waitlistEntries));
        setSubmitted(true);
        setName('');
        setEmail('');
      } catch (localStorageErr) {
        setError('Unable to submit. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Section id="waitlist">
      <SectionTitle>Join Our Waitlist</SectionTitle>
      <SectionSubtitle>
        Be among the first to experience Flavorly when we launch
      </SectionSubtitle>
      <HighlightText>
        First 100 users get 1 month of Premium for FREE!
      </HighlightText>
      
      <FormContainer>
        {!submitted ? (
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Name</Label>
              <Input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                required
                disabled={loading}
              />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </InputGroup>
            
            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <SubmitButton
              type="submit"
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: loading ? 1 : 0.95 }}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Join Waitlist'}
            </SubmitButton>
          </Form>
        ) : (
          <SuccessMessage
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Thanks for joining our waitlist! We'll notify you when Flavorly launches.
          </SuccessMessage>
        )}
      </FormContainer>
    </Section>
  );
};

export default Waitlist;