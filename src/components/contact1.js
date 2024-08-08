import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact1.css'

const Contact1 = (props) => {
  return (
    <div className="contact1-contact20 thq-section-padding">
      <div className="contact1-max-width thq-section-max-width">
        <div className="contact1-content">
          <a
            href="mailto:marq.jazmine@gmail.com?subject="
            className="contact1-link"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="contact1-icon thq-icon-medium"
            >
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
          </a>
          <div className="contact1-contact-info">
            <div className="contact1-content1">
              <h3 className="contact1-text thq-heading-3">Email</h3>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="contact1-text5 thq-body-large">
                      Get in touch!
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
            <a
              href="mailto:marq.jazmine@gmail.com?subject="
              className="contact1-email"
            >
              {props.email1 ?? (
                <Fragment>
                  <span className="contact1-text4 thq-body-small">
                    marq.jazmine@gmail.com
                  </span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="contact1-content2">
          <a
            href="https://www.linkedin.com/in/jazminemarquez/"
            target="_blank"
            rel="noreferrer noopener"
            className="contact1-link1"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="contact1-icon2"
            >
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
          </a>
          <div className="contact1-contact-info1">
            <div className="contact1-content3">
              <h3 className="contact1-text2 thq-heading-3">Linkedin</h3>
              <p>
                {props.content2 ?? (
                  <Fragment>
                    <p className="contact1-text6 thq-body-large">
                      Interested in collaborating or have a question?
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/jazminemarquez/"
              target="_blank"
              rel="noreferrer noopener"
              className="contact1-phone"
            >
              {props.phone1 ?? (
                <Fragment>
                  <span className="contact1-text7 thq-body-small">
                    linkedin.com/in/jazminemarquez
                  </span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact1.defaultProps = {
  email1: undefined,
  content1: undefined,
  content2: undefined,
  phone1: undefined,
}

Contact1.propTypes = {
  email1: PropTypes.element,
  content1: PropTypes.element,
  content2: PropTypes.element,
  phone1: PropTypes.element,
}

export default Contact1
