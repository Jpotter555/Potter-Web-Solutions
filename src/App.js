import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundIcons from './components/BackgroundIcons';

const AppContainer = styled.div`
  padding-top: 80px; // Same as navbar height
`;

function App() {
  return (
    <>
      
      <Navbar/>
      <AppContainer>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      </AppContainer>
    </>
  );
}

export default App;