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

export default function Techs() {
  return (
    <StyledTechsContainer>
      <StyledTech src={nest} />
      <StyledTech src={react} />
      <StyledTech src={express} />
      <StyledTech src={aws} />
      <StyledTech src={typescript} />
      <StyledTech src={javascript} />
      <StyledTech style={{ width: "1.8rem" }} src={node} />
      <StyledTech src={css} />
      <StyledTech src={html} />
      <StyledTech src={redux} />
      <StyledTech src={rxjs} />
      <StyledTech style={{ width: "2.4rem" }} src={mongodb} />
      <StyledTech src={postgres} />
      <StyledTech src={mysql} />
      <StyledTech src={git} />
     
    </StyledTechsContainer>
  );
}

const StyledTechsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  /* height: 12rem; */
`;

const StyledTech = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  transition: 0.2s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;
