import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

export default function Banner({ title, subtitle, children }) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle} </h3>
      {children}
    </BannerWrapper>
  )
}
const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  .title {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 0.45rem;
  }
  .subtitle {
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted};
    font-size: 1.5rem;
    text-transform: capitalize;
    letter-spacing: 0.15rem;
  }
`
Banner.defaultProps = {
  title: "default title",
}
