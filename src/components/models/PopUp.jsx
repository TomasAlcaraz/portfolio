import React, { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import theme from "../../styles/theme";
import more from "../../assets/more-icon.png";
import close from "../../assets/close-icon.png";

export default function PopUp({ contributions, individual }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <StyledPopUpContainer>
      <img onClick={openModal} src={more} />
      <StyledModal isOpen={isOpen} onRequestClose={closeModal}>
        <span>
          {individual
            ? "Funcionalidades principales:"
            : "Algunos de mis aportes fueron:"}
        </span>
        <StyledPonits>
          {contributions.map((e) => {
            return <li>{e}</li>;
          })}
        </StyledPonits>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img onClick={closeModal} src={close} />
        </div>
      </StyledModal>
    </StyledPopUpContainer>
  );
}

const StyledPopUpContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  img {
    width: 1.5rem;
    cursor: pointer;
  }
`;

const StyledModal = styled(ReactModal)`
  display: flex;
  position: relative;
  border-radius: 5px;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  margin-top: 14rem;
  justify-content: space-evenly;
  flex-direction: column;
  flex-wrap: wrap;
  width: 60vw;
  height: 46vh;
  background-color: ${theme.colors.ligthBlue};
  img {
    width: 1.8rem;
    cursor: pointer;
  }
  span {
    font-family: ${theme.fonts.Calibre};
    color: ${theme.colors.grey};
    padding: 1rem 4rem;
  }
  @media (max-width: 769px) {
    margin-top: 7rem;
    width: 80vw;
    height: 80vh;
  }
`;

const StyledPonits = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  li {
    font-family: ${theme.fonts.Calibre};
    color: ${theme.colors.darkGrey};
  }
  @media (max-width: 769px) {
    padding: 0 2rem;
  }
`;
