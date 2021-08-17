/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Sidebar from "./sidebar"
import "./layout.css"
import "../styles/global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={"flex flex-col h-screen justify-between"}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div className={"wrapper d-flex flex-wrap"}>
          <Sidebar />
          <main
              className={"font-sans mb-auto pt-4 flex-basis-0 flex-grow-999 min-width-50"}
          >{children}
          </main>
      </div>


      <footer
        className={"py-2 px-4 border-t text-gray-600 font-sans"}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
