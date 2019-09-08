/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import styled from "styled-components"

const P = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
`

const Bio = () => {
  // const data = useStaticQuery(graphql`
  //   query BioQuery {
  //     avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
  //       childImageSharp {
  //         fixed(width: 64, height: 64) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //     site {
  //       siteMetadata {
  //         author
  //         social {
  //           twitter
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
      }}
    >
      {/* <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      /> */}
      <P>
        Desenvolvedor Front End na <strong>Pier</strong>. <br />
        Escrevo sobre desenvolvimento <i>web</i> e algumas aleatoriedades
        &#128579;
      </P>
    </div>
  )
}

export default Bio
