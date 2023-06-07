import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import SectionExperience from "../models/SectionExperience";
import { experience } from "../../utils/experienceList.js";
import devocamp from "../../assets/devocamp.jpg";
import soyhenry from "../../assets/soyhenry-logo.png";
import Title from "../models/Title";

export default function Experience() {
  const [tag, setTag] = useState("Backend Developer");
  const [selected, setSelected] = useState(0);
  function hanldeSet(e) {
    setTag(e.target.name);
    setSelected(e.target.value);
  }
  return (
    <StyledExperience id="experience">
      <Title text="Where I've Worked" number={2} />
      <StyledBox>
        <StyledList>
          {[
            { name: devocamp, title: "Backend Developer" },
            { name: soyhenry, title: "Tech Lead" },
          ].map((e, i) => {
            return (
              <StyledItem
                active={tag === e.title ? true : false}
                name={e.title}
                onClick={(e) => hanldeSet(e)}
                key={i}
                value={i}
              >
                {e.title}
              </StyledItem>
            );
          })}
        </StyledList>
        <SectionExperience
          title={experience[selected]?.title}
          techs={experience[selected]?.techs}
          achievements={experience[selected]?.achievements}
          company={experience[selected]?.company}
          date={experience[selected]?.date}
        />
      </StyledBox>
    </StyledExperience>
  );
}

const StyledExperience = styled.div`
  padding-top: 15%;
  @media (max-width: 769px) {
    padding-top: 30%;
  }
`;

const StyledBox = styled.div`
  display: flex;
  @media (max-width: 769px) {
    flex-wrap: wrap;
    font-size: ${theme.fontSizes.sm};
  }
`;

const StyledList = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  color: aliceblue;
  list-style: none;
  padding-right: 2rem;
`;

const StyledItem = styled.button`
  cursor: pointer;
  background: none;
  background-color: ${(props) => (props.active ? "rgb(48, 60, 85)" : null)};
  border: none;
  transition: 0.9s ease;
  color: ${(props) =>
    props.active ? "aliceblue" : `${theme.colors.darkGrey}`};
  border-left: ${(props) =>
    props.active
      ? `2px solid ${theme.colors.lightGreen}`
      : "2px solid rgb(48, 60, 85)"};
  padding: 0rem 1.5rem;
  display: flex;
  align-items: center;
  height: 3rem;
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.smish};
`;
