import styled from 'styled-components';
import { spacing } from '../../styles/variables';

export const SectionContainer = styled.div`
  padding: ${spacing.sectionPadding};
  background: ${props => props.dark ? '#000000' : '#1a1a1a'};
`;

export const SectionWrapper = styled.div`
  max-width: ${spacing.containerWidth};
  margin: 0 auto;
  padding: ${spacing.containerPadding};
`;

export const SectionTitle = styled.h2`
  font-size: 48px;
  color: #ff0000;
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #ff0000;
  }
`;