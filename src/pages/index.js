import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Globals/Hero"
import Footer from "../components/Globals/Footer"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero
      img={data.img.childImageSharp.fluid}
      title="caesars coffee"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
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
    menu: allContentfulCoffeeItem(sort: { fields: category, order: ASC }) {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 50, height: 50) {
              src
            }
          }
        }
      }
    }
    menu: allContentfulCoffeeItem(sort: { fields: category, order: ASC }) {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
