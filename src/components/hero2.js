import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero2.css'

const Hero2 = (props) => {
  return (
    <div className="hero2-header5 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero2-image"
      />
      <div className="hero2-container">
        <div className="hero2-max-width thq-section-max-width">
          <div className="hero2-column">
            <div className="hero2-content">
              <h1>
                {props.heading1 ?? (
                  <Fragment>
                    <h1 className="hero2-text7 thq-heading-1">
                      Welcome to [Designer&apos;s Name]&apos;s Portfolio
                    </h1>
                  </Fragment>
                )}
              </h1>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="hero2-text6 thq-body-large">
                      Explore intuitive and engaging user experiences
                    </p>
                  </Fragment>
                )}
              </p>
              <div className="hero2-actions">
                <div className="hero2-container1">
                  <button className="hero2-button thq-button-filled">
                    <span>
                      {props.action1 ?? (
                        <Fragment>
                          <span className="hero2-text4 thq-body-small">
                            View Projects
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="hero2-container2">
                  <button className="thq-button-outline hero2-button1">
                    <span>
                      {props.action2 ?? (
                        <Fragment>
                          <span className="hero2-text5 thq-body-small">
                            Learn More
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero2.defaultProps = {
  action1: undefined,
  action2: undefined,
  image1Alt: 'UX Designer working on a prototype',
  image1Src:
    'https://images.unsplash.com/photo-1710828530560-2920125ad032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjk2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  heading1: undefined,
}

Hero2.propTypes = {
  action1: PropTypes.element,
  action2: PropTypes.element,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero2
