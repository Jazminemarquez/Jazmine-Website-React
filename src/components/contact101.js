import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact101.css'

const Contact101 = (props) => {
  return (
    <div className="contact101-container thq-section-padding">
      <div className="contact101-max-width thq-section-max-width">
        <div className="contact101-content thq-flex-row">
          <div className="contact101-content1">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact101-text11 thq-heading-2">Locations</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact101-text09 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact101-content2 thq-flex-row">
          <div className="contact101-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact101-image thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact101-text08 thq-heading-3">Bucharest</h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact101-text06 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact101-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact101-container3">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact101-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact101-text10 thq-heading-3">
                    Cluj - Napoca
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact101-text07 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact101-container4">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact101.defaultProps = {
  location2ImageSrc:
    'https://images.unsplash.com/photo-1571979195097-59d223315d89?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxidWNoYXJlc3R8ZW58MHx8fHwxNzE2Mjg2MzE3fDA&ixlib=rb-4.0.3&w=1400',
  location1Description: undefined,
  location2Description: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1588694926280-3ae414d06ccb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjbHVqfGVufDB8fHx8MTcxNjI4NjI4N3ww&ixlib=rb-4.0.3&w=1400',
  location1ImageAlt: 'image1Alt',
  location1: undefined,
  location2ImageAlt: 'image2Alt',
  content1: undefined,
  location2: undefined,
  heading1: undefined,
}

Contact101.propTypes = {
  location2ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location2Description: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  location1: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  content1: PropTypes.element,
  location2: PropTypes.element,
  heading1: PropTypes.element,
}

export default Contact101
