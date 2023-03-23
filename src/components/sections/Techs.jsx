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
import java from "../../assets/java.svg";
import git from "../../assets/git-icon.png";


export default function Techs() {
  return (
    <StyledTechsContainer>
      <StyledTech src={react} />
      <StyledTech src={typescript} />
      <StyledTech src={javascript} />
      <StyledTech src={css} />
      <StyledTech src={html} />
      <StyledTech src={java} />
      <StyledTech style={{ width: "1.8rem" }} src={node} />
      <StyledTech src={redux} />
      <StyledTech src={rxjs} />
      <StyledTech style={{ width: "2.4rem"}} src={mongodb} />
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
`;

const StyledTech = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
`;
