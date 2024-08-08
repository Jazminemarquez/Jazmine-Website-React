import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text25 thq-heading-2">
                  Client Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text20 thq-body-small">
                  Working with the UX designer was a game-changer for our
                  company. The designs were innovative and user-friendly,
                  leading to a significant increase in user engagement.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text26 thq-body-large">
                            John Doe
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text23 thq-body-small">
                            CEO, Company ABC
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text24 thq-body-small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text21 thq-body-large">
                            Jane Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text14 thq-body-small">
                            Marketing Director, Company XYZ
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text16 thq-body-small">
                        The UX designer&apos;s attention to detail and
                        understanding of user behavior truly set our product
                        apart from the competition.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text15 thq-body-large">
                            David Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27 thq-body-small">
                            CTO, Tech Solutions Inc.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text17 thq-body-small">
                        I was impressed by the UX designer&apos;s ability to
                        translate complex ideas into simple and intuitive
                        designs. Our project exceeded all expectations.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text19 thq-body-large">
                            Emily Brown
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text22 thq-body-small">
                            Product Manager, Startup Co.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text18 thq-body-small">
                        Collaborating with the UX designer was a seamless
                        experience. Their creativity and expertise were
                        instrumental in achieving our project goals.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author2Alt: 'Image of Jane Smith',
  author3Alt: 'Image of David Johnson',
  author2Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjYzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Emily Brown',
  author3Name: undefined,
  review2: undefined,
  review3: undefined,
  review4: undefined,
  author4Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1614153584490-27d0eaaa64b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjYzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1510582029005-689cfc56b48c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjYzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe',
  content1: undefined,
  author2Name: undefined,
  author4Position: undefined,
  author1Position: undefined,
  review1: undefined,
  heading1: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1526142805342-8c7badb164e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjYzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  author3Position: undefined,
}

Testimonial17.propTypes = {
  author2Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Position: PropTypes.element,
  author1Src: PropTypes.string,
  author4Alt: PropTypes.string,
  author3Name: PropTypes.element,
  review2: PropTypes.element,
  review3: PropTypes.element,
  review4: PropTypes.element,
  author4Name: PropTypes.element,
  author4Src: PropTypes.string,
  author2Src: PropTypes.string,
  author1Alt: PropTypes.string,
  content1: PropTypes.element,
  author2Name: PropTypes.element,
  author4Position: PropTypes.element,
  author1Position: PropTypes.element,
  review1: PropTypes.element,
  heading1: PropTypes.element,
  author3Src: PropTypes.string,
  author1Name: PropTypes.element,
  author3Position: PropTypes.element,
}

export default Testimonial17
