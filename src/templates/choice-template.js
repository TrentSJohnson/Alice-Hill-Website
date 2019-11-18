import React from "react"
import { graphql, Link} from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default ({ data, location }) => {
  const post = data.markdownRemark;
  var link1 = post.frontmatter.link1;
  var link2 = post.frontmatter.link2;
  var link3 = post.frontmatter.link3;
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
    link1 = "/choices/writebook2/"
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
            css={css`margin: 1em;`}>
          {post.frontmatter.choice2}
        </Link>
        <Link state={{book: book}} 
            to={link3}>
          {post.frontmatter.choice3}
        </Link>
    </div>
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
        choice3
        link1
        link2
        link3
        title
        book
      }
    }
  }
`