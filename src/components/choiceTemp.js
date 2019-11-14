import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { Link } from "gatsby"

export default props => {
    var book = 0 == "true".localeCompare(props.post.frontmatter.book)
        || 0 == "true".localeCompare(props.location.state.book)
    return (
        <Layout>
        <div>
            <h1 >{props.post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
            <Link state={{book: book}} 
                    to={props.post.frontmatter.link1}>{
                props.post.frontmatter.choice1}
            </Link>
            <Link state={{book: book}} 
                to={props.post.frontmatter.link2}
                css={css`margin: 1em;`}
            >{props.post.frontmatter.choice2}</Link>
        </div>
        <p>{book.toString()}</p>
        <p>{props.location.state.book}</p>
        <p>{props.post.frontmatter.book}</p>
        </Layout>
    )
}