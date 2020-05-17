import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import classes from "./Header.module.css"
import logo from "../../images/logo.svg"

const Header = ({ siteTitle }) => (
  <div className={classes.background}>
    <Container className={classes.container}>
      <Row>
        <Col>
          <header className={classes.header}>
            <h1 className={classes.title}>
              <Link to="/">
                <img
                  className={`img-responsive ${classes.headerImage}`}
                  src={logo}
                  alt="Yemit Ethiopia"
                />
              </Link>
            </h1>
            <nav className={classes.navbar}>
              <Link to="/books" className={classes.link}>
                Books
              </Link>
              <Link to="/blog" className={classes.link}>
                Blog
              </Link>
              <Link to="/jobs" className={classes.link}>
                Jobs
              </Link>
              <Link to="/podcast" className={classes.link}>
                Podcast
              </Link>
              <Link to="/videos" className={classes.link}>
                Videos
              </Link>
              <a
                href="https://calendly.com/philsturgeon"
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulting
              </a>
              <Link to="/community" className={classes.link}>
                Community
              </Link>
            </nav>
          </header>
        </Col>
      </Row>
    </Container>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
