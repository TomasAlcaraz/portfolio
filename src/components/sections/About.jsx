import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import Title from "../models/Title";
import profile from "../../assets/profile.jpg";
import CenterContainer from "../models/CenterContainer";
import styles from "../../styles";

export default function About() {
  return (
    <StyledAbout id="about">
      <div>
        <Title text="About Me" number={1} />
        <p>
          Soy un joven apasionado por la tecnología, especialista en el desarrollo y mantenimiento de aplicaciones web, cuento con excepcionales dotes comunicativos que se reflejan en mi experiencia como líder técnico de proyectos.
          <br />
          <br />
          Tengo sólidos conocimientos en Nest, Express, Node, Next, React, TypeScript y JavaScript.
          <br />
          <br />
          Con una mente abierta, actitud positiva y una fuerte motivación por seguir formandome en este rubro.
        </p>
      </div>
      <CenterContainer
        element={
          <img
            src={profile}
            alt="Avatar"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
              borderRadius: "6px",
            }}
          />
        }
      ></CenterContainer>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 23%;
  font-family: ${theme.fonts.SFMono};
  p {
    font-family: ${theme.fonts.Calibre};
    font-size: ${theme.fontSizes.lg};
    @media (max-width: 769px) {
      font-size: ${theme.fontSizes.sm};
    }
  }
  img {
    width: 16rem;
    @media (max-width: 769px) {
      width: 12rem;
    }
  }
  color: ${theme.colors.darkGrey};
  font-size: ${theme.fontSizes.sm};
  /* content: '▹'; */
  @media (max-width: 769px) {
    gap: 2rem;
    flex-wrap: wrap;
    padding-top: 15%;
  }
`;
