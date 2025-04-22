// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin, AiFillFileText } from "react-icons/ai"; // Add AiFillFilePdf for resume

const Home = () => {
  const words = [
    "Software Engineer",
    "Full-Stack Developer",
    "AI Enthusiast",
    "ML Developer",
    "Problem Solver"
  ]; // Words from your resume that will change

  const [dynamicWord, setDynamicWord] = useState(words[0]); // Initial word
  const [letterIndex, setLetterIndex] = useState(0); // Index to control which letter to show

  // Function to change the dynamic word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLetterIndex(0); // Reset letter index when switching words
      setDynamicWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [words]);

  // Function to animate letter by letter
  useEffect(() => {
    const interval = setInterval(() => {
      if (letterIndex < dynamicWord.length) {
        setLetterIndex(letterIndex + 1);
      }
    }, 150); // Show each letter every 150ms

    return () => clearInterval(interval); // Cleanup interval
  }, [letterIndex, dynamicWord]);
  return (
    <Section id="home">
      <ContentContainer>
        <TextContainer>
          <Subtitle>Hello, I'm</Subtitle>
          <Title>Vaishnavi Madhavaram</Title>
          <Subtitle>A Passionate <DynamicWord>{dynamicWord.slice(0, letterIndex)}</DynamicWord></Subtitle>
        </TextContainer>
        <IconContainer>
          <SocialLink href="https://www.linkedin.com/in/vaishnavi-madhavaram" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin style={{ fontSize: "3rem", marginRight: "20px" }} />
            <Tooltip>LinkedIn</Tooltip> {/* Tooltip for LinkedIn */}
          </SocialLink>
          <SocialLink href="https://github.com/m-vaishnavi7" target="_blank" rel="noopener noreferrer">
            <AiFillGithub style={{ fontSize: "3rem", marginRight: "20px" }} />
            <Tooltip>GitHub</Tooltip> {/* Tooltip for GitHub */}
          </SocialLink>
          <SocialLink href="/path-to-your-resume.pdf" download target="_blank" rel="noopener noreferrer">
            <AiFillFileText style={{ fontSize: "3rem" }} />
            <Tooltip>Download Resume</Tooltip> {/* Tooltip for Resume */}
          </SocialLink>
        </IconContainer>
      </ContentContainer>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background: url('background.jpg') no-repeat center center/cover; /* Set background image */
  padding: 2rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-family: "Londrina Outline", sans-serif;
  font-size: 8rem;
  font-weight: bold;
  color: #ffffff;
`;

const Subtitle = styled.h3`
  font-family: "Jura", sans-serif;
  font-size: 2rem;
  color: #999;
`;

const DynamicWord = styled.span`
  color: #ffffff;
  font-weight: bold;
  animation: fadeIn 1s ease-in-out;
`;

const Intro = styled.p`
  font-family: "Jura", sans-serif;
  font-size: 1rem;
  color: #999;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center; /* Aligns the icons to the right */
  align-items: center;
  margin-top: 70px;
  width: 100%; /* Ensures the container takes full width */
`;

const SocialLink = styled.a`
  color: inherit; /* Inherit color of the icon */
  position: relative; /* To position the tooltip */
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffffff; /* Hover effect to change the icon color */
  }
  
  /* Make sure the tooltip appears when hovering */
  &:hover div {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.div`
  visibility: hidden; /* Hide tooltip by default */
  opacity: 0;
  position: absolute;
  top: -30px; /* Position above the icon */
  left: 50%;
  transform: translateX(-50%);
  background-color: #333; 
  color: white;
  padding: 5px 10px;
  font-size: 0.9rem;
  border-radius: 5px;
  transition: opacity 0.3s ease;
  white-space: nowrap;
`;

export default Home;
