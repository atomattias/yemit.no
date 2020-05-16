import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { styles } from "../../utils"
import { Section, Title, SectionButton } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <div className="container">
          <Title title="our mission" />

          <QuickInfoWrapper>
            <p className="text">
              Ethiopia has been mainly approaching the healthcare system
              challenge through aids and experts support from charity
              organizations coming from Western countries. However, the
              sustainability of such interventions was perished once the project
              phased out. Sustainable and local solutions are ideal to address
              the health and health related challenges in marginalized and
              disadvantaged communities in the country. Empowering women with
              leadership and economic impact could be achieved through
              mobilizing the community and available resources.
            </p>
          </QuickInfoWrapper>
        </div>
      </Section>
    )
  }
}
const QuickInfoWrapper = styled.div`
  width: 90vw;
  margin: 2rem auto;
  line-height: 2rem;
  color: ${styles.colors.mainBlack};
  word-spacing: 0.2rem;
  @media (min-width: 768px) {
    width: 70vw;
  }
  @media (min-width: 992px) {
    width: 60vw;
  }
`
