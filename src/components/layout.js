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

const Layout = ({ children }) => <Fragment>{children}</Fragment>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
