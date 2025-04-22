// src/pages/About.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger fade-in animation for skills after a short delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section id="about">
      <Container>
        <LeftColumn>
          <ProfileImage src="/image.png" alt="Vaishnavi Madhavaram" />
          <ProfileInfo>
            <Name>Vaishnavi Madhavaram</Name>
            <Role>Software Engineer | Master's Student</Role>
            <Location>New Brunswick, NJ</Location>
          </ProfileInfo>
        </LeftColumn>

        <RightColumn>
          <AboutText>
            <Heading>About Me</Heading>
            <Paragraph>
              I am currently pursuing my Master's in Computer Science at Rutgers University.
              With a Bachelor's from MGIT, Hyderabad, I have built a strong foundation in
              developing scalable applications and problem solving. I specialize in using
              Java, Python, React, and AI/ML technologies to create innovative solutions.
            </Paragraph>
          </AboutText>

          <SkillsList isVisible={isVisible}>
            <Heading>Technical SKills</Heading>
            <li><strong>Programming Languages:</strong> Java, Python, C++, JavaScript</li>
            <li><strong>Web Development:</strong> React, Spring Framework, Bootstrap</li>
            <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
            <li><strong>DevOps:</strong> Docker, Kubernetes, Jenkins</li>
            <li><strong>Machine Learning:</strong> Pandas, NumPy, Sci-Kit Learn</li>
          </SkillsList>
        </RightColumn>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  font-family: "Jura", sans-serif;
  padding: 4rem 2rem;
  background-color: #f4f4f4;
`;

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  align-items: flex-start;
`;

const LeftColumn = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightColumn = styled.div`
  width: 60%;
  padding-left: 2rem;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
`;

const ProfileInfo = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Name = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

const Role = styled.h3`
  font-size: 1.2rem;
  color: #555;
`;

const Location = styled.p`
  font-size: 1rem;
  color: #777;
`;

const AboutText = styled.div`
  margin-bottom: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-top: 1rem;
`;

// Skills List with animation
const SkillsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  font-size: 1.2rem;
  color: #555;
  margin-top: 70px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (props.isVisible ? 'none' : 'translateY(20px)')};
  transition: opacity 1s ease, transform 1s ease;

  li {
    margin: 10px 0;
  }
`;

export default About;
