import React from 'react';
import styled from 'styled-components';
import { FaCode, FaPaintBrush, FaMobile } from 'react-icons/fa';
import { SectionContainer, SectionWrapper, SectionTitle } from '../common/Section';

const AboutContainer = styled.div`
  background: #000;
  padding: 100px 0;
`;

const AboutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 0 50px;
`;

const AboutRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const AboutH1 = styled.h1`
  font-size: 48px;
  color: #ff0000;
  text-align: center;
  margin-bottom: 30px;
`;

const ServiceCard = styled.div`
  background: #1a1a1a;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.2);
  }
`;

const ServiceIcon = styled.div`
  font-size: 40px;
  color: #ff0000;
  margin-bottom: 20px;
`;

const ServiceH2 = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  color: #fff;
`;

const ServiceP = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 1.5;
`;

function About() {
  return (
    <SectionContainer dark id="about">
      <SectionWrapper>
        <SectionTitle>Services</SectionTitle>
        <AboutRow>
          <ServiceCard>
            <ServiceIcon>
              <FaCode />
            </ServiceIcon>
            <ServiceH2>Web Development</ServiceH2>
            <ServiceP>
              Custom web applications built with modern technologies like React, Angular, and Node.js. 
              Focus on responsive design and performance optimization.
            </ServiceP>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>
              <FaPaintBrush />
            </ServiceIcon>
            <ServiceH2>UI/UX Design</ServiceH2>
            <ServiceP>
              Creating intuitive and visually appealing user interfaces. 
              Emphasis on user experience and modern design principles.
            </ServiceP>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>
              <FaMobile />
            </ServiceIcon>
            <ServiceH2>Mobile Development</ServiceH2>
            <ServiceP>
              Cross-platform mobile applications that provide native experience. 
              Built using React Native and other modern frameworks.
            </ServiceP>
          </ServiceCard>
        </AboutRow>
      </SectionWrapper>
    </SectionContainer>
  );
}

export default About;