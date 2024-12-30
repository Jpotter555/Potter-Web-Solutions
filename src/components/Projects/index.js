import React from 'react';
import styled from 'styled-components';
import { SectionContainer, SectionWrapper, SectionTitle } from '../common/Section';

const ProjectsContainer = styled.div`
  background: #1a1a1a;
  padding: 100px 0;
`;

const ProjectsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
`;

const ProjectsH1 = styled.h1`
  font-size: 48px;
  color: #ff0000;
  text-align: center;
  margin-bottom: 50px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const ProjectCard = styled.div`
  background: #000;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: #333;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ProjectInfo = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  color: #fff;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProjectDesc = styled.p`
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
`;

const ProjectTech = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  background: #ff0000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
`;

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations and responsive design',
      tech: ['React', 'Styled Components'],
      image: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      tech: ['Angular', 'Firebase'],
      image: '#'
    }
  ];

  return (
    <SectionContainer dark id="projects">
      <SectionWrapper>
        <SectionTitle>Projects</SectionTitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage style={{ backgroundImage: `url(${project.image})` }} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>{project.description}</ProjectDesc>
                <ProjectTech>
                  {project.tech.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </ProjectTech>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </SectionWrapper>
    </SectionContainer>
  );
}

export default Projects;