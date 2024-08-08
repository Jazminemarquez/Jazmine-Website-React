import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial16.css'

const Testimonial16 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial16-max-width thq-section-max-width">
        <div className="testimonial16-container">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial16-text25 thq-heading-2">
                  Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial16-text24 thq-body-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="testimonial16-container02 thq-card">
            <div className="testimonial16-container03">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial16-image"
              />
              <div className="testimonial16-container04">
                <strong>
                  {props.author1Name ?? (
                    <Fragment>
                      <strong className="testimonial16-text15 thq-body-large">
                        John Smith
                      </strong>
                    </Fragment>
                  )}
                </strong>
                <span>
                  {props.author1Position ?? (
                    <Fragment>
                      <span className="testimonial16-text20 thq-body-small">
                        CEO, Tech Co.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <span>
              {props.review1 ?? (
                <Fragment>
                  <span className="testimonial16-text16 thq-body-small">
                    I was amazed by the seamless user experience created for our
                    app. The designer truly understands the importance of
                    user-centric design.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="testimonial16-container05 thq-card">
            <div className="testimonial16-container06">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial16-image1"
              />
              <div className="testimonial16-container07">
                <strong>
                  {props.author2Name ?? (
                    <Fragment>
                      <strong className="testimonial16-text21 thq-body-large">
                        Emily Johnson
                      </strong>
                    </Fragment>
                  )}
                </strong>
                <span>
                  {props.author2Position ?? (
                    <Fragment>
                      <span className="testimonial16-text26 thq-body-small">
                        Marketing Director, Digital Agency
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <span>
              {props.review2 ?? (
                <Fragment>
                  <span className="testimonial16-text17 thq-body-small">
                    Working with this UX designer was a game-changer for our
                    website. The designs were not only visually appealing but
                    also highly functional.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="testimonial16-container08 thq-card">
            <div className="testimonial16-container09">
              <img
                alt={props.author3Alt}
                src={props.author3Src}
                className="testimonial16-image2"
              />
              <div className="testimonial16-container10">
                <strong>
                  {props.author3Name ?? (
                    <Fragment>
                      <strong className="testimonial16-text14 thq-body-large">
                        Michael Brown
                      </strong>
                    </Fragment>
                  )}
                </strong>
                <span>
                  {props.author3Position ?? (
                    <Fragment>
                      <span className="testimonial16-text19 thq-body-small">
                        Product Manager, Startup X
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <span>
              {props.review3 ?? (
                <Fragment>
                  <span className="testimonial16-text23 thq-body-small">
                    The interactive prototypes provided by the designer helped
                    us visualize the end product effectively. A great blend of
                    creativity and usability.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="testimonial16-container11 thq-card">
            <div className="testimonial16-container12">
              <img
                alt={props.author4Alt}
                src={props.author4Src}
                className="testimonial16-image3"
              />
              <div className="testimonial16-container13">
                <strong>
                  {props.author4Name ?? (
                    <Fragment>
                      <strong className="testimonial16-text18 thq-body-large">
                        Sarah Lee
                      </strong>
                    </Fragment>
                  )}
                </strong>
                <span>
                  {props.author4Position ?? (
                    <Fragment>
                      <span className="testimonial16-text22 thq-body-small">
                        UX Researcher, Design Studio
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <span>
              {props.review4 ?? (
                <Fragment>
                  <span className="testimonial16-text27 thq-body-small">
                    Exceptional attention to detail and a deep understanding of
                    user behavior. The final product exceeded our expectations.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial16.defaultProps = {
  author3Name: undefined,
  author1Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjk2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  review1: undefined,
  review2: undefined,
  author4Name: undefined,
  author3Position: undefined,
  author1Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjk2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'image',
  author2Src:
    'https://images.unsplash.com/photo-1621354236791-260eed20cbe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjk2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Name: undefined,
  author4Position: undefined,
  review3: undefined,
  content1: undefined,
  author1Alt: 'image',
  author3Alt: 'image',
  author3Src:
    'https://images.unsplash.com/photo-1535579710123-3c0f261c474e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjk2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  author2Position: undefined,
  author2Alt: 'image',
  review4: undefined,
}

Testimonial16.propTypes = {
  author3Name: PropTypes.element,
  author1Name: PropTypes.element,
  author4Src: PropTypes.string,
  review1: PropTypes.element,
  review2: PropTypes.element,
  author4Name: PropTypes.element,
  author3Position: PropTypes.element,
  author1Position: PropTypes.element,
  author1Src: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author2Name: PropTypes.element,
  author4Position: PropTypes.element,
  review3: PropTypes.element,
  content1: PropTypes.element,
  author1Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Src: PropTypes.string,
  heading1: PropTypes.element,
  author2Position: PropTypes.element,
  author2Alt: PropTypes.string,
  review4: PropTypes.element,
}

export default Testimonial16
