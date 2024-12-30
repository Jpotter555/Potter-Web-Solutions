import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SectionContainer, SectionWrapper, SectionTitle } from '../common/Section';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  padding: 40px 0;
  border-top: 2px solid #ff0000;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: all 0.3s ease;

  &:hover {
    color: #ff0000;
    transform: translateY(-2px);
  }
`;

const FooterText = styled.p`
  color: #fff;
  text-align: center;
  font-size: 14px;
`;

const FooterNav = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #ff0000;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialIcons>
          <SocialIconLink href="https://github.com" target="_blank">
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </SocialIconLink>
          <SocialIconLink href="https://twitter.com" target="_blank">
            <FaTwitter />
          </SocialIconLink>
        </SocialIcons>
        <FooterNav>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterNav>
        <FooterText>
          © {new Date().getFullYear()} JP Web Designs. All rights reserved.
        </FooterText>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;