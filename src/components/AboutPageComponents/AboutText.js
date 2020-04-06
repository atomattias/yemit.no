import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { styles } from "../../utils"
import { Section, Title, SectionButton } from "../../utils"

export default class AboutText extends Component {
  render() {
    return (
      <Section>
        <Title message="let me tell you about" title="my skills" />
        <AboutTextWrapper>
          <p>
            Hi. My name is John De Costa. I have developed this site to
            demonstrate my skills with the following technologies.
          </p>
          <p>
            <span className="subheader">Gatsby Static Site Generator: </span>{" "}
            Website built with Gatsby at blazing fast, highly secure, infinitely
            scalable and cheap to host. Gatsby provides a modern framework for
            turning content into feature-rich, visually engaging apps and
            websites. The website is built with React and GraphQL.
          </p>
          <p>
            <span className="subheader">Visual Studio Code: </span> is a source
            code editor developed by Microsoft for Windows, Linux and macOS. It
            includes support for debugging, embedded Git control, syntax
            highlighting, intelligent code completion, snippets, and code
            refactoring. It is also customizable, so users can change the
            editor's theme, keyboard shortcuts, and preferences. It is free and
            open-source.
          </p>
          <p>
            <span className="subheader">
              Terminal / Command Line Interface{" "}
            </span>
            is a means of interacting with a computer program where the user (or
            client) issues commands to the program in the form of successive
            lines of text (command lines). Software developers, system
            administrators and advanced users still rely heavily on command-line
            interfaces to perform tasks more efficiently, configure their
            machine, or access programs and program features that are not
            available through a graphical interface.
          </p>
          <p>
            <span className="subheader">Node.js </span>is an open-source,
            cross-platform JavaScript run-time environment that executes
            JavaScript code outside of a browser. JavaScript is used primarily
            for client-side scripting, in which scripts written in JavaScript
            are embedded in a webpage's HTML and run client-side by a JavaScript
            engine in the user's web browser. Node.js lets developers use
            JavaScript to write command line tools and for server-side
            scripting—running scripts server-side to produce dynamic web page
            content before the page is sent to the user's web browser.
            Consequently, Node.js represents a "JavaScript everywhere" paradigm,
            unifying web application development around a single programming
            language, rather than different languages for server side and client
            side scripts.
          </p>
          <p>
            <span className="subheader">npm </span> (short for Node.js package
            manager) is a package manager for the JavaScript programming
            language. It is the default package manager for the JavaScript
            runtime environment Node.js. It consists of a command line client,
            also called npm, and an online database of public and paid-for
            private packages, called the npm registry.
          </p>
          <p>
            <span className="subheader">Git </span>is a distributed version
            control system for tracking changes in source code during software
            development. It is designed for coordinating work among programmers,
            but it can be used to track changes in any set of files. Its goals
            include speed data integrity, and support for distributed,
            non-linear workflows.
          </p>
          <p>
            <span className="subheader">GitHub </span>is a web-based hosting
            service for version control using Git. It is mostly used for
            computer code. It offers all of the distributed version control and
            source code management (SCM) functionality of Git as well as adding
            its own features. It provides access control and several
            collaboration features such as bug tracking, feature requests, task
            management, and wikis for every project.
          </p>
          <p>
            <span className="subheader">Netlify </span>is a San Francisco-based
            cloud computing company that offers hosting and serverless backend
            services for static websites. It features continuous deployment from
            Git across a global application delivery network,serverless form
            handling, support for AWS Lambda functions, and full integration
            with Let's Encrypt. It provides both free and paid plans.
          </p>
          <p>
            <span className="subheader">Contentful </span>Contentful is how
            modern companies work with content. It’s content infrastructure for
            creating and managing content, backed by the tools for delivering it
            anywhere. With Contentful, developers and editors can work
            simultaneously and ship digital products faster.
          </p>
          <p>
            <span className="subheader">graphQL </span>is an open-source data
            query and manipulation language for APIs, and a runtime for
            fulfilling queries with existing data. It provides an efficient,
            powerful and flexible approach to developing web APIs, and has been
            compared and contrasted with REST and other web service
            architectures. It allows clients to define the structure of the data
            required, and exactly the same structure of the data is returned
            from the server, therefore preventing excessively large amounts of
            data from being returned, but this has implications for how
            effective web caching of query results can be. The flexibility and
            richness of the query language also adds complexity that may not be
            worthwhile for simple APIs.
          </p>
          <p>
            <span className="subheader">HTML & CSS </span>Hypertext Markup
            Language (HTML) is the standard markup language for creating web
            pages and web applications. With Cascading Style Sheets (CSS) and
            JavaScript, it forms a triad of cornerstone technologies for the
            World Wide Web.
          </p>
          <p>
            <span className="subheader">Javascript & JSX</span>often abbreviated
            as JS, is a high-level, interpreted programming language. JavaScript
            enables interactive web pages and thus is an essential part of web
            applications. The vast majority of websites use it, and all major
            web browsers have a dedicated JavaScript engine to execute it.
          </p>
          <p>
            JSX (JavaScript XML) is an extension to the JavaScript language
            syntax. Similar in appearance to HTML, JSX provides a way to
            structure component rendering using syntax familiar to many
            developers. React components are typically written using JSX,
            although they do not have to be (components may also be written in
            pure JavaScript).
          </p>
          <p>
            <span className="subheader">React </span>(also known as React.js or
            ReactJS) is a JavaScript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applications. Complex React applications usually require the use of
            additional libraries for state management, routing, and interaction
            with an API
          </p>
          <p>
            <span className="subheader">Firefox & Chrome Developer Tools </span>{" "}
            allow developers to inspect the browser's rendered Document Object
            Model (DOM) to assist in the development, testing and debugging of
            code.
          </p>
          <p>
            <span className="subheader">JAM Stack </span>JAMstack: noun
            \’jam-stak’\ Modern web development architecture based on
            client-side JavaScript, reusable APIs, and prebuilt Markup.When we
            talk about “The Stack,” we no longer talk about operating systems,
            specific web servers, backend programming languages, or databases.
            The JAMstack is not about specific technologies. It’s a new way of
            building websites and apps that delivers better performance, higher
            security, lower cost of scaling, and a better developer experience.
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
