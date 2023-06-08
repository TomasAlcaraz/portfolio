import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import logo from "../assets/vibe-icon.png";
import StyledButtonResume from "../styles/button";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin-icon.png";
import { useSpring, animated } from "react-spring";

export default function Nav() {
  const [active, setActive] = useState(false);
  const ref = useRef(false);
  function handleActive() {
    setActive(!active);
    ref.current = !ref.current;
  }

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [ref.current]);

  const props = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? `translateY(0)` : `translateY(-50px)`,
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <StyledNav>
        <img src={logo} style={{ width: "2rem", height: "2rem" }} />
        <StyledNavList active={active}>
          {["About", "Experience", "Projects", "Contact"].map((e, i) => {
            return (
              <StyledNavItem key={i} href={`#${e.toLowerCase()}`}>
                0{i + 1}.<button onClick={handleActive}>{e}</button>
              </StyledNavItem>
            );
          })}
          <StyledResume
            to="https://drive.google.com/file/d/1eZqOJBIQxqnRNx6pK-JObJJwUl69bdgB/view?usp=sharing"
            target="_blank"
          >
            <StyledButton>CV</StyledButton>
          </StyledResume>
        </StyledNavList>
        <StyledHamburger
          className={`icon nav-icon-5 ${active ? "open active" : ""}`}
          onClick={handleActive}
        >
          <span></span>
          <span></span>
          <span></span>
          <animated.div style={props}>
            <StyledNetworks
              active={active}
              style={{ visibility: ref ? "visible" : "hidden" }}
            >
              <StyledNetworkImg
                active={active}
                style={{ textDecoration: "none" }}
                to="https://github.com/TomasAlcaraz"
                target="_blanck"
              >
                <img src={github} style={{ width: "2rem", height: "2rem" }} />
              </StyledNetworkImg>
              <StyledNetworkImg
                style={{ textDecoration: "none" }}
                to="https://www.linkedin.com/in/tomas-alcaraz/"
                target="_blanck"
              >
                <img src={linkedin} style={{ width: "2rem", height: "2rem" }} />
              </StyledNetworkImg>
            </StyledNetworks>
          </animated.div>
        </StyledHamburger>
      </StyledNav>
    </div>
  );
}

const StyledButton = styled(StyledButtonResume)`
  color: #1a3346;
  border: 1.5px solid #92b7d5;
  border: none;
  background: #d0dee4;
  border-radius: 2px;
  box-shadow: none;
  &:hover {
    box-shadow: 0 5px 5px -3px lightblue;
    background: #ffffff;
  }
`;

const StyledResume = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  StyledButtonResume {
    border: none;
  }
  @media (max-width: 769px) {
    padding-left: 1.2rem;
  }
`;

const StyledNetworks = styled.div`
  position: relative;
  display: ${(props) => (props.active ? "flex" : "none")};
  right: ${(props) => (props.active ? "72px" : "-1000px")};
  top: 85vh;
  visibility: "hidden";
  transition: visibility 2s;
`;
const StyledNetworkImg = styled(NavLink)`
  img {
  }
`;

const StyledNav = styled.div`
  width: 100%;
  display: flex;
  height: 4.2rem;
  position: fixed;
  z-index: 5;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.blue};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  img {
    /* padding-right: ; */
    height: 4rem;
    padding-left: 2rem;
    @media (max-width: 769px) {
      padding-left: 1rem;
    }
  }
  @media (max-width: 769px) {
    top: -1px;
  }
`;

const StyledHamburger = styled.div`
  display: none;
  @media (max-width: 769px) {
    margin-right: 1rem;
    display: flex;
  }
`;

const StyledNavList = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding-right: 2rem;
  @media (max-width: 769px) {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    font-size: ${theme.fontSizes.h3};
    margin-left: ${(props) => (props.active ? "0px" : "1000px")};
    gap: 4rem;
    top: 0;
    position: fixed;
    width: 70%;
    transition: 0.9s ease;
    right: ${(props) => (props.active ? "0px" : "-1000px")};
    background-color: ${theme.colors.blue};
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

const StyledNavItem = styled.a`
  margin: 0 5px;
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.smish};
  color: ${theme.colors.lightGreen};
  cursor: pointer;
  text-decoration: none;
  button {
    border: none;
    cursor: pointer;
    font-size: ${theme.fontSizes.smish};
    background-color: ${theme.colors.blue};
    color: ${theme.colors.grey};
    font-family: ${theme.fonts.SFMono};
  }
`;
