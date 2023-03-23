import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

export default function Footer() {
  return (
    <StyledFooter>
      <h4>Designed & Built by Tomás Alcaraz</h4>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  h4 {
    font-family: ${theme.fonts.SFMono};
    font-size: 10px;
    color: ${theme.colors.grey};
  }
`
