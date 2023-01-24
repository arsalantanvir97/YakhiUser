import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Toasty from '../utils/toast'
import { validateEmail } from '../utils/ValidateEmail'
import UnauthorizedAlert from './UnauthorizedAlert'

const Footer = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [newsletter, setnewsletter] = useState('')
  const newsLetterHandler = () => {
    if (newsletter?.length > 0) {
      const emailvalidation = validateEmail(newsletter)
      console.log('emmmm', emailvalidation)
      console.log('addEmployeeHandler')
      if (emailvalidation == true) {
        Swal.fire({
          icon: 'success',
          title: '',
          text: 'Added to Wislist',
          showConfirmButton: false,
          timer: 1500,
        })
        setnewsletter('')
      } else {
        Toasty('error', `Please enter a valid email`)
      }
    } else {
      Toasty('error', `Please fill out all the required fields`)
    }
  }
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer')
  }

  return (
    <>
      <footer className='site-footer'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-11 mx-auto'>
              <div className='row align-items-start justify-content-around'>
                {/* Footer col 1 */}
                <div className='col-xl-2 col-lg-3 col-md-6 order-2 order-lg-1 mt-5 mt-lg-0'>
                  <h4 className='footer-title'>INFORMATION</h4>
                  <ul className='foot-links'>
                    <li>
                      <Link to='/AboutCompany' data-hover='About Us'>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to='/MeettheTeam' data-hover='Staff'>
                        Staff
                      </Link>
                    </li>
                    <li>
                      <Link to='/Document' data-hover='Documents'>
                        Documents
                      </Link>
                    </li>
                    <li>
                      <Link to='/Instruction' data-hover='Instructions'>
                        Instructions
                      </Link>
                    </li>
                    <li>
                      <Link to='/MemberAgreement' data-hover='Member Agreement'>
                        Member Agreement
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={userInfo ? '/Signup' : '#'}
                        onClick={() => {
                          !userInfo && UnauthorizedAlert()
                        }}
                        data-hover='Membership Help'
                      >
                        Membership Help
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Footer col 2 */}
                <div className='col-xl-8 col-lg-6 col-md-12 text-center order-1 order-lg-2 '>
                  <h4 className='footer-title'>Newsletter Signup</h4>
                  <div className='newsletter-part'>
                    <p>
                      Subscribe for information on new products, courses, media
                      and more
                    </p>
                    <div className='newsletter-box'>
                      <input
                        value={newsletter}
                        type='email'
                        className='form-control newsletter p-3 mt-3'
                        placeholder='Email Address Here....'
                        onChange={(e) => {
                          setnewsletter(e.target.value)
                        }}
                      />
                      <i
                        className='fas fa-paper-plane'
                        onClick={newsLetterHandler}
                      ></i>
                    </div>
                    <ul className='mt-4 list-inline'>
                      <li className='list-inline-item'>
                        <div
                          className='social-icon face-icon'
                          onClick={() =>
                            openInNewTab('https://www.facebook.com/YahkiEl')
                          }
                        >
                          <Link
                            to='#'
                            onClick={() =>
                              openInNewTab('https://www.facebook.com/YahkiEl')
                            }
                          >
                            <i className='fab fa-facebook-f ' />
                          </Link>
                        </div>
                      </li>
                      <li className='list-inline-item'>
                        <div
                          className='social-icon  msg-icon'
                          onClick={() =>
                            openInNewTab(
                              'https://mobile.twitter.com/YahkiAwakened'
                            )
                          }
                        >
                          <Link
                            to='#'
                            onClick={() =>
                              openInNewTab(
                                'https://mobile.twitter.com/YahkiAwakened'
                              )
                            }
                          >
                            <i className='fab fa-twitter' />
                          </Link>
                        </div>
                      </li>
                      <li className='list-inline-item'>
                        <div
                          className='social-icon insta-icon'
                          onClick={() =>
                            openInNewTab(
                              'https://www.instagram.com/yahkiawakened/?hl=en'
                            )
                          }
                        >
                          <Link
                            to='#'
                            onClick={() =>
                              openInNewTab(
                                'https://www.instagram.com/yahkiawakened/?hl=en'
                              )
                            }
                          >
                            <i className='fab fa-instagram' />
                          </Link>
                        </div>
                      </li>
                      <li className='list-inline-item'>
                        <div
                          className='social-icon youtube-icon'
                          onClick={() =>
                            openInNewTab(
                              'https://www.youtube.com/@yahkiawakened'
                            )
                          }
                        >
                          <Link
                            to='#'
                            onClick={() =>
                              openInNewTab(
                                'https://www.youtube.com/@yahkiawakened'
                              )
                            }
                          >
                            <i className='fab fa-youtube' />
                          </Link>
                        </div>
                      </li>
                      <li className='list-inline-item'>
                        <div
                          className='social-icon envelope-icon'
                          onClick={() =>
                            openInNewTab(
                              'https://www.tiktok.com/@yahkiawakened?lang=en'
                            )
                          }
                        >
                          <Link
                            to='#'
                            onClick={() =>
                              openInNewTab(
                                'https://www.tiktok.com/@yahkiawakened?lang=en'
                              )
                            }
                          >
                            <img
                              src='/images/tiktok.png'
                              alt=''
                              className='img-fluid'
                            />{' '}
                            {/* <i class='fab fa-tiktok'></i> */}
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Footer col 3 */}
                <div className='col-xl-2 col-lg-3 col-md-6 order-3 order-lg-3 mt-5 mt-lg-0'>
                  <h4 className='footer-title'>SUPPORT</h4>
                  <ul className='foot-links'>
                    <li>
                      <Link
                        to='/OrderandPayment'
                        data-hover='Orders & Payments'
                      >
                        Orders &amp; Payments
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/ShippingandPickup'
                        data-hover='Shipping & Pickups'
                      >
                        Shipping &amp; Pickups
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/ReturnsandRefund'
                        data-hover='Returns &amp; Cancellations'
                      >
                        Returns &amp; Cancellations
                      </Link>
                    </li>
                    <li>
                      <Link to='/Faqs' data-hover='Questions & Answers'>
                        Questions &amp; Answers
                      </Link>
                    </li>
                    <li>
                      <Link to='/PrivacyPolicy' data-hover='Privacy Policy'>
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to='/TermsofService' data-hover='Terms of Service'>
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className='copy-rights'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 text-center'>
              <p>
                COPYRIGHT © 2021 <Link to='#'>YAH'KI AWAKENED</Link>, LLC. ALL
                RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
