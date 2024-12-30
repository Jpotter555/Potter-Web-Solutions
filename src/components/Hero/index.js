import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaAngular, FaNode, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiMongodb } from 'react-icons/si';

const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-20px) }
  100% { transform: translateY(0px) }
`;

const HeroContainer = styled.div`
  background: #000;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
  padding: 0 20px;
`;

const FloatingIcon = styled.div`
  position: absolute;
  opacity: 0.7;
  z-index: 1;
  animation: ${float} ${props => props.duration || '3'}s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0'}s;
  font-size: ${props => props.size || '40'}px;
  left: ${props => props.left}%;
  top: ${props => props.top}%;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
    transition: all 0.3s ease;
  }

  // Original colors for each icon
  &.react { color: #61DAFB; }
  &.angular { color: #DD0031; }
  &.node { color: #68A063; }
  &.html5 { color: #E34F26; }
  &.css3 { color: #1572B6; }
  &.javascript { color: #F7DF1E; }
  &.typescript { color: #3178C6; }
  &.redux { color: #764ABC; }
  &.mongodb { color: #47A248; }
`;

const HeroH1 = styled.h1`
  font-size: 48px;
  color: #fff;
  margin-bottom: 24px;
  text-transform: uppercase;
`;

const HeroP = styled.p`
  color: #fff;
  font-size: 24px;
  max-width: 600px;
  margin-bottom: 40px;
`;

const HeroButton = styled.button`
  padding: 12px 30px;
  background: #ff0000;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #cc0000;
    transform: translateY(-2px);
  }
`;
function Hero() {
  const icons = [
    { Icon: FaReact, left: 15, top: 20, size: 60, duration: 4, delay: 0, className: 'react' },
    { Icon: FaAngular, left: 85, top: 30, size: 50, duration: 3, delay: 1, className: 'angular' },
    { Icon: FaNode, left: 25, top: 70, size: 45, duration: 3.5, delay: 0.5, className: 'node' },
    { Icon: FaHtml5, left: 80, top: 65, size: 40, duration: 4, delay: 1.5, className: 'html5' },
    { Icon: FaCss3Alt, left: 10, top: 40, size: 35, duration: 3, delay: 2, className: 'css3' },
    { Icon: FaJs, left: 90, top: 15, size: 55, duration: 3.5, delay: 0.7, className: 'javascript' },
    { Icon: SiTypescript, left: 5, top: 80, size: 40, duration: 4, delay: 1.2, className: 'typescript' },
    { Icon: SiRedux, left: 75, top: 85, size: 45, duration: 3, delay: 1.8, className: 'redux' },
    { Icon: SiMongodb, left: 20, top: 90, size: 50, duration: 3.5, delay: 0.3, className: 'mongodb' }
  ];

  return (
    <HeroContainer>
      {icons.map((item, index) => (
        <FloatingIcon
          key={index}
          left={item.left}
          top={item.top}
          size={item.size}
          duration={item.duration}
          delay={item.delay}
          className={item.className}
        >
          <item.Icon />
        </FloatingIcon>
      ))}
      <HeroContent>
        <HeroH1>JP Web Designs</HeroH1>
        <HeroP>Transforming ideas into elegant web solutions</HeroP>
        <HeroButton onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
          Get Started
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;