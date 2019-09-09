import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const Pier = styled.a`
  font-family: ${({ theme }) => theme.font};
  color: #ff80bb;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 48px;
  border: none;
  box-shadow: none;
`

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Sobre mim" />
        <h1>Olá, eu sou o André 😁</h1>

        <p>
          Meu nome é André Luis Affonso de Melo, tenho 23 anos, nasci em
          Guaxupé, sul de Minas Gerais e atualmente sou Engenheiro de Sofware na{" "}
          <Pier href="https://www.pier.digital" target="_blank">
            PIER.
          </Pier>{" "}
          ( uma
          <a
            href="https://www.investopedia.com/terms/i/insurtech.asp"
            target="_blank"
          >
            {" "}
            insurtech
          </a>{" "}
          bem daora que acho que você deveria{" "}
          <a href="https://www.pier.digital" target="_blank">
            conhecer
          </a>
          ).
        </p>

        <p>
          Sou formado em Engenharia da Computação pela Universidade Federal
          deItajubpa e atuo como desenvolvedor <i>front end</i> desde 2017,
          trabalhando basicamente com React e as tecnologias do seu ecossistema.
        </p>

        <p>
          Gosto bastante de futebol, cinema, história e economia. Criei o blog
          para reunir meus estudos e experiências em desenvolvimento de software
          e contribuir com a comunidade de alguma maneira. Qualquer dúvida,
          crítica ou sugestão, fica a vontade para me mandar um{" "}
          <a href="mailto:webmaster@example.com">email </a>.
        </p>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
