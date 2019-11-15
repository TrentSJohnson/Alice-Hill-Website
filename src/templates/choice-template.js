import React from "react"
import { graphql, Link} from "gatsby"
import ChoicePage from "../components/choicePage"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default ({ data, location }) => {
  const post = data.markdownRemark;
  var link1 = post.frontmatter.link1;
  var link2 = post.frontmatter.link2;
  var bookl = false;
  try {
    if (location.state.book != null){
      bookl = 0 == "true".localeCompare(location.state.book);
    }
  }
  catch (e){
    
  }
  var bookf = 0 == "true".localeCompare(post.frontmatter.book);
  var book = bookf|| bookl;
  
  if (book && post.frontmatter.book.localeCompare("next") == 0) {
    link1 = "/choices/finishedBook/"
  }

  return (
    <Layout>
    <div>
        <h1 >{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link state={{book: book}} 
                to={link1}>{
            post.frontmatter.choice1}
        </Link>
        <Link state={{book: book}} 
            to={link2}
            css={css`margin: 1em;`}
        >{post.frontmatter.choice2}</Link>
    </div>
    <p>{book.toString()}</p>
    <p>{post.frontmatter.book}</p>
    </Layout>
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