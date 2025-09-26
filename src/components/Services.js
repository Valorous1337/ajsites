import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesStyled = styled.section`
  padding: 5rem 0;
  background: #1f2937;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const ServicesTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #10b981, #3b82f6, #059669, #2563eb);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientBreathe 8s ease infinite;
  @keyframes gradientBreathe {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: #374151;
  padding: 1.5rem;
  border-radius: 0.5rem;
  transition: background 0.3s ease;
  &:hover {
    background: #4b5563;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ServiceText = styled.p`
  color: #d1d5db;
`;

const Services = () => {
  const services = [
    {
      title: 'AI-Powered Web Design',
      description: 'Bespoke, responsive websites for Somerset businesses, crafted with AI to deliver stunning designs in days, slashing costs without compromising quality.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'SEO for Organic Growth',
      description: 'Boost your Google rankings with our SEO expertise starting at £149. Comprehensive audits and strategies to drive local Somerset leads organically.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Website Redesigns',
      description: 'Scalable, secure online websites. AI-driven builds ensure fast delivery for Somerset businesses, time to give your business a refreshed new look?',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <ServicesStyled id="services">
      <Container>
        <ServicesTitle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          Our Services
        </ServicesTitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <ServiceImage src={service.image} alt={service.title} />
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceText>{service.description}</ServiceText>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesStyled>
  );
};

export default Services;