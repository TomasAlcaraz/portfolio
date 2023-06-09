import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

export default function Section({ title, techs, description, additional }) {
  return (
    <StyledFormationContent>
      <h3>{title}</h3>
      <div>
        {techs.map((e, i) => {
          return <span key={i}>{e}</span>;
        })}
      </div>
      <p>
        {description}
        <ul>
          {additional.length
            ? additional.map((e) => {
                return <li>{e}</li>;
              })
            : null}
        </ul>
      </p>
    </StyledFormationContent>
  );
}

const StyledFormationContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    color: ${theme.colors.grey};
    font-family: ${theme.fonts.SFMono};
    font-size: ${theme.fontSizes.xl};
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    color: ${theme.colors.darkGrey};
    font-family: ${theme.fonts.SFMono};
    font-size: ${theme.fontSizes.smish};
  }
  p {
    color: ${theme.colors.darkGrey};
    font-family: ${theme.fonts.Calibre};
    font-size: ${theme.fontSizes.md};
    @media (max-width: 769px) {
      font-size: ${theme.fontSizes.sm};
  }
  }
`;
