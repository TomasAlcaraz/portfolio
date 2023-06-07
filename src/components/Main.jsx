import React from "react";
import styled from "styled-components";
import About from "./sections/About";
import Formation from "./sections/Formation";
import Header from "./sections/Header";
import Nav from "./Nav";
import Project from "./sections/Project";
import Email from "./sections/Email";
import Footer from "./sections/Footer";
import Techs from "./sections/Techs";
import NetworkIconos from "./models/NetworkIcons";
import Experiencie from "./sections/Experiencie";

export default function Main() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <StyledMain>
        <Nav />
        <Header />
        <About />
        <Techs />
        <Experiencie />
        <Formation />
        <Project />
        <Email />
        <Footer />
      </StyledMain>
      <NetworkIconos />
    </div>
  );
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 60%;
  @media (max-width: 769px) {
    width: 80%;
  }
`;
