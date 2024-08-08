import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats1.css'

const Stats1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="stats1-max-width thq-section-max-width">
        <div className="stats1-container1 thq-flex-column">
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="stats1-text11 thq-body-small">
                  Customer Feedback
                </span>
              </Fragment>
            )}
          </span>
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="stats1-text13 thq-heading-2">
                  Customer results presented in a fashion way
                </h2>
              </Fragment>
            )}
          </h2>
          <p>
            {props.content2 ?? (
              <Fragment>
                <p className="stats1-text21 thq-body-large">
                  Business improvements emphasized with numbers to increase
                  creadibility
                </p>
              </Fragment>
            )}
          </p>
          <div className="stats1-container2">
            <div className="stats1-container3">
              <h2>
                {props.stat1 ?? (
                  <Fragment>
                    <h2 className="stats1-text15 thq-heading-2">80%</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats1-text18 thq-body-small">
                      consectetur adipiscing elit,
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats1-container4">
              <h2>
                {props.stat2 ?? (
                  <Fragment>
                    <h2 className="stats1-text19 thq-heading-2">90%</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats1-text16 thq-body-small">
                      consectetur adipiscing.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats1-container5">
            <div className="stats1-container6">
              <h2>
                {props.stat3 ?? (
                  <Fragment>
                    <h2 className="stats1-text20 thq-heading-2">95%</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats1-text12 thq-body-small">
                      consectetur adipiscing elit,
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats1-container7">
              <h2>
                {props.stat4 ?? (
                  <Fragment>
                    <h2 className="stats1-text17 thq-heading-2">100%</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats1-text14 thq-body-small">
                      consectetur adipiscing.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="stats1-container8">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats1-image"
          />
        </div>
      </div>
    </div>
  )
}

Stats1.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1586296835409-fe3fe6b35b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxMjk2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  stat3Description: undefined,
  heading1: undefined,
  stat4Description: undefined,
  stat1: undefined,
  image1Alt: 'image',
  stat2Description: undefined,
  stat4: undefined,
  stat1Description: undefined,
  stat2: undefined,
  stat3: undefined,
  content2: undefined,
}

Stats1.propTypes = {
  image1Src: PropTypes.string,
  content1: PropTypes.element,
  stat3Description: PropTypes.element,
  heading1: PropTypes.element,
  stat4Description: PropTypes.element,
  stat1: PropTypes.element,
  image1Alt: PropTypes.string,
  stat2Description: PropTypes.element,
  stat4: PropTypes.element,
  stat1Description: PropTypes.element,
  stat2: PropTypes.element,
  stat3: PropTypes.element,
  content2: PropTypes.element,
}

export default Stats1
