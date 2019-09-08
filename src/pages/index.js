import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import styled from "styled-components"

import formatDate from "../utils/formatDate"

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  box-shadow: none;
  font-family: ${({ theme }) => theme.font};
`

const PreviewContainer = styled.div`
  background: unset;

  /* padding: 1px 8px; */

  /* margin: 32px 0; */

  p,
  small {
    /* color: #222; */
  }

  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
`

const BlogIndex = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {/* <Bio /> */}
      {/* <h2>{data.allMarkdownRemark.totalCount} Posts</h2> */}
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <PreviewContainer key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <StyledLink to={node.fields.slug}>{title}</StyledLink>
            </h3>
            <small>{formatDate(node.frontmatter.date)}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </PreviewContainer>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
          }
        }
      }
    }
  }
`
