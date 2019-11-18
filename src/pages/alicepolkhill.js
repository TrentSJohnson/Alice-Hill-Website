import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => {
  return (
	  <Layout> 
		<h class="bold">Alice Polk Hill</h><br/><br/>
		<p>Alice Polk Hill was the state poet laureate of Colorado from 1919 to her death in 1921 She was a poet, 
            playwright, artist, historian, and woman's right advocate. She wrote many poems, most of which have been lost, 
            but five have been recovered. She wrote two books, ran for office in 1910, and was the only woman on the commission
            to make Denver an official city and county. Futhermore, she was involved with numerous woman's organizations including,
            the Round Table, Woman's Press Club, Daughters of the Confederacy, a Shakespeare club, and many more.
        </p>
        <p>Poems</p>
        <Link to="/choices/kentucky/counsel/">A Friends Counsel</Link><br/>
        <Link to="/choices/newColorado/hymn/">Christmas Hymn</Link><br/>
        <Link to="/choices/midColorado/tree/">Message of the Tree</Link><br/>
        <Link to="/choices/lateColorado/namesake/">To Alice--My Namesake</Link><br/>
        <Link to="/choices/lateColorado/notReady/">A Friends Counsel</Link><br/>
        <iframe src="hill.png" width="699" height="1050"></iframe>

        
	  </Layout>
  )
}