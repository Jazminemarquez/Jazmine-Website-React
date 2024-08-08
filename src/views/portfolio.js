import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Features1 from '../components/features1'
import Footer4 from '../components/footer4'
import './portfolio.css'

const Portfolio = (props) => {
  return (
    <div className="portfolio-container">
      <Helmet>
        <title>Portfolio - Jazmine Designs</title>
        <meta property="og:title" content="Portfolio - Jazmine Designs" />
      </Helmet>
      <Navbar8
        text={
          <Fragment>
            <span className="portfolio-text">Text</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="portfolio-text01 thq-body-small thq-link">
              Home
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="portfolio-text02 thq-body-small thq-link">
              About Me
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="portfolio-text03 thq-body-small thq-link">
              Portfolio
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="portfolio-text04 thq-body-small thq-link">
              Contact
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="portfolio-text05 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="portfolio-text06 thq-body-large">About</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="portfolio-text07 thq-body-large">Portfolio</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="portfolio-text08 thq-body-large">Contact</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="portfolio-text09">
              <span className="portfolio-text10">Jazmine Designs</span>
              <span>                                         </span>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="portfolio-text12">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="portfolio-text13">Contact Me</span>
          </Fragment>
        }
        link1Url="/"
        link3Url="/portfolio"
        page1Description={
          <Fragment>
            <span className="portfolio-text14 thq-body-small">
              Welcome to my portfolio showcasing my UX design projects.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="portfolio-text15 thq-body-small">
              Learn more about me and my background as a UX designer.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="portfolio-text16 thq-body-small">
              Explore a selection of my UX design work across various projects.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="portfolio-text17 thq-body-small">
              Get in touch with me to discuss collaboration opportunities.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero8
        action1={
          <Fragment>
            <span className="portfolio-text18 thq-body-small">
              Contact for Collaboration
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="portfolio-text19 thq-body-large">
              Showcasing intuitive user experiences through visual design and
              interactive prototyping
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="portfolio-text20 thq-heading-1">
              Welcome to the Portfolio of a UX Designer
            </h1>
          </Fragment>
        }
      ></Hero8>
      <Stats2
        stat1={
          <Fragment>
            <h2 className="portfolio-text21 thq-heading-2">
              Years of Experience
            </h2>
          </Fragment>
        }
        stat2={
          <Fragment>
            <h2 className="portfolio-text22 thq-heading-2">50+</h2>
          </Fragment>
        }
        stat3={
          <Fragment>
            <h2 className="portfolio-text23 thq-heading-2">
              Satisfied Clients
            </h2>
          </Fragment>
        }
        stat4={
          <Fragment>
            <h2 className="portfolio-text24 thq-heading-2">Awards Won</h2>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="portfolio-text25 thq-body-small">5+ years</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="portfolio-text26 thq-body-large">50+</p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="portfolio-text27 thq-heading-2">Statistics</h2>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="portfolio-text28 thq-body-small">
              Professional Experience
            </span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="portfolio-text29 thq-body-small">
              Projects Completed
            </span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="portfolio-text30 thq-body-small">
              Happy Clients
            </span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="portfolio-text31 thq-body-small">
              Recognitions
            </span>
          </Fragment>
        }
      ></Stats2>
      <Features1
        slogan={
          <Fragment>
            <span className="portfolio-text32 thq-body-small">
              Crafting intuitive and engaging user experiences.
            </span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="portfolio-text33 thq-body-small">
              View Projects
            </span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <h2 className="portfolio-text34 thq-heading-2">Key Features</h2>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <h3 className="portfolio-text35 thq-heading-3">
              Visual Design Expertise
            </h3>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h3 className="portfolio-text36 thq-heading-3">
              Interactive Prototyping
            </h3>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h3 className="portfolio-text37 thq-heading-3">
              User-Centered Design
            </h3>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="portfolio-text38 thq-body-small">
              Explore the main features that set my design portfolio apart.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="portfolio-text39 thq-body-small">
              Creating visually appealing designs that resonate with users.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="portfolio-text40 thq-body-small">
              Bringing designs to life through interactive prototypes.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="portfolio-text41 thq-body-small">
              Prioritizing user needs and preferences in the design process.
            </span>
          </Fragment>
        }
      ></Features1>
      <Footer4
        link1={
          <Fragment>
            <span className="portfolio-text42 thq-body-small">Portfolio</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="portfolio-text43 thq-body-small">About Me</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Portfolio
