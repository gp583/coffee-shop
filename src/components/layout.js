/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import "./bootstrap.min.css"
import "./layout.css"
import Navbar from "./Globals/Navbar"

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
