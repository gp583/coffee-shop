import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Globals/Hero"
import Footer from "../components/Globals/Footer"
import Info from "../components/Home/Info"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero
      img={data.img.childImageSharp.fluid}
      title="caesar's coffee"
      styleClass="default-background"
    />
    <Info />
    <Footer />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "bg-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
