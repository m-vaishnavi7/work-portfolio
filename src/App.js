// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import styled from 'styled-components';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}


export default App;
