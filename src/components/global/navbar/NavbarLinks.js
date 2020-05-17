import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { styles } from "../../../utils"

export default class NavbarLinks extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 0,
        path: "/",
        name: "home",
      },
      {
        id: 1,
        path: "/about/",
        name: "about",
      },
      {
        id: 2,
        path: "/volunter/",
        name: "volunter",
      },
      {
        id: 3,
        path: "/donate/",
        name: "donate",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          css: "collapse navbar- collapse",
        })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {" "}
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link text-capitalize">
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
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "200px" : "0px")};
  overflow: hidden;
  ${styles.transObject({ time: "1s" })};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`
