import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => {
  return (
	  <Layout> 
		<h>Alice Polk Hill</h><br/><br/>
		<p>A Text Adventure of a Colorado Poet</p>
	  	<Link state={{book: false}} to="/choices/start">Start</Link>
	  </Layout>
  )
}

