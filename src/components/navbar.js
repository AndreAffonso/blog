import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import styled from "styled-components"

import Switch from "./themeButton"

import { media } from "../utils/media"

const StyledNav = styled.header`
  padding: 8px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;

  box-shadow: 0 3.5px 7px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.11);
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 25vw;

  ${media.desktop`
    padding: 0 5vw;

  `}

  ${media.mediumTablet`
    padding: 0 8px;
  `}

  ${media.phone`
    padding: 0 4px; 
  `}

  ${media.miniPhone`
    justify-content: flex-start;
  `}
`

const Name = styled.div`
  font-family: ${({ theme }) => theme.font};

  font-weight: 800;
  font-size: 22px;
  color: white;
  display: flex;
  align-items: center;

  span {
    margin: 0 16px;
  }

  ${media.phone`
    font-size: 16px;

    span {
    margin: 0 8px;
  }
  `}
`

const NameText = styled.span`
  ${media.miniPhone`
    display: none;
  `}
`

const Links = styled.nav`
  display: flex;
  font-family: ${({ theme }) => theme.font};

  ${media.phone`
    /* display: none; */
  `}

  ${media.miniPhone`
    margin-left: 16px;
  `}
`

const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin: 0 8px;
  text-decoration: none;
  box-shadow: none;

  transition: all 0.2 ease-in-out;

  :hover {
    box-shadow: 0 2px 0 0 white;
  }

  ${media.phone`
    font-size: 16px;
  `}
`

const CleanLink = styled(Link)`
  box-shadow: none;
`

const StyledImage = styled(Image)`
  margin-bottom: 0;
  max-width: 48px;
  max-height: 48px;
  border-radius: 100%;

  ${media.phone`
    max-width: 42px;
    max-height: 42px;
  `}
`

const Navbar = ({ theme, colors, onToggleTheme }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return (
    <StyledNav>
      <Container>
        <CleanLink to="/">
          <Name>
            {" "}
            <StyledImage
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />{" "}
            <NameText>André Affonso</NameText>
          </Name>
        </CleanLink>

        <Links>
          <StyledLink to="/">Posts</StyledLink>
          <StyledLink to="/about">Sobre mim</StyledLink>
        </Links>
        <Switch theme={theme} colors={colors} onToggleTheme={onToggleTheme} />
      </Container>
    </StyledNav>
  )
}

export default Navbar
