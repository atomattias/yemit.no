import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import NavbarLinks from "./navbar/NavbarLinks"
import NavbarIcons from "./navbar/NavbarIcons"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { GlobalStyle } from "./commons"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
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
      <NavWrapper>
        <nav className="navbar navbar-expand-sm bg-light navbar-light auto">
          <GlobalStyle />
          <div className={this.state.css}>
            <Link to="/">
              <div>
                {" "}
                <img src={logo} alt="logo" />
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={this.navbarHandler}
            ></button>

            <ul className="navbar-nav mx-auto">
              <NavbarLinks navbarOpen={this.state.navbarOpen} />
            </ul>
            <NavbarIcons />
          </div>
        </nav>
      </NavWrapper>
    )
  }
}
const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    align-items: center;
  }
`
