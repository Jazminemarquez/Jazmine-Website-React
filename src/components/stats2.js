import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container1 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container2 thq-flex-column">
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text16 thq-body-small">5+ years</span>
              </Fragment>
            )}
          </span>
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="stats2-text18 thq-heading-2">Statistics</h2>
              </Fragment>
            )}
          </h2>
          <p>
            {props.content2 ?? (
              <Fragment>
                <p className="stats2-text17 thq-body-large">50+</p>
              </Fragment>
            )}
          </p>
          <div className="stats2-container3 thq-grid-2">
            <div className="stats2-container4">
              <h2>
                {props.stat1 ?? (
                  <Fragment>
                    <h2 className="stats2-text11 thq-heading-2">
                      Years of Experience
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text15 thq-body-small">
                      Professional Experience
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container5">
              <h2>
                {props.stat2 ?? (
                  <Fragment>
                    <h2 className="stats2-text19 thq-heading-2">50+</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text13 thq-body-small">
                      Projects Completed
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container6 thq-grid-2">
            <div className="stats2-container7">
              <h2>
                {props.stat3 ?? (
                  <Fragment>
                    <h2 className="stats2-text14 thq-heading-2">
                      Satisfied Clients
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text12 thq-body-small">
                      Happy Clients
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container8">
              <h2>
                {props.stat4 ?? (
                  <Fragment>
                    <h2 className="stats2-text21 thq-heading-2">Awards Won</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text20 thq-body-small">
                      Recognitions
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  image1Alt: 'Projects Completed',
  stat1: undefined,
  stat3Description: undefined,
  stat2Description: undefined,
  stat3: undefined,
  stat1Description: undefined,
  content1: undefined,
  content2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1585229259444-3c786a7159eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjg3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  stat2: undefined,
  stat4Description: undefined,
  stat4: undefined,
}

Stats2.propTypes = {
  image1Alt: PropTypes.string,
  stat1: PropTypes.element,
  stat3Description: PropTypes.element,
  stat2Description: PropTypes.element,
  stat3: PropTypes.element,
  stat1Description: PropTypes.element,
  content1: PropTypes.element,
  content2: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  stat2: PropTypes.element,
  stat4Description: PropTypes.element,
  stat4: PropTypes.element,
}

export default Stats2
