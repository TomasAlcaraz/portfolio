import React from "react";
import styled from "styled-components";

export default function CenterContainer({ element }) {
  return (
    <StyledContainer>
      {element}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
