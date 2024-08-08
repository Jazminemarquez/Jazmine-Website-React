import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero81.css'

const Hero81 = (props) => {
  return (
    <div className="hero81-header26 thq-section-padding">
      <div className="hero81-max-width thq-section-max-width thq-flex-column">
        <div className="hero81-column">
          <div className="hero81-content">
            <h1>
              {props.heading1 ?? (
                <Fragment>
                  <h1 className="hero81-text3 thq-heading-1">About Me</h1>
                </Fragment>
              )}
            </h1>
            <div className="hero81-actions">
              <Link
                to="/portfolio"
                className="hero81-button thq-button-outline"
              >
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero81-text2 thq-body-small">
                        View Projects
                      </span>
                    </Fragment>
                  )}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="hero81-image"
        />
      </div>
    </div>
  )
}

Hero81.defaultProps = {
  action2: undefined,
  heading1: undefined,
  imageSrc: '/img_6474-1100w.jpg',
  imageAlt: 'image',
}

Hero81.propTypes = {
  action2: PropTypes.element,
  heading1: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Hero81
