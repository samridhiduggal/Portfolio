import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import styled, {ThemeProvider} from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Hero from "./components/HeroSection";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import {BrowserRouter as Router} from "react-router-dom";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />

          <Education />
          <Skills />
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
          
            <Experience />
            <Contact />
            <Footer />
         
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
