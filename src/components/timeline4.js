import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './timeline4.css'

const Timeline4 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="timeline4-max-width thq-section-max-width">
        <div className="timeline4-container01">
          <h2>
            {props.title1 ?? (
              <Fragment>
                <h2 className="timeline4-text24 thq-heading-2">Education</h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="timeline4-text27 thq-body-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </span>
              </Fragment>
            )}
          </span>
          <div className="timeline4-container02">
            <button type="button" className="thq-button-filled">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="timeline4-text28">Primary action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button type="button" className="thq-button-outline">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="timeline4-text40">Seconday action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="timeline4-timeline-container">
          <div className="timeline4-step1">
            <div className="timeline4-container03">
              <div className="timeline4-container04"></div>
              <div className="timeline4-progress0"></div>
            </div>
            <div className="timeline4-container05">
              <h3>
                {props.date1 ?? (
                  <Fragment>
                    <h3 className="timeline4-text35 thq-heading-3">
                      2010-2014
                    </h3>
                  </Fragment>
                )}
              </h3>
              <h3>
                {props.card1Heading ?? (
                  <Fragment>
                    <h3 className="timeline4-text46 thq-heading-3">
                      Bachelor&apos;s Degree in Graphic Design
                    </h3>
                  </Fragment>
                )}
              </h3>
              <span>
                {props.card1Content ?? (
                  <Fragment>
                    <span className="timeline4-text47 thq-body-small">
                      University of California, Los Angeles
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="timeline4-container06">
                <button type="button" className="thq-button-filled">
                  <span>
                    {props.card1Action1 ?? (
                      <Fragment>
                        <span className="timeline4-text30">View Details</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button type="button" className="thq-button-outline">
                  <span>
                    {props.card1Action2 ?? (
                      <Fragment>
                        <span className="timeline4-text36">
                          View Certificate
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="timeline4-step2">
            <div className="timeline4-container07">
              <div className="timeline4-container08"></div>
              <div className="timeline4-progress01"></div>
            </div>
            <div className="timeline4-container09">
              <h3>
                {props.date2 ?? (
                  <Fragment>
                    <h3 className="timeline4-text44 thq-heading-3">
                      2015-2016
                    </h3>
                  </Fragment>
                )}
              </h3>
              <h3>
                {props.card2Heading ?? (
                  <Fragment>
                    <h3 className="timeline4-text31 thq-heading-3">
                      UX Design Certification
                    </h3>
                  </Fragment>
                )}
              </h3>
              <span>
                {props.card2Content ?? (
                  <Fragment>
                    <span className="timeline4-text32 thq-body-small">
                      Interaction Design Foundation
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="timeline4-container10">
                <button type="button" className="thq-button-filled">
                  <span>
                    {props.card2Action1 ?? (
                      <Fragment>
                        <span className="timeline4-text29">View Details</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button type="button" className="thq-button-outline">
                  <span>
                    {props.card2Action2 ?? (
                      <Fragment>
                        <span className="timeline4-text39">
                          View Certificate
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="timeline4-step3">
            <div className="timeline4-container11">
              <div className="timeline4-container12"></div>
              <div className="timeline4-progress02"></div>
            </div>
            <div className="timeline4-container13">
              <h3>
                {props.date3 ?? (
                  <Fragment>
                    <h3 className="timeline4-text42 thq-heading-3">
                      2017-2018
                    </h3>
                  </Fragment>
                )}
              </h3>
              <h3>
                {props.card3Heading ?? (
                  <Fragment>
                    <h3 className="timeline4-text37 thq-heading-3">
                      Master&apos;s Degree in Human-Computer Interaction
                    </h3>
                  </Fragment>
                )}
              </h3>
              <span>
                {props.card3Content ?? (
                  <Fragment>
                    <span className="timeline4-text25 thq-body-small">
                      Stanford University
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="timeline4-container14">
                <button type="button" className="thq-button-filled">
                  <span>
                    {props.card3Action1 ?? (
                      <Fragment>
                        <span className="timeline4-text34">View Details</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button type="button" className="thq-button-outline">
                  <span>
                    {props.card3Action2 ?? (
                      <Fragment>
                        <span className="timeline4-text26">
                          View Certificate
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="timeline4-step4">
            <div className="timeline4-container15">
              <div className="timeline4-container16"></div>
              <div className="timeline4-progress03"></div>
            </div>
            <div className="timeline4-container17">
              <h3>
                {props.date4 ?? (
                  <Fragment>
                    <h3 className="timeline4-text33 thq-heading-3">
                      23/04/2023
                    </h3>
                  </Fragment>
                )}
              </h3>
              <h3>
                {props.card4Heading ?? (
                  <Fragment>
                    <h3 className="timeline4-text45 thq-heading-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h3>
                  </Fragment>
                )}
              </h3>
              <span>
                {props.card4Content ?? (
                  <Fragment>
                    <span className="timeline4-text43 thq-body-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="timeline4-container18">
                <button type="button" className="thq-button-filled">
                  <span>
                    {props.card4Action1 ?? (
                      <Fragment>
                        <span className="timeline4-text41">Primary action</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button type="button" className="thq-button-outline">
                  <span>
                    {props.card4Action2 ?? (
                      <Fragment>
                        <span className="timeline4-text38">
                          Seconday action
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
  )
}

Timeline4.defaultProps = {
  title1: undefined,
  card3Content: undefined,
  card3Action2: undefined,
  content1: undefined,
  action1: undefined,
  card2Action1: undefined,
  card1Action1: undefined,
  card2Heading: undefined,
  card2Content: undefined,
  date4: undefined,
  card3Action1: undefined,
  date1: undefined,
  card1Action2: undefined,
  card3Heading: undefined,
  card4Action2: undefined,
  card2Action2: undefined,
  action2: undefined,
  card4Action1: undefined,
  date3: undefined,
  card4Content: undefined,
  date2: undefined,
  card4Heading: undefined,
  card1Heading: undefined,
  card1Content: undefined,
}

Timeline4.propTypes = {
  title1: PropTypes.element,
  card3Content: PropTypes.element,
  card3Action2: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  card2Action1: PropTypes.element,
  card1Action1: PropTypes.element,
  card2Heading: PropTypes.element,
  card2Content: PropTypes.element,
  date4: PropTypes.element,
  card3Action1: PropTypes.element,
  date1: PropTypes.element,
  card1Action2: PropTypes.element,
  card3Heading: PropTypes.element,
  card4Action2: PropTypes.element,
  card2Action2: PropTypes.element,
  action2: PropTypes.element,
  card4Action1: PropTypes.element,
  date3: PropTypes.element,
  card4Content: PropTypes.element,
  date2: PropTypes.element,
  card4Heading: PropTypes.element,
  card1Heading: PropTypes.element,
  card1Content: PropTypes.element,
}

export default Timeline4
