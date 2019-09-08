import React from "react"

import styled from "styled-components"

import { media } from "../utils/media"

const StyledThemeButton = styled.button`
  position: absolute;
  right: 32px;
  background: unset;
  border: none;
  border: 2px solid white;
  border-radius: 4px;
  outline: none;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  color: white;

  font-family: ${({ theme }) => theme.font};

  transition: all 0.2s ease-in;

  padding: 4px;

  &:hover {
    background-position: 0 0;
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.11);
  }

  &:active {
    transform: scale(0.99);
  }

  ${media.desktop`
    position: relative;
    right: auto;
    padding: 0px 2px;
  `}

  ${media.miniPhone`
    position: absolute;
    right: 8px;
  `}
`

const Icon = styled.i`
  height: 24px;
  font-size: 20px;
  width: 24px;
`

const TextContent = styled.span`
  ${media.mediumTablet`
    display: none;
  `}
`

const ThemeButton = ({ theme, colors, onToggleTheme }) => {
  return (
    <StyledThemeButton
      onClick={onToggleTheme}
      colors={colors}
      currentTheme={theme}
    >
      {theme === "dark" ? (
        <span>
          {" "}
          <TextContent>light mode</TextContent> <Icon>🌞</Icon>{" "}
        </span>
      ) : (
        <span>
          <TextContent> dark mode</TextContent> <Icon> 🌚 </Icon>{" "}
        </span>
      )}
    </StyledThemeButton>
  )
}

export default ThemeButton
