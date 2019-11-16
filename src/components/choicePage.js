import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { Link } from "gatsby"

export default ({location, data}) => {
  const post = data.markdownRemark
  var link1 = post.frontmatter.link1
  var link2 = post.frontmatter.link2
  var link3 = post.frontmatter.link3
  var book = 0 == "true".localeCompare(post.frontmatter.book)
    || 0 == "true".localeCompare(location.state.book)
  
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
        <Link state={{book: book}} 
            to={link3}
            css={css`margin: 2em;`}
        >{post.frontmatter.choice3}</Link>
    </div>
    <p>{book.toString()}</p>
    <p>{post.frontmatter.book}</p>
    </Layout>
  )
  
}

