import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { styles } from "../../utils"
import { Section, Title, SectionButton } from "../../utils"

export default class AboutText extends Component {
  render() {
    return (
      <Section>
        <Title
          title="What we do!"
          message="Empowering women through empowering their health and economy!"
        />
        <AboutTextWrapper>
          <p>
            <span className="subheader">How we do it? </span> Ensuring access to
            primary healthcare for women and children in most disadvantaged and
            marginalized community
          </p>
          <p>
            <span className="subheader">Maternal and newborn care </span> In
            Ethiopia, 1 in 27 women die while giving birth each year. Only about
            37% of women in rural Ethiopia receive follow up by skilled health
            worker during their entire pregnancy, about 40% deliver in a
            healthcare facility assisted by skilled attendant, and only 28%
            receive follow-up in the first 48 hours after birth. Delivering
            affordable and accessible integrated maternal and newborn health
            services Our focus is on women and children. We work to make sure
            mothers have access to healthcare during delivery and post-delivery
            including quality care for newborn babies after birth.
          </p>
          <p>
            <span className="subheader">Our strategies </span>
          </p>
          <p>
            <span className="subheader">Community involvement:-</span> we work
            in close collaboration with the community for successful social and
            community mobilization for change and sustainability.
          </p>
          <p>
            <span className="subheader">Partnership:- </span> we will work with
            governmental and no governmental organizations to ensure integrated
            and sustainable interventions.
          </p>
          <p>
            <span className="subheader">Our activities </span>
          </p>
          <p>
            Improving access to healthcare for women in rural and hard to reach
            settings through developing women and children clinic
          </p>
          <p>
            Providing healthcare, follow-up and counseling service during
            pregnancy, delivery and post-delivery for women the clinics
          </p>
          <p>Counseling and support on breastfeeding</p>
          <p>
            Providing health education and awareness creation activities for
            sustainable behavioral change in the clinic and through outreach
            activities
          </p>
          <p>
            Introducing quality and lifesaving equipment for mothers and
            newborns
          </p>

          <p>
            <span className="subheader">Child care services </span>
          </p>
          <p>
            In Ethiopia 43% and 55% out of 1000 babies die before their first
            and fifth birthday. Only 4 in 10 children received basic vaccination
            at the age of 12-23 months. About 41% of children under-5 years in
            rural Ethiopia are stunted.{" "}
          </p>
          <p>
            <span className="subheader">Our activities </span> • Making child
            healthcare accessible through women and children clinic • Create
            awareness on child care in the community • Provide information and
            access to immunization program • Provide information, counseling and
            support on child nutrition and growth monitoring • Providing
            counseling and support for parents of children with disability
          </p>

          <p>
            <span className="subheader"> </span>
          </p>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>
              Contact Me
            </SectionButton>
          </Link>
        </AboutTextWrapper>
      </Section>
    )
  }
}
const AboutTextWrapper = styled.div`
  width: 90vw;
  margin: 2rem auto;
  line-height: 1.5rem;
  color: ${styles.colors.mainGrey};
  font-size: 1.05rem;
  letter-spacing: 0.05rem;
  word-spacing: 0.1rem;
  @media (min-width: 768px) {
    width: 70vw;
  }
  @media (min-width: 992px) {
    width: 60vw;
  }
  .subheader {
    font-weight: 600;
  }
  p {
    padding-top: 2rem;
  }
`
