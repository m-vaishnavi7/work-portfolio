// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  const projects = [
    {
      title: 'AI Pathfinding – Bot and Aliens Maze',
      description:
        'Implemented A* algorithm in a 35x35 grid, achieving 85% success in rescuing crew members and avoiding aliens. Decreased average path calculation time by 50%.',
      link: '#',
    },
    {
      title: 'Gamer Churn Predictor',
      description:
        'Developed an LSTM model in Python to predict gamer churn with 98.6% accuracy using Riot API data. Applied T-tests, correlation, and EDA for data analysis.',
      link: '#',
    },
    {
      title: 'Railway Booking System',
      description:
        'Built an online railway booking system (MySQL, JSP, Java, JDBC) with role-based security, deployed on Tomcat for advanced reporting and real-time bookings.',
      link: '#',
    },
    {
      title: 'Abstractive Text Summarization',
      description:
        'Created a Flask web app using Seq2Seq and BLSTM Encoder and LSTM Decoder, achieving 85% accuracy and 15% improvement in ROUGE scores.',
      link: '#',
    },

    {
      title: 'Handwritten Text Identification',
      description:
        'Created a Flask web app using Seq2Seq and BLSTM Encoder and LSTM Decoder, achieving 85% accuracy and 15% improvement in ROUGE scores.',
      link: '#',
    },
    {
      title: 'Sentiment Analysis',
      description:
        'Implemented A* algorithm in a 35x35 grid, achieving 85% success in rescuing crew members and avoiding aliens. Decreased average path calculation time by 50%.',
      link: '#',
    },
    {
      title: 'NLP Project',
      description:
        '....',
      link: '#',
    },
    {
      title: 'Adv Data Mgmt',
      description:
        '....',
      link: '#',
    },
    {
      title: 'AI in VC',
      description:
        '....',
      link: '#',
    },
  ];

  return (
    <Section id="projects">
      <Title>My Projects</Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link}>View Project</ProjectLink>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Section>
  );
};

const Section = styled.div`
  padding: 4rem 2rem;
  background-color: #f4f4f4;
`;

const Title = styled.h2`
  padding-top: 50px;
  text-align: center;
  font-size: 2.5rem;
  font-family: "Jura", sans-serif;
  color: #333;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Jura", sans-serif;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  font-family: "Jura", sans-serif;
  color: #555;
  margin-top: 10px;
`;

const ProjectLink = styled.a`
  font-size: 1rem;
  font-family: "Jura", sans-serif;
  color: #007bff;
  text-decoration: none;
  margin-top: 15px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

export default Projects;
