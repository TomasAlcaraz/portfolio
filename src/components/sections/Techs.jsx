import React from "react";
import styled from "styled-components";
import react from "../../assets/react.svg";
import javascript from "../../assets/js-icon.png";
import typescript from "../../assets/typescript-icon.png";
import redux from "../../assets/redux.svg";
import mongodb from "../../assets/mongodb-icon.png";
import node from "../../assets/nodejs-icon.png";
import html from "../../assets/html-icon.png";
import css from "../../assets/css-icon.png";
import rxjs from "../../assets/rxjs-icon.png";
import postgres from "../../assets/postgresql-icon.png";
import mysql from "../../assets/mysql-icon.png";
import nest from "../../assets/nestjs.svg";
import git from "../../assets/git-icon.png";
import express from "../../assets/express-js.png";
import aws from "../../assets/aws.png";
import theme from "@/styles/theme";

export default function Techs() {
  return (
    <StyledTechsContainer>
      <StyledBox>
        <StyledTech src={nest} />
        <h4>Nest.js</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech src={react} />
        <h4>React</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech src={typescript} />
        <h4>TS</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech src={javascript} />
        <h4>JS</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech src={express} />
        <h4>Express</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech src={aws} />
        <h4>AWS</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech style={{ width: "1.8rem" }} src={node} />
        <h4>node</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech src={css} />
        <h4>CSS</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech src={html} />
        <h4>HTML</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech src={css} />
        <h4>CSS</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech src={redux} />
        <h4>Redux</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech src={rxjs} />
        <h4>RxJS</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech src={postgres} />
        <h4>PostgreSQL</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech style={{ width: "2.4rem", height: "2rem" }} src={mongodb} />
        <h4>MongoDB</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech src={mysql} />
        <h4>MySQL</h4>
      </StyledBox>
      <StyledBox>
        <StyledTech src={git} alt="git" />
        <h4>Git</h4>
      </StyledBox>
    </StyledTechsContainer>
  );
}

const StyledTechsContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    font-family: ${theme.fonts.Calibre};
    color: ${theme.colors.darkGrey};
    font-size: ${theme.fontSizes.smish};
  }
`;

const StyledTech = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  transition: 0.2s ease;
  &:hover {
    transform: translateY(-10px);
    opacity: 0.5;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Ajusta el color y la opacidad del fondo según tus preferencias */
    opacity: 0;
    transition: opacity 0.3s ease; /* Agrega una transición suave para el efecto */
  }
  &:hover:before {
    opacity: 1;
  }
`;
