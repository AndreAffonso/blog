import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import styled, { ThemeProvider } from "styled-components"
import themes from "../styles/themes"
import useLocalStorage from "../utils/useLocalStorage"
import GlobalStyle from "../styles/global"

import Navbar from "../components/navbar"

const Layout = ({ location, title, children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "dark")
  const onToggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light")

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  // if (location.pathname === rootPath) {
  //   header = (
  //     <h1
  //       style={{
  //         ...scale(1.0),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }
  return (
    <ThemeProvider theme={themes[theme]}>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "32px",
        }}
      >
        <div
          style={{
            //background: "#282a36",
            position: "relative",
            marginLeft: 0,
            marginRight: 0,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            //color: "#f8f8f2",
          }}
        >
          <GlobalStyle theme={themes[theme]} />

          <Navbar
            onToggleTheme={onToggleTheme}
            colors={themes[theme]}
            theme={theme}
          />

          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout
