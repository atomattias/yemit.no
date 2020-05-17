import React from "react"
import { Link } from "gatsby"
import { Section, Title, SectionButton } from "../../utils"

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our story" />
        <div className="row">
          <p className="lead text-muted mb-5">
            Yemit was found by Bezawit T Sima (PhD), Global Health and Community
            Medicine expert. She was born and raised in rural Ethiopa. She has
            over 10 years of experience in Ethiopian healthcare system including
            organizing community healthcare services in the rural setting such
            as maternal and child care, immunization program, and disease
            prevention. In addition, she worked as a lecturer at Jimma Univerity
            where community based training program is the philosophical approach
            to achieve educational relevance to community felt needs. Her
            extensive understanding of the rural setting in Ethiopia, her
            expertise and experience in primary healthcare and research makes
            her a local solution for the local problem.
          </p>
        </div>
      </div>
    </section>
  )
}
