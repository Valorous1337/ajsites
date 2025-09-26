import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GrowthStyled = styled.section`
  padding: 5rem 0;
  background: #1f2937;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

const GrowthTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #10b981, #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const Testimonial = styled(motion.blockquote)`
  background: #374151;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-left: 4px solid #10b981;
`;

const TestimonialText = styled.p`
  color: #d1d5db;
  font-style: italic;
`;

const TestimonialAuthor = styled.cite`
  display: block;
  text-align: right;
  font-weight: 600;
  margin-top: 1rem;
`;

const GrowthButton = styled(motion.a)`
  display: inline-block;
  background: #10b981;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;
  &:hover {
    background: #059669;
  }
`;

const Growth = () => {
  const testimonials = [
    { text: 'AJSites transformed our online presence with a sleek, AI-optimized site that ranks high on Google.', author: 'Jane, Taunton Retail' },
    { text: 'Their AI tools cut our web development costs in half while boosting leads.', author: 'Mark, Somerset Crafts' },
    { text: 'Fast, professional, and tailored for small businesses like ours.', author: 'Sarah, Bridgwater Services' },
  ];

  return (
    <GrowthStyled id="growth">
      <Container>
        <GrowthTitle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          Grow with Confidence
        </GrowthTitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
            </Testimonial>
          ))}
        </TestimonialsGrid>
        <GrowthButton
          href="#contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          Start Growing
        </GrowthButton>
      </Container>
    </GrowthStyled>
  );
};

export default Growth;