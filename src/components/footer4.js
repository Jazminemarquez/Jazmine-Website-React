import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo"></div>
          <div className="footer4-links">
            <Link to="/portfolio" className="footer4-navlink">
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text1 thq-body-small">
                    Portfolio
                  </span>
                </Fragment>
              )}
            </Link>
            <Link to="/about" className="footer4-navlink1">
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text2 thq-body-small">About Me</span>
                </Fragment>
              )}
            </Link>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 TeleportHQ</span>
            </div>
            <div className="footer4-footer-links"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link1: undefined,
  link2: undefined,
}

Footer4.propTypes = {
  link1: PropTypes.element,
  link2: PropTypes.element,
}

export default Footer4
