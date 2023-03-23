import React from "react";
import styled from "styled-components";
import ProjectItem from "../models/ProjectItem";
import Title from "../models/Title";
import { projects } from "../../utils/projectList";
import theme from "../../styles/theme";
import StyledButtonResume from "../../styles/button";
import CenterContainer from "../models/CenterContainer";
import { NavLink } from "react-router-dom";

export default function Email() {
  const callToAction =
    "Si te interesa mi perfil estoy abierto a propuestas y encantado de escuchar tu feedback. 😄";

  return (
    <StyledEmail>
      <h4>04. What's Next?</h4>
      <h3>Get In Touch</h3>
      <p>{callToAction}</p>
      <StyledButtonEmail>
        <a
          href="mailto:tomasalejandroalcaraz@gmail.com"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          Mail Me
        </a>
      </StyledButtonEmail>
    </StyledEmail>
  );
}

const StyledEmail = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 5rem;
  margin-bottom: 10rem;
  @media (max-width: 769px) {
    margin-bottom: 4rem;
  }
  h4 {
    font-family: ${theme.fonts.SFMono};
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.lightGreen};
  }
  h3 {
    font-family: ${theme.fonts.Calibre};
    font-size: ${theme.fontSizes.xxl4};
    color: ${theme.colors.grey};
    @media (max-width: 769px) {
      font-size: ${theme.fontSizes.xxl2};
    }
  }
  p {
    font-family: ${theme.fonts.Calibre};
    font-size: ${theme.fontSizes.xl};
    color: ${theme.colors.darkGrey};
  }
`;

const StyledButtonEmail = styled(StyledButtonResume)`
  padding: 1.3rem 2.5rem;
  a {
    color: ${theme.colors.lightGreen};
  }
`;
