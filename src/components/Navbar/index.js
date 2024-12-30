import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { scrollTo } from '../../utils/scrollTo';

const Nav = styled.nav`
  background: #ffffff;  // White background
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);  // Subtle shadow for depth
`;

const Logo = styled.a`
  color: #000000;  // Keep the red color for the logo
  font-size: 2rem;
  font-weight: bold;
  padding-left: 1rem;
  text-decoration: none;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 80px;
    left: 0;
    background: #ffffff;  // White background for dropdown
    padding: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.a`
  color: #000000;  // Black text for better contrast on white
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #ff0000;  // Red on hover
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: #000000;  // Black color for the menu icon

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <Nav>
      <Logo href="/" onClick={(e) => handleNavClick(e, 'hero')}>JP</Logo>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavMenu $isOpen={isOpen}>
        <NavItem href="#about" onClick={(e) => handleNavClick(e, 'about')}>
          About
        </NavItem>
        <NavItem href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
          Projects
        </NavItem>
        <NavItem href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
          Contact
        </NavItem>
      </NavMenu>
    </Nav>
  );
}

export default Navbar;