import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout2"
import SEO from "../components/seo"
import BackgroundSection from "../components/global/BackgraoundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Contact from "../components/Home/Contact"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/ArdiDrying.jpg"
import QuickInfo from "../components/Home/QuickInfo"
import BgImageSlider from "../components/global/BgImageSlider"
import Carousel from "../components/global/Carousel"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <HomeHeader img={img}>
      <Banner title="Yemit" subtitle="Empowering women for better world">
        <Link to="/menu/" style={{ textDecoration: "none" }}>
          <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Info />
    <Contact />
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default IndexPage
