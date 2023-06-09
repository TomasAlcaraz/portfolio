import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

export default function Title({ text, number }) {
  return (
    <StyledAboutHeader>
      {number ? <h4>0{number}.</h4> : null} <h3>{text}</h3>
    </StyledAboutHeader>
  );
}

const StyledAboutHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  h3 {
    font-weight: bold;
    font-family: ${theme.fonts.Calibre};
    font-size: ${theme.fontSizes.h3};
    color: ${theme.colors.grey};
    @media (max-width: 769px) {
      width: 6rem;
      font-size: ${theme.fontSizes.xxl};
    }
  }
  h4 {
    color: ${theme.colors.lightGreen};
    font-size: ${theme.fontSizes.md};
    font-family: ${theme.fonts.SFMono};
  }

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 20%;
    background-color: rgb(48, 60, 85);
    position: relative;
    top: -5px;
    z-index: -1;
    @media (max-width: 769px) {
      width: 100%;
    }
  }
`;
