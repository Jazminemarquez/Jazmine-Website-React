import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial6.css'

const Testimonial6 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial6-max-width thq-section-max-width">
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          className="testimonial6-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide swiper-slide"
            >
              <div className="testimonial6-card">
                <img
                  alt={props.company1LogoAlt}
                  src={props.company1LogoSrc}
                  className="testimonial6-logo"
                />
                <p>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial6-text39 thq-body-large">
                        Jazmine&apos;s designs transformed our user experience
                        and boosted our customer engagement significantly.
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="testimonial6-avatar">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial6-avatar-image thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content">
                    <span>
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial6-text30 thq-body-small">
                            John Smith
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial6-text37 thq-body-small">
                            CEO, Company A
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial6-card1">
                <img
                  alt={props.company2LogoAlt}
                  src={props.company2LogoSrc}
                  className="testimonial6-logo1"
                />
                <p>
                  {props.review2 ?? (
                    <Fragment>
                      <p className="testimonial6-text31 thq-body-large">
                        Working with Jazmine was a pleasure. Her attention to
                        detail and creativity are unmatched.
                      </p>
                    </Fragment>
                  )}
                </p>
                <div className="testimonial6-avatar1">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial6-avatar-image1 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content1">
                    <span>
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial6-text33 thq-body-small">
                            Emily Johnson
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial6-text34 thq-body-small">
                            Product Manager, Company B
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide1 swiper-slide"
            >
              <div className="testimonial6-card2">
                <img
                  alt={props.company3LogoAlt}
                  src={props.company3LogoSrc}
                  className="testimonial6-logo2"
                />
                <p>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial6-text41 thq-body-large">
                        Jazmine&apos;s user-centered approach resulted in a
                        seamless and enjoyable product for our users.
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="testimonial6-avatar2">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial6-avatar-image2 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content2">
                    <span>
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial6-text35 thq-body-small">
                            Michael Lee
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial6-text36 thq-body-small">
                            Marketing Director, Company C
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial6-card3">
                <img
                  alt={props.company4LogoAlt}
                  src={props.company4LogoSrc}
                  className="testimonial6-logo3"
                />
                <p>
                  {props.review4 ?? (
                    <Fragment>
                      <p className="testimonial6-text40 thq-body-large">
                        We saw a significant increase in user satisfaction after
                        implementing Jazmine&apos;s designs.
                      </p>
                    </Fragment>
                  )}
                </p>
                <div className="testimonial6-avatar3">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial6-avatar-image3 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content3">
                    <span>
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial6-text32 thq-body-small">
                            Sarah Rodriguez
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial6-text38 thq-body-small">
                            CTO, Company D
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="testimonial6-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          className="testimonial6-slider1 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide2 swiper-slide"
            >
              <div className="testimonial6-card4">
                <img
                  alt={props.company1LogoAlt}
                  src={props.company1LogoSrc}
                  className="testimonial6-logo4"
                />
                <span>
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar4">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial6-avatar-image4 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content4">
                    <span>
                      <span>Author Name</span>
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial6-text30 thq-body-small">
                            John Smith
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>Position, Company name</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide3 swiper-slide"
            >
              <div className="testimonial6-card5">
                <img
                  alt={props.company2LogoAlt}
                  src={props.company2LogoSrc}
                  className="testimonial6-logo5"
                />
                <span>
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar5">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial6-avatar-image5 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content5">
                    <span>
                      <span>Author Name</span>
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial6-text33 thq-body-small">
                            Emily Johnson
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>Position, Company name</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide4 swiper-slide"
            >
              <div className="testimonial6-card6">
                <img
                  alt={props.company3LogoAlt}
                  src={props.company3LogoSrc}
                  className="testimonial6-logo6"
                />
                <span>
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar6">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial6-avatar-image6 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content6">
                    <span>
                      <span>Author Name</span>
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial6-text35 thq-body-small">
                            Michael Lee
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      <span>Position, Company name</span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial6-text36 thq-body-small">
                            Marketing Director, Company C
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide5 swiper-slide"
            >
              <div className="testimonial6-card7">
                <img
                  alt={props.company4LogoAlt}
                  src={props.company4LogoSrc}
                  className="testimonial6-logo7"
                />
                <span>
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar7">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial6-avatar-image7 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content7">
                    <span>
                      <span>Author Name</span>
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial6-text32 thq-body-small">
                            Sarah Rodriguez
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      <span>Position, Company name</span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial6-text38 thq-body-small">
                            CTO, Company D
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="testimonial6-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
    </div>
  )
}

Testimonial6.defaultProps = {
  author1Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1707912079134-becf5a3598e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxNTg2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  company4LogoAlt: 'Company D logo',
  review2: undefined,
  company4LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author3Alt: 'Photo of Michael Lee',
  author4Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1535485156230-020016c5b156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxNTg2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1720522230316-89cb86df2899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxNTg2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author2Name: undefined,
  author2Position: undefined,
  author3Name: undefined,
  author3Position: undefined,
  company1LogoAlt: 'Company A logo',
  author1Position: undefined,
  company3LogoAlt: 'Company C logo',
  author4Position: undefined,
  review1: undefined,
  author1Alt: 'Photo of John Smith',
  author2Alt: 'Photo of Emily Johnson',
  author4Alt: 'Photo of Sarah Rodriguez',
  author3Src:
    'https://images.unsplash.com/photo-1536084006720-6c105926e135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzAxNTg2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  review4: undefined,
  company2LogoAlt: 'Company B logo',
  review3: undefined,
  company3LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
}

Testimonial6.propTypes = {
  author1Name: PropTypes.element,
  author1Src: PropTypes.string,
  company4LogoAlt: PropTypes.string,
  review2: PropTypes.element,
  company4LogoSrc: PropTypes.string,
  author3Alt: PropTypes.string,
  author4Name: PropTypes.element,
  author4Src: PropTypes.string,
  author2Src: PropTypes.string,
  company2LogoSrc: PropTypes.string,
  author2Name: PropTypes.element,
  author2Position: PropTypes.element,
  author3Name: PropTypes.element,
  author3Position: PropTypes.element,
  company1LogoAlt: PropTypes.string,
  author1Position: PropTypes.element,
  company3LogoAlt: PropTypes.string,
  author4Position: PropTypes.element,
  review1: PropTypes.element,
  author1Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author3Src: PropTypes.string,
  review4: PropTypes.element,
  company2LogoAlt: PropTypes.string,
  review3: PropTypes.element,
  company3LogoSrc: PropTypes.string,
  company1LogoSrc: PropTypes.string,
}

export default Testimonial6
