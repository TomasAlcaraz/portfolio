import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import link from "@/assets/linkedin-icon.png";

export default function SectionExperience({
  title,
  techs,
  company,
  achievements,
  date,
}) {
  return (
    <StyledExperienceContent>
      <h5>{date}</h5>
      <StyledTechs>
        {techs.length
          ? techs.map((e, i) => {
              return <span key={i}>{e}</span>;
            })
          : null}
      </StyledTechs>

      <StyledExperienceBox>
        <img
          src={company.image}
          style={{
            width: "1.8rem",
            height: "1.8rem",
            borderRadius: "2px",
          }}
        />
        <h5>{company.name}</h5>
        <a
          href={company.linkedin}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <img
            src={link}
            className="link"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </a>
      </StyledExperienceBox>

      <StyledExperienceList>
        {achievements.length
          ? achievements.map((e, i) => {
              return <li key={i}>{e}</li>;
            })
          : null}
      </StyledExperienceList>
    </StyledExperienceContent>
  );
}

const StyledExperienceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  height: 3rem;
  max-width: 32rem;
  border-radius: 2px;
  padding: 0.5rem;
  margin: 0.5rem;
`;

const StyledExperienceList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  color: ${theme.colors.darkGrey};
  font-family: ${theme.fonts.Calibre};
  font-size: ${theme.fontSizes.md};
  gap: 0.6rem;
`;

const StyledExperienceContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h5 {
    color: ${theme.colors.grey};
    font-family: ${theme.fonts.Calibre};
    font-size: ${theme.fontSizes.lg};
  }

  p {
    color: ${theme.colors.darkGrey};
    font-family: ${theme.fonts.Calibre};
    font-size: ${theme.fontSizes.lg};
    @media (max-width: 769px) {
      font-size: ${theme.fontSizes.sm};
    }
  }
`;

const StyledTechs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  color: ${theme.colors.darkGrey};
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.smish};
`;
