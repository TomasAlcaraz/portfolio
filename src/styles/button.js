import styled from "styled-components";
import theme from "./theme";

const StyledButtonResume = styled.button`
  background: none;
  padding: 0.7rem 1rem;
  display: flex;
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.sm};
  justify-content: center;
  align-items: center;
  border-color: #d715151b;
  border: 1px solid;
  border-radius: 4px;
  color: ${theme.colors.lightGreen};
  transition: 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  &:hover {
    background-color: #64ffdb1b;
    cursor: pointer;
  }
`;

export default StyledButtonResume;
