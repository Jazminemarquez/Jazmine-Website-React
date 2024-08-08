import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero81 from '../components/hero81'
import Timeline4 from '../components/timeline4'
import Stats3 from '../components/stats3'
import Testimonial6 from '../components/testimonial6'
import Footer4 from '../components/footer4'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Jazmine Designs</title>
        <meta property="og:title" content="About - Jazmine Designs" />
      </Helmet>
      <Navbar8
        text={
          <Fragment>
            <span className="about-text">Text</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="about-text01 thq-body-small thq-link">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text02 thq-body-small thq-link">
              About Me
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text03 thq-body-small thq-link">
              Portfolio
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text04 thq-body-small thq-link">
              Contact
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about-text05 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about-text06 thq-body-large">About</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about-text07 thq-body-large">Portfolio</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about-text08 thq-body-large">Contact</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="about-text09">
              <span className="about-text10">Jazmine Designs</span>
              <span>                                         </span>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text12">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text13">Contact Me</span>
          </Fragment>
        }
        link2Url="/about"
        page1Description={
          <Fragment>
            <span className="about-text14 thq-body-small">
              Welcome to my portfolio showcasing my UX design projects.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="about-text15 thq-body-small">
              Learn more about me and my background as a UX designer.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="about-text16 thq-body-small">
              Explore a selection of my UX design work across various projects.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="about-text17 thq-body-small">
              Get in touch with me to discuss collaboration opportunities.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero81
        action2={
          <Fragment>
            <span className="about-text18 thq-body-small">View Projects</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="about-text19 thq-heading-1">About Me</h1>
          </Fragment>
        }
      ></Hero81>
      <Timeline4
        date1={
          <Fragment>
            <h3 className="about-text20 thq-heading-3">2010-2014</h3>
          </Fragment>
        }
        date2={
          <Fragment>
            <h3 className="about-text21 thq-heading-3">2015-2016</h3>
          </Fragment>
        }
        date3={
          <Fragment>
            <h3 className="about-text22 thq-heading-3">2017-2018</h3>
          </Fragment>
        }
        date4={
          <Fragment>
            <h3 className="about-text23 thq-heading-3">23/04/2023</h3>
          </Fragment>
        }
        title1={
          <Fragment>
            <h2 className="about-text24 thq-heading-2">Education</h2>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text25">Primary action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text26">Seconday action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text27 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </span>
          </Fragment>
        }
        card1Action1={
          <Fragment>
            <span className="about-text28">View Details</span>
          </Fragment>
        }
        card1Action2={
          <Fragment>
            <span className="about-text29">View Certificate</span>
          </Fragment>
        }
        card1Content={
          <Fragment>
            <span className="about-text30 thq-body-small">
              University of California, Los Angeles
            </span>
          </Fragment>
        }
        card1Heading={
          <Fragment>
            <h3 className="about-text31 thq-heading-3">
              Bachelor&apos;s Degree in Graphic Design
            </h3>
          </Fragment>
        }
        card2Action1={
          <Fragment>
            <span className="about-text32">View Details</span>
          </Fragment>
        }
        card2Action2={
          <Fragment>
            <span className="about-text33">View Certificate</span>
          </Fragment>
        }
        card2Content={
          <Fragment>
            <span className="about-text34 thq-body-small">
              Interaction Design Foundation
            </span>
          </Fragment>
        }
        card2Heading={
          <Fragment>
            <h3 className="about-text35 thq-heading-3">
              UX Design Certification
            </h3>
          </Fragment>
        }
        card3Action1={
          <Fragment>
            <span className="about-text36">View Details</span>
          </Fragment>
        }
        card3Action2={
          <Fragment>
            <span className="about-text37">View Certificate</span>
          </Fragment>
        }
        card3Content={
          <Fragment>
            <span className="about-text38 thq-body-small">
              Stanford University
            </span>
          </Fragment>
        }
        card3Heading={
          <Fragment>
            <h3 className="about-text39 thq-heading-3">
              Master&apos;s Degree in Human-Computer Interaction
            </h3>
          </Fragment>
        }
        card4Action1={
          <Fragment>
            <span className="about-text40">Primary action</span>
          </Fragment>
        }
        card4Action2={
          <Fragment>
            <span className="about-text41">Seconday action</span>
          </Fragment>
        }
        card4Content={
          <Fragment>
            <span className="about-text42 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </span>
          </Fragment>
        }
        card4Heading={
          <Fragment>
            <h3 className="about-text43 thq-heading-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h3>
          </Fragment>
        }
      ></Timeline4>
      <Stats3
        stat1={
          <Fragment>
            <h2 className="about-text44 thq-heading-2">99%</h2>
          </Fragment>
        }
        stat2={
          <Fragment>
            <h2 className="about-text45 thq-heading-2">44%</h2>
          </Fragment>
        }
        stat3={
          <Fragment>
            <h2 className="about-text46 thq-heading-2">99%</h2>
          </Fragment>
        }
        stat4={
          <Fragment>
            <h2 className="about-text47 thq-heading-2">44%</h2>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text48 thq-body-small">
              Our results in numbers
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="about-text49 thq-heading-2">
              Business value of teleportHQ
            </h2>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="about-text50 thq-body-small">
              Customer satisfaction
            </span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="about-text51 thq-body-small">Active users</span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="about-text52 thq-body-small">
              Customer satisfaction
            </span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="about-text53 thq-body-small">Active users</span>
          </Fragment>
        }
      ></Stats3>
      <Testimonial6
        review1={
          <Fragment>
            <span className="about-text54 thq-body-large">
              Jazmine&apos;s designs transformed our user experience and boosted
              our customer engagement significantly.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <p className="about-text55 thq-body-large">
              Working with Jazmine was a pleasure. Her attention to detail and
              creativity are unmatched.
            </p>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="about-text56 thq-body-large">
              Jazmine&apos;s user-centered approach resulted in a seamless and
              enjoyable product for our users.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <p className="about-text57 thq-body-large">
              We saw a significant increase in user satisfaction after
              implementing Jazmine&apos;s designs.
            </p>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="about-text58 thq-body-small">John Smith</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="about-text59 thq-body-small">Emily Johnson</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="about-text60 thq-body-small">Michael Lee</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="about-text61 thq-body-small">Sarah Rodriguez</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="about-text62 thq-body-small">CEO, Company A</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="about-text63 thq-body-small">
              Product Manager, Company B
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="about-text64 thq-body-small">
              Marketing Director, Company C
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="about-text65 thq-body-small">CTO, Company D</span>
          </Fragment>
        }
      ></Testimonial6>
      <Footer4
        link1={
          <Fragment>
            <span className="about-text66 thq-body-small">Portfolio</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text67 thq-body-small">About Me</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default About
