import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Testimonial17 from '../components/testimonial17'
import Contact1 from '../components/contact1'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Jazmine Designs</title>
        <meta property="og:title" content="Jazmine Designs" />
      </Helmet>
      <Navbar8
        text={
          <Fragment>
            <span className="home-text">Text</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text01 thq-body-small thq-link">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text02 thq-body-small thq-link">
              About Me
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text03 thq-body-small thq-link">
              Portfolio
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text04 thq-body-small thq-link">Contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text05 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text06 thq-body-large">About</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text07 thq-body-large">Portfolio</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text08 thq-body-large">Contact</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text09">
              <span className="home-text10">Jazmine Designs</span>
              <span>                                         </span>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text12">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text13">Contact Me</span>
          </Fragment>
        }
        link2Url="/about"
        page1Description={
          <Fragment>
            <span className="home-text14 thq-body-small">
              Welcome to my portfolio showcasing my UX design projects.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text15 thq-body-small">
              Learn more about me and my background as a UX designer.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text16 thq-body-small">
              Explore a selection of my UX design work across various projects.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text17 thq-body-small">
              Get in touch with me to discuss collaboration opportunities.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text18 thq-body-small">View Portfolio</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text19 thq-body-large">
              <span className="home-text20">My name is Jazmine Marquez</span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text23">
                I&apos;m a UX Designer at Google who is constantly working on
                improving the accessibility and intuitiveness of our internal
                spaces through innovative design solutions. I am focused on
                breaking down design barriers to create more accessible and
                user-friendly environments.
              </span>
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text24 thq-heading-1">Hello! ☺</h1>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <h2 className="home-text25 thq-heading-2">UX Design</h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text26 thq-heading-2">Visual Design</h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text27 thq-heading-2">Prototyping</h2>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text28 thq-body-small">
              Creating intuitive and engaging user experiences
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text29 thq-body-small">
              Visual design with a focus on branding
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text30 thq-body-small">
              Interactive prototypes for user testing
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text31">View Portfolio</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text32 thq-body-large">
              Check out my portfolio to see how I can help you create intuitive
              and engaging designs.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text33 thq-heading-2">
              Ready to elevate your user experience?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <h2 className="home-text34 thq-heading-2">User-Centered Design</h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text35 thq-heading-2">
              Interactive Prototyping
            </h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text36 thq-heading-2">Visual Design</h2>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text37 thq-body-small">
              Creating designs that prioritize the user&apos;s needs and
              preferences.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text38 thq-body-small">
              Developing interactive prototypes to test usability and
              functionality.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text39 thq-body-small">
              Crafting visually appealing designs that enhance user experience.
            </span>
          </Fragment>
        }
      ></Features25>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text40 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text41 thq-body-small">
              The UX designer&apos;s attention to detail and understanding of
              user behavior truly set our product apart from the competition.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text42 thq-body-small">
              I was impressed by the UX designer&apos;s ability to translate
              complex ideas into simple and intuitive designs. Our project
              exceeded all expectations.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text43 thq-body-small">
              Collaborating with the UX designer was a seamless experience.
              Their creativity and expertise were instrumental in achieving our
              project goals.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text44 thq-body-small">
              Working with the UX designer was a game-changer for our company.
              The designs were innovative and user-friendly, leading to a
              significant increase in user engagement.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text45 thq-heading-2">Client Testimonials</h2>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <strong className="home-text46 thq-body-large">John Doe</strong>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <strong className="home-text47 thq-body-large">Jane Smith</strong>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <strong className="home-text48 thq-body-large">
              David Johnson
            </strong>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <strong className="home-text49 thq-body-large">Emily Brown</strong>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text50 thq-body-small">CEO, Company ABC</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text51 thq-body-small">
              Marketing Director, Company XYZ
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text52 thq-body-small">
              CTO, Tech Solutions Inc.
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text53 thq-body-small">
              Product Manager, Startup Co.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact1
        email1={
          <Fragment>
            <span className="home-text54 thq-body-small">
              marq.jazmine@gmail.com
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="home-text55 thq-body-small">
              linkedin.com/in/jazminemarquez
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text56 thq-body-large">Get in touch!</p>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="home-text57 thq-body-large">
              Interested in collaborating or have a question?
            </p>
          </Fragment>
        }
      ></Contact1>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text58 thq-body-small">Portfolio</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text59 thq-body-small">About Me</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
