// src/components/NavBar.js
import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <NavContainer>
      <Logo>Vaishnavi Madhavaram</Logo>
      <NavLinks>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </NavLinks>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  background: url('background.jpg') no-repeat center center/cover; /* Set background image */
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-family: "Ephesis", cursive;
  font-size: 1.8rem;
  color:rgb(177, 170, 170);;
`;


const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  a {
    color:rgb(177, 170, 170);
    text-decoration: none;
    font-weight: bold;
    font-family: "Jura", sans-serif;
    transition: color 0.3s;
    font-size: 1rem;
    &:hover {
      color:#fff;
      font-size: 1.05rem;
    }
  }
`;

export default NavBar;
