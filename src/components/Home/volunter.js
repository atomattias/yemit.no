import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layout"

import SEO from "../seo"
import { FaGulp } from "react-icons/fa"
import BackgroundSection from "../global/BackgraoundSection"
import Info from "./Info"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />
    <Info />
    <FaGulp />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
