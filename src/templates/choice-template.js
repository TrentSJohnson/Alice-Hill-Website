import React from "react"
import { graphql } from "gatsby"
import ChoicePage from "../components/choicePage"

export default ({ data, location }) => {
  return (
    <ChoicePage data={data} location={location}/>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        choice1
        choice2
        link1
        link2
        title
        book
      }
    }
  }
`