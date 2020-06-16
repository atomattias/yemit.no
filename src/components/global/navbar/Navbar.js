import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import Header from "../Header"

import NavbarIcons from "./NavbarIcons"
import styled from "styled-components"

export default class navbar extends Component {
  //set initial state navbar to false ie closed
  state = {
    navbarOpen: false,
  }
  //method to handle navbar action
  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }
  render() {
    return (
      <NavWrapper>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
          <NavbarHeader navbarOpen={this.state.navbarOpen} />
          <div className={this.state.css}>
            <NavbarLinks navbarOpen={this.state.navbarOpen} />
          </div>
          <NavbarIcons />
        </nav>
      </NavWrapper>
    )
  }
}

//style the navbar with media query
const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: inline-flexbox;
    align-items: center;
  }
`
