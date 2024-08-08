import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-section-max-width thq-flex-column">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1>
              {props.heading1 ?? (
                <Fragment>
                  <h1 className="hero8-text5 thq-heading-1">
                    Welcome to the Portfolio of a UX Designer
                  </h1>
                </Fragment>
              )}
            </h1>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="hero8-text3 thq-body-large">
                    Showcasing intuitive user experiences through visual design
                    and interactive prototyping
                  </p>
                </Fragment>
              )}
            </p>
            <div className="hero8-actions">
              <a
                href="mailto:marq.jazmine@gmail.com?subject="
                className="hero8-button thq-button-filled"
              >
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero8-text4 thq-body-small">
                        Contact for Collaboration
                      </span>
                    </Fragment>
                  )}
                </span>
              </a>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1585229259079-05ab82f93c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjg3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
  heading1: undefined,
  image1Alt: 'UX Designer Portfolio',
}

Hero8.propTypes = {
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default Hero8
