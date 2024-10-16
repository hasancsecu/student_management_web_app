import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [darkIcon, setDarkIcon] = React.useState(false);
  const theme = useTheme();
  const changeDarkTheme = () => {
    setDarkIcon(false);
    props.changeTheme(darkIcon);
  };
  const changeLightTheme = () => {
    setDarkIcon(true);
    props.changeTheme(darkIcon);
  };
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <span
            style={{
              display: "flex",
              alignItems: "center",
              color: "#854CE6",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </span>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
          {darkIcon && (
            <LightModeIcon
              color="primary"
              style={{ marginLeft: "10px", cursor: "pointer" }}
              onClick={changeDarkTheme}
            />
          )}
          {!darkIcon && (
            <DarkModeIcon
              color="primary"
              style={{ marginLeft: "10px", cursor: "pointer" }}
              onClick={changeLightTheme}
            />
          )}
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
            {darkIcon && (
              <LightModeIcon
                color="primary"
                onClick={() => {
                  changeDarkTheme();
                  setIsOpen(!isOpen);
                }}
              />
            )}
            {!darkIcon && (
              <DarkModeIcon
                color="primary"
                onClick={() => {
                  changeLightTheme();
                  setIsOpen(!isOpen);
                }}
              />
            )}
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
