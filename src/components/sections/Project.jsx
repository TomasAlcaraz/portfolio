import React from "react";
import styled from "styled-components";
import ProjectItem from "../models/ProjectItem";
import Title from "../models/Title";
import { projects } from "../../utils/projectList";

export default function Project() {
  return (
    <StyledProject id="projects">
      <Title text="Projects" number={3} />
      <StyledProjectConteiner>
        {projects.map((e, i) => {
          return (
            <ProjectItem
              style={{ paddingTop: "5rem" }}
              title={e.title}
              description={e.description}
              image={e.image}
              techs={e.techs}
              links={e.links}
              contributions={e.contributions}
              individual={e.individual}
              logo={e.logo}
              key={i}
            />
          );
        })}
      </StyledProjectConteiner>
    </StyledProject>
  );
}

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 15%;
  @media (max-width: 769px) {
    gap: 7rem;
  }
`;

const StyledProjectConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8rem;
  margin-bottom: 1rem;
  @media (max-width: 769px) {
    gap: 11rem;
  }
`;
