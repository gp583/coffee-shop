import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Globals/Hero"
import Footer from "../components/Globals/Footer"
import AboutInfo from "../components/About/About-Info"

const About = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />
    <AboutInfo />
    <Footer />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "bg-4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default About
