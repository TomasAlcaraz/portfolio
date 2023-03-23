import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin-icon.png";

export default function NetworkIconos() {
  return (
    <StyledNetworks>
        <NavLink
          style={{ textDecoration: "none" }}
          to="https://github.com/TomasAlcaraz"
          target="_blank"
        >
          <StyledNetworksImg src={github} />
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          to="https://www.linkedin.com/in/tomas-alcaraz/"
          target="_blank"
        >
          <StyledNetworksImg2 src={linkedin} />
        </NavLink>
    </StyledNetworks>
  )
}

const StyledNetworks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: fixed;
`;
const StyledNetworksImg = styled.img`
  position: absolute;
  width: 2.3rem;
  right: 37vw;
  top: 83vh;
  bottom: 1rem;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    transform: translateY(-10px);
  }
  @media (max-width: 769px){
    display: none;
  }
`;

const StyledNetworksImg2 = styled.img`
  position: absolute;
  width: 2rem;
  right: 37vw;
  top: 90vh;
  bottom: 1rem;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    transform: translateY(-10px);
  }
  @media (max-width: 769px){
    display: none;
  }
`;
