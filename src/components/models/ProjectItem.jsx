import React from "react";
import styled from "styled-components";
// import IconGitHub from "../../icons/github";
import theme from "../../styles/theme";
import github from "../../assets/github.png";
import deploy from "../../assets/link-icon.png";
import { NavLink } from "react-router-dom";
import PopUp from "./PopUp";
import ReactModal from "react-modal";
import CenterContainer from "../models/CenterContainer";

export default function ProjectItem({
  title,
  description,
  image,
  techs,
  links,
  contributions,
  individual,
  logo,
}) {
  return (
    <StyledProjectItem>
      <StyledProjectImg src={image} />
      <StyledProjectContent>
        <StyledProjectTitle>
          <img
            src={logo}
            style={{ width: "2rem", height: "2rem" }}
            alt="logo"
          />
          {title}
        </StyledProjectTitle>
        <p>{description}</p>
        <StyledIcons>
          <NavLink to={links.github} target="_blank">
            <img
              src={github}
              style={{ width: "1.8rem", height: "1.8rem" }}
              alt="github"
            />
          </NavLink>
          <NavLink to={links.deploy} target="_blank">
            <img
              src={deploy}
              style={{ width: "1.8rem", height: "1.8rem" }}
              alt="deploy"
            />
          </NavLink>
        </StyledIcons>
        <div
          style={{ position: "absolute", bottom: "0.8rem", background: "none" }}
        >
          <PopUp contributions={contributions} individual={individual} />
        </div>
      </StyledProjectContent>
      <StyledList>
        {techs.map((e, i) => {
          return <StyledProjectSpan key={i}>{e}</StyledProjectSpan>;
        })}
      </StyledList>
    </StyledProjectItem>
  );
}

const StyledProjectItem = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    font-family: ${theme.fonts.Calibre};
  }
  @media (max-width: 769px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const StyledIcons = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  padding-left: 21rem;
  padding-top: 7.9rem;
  @media (max-width: 769px) {
    padding-left: 12rem;
    padding-top: 12rem;
  }
`;
const StyledProjectImg = styled.img`
  background-color: rgba(0, 0, 0, 0.95);
  height: 12rem;
  max-width: 25rem;
  filter: brightness(0.4);
  @media (max-width: 769px) {
    max-width: 100%;
    height: 11rem;
    margin-right: 0;
  }
`;

const StyledProjectTitle = styled.h4`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: -8rem;
  font-size: ${theme.fontSizes.xxl};
  color: ${theme.colors.grey};
  img {
    width: 2rem;
  }

`;

const StyledList = styled.div`
  position: relative;
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledProjectContent = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 25rem;
  height: 9rem;
  padding: 1.5rem;
  margin-left: 13rem;
  margin-top: 1rem;
  background-color: ${theme.colors.ligthBlue};
  border-radius: 5px;
  p {
    font-family: ${theme.fonts.Calibre};
    color: ${theme.colors.darkGrey};
  }
  @media (max-width: 769px) {
    position: relative;
    justify-content: center;
    margin-left: 0;
    margin-top: -9rem;
    width: 100%;
    &:hover {
      margin-top: -9rem;
    }
  }
  transition: 0.3s ease;
  @media (min-width: 769px) {
    &:hover {
      margin-top: -0.4rem;
    }
  }
`;

const StyledProjectSpan = styled.span`
  font-family: ${theme.fonts.Calibre};
  color: ${theme.colors.darkGrey};
`;
