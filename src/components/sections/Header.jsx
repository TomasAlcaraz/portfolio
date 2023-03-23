import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import StyledButtonResume from "../../styles/button";
import Transition from "../models/Transition";

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>Hola, mi nombre es</StyledTitle>
      <StyledNameTitle>Tomás Alcaraz.</StyledNameTitle>
      <StyledCoreTitle style={{ color: theme.colors.darkGrey }}>
        full stack developer
      </StyledCoreTitle>

      <StyledAboutText>
        Soy un entusiasta de la tecnología y amante de las buenas prácticas, he
        desarrollado apps de punta a punta partiendo del modelado de base de
        datos hasta la estilización del frontend.
        <br />
        <br />
        Estoy en búsqueda de un sitio donde explotar al máximo mis capacidades.
      </StyledAboutText>
      <div style={{ height: "3rem" }}>
        <Transition
          element={
            <StyledAboutButton>
              <a
                href="mailto:tomasalejandroalcaraz@gmail.com"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Get In Touch
              </a>
            </StyledAboutButton>
          }
        />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: ${theme.fonts.SFMono};
  flex-wrap: wrap;
  padding: 10rem 0rem;
  @media (max-width: 769px) {
    padding: 1rem 0rem;
    font-size: ${theme.fontSizes.smish};
  }
`;

const StyledTitle = styled.h4`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: ${theme.colors.lightGreen};
  font-size: ${theme.fontSizes.smish};
`;

const StyledCoreTitle = styled.h2`
  position: relative;
  letter-spacing: -0.28rem;
  margin: 0;
  width: 100%;
  font-family: ${theme.fonts.Calibre};
  font-size: ${theme.fontSizes.xxl5};
  @media (max-width: 769px) {
    font-size: ${theme.fontSizes.xxl4};
  }
`;

const StyledNameTitle = styled(StyledCoreTitle)`
  font-size: ${theme.fontSizes.xxl6};
  @media (max-width: 769px) {
    font-size: ${theme.fontSizes.xxl4};
    margin-bottom: 0.3rem;
  }
  &::before {
    position: absolute;
    background: linear-gradient(90deg, #007cf0, #00dfd8);
    content: "Tomás Alcaraz.";
    inset: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  margin-bottom: 1rem;
`;

const StyledAboutText = styled.p`
  width: 100%;
  padding-right: 20vw;
  @media (max-width: 769px) {
    padding-right: 0;
    margin: 1rem 0.5rem;
    font-size: ${theme.fontSizes.lg};
  }
  /* padding-left: 10rem; */
  display: flex;
  flex-wrap: wrap;
  color: ${theme.colors.darkGrey};
  font-family: ${theme.fonts.Calibre};
  font-size: ${theme.fontSizes.xl};
  margin: 3rem 0rem;
`;

const StyledAboutButton = styled(StyledButtonResume)`
  display: flex;
  justify-content: center;
  padding: 1.2rem 2.2rem;
  a {
    color: ${theme.colors.lightGreen};
  }
  @media (max-width: 769px) {
    margin-top: 1rem;
  }
`;
