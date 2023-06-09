import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import Section from "../models/Section";
import Title from "../models/Title";
import soyhenry from "../../assets/soyhenry-logo.png";
import oracle from "../../assets/oracle-logo.png";
import argentinaprograma from "../../assets/argentina-programa-logo.png";
import { formations } from "../../utils/formationList";
import { NavLink } from "react-router-dom";
import link from "@/assets/link-icon.png";

export default function Formation() {
  const [tag, setTag] = useState("SoyHenry");
  const [selected, setSelected] = useState(0);
  function hanldeSet(e) {
    setTag(e.target.name);
    setSelected(e.target.value);
  }
  return (
    <StyledFormation id="formation">
      <Title text="Formation" />
      <StyledBox>
        <StyledList>
          <div style={{width: "20rem"}}>
            {[
              { name: soyhenry, title: "SoyHenry" },
              { name: oracle, title: "Oracle ONE" },
              { name: argentinaprograma, title: "Argentina Programa" },
            ].map((e, i) => {
              return (
                <StyledItem
                  active={tag === e.title ? true : false}
                  name={e.title}
                  onClick={(e) => hanldeSet(e)}
                  key={i}
                  value={i}
                >
                  <img
                    style={{
                      width: "2rem",
                      heigh: "2rem",
                      borderRadius: "3px",
                      marginRight: "1rem",
                      pointerEvents: "none",
                    }}
                    src={e.name}
                  />
                  {e.title}
                </StyledItem>
              );
            })}
          </div>
          <StyledCertificate
            to={formations[selected]?.certificate.link}
            target="_blank"
          >
            <img
              className="certificate"
              src={formations[selected]?.certificate.image}
            />
            <img src={link} className="link" />
          </StyledCertificate>
        </StyledList>
        <Section
          title={formations[selected]?.title}
          techs={formations[selected]?.techs}
          description={formations[selected]?.description}
          certificate={formations[selected]?.certificate}
          additional={formations[selected]?.additional}
        />
      </StyledBox>
    </StyledFormation>
  );
}

const StyledCertificate = styled(NavLink)`
  margin-top: 3rem;
  position: relative;
  .link {
    position: absolute;
    padding-top: 10px;
    left: 11.5rem;
  }
  .certificate {
    width: 14rem;
    border-radius: 2px;
    transition: 2s ease;
    filter: brightness(0.4);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

const StyledFormation = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* margin-top: 5rem; */
  padding-top: 20%;
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
  align-items: center;
  color: aliceblue;
  list-style: none;
  padding-right: 2rem;
`;

const StyledItem = styled.button`
  width: 100%;
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
