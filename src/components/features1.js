import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span>
              {props.slogan ?? (
                <Fragment>
                  <span className="features1-text10 thq-body-small">
                    Crafting intuitive and engaging user experiences.
                  </span>
                </Fragment>
              )}
            </span>
            <h2>
              {props.sectionTitle ?? (
                <Fragment>
                  <h2 className="features1-text03 thq-heading-2">
                    Key Features
                  </h2>
                </Fragment>
              )}
            </h2>
          </div>
          <span>
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features1-text06 thq-body-small">
                  Explore the main features that set my design portfolio apart.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3>
                  {props.feature1Title ?? (
                    <Fragment>
                      <h3 className="features1-text05 thq-heading-3">
                        Visual Design Expertise
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text11 thq-body-small">
                        Creating visually appealing designs that resonate with
                        users.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3>
                  {props.feature2Title ?? (
                    <Fragment>
                      <h3 className="features1-text09 thq-heading-3">
                        Interactive Prototyping
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text08 thq-body-small">
                        Bringing designs to life through interactive prototypes.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3>
                  {props.feature3Title ?? (
                    <Fragment>
                      <h3 className="features1-text04 thq-heading-3">
                        User-Centered Design
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text07 thq-body-small">
                        Prioritizing user needs and preferences in the design
                        process.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <Link to="/portfolio" className="features1-button thq-button-filled">
            <span>
              {props.mainAction ?? (
                <Fragment>
                  <span className="features1-text12 thq-body-small">
                    View Projects
                  </span>
                </Fragment>
              )}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  sectionTitle: undefined,
  feature3Title: undefined,
  feature1Title: undefined,
  feature2ImageAlt: 'Interactive Prototyping Image',
  sectionDescription: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1624066969605-506986184108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjg3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1679165806274-2e07c2b6bc1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjg3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1567088577683-db233ab9aaab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjg3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  feature2Title: undefined,
  slogan: undefined,
  feature3ImageAlt: 'User-Centered Design Image',
  feature1Description: undefined,
  mainAction: undefined,
  feature1ImageAlt: 'Visual Design Image',
}

Features1.propTypes = {
  sectionTitle: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
  slogan: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  mainAction: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
}

export default Features1
