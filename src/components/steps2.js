import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container1 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container2">
            <div className="steps2-container3 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text20 thq-heading-2">Discover</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text15 thq-body-small">
                      Understand the project requirements and user needs through
                      research and analysis
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text05 thq-heading-3">01</label>
            </div>
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text16 thq-heading-2">Design</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text21 thq-body-small">
                      Create wireframes, prototypes, and mockups based on the
                      gathered information
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text08 thq-heading-3">02</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text18 thq-heading-2">Test</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text17 thq-body-small">
                      Conduct usability testing to validate design decisions and
                      gather feedback
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text11 thq-heading-3">03</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text22 thq-heading-2">Iterate</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text19 thq-body-small">
                      Refine the design based on testing results and stakeholder
                      input
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text14 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step1Description: undefined,
  step2Title: undefined,
  step3Description: undefined,
  step3Title: undefined,
  step4Description: undefined,
  step1Title: undefined,
  step2Description: undefined,
  step4Title: undefined,
}

Steps2.propTypes = {
  step1Description: PropTypes.element,
  step2Title: PropTypes.element,
  step3Description: PropTypes.element,
  step3Title: PropTypes.element,
  step4Description: PropTypes.element,
  step1Title: PropTypes.element,
  step2Description: PropTypes.element,
  step4Title: PropTypes.element,
}

export default Steps2
