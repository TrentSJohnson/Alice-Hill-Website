import React from "react"
import Layout from "../components/layout"
import ResumeElement from "../components/resumeElement"
import SectionTitle from "../components/sectionTitle"
import WorkElement from "../components/workElement"
//import Fade from "../components/fade2"
export default ({ data }) => {
  return (
	  
    <Layout>
      <div>
				<SectionTitle headerText="Past Experience"/>
				{data.workElements.edges.map(({ node }) => (
					<WorkElement
						id={node.id}
						slug={node.fields.slug}
						excerpt={node.excerpt}
						title={node.frontmatter.title}
						span={node.frontmatter.span}
						>
					</WorkElement>
				))}
				<SectionTitle headerText="Past Projects"/>
				{data.projectElements.edges.map(({ node }) => (
					<ResumeElement 
						id={node.id}
						slug={node.fields.slug}
						date={node.frontmatter.date}
						excerpt={node.excerpt}
						title={node.frontmatter.title}
						>
					</ResumeElement>
				))}
				<SectionTitle headerText="Blog"/>
				{data.blogElements.edges.map(({ node }) => (
					<ResumeElement 
						id={node.id}
						slug={node.fields.slug}
						date={node.frontmatter.date}
						excerpt={node.excerpt}
						title={node.frontmatter.title}
						>
					</ResumeElement>
				))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
		workElements: allMarkdownRemark(filter: {frontmatter: {categories: {in: "work"}}}) {
			edges {
				node {
					fields {
						slug
					}
					excerpt
					frontmatter {
						title
						span
					}
					id
				}
			}
		}
		projectElements: allMarkdownRemark(filter: {frontmatter: {categories: {in: "project"}}}, sort: {fields: frontmatter___date, order: DESC}) {
			edges {
				node {
					fields {
						slug
					}
					excerpt
					frontmatter {
						date
						title
					}
					id
				}
			}
		}
		blogElements: allMarkdownRemark(filter: {frontmatter: {categories: {in: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}) {
			edges {
				node {
					fields {
						slug
					}
					excerpt
					frontmatter {
						date
						title
					}
					id
				}
			}
		}
	}
`