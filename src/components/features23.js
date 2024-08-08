import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features23.css'

const Features23 = (props) => {
  return (
    <div className="features23-layout349 thq-section-padding">
      <div className="features23-max-width thq-section-max-width">
        <div className="features23-container">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="features23-text20 thq-heading-2">Features</h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="features23-text28 thq-body-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </span>
              </Fragment>
            )}
          </span>
          <button className="thq-button-filled features23-button">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="features23-text27 thq-body-small">
                    Explore Projects
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
        <div className="thq-grid-3">
          <div className="features23-container2 thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features23-image thq-img-round"
            />
            <h2>
              {props.feature1Title ?? (
                <Fragment>
                  <h2 className="features23-text18 thq-heading-2">
                    Interactive Prototyping
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features23-text22 thq-body-small">
                    Engage with interactive prototypes to experience the flow
                    and functionality of designs.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container3 thq-card">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features23-image1 thq-img-round"
            />
            <h2>
              {props.feature2Title ?? (
                <Fragment>
                  <h2 className="features23-text16 thq-heading-2">
                    Visual Design
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features23-text14 thq-body-small">
                    Craft visually appealing designs that resonate with users
                    and enhance usability.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container4 thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features23-image2 thq-img-round"
            />
            <h2>
              {props.feature3Title ?? (
                <Fragment>
                  <h2 className="features23-text15 thq-heading-2">
                    User Experience Research
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features23-text24 thq-body-small">
                    Conduct user research to understand behaviors and
                    preferences, informing design decisions.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container5 thq-card">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features23-image3 thq-img-round"
            />
            <h2>
              {props.feature4Title ?? (
                <Fragment>
                  <h2 className="features23-text23 thq-heading-2">
                    Testimonials
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.feature4Description ?? (
                <Fragment>
                  <span className="features23-text26 thq-body-small">
                    Read what clients have to say about their experience working
                    with the UX designer.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container6 thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features23-image4 thq-img-round"
            />
            <h2>
              {props.feature5Title ?? (
                <Fragment>
                  <h2 className="features23-text17 thq-heading-2">
                    Collaboration Opportunities
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.feature5Description ?? (
                <Fragment>
                  <span className="features23-text25 thq-body-small">
                    Explore possibilities for collaboration on projects or
                    design initiatives.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container7 thq-card">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features23-image5 thq-img-round"
            />
            <h2>
              {props.feature6Title ?? (
                <Fragment>
                  <h2 className="features23-text19 thq-heading-2">
                    Design Process
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.feature6Description ?? (
                <Fragment>
                  <span className="features23-text21 thq-body-small">
                    Learn about the step-by-step approach taken in creating
                    intuitive and engaging user experiences.
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

Features23.defaultProps = {
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1681993996237-60d6809d1d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjk2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  feature3Title: undefined,
  feature2Title: undefined,
  feature5Title: undefined,
  feature1Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1650954933593-6c9342ba0331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjk2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Interactive Prototyping Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1571569481471-1753fb013630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjk2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: 'User Experience Research Image',
  feature6Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1715059120691-d6b06c275d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjk2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  feature6Description: undefined,
  feature1Description: undefined,
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1624066969616-69b0b0301d4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjk2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Title: undefined,
  feature3Description: undefined,
  feature5Description: undefined,
  feature4Description: undefined,
  feature2ImageAlt: 'Visual Design Image',
  feature5ImageAlt: 'Collaboration Opportunities Image',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1630852722885-6f39020d2b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjk2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
  feature4ImageAlt: 'Testimonials Image',
  feature6ImageAlt: 'Design Process Image',
  content1: undefined,
}

Features23.propTypes = {
  feature4ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature5Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature6Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  heading1: PropTypes.element,
  feature6Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature6ImageSrc: PropTypes.string,
  feature4Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature5Description: PropTypes.element,
  feature4Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  action1: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  content1: PropTypes.element,
}

export default Features23
