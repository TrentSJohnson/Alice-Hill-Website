import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery,  graphql } from "gatsby"
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
    <>
    <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="https://alicepolkhill.com/" />
        <link rel="icon" href="A.ico" />
      </Helmet>
    <div css={css`
    margin: 0 auto;
    max-width: 700px;
    padding: ${rhythm(2)};
    padding-top: ${rhythm(1.5)};
  `}>
      {children}
    </div>
  </>
  )
}
