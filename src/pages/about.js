import React from "react"

import AboutText from "../components/AboutPageComponents/AboutText"
import { PageHeader, Banner } from "../utils"
import aboutImg from "../images/bcg/aboutBcg.jpeg"

import Layout from "../components/layout2"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner
        title=""
        subtitle="Empowering women through empowering their health!"
      />
    </PageHeader>
    <AboutText />
  </Layout>
)

export default AboutPage
