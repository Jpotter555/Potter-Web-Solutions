import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaAngular, FaNode, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiMongodb } from 'react-icons/si';

const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-20px) }
  100% { transform: translateY(0px) }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
`;

const FloatingIcon = styled.div`
  position: absolute;
  opacity: 0.1;
  z-index: 0;
  animation: ${float} ${props => props.duration || '3'}s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0'}s;
  font-size: ${props => props.size || '40'}px;
  left: ${props => props.left}%;
  top: ${props => props.top}%;

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

function BackgroundIcons() {
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
    <BackgroundContainer>
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
    </BackgroundContainer>
  );
}

export default BackgroundIcons;