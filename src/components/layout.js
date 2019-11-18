import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery,  graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { Helmet } from "react-helmet"


export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div css={css`margin: 0 auto;
    max-width: 800px;
    padding: ${rhythm(0)};
    padding-top: ${rhythm(1.5)};`}>
    <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="https://alicepolkhill.com/" />
        <link rel="icon" href="A.ico" />
      </Helmet>
      <Link to="/alicepolkhill" css={css`
    float: right`}>
      About
    </Link>
    <Link to="/" css={css`
    float: right
    margin: 1em`}>
      Home
    </Link>
    
    <div css={css`
    margin: 0 auto;
    padding: ${rhythm(1)};
    padding-top: ${rhythm(1.5)};
  `}>
      {children}
    </div>
  </div>
  )
}
