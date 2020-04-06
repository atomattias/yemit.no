import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { styles } from "../../../utils"

export default class FooterLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "home",
      },
      {
        id: 1,
        path: "/menu/",
        name: "menu",
      },
      {
        id: 2,
        path: "/about/",
        name: "about",
      },
      {
        id: 3,
        path: "/contact/",
        name: "contact",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper>
        {" "}
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {" "}
                {item.name}{" "}
              </Link>
            </li>
          )
        })}{" "}
      </LinkWrapper>
    )
  }
}
const LinkWrapper = styled.ul`
  max-width: 300px;
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0 1rem 0 1rem;
    margin: 0 auto 0.5rem auto;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
      @media (min-width: 760px) {
        padding: 0.5rem 1rem 0.5rem 1rem;
        margin: 0 auto 1rem auto;
      }
    }
  }

  ${styles.transObject({ time: "1s" })};
  @media (min-width: 768px) {
    max-width: 40%;
    height: auto;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
  @media (min-width: 468px) {
    max-width: 80%;
  }
`
