// src/pages/Experience.js
import React from 'react';
import styled from 'styled-components';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'LTIMindtree',
      location: 'Hyderabad, India',
      date: 'Aug 2021 - Dec 2023',
      description:
        'Led a team in migrating 30+ batch jobs to Java 1.6 to 11, improving data processing efficiency by 20%. Implemented containerized applications using Docker and Kubernetes.',
    },
    {
      title: 'AI Developer Intern',
      company: 'The Smart Bridge',
      location: 'Hyderabad, India',
      date: 'Mar 2020 - Apr 2020',
      description:
        'Spearheaded an AI-powered news search web application, boosting news retrieval speed by 40%.',
    },
  ];

  return (
    <Section id="experience">
      <Title>Work Experience</Title>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineDot />
            <TimelineContent>
              <JobTitle>{exp.title}</JobTitle>
              <Company>{exp.company}</Company>
              <Location>{exp.location}</Location>
              <Date>{exp.date}</Date>
              <Description>{exp.description}</Description>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

const Section = styled.div`
  font-family: "Jura", sans-serif;
  padding: 4rem 2rem;
  background-color:rgb(231, 231, 231);
`;

const Title = styled.h2`
  padding-top: 50px;
  font-family: "Jura", sans-serif;
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color:rgb(38, 58, 80);
  position: absolute;
  left: -10px;
  top: 0;
`;

const TimelineContent = styled.div`
  font-family: "Jura", sans-serif;
  padding-left: 40px;
  border-left: 3px solid rgb(38, 58, 80);
`;

const JobTitle = styled.h3`
  font-family: "Jura", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

const Company = styled.h4`
  font-family: "Jura", sans-serif;
  font-size: 1.2rem;
  color: #555;
`;

const Location = styled.p`
  font-family: "Jura", sans-serif;
  font-size: 1rem;
  color: #777;
`;

const Date = styled.p`
  font-family: "Jura", sans-serif;
  font-size: 1rem;
  color: #999;
`;

const Description = styled.p`
  font-family: "Jura", sans-serif;
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
`;

export default Experience;
