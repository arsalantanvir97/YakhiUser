import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userAction'
import { userEmailLoginAction } from '../actions/userAction'

import UnauthorizedAlert from './UnauthorizedAlert'
import { validateEmail } from '../utils/ValidateEmail'
import Toasty from '../utils/toast'
import Swal from 'sweetalert2'
let categories = [
  { name: `Geo'Genetic Therapy`, id: '6242c50b11f7d01b4e81f96c' },
  { name: `Teas & 3 Bitters`, id: '624160071b97a530529276b7' },
  { name: `Tinctures`, id: '62415fde1b97a530529276b3' },
  { name: `Capsules`, id: '62415fc11b97a530529276af' },
  { name: `Tonics`, id: '6241603e1b97a530529276bb' },
  { name: `Kits & Bundles`, id: '624160d81b97a530529276cb' },
  { name: `Hygiene`, id: '62d725092909481abc330f7d' },
  { name: `Soap`, id: '62d728d92909481abc331061' },
  { name: `Seaweed Herbs`, id: '62415f8d1b97a530529276ab' },
  // { name: `Oral Care`, id: '6215e1fef9727e382394df53' },
  {
    name: `Oils`,

    id: '6241605f1b97a530529276bf',
  },
  {
    name: `Salves`,

    id: '6241607a1b97a530529276c3',
  },
]
const Header = () => {
  let history = useHistory()

  const dispatch = useDispatch()
  const [category, setcategory] = useState(() => {
    return (
      localStorage.getItem('categories') &&
      JSON.parse(localStorage.getItem('categories'))
    )
  })

  const [email, setemail] = useState('')
  const [showdrop, setshowdrop] = useState(false)
  useEffect(() => {
    console.log('showdrop', showdrop)
  }, [showdrop])

  // let category = [];
  // category =
  //   localStorage.getItem("categories") &&
  //   JSON.parse(localStorage.getItem("categories"));

  const [loading, setloading] = useState(false)
  const [showherbaldropdown, setshowherbaldropdown] = useState(false)

  const cart = useSelector((state) => state?.cart)
  const { cartItems } = cart

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logOutHandler = async () => {
    console.log('logout')
    dispatch(logout())
  }
  const submitHandler = async (e) => {
    console.log('submitHandler')
    const emailvalidation = validateEmail(email)
    console.log('emmmm', emailvalidation)
    console.log('addEmployeeHandler')
    if (emailvalidation == true) {
      console.log('submitHandler')
      setloading(true)
      await dispatch(userEmailLoginAction(email, history))
      setloading(false)
      setemail('')
    } else {
      Toasty('error', `Please enter a valid email`)
      setloading(false)
    }

    window?.$('.modal').modal('hide')

    window?.$('.modal-backdrop').remove()
  }
  let msg =
    'New & Improved Detox Experience \n\
  Coming Soon :Booking Currently Not Available'
  const popUpHandler = () => {
    Swal.fire({
      icon: 'info',
      title: '',
      text: msg,
      showConfirmButton: false,
      timer: 1500,
    })
  }
  return (
    <>
      <section className='menu menuheight'>
        <div className='container-fluid'>
          {/* topbar */}
          <div className='row align-items-center justify-content-center top-bar'>
            <div className='col-11 mx-auto'>
              <div className='row align-items-center justify-content-end'>
                <div className='col-md-6 text-center text-md-left'>
                  {/* <p>Free Shipping for order over $80!</p> */}
                </div>
                <div className='col-md-6 text-center text-md-right'>
                  <ul className='list-inline topbar-links'>
                    <li className='list-inline-item dropdown myaccount'>
                      <Link
                        className='dropdown-toggle '
                        data-toggle='dropdown'
                        aria-expanded='false'
                        to={'#'}
                        // onClick={() => {
                        //   !userInfo && UnauthorizedAlert()
                        // }}
                      >
                        <i className='fas fa-user-alt mr-2 ' /> My Account
                      </Link>

                      <div class='dropdown-menu'>
                        <div>
                          <Link
                            className='dropdown-item'
                            style={{
                              backgroundColor: '#fff !important',
                              color: '#000 !important',
                            }}
                            to={userInfo ? '/EditProfile' : '#'}
                            onClick={() => {
                              !userInfo && UnauthorizedAlert()
                            }}
                          >
                            Account Details
                          </Link>
                        </div>
                        <div>
                          <Link
                            className='dropdown-item'
                            to={userInfo ? '/MyCart' : '#'}
                            onClick={() => {
                              !userInfo && UnauthorizedAlert()
                            }}
                          >
                            View My Cart
                          </Link>
                        </div>
                        <div>
                          <Link
                            className='dropdown-item'
                            to={userInfo ? '/Checkout' : '#'}
                            onClick={() => {
                              !userInfo && UnauthorizedAlert()
                            }}
                          >
                            Checkout
                          </Link>
                        </div>
                        <div>
                          <Link
                            className='dropdown-item'
                            to={userInfo ? '/WishList' : '#'}
                            onClick={() => {
                              !userInfo && UnauthorizedAlert()
                            }}
                          >
                            Wishlist
                          </Link>
                        </div>
                        <div>
                          <Link
                            className='dropdown-item'
                            to={userInfo ? '/OrderLog' : '#'}
                            onClick={() => {
                              !userInfo && UnauthorizedAlert()
                            }}
                          >
                            Order Tracking
                          </Link>
                        </div>
                        <div>
                          <Link
                            className='dropdown-item'
                            to={userInfo ? '/DamageClaims' : '#'}
                            onClick={() => {
                              !userInfo && UnauthorizedAlert()
                            }}
                          >
                            Damage Claims
                          </Link>
                        </div>
                        <div>
                          <Link
                            className='dropdown-item'
                            to={userInfo ? '/AppointmentLogs' : '#'}
                            onClick={() => {
                              !userInfo && UnauthorizedAlert()
                            }}
                            // className="dropdown-item"
                          >
                            My Appointments
                          </Link>
                        </div>
                      </div>
                    </li>

                    <li className='list-inline-item'>
                      <Link
                        to={userInfo ? '/AppointmentLogs' : '#'}
                        onClick={() => {
                          !userInfo && UnauthorizedAlert()
                        }}
                      >
                        <i className='fas fa-calendar-alt mr-2' /> Appointment
                        Status
                      </Link>
                    </li>
                    <li className='list-inline-item'>
                      <Link
                        to={userInfo ? '/OrderLog' : '#'}
                        onClick={() => {
                          !userInfo && UnauthorizedAlert()
                        }}
                      >
                        <i className='fas fa-shipping-fast mr-2' />
                        Order Status
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 mx-auto'>
              <div className='row justify-content-center'>
                <div className='col-12 text-center'>
                  <nav className='navbar navbar-expand-xl navbar-transparent justify-content-between py-0'>
                    <Link to='/' className='navbar-brand ml-xl-5'>
                      <img
                        src='images/yahki-logo.png'
                        alt=''
                        className='img-fluid'
                      />
                    </Link>
                    <button
                      className='navbar-toggler'
                      type='button'
                      data-toggle='collapse'
                      data-target='#navbarNav'
                      aria-controls='navbarNav'
                      aria-expanded='false'
                      aria-label='Toggle navigation'
                    >
                      <span className='navbar-toggler-icon' />
                    </button>
                    <div
                      className='collapse navbar-collapse justify-content-center'
                      id='navbarNav'
                    >
                      <ul
                        className='navbar-nav align-items-center'
                        id='main-nav'
                      >
                        <li className='nav-item'>
                          <a target={'_self'} className='nav-link' href='/'>
                            Home
                          </a>
                        </li>

                        {/* herbal store mega menu */}
                        <li
                          className={
                            showdrop
                              ? 'nav-item dropdown show1 megamenu-li dmenu'
                              : 'nav-item dropdown megamenu-li dmenu'
                          }
                        >
                          <Link
                            className='nav-link dropdown-toggle'
                            to='#'
                            id='dropdown01'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                            // style={{ backgroundColor: 'red' }}
                          >
                            HERBAL STORE
                          </Link>
                          <div
                            // onClick={() => {
                            //   // showHandler()
                            //   setshowdrop(!showdrop)
                            // }}
                            className={
                              showdrop
                                ? 'dropdown-menu megamenu show sm-menu border-top'
                                : 'dropdown-menu megamenu sm-menu border-top'
                            }
                            aria-labelledby='dropdown01'
                          >
                            <div className='row'>
                              {/* PRODUCT CATEGORIES */}
                              <div className='col-md-7 col-xl-3 mb-0 mb-xl-4 mx-auto'>
                                <div className='media'>
                                  <div className='media-body d-none d-xl-block'>
                                    <h4 className='mb-2'>Product Categories</h4>
                                    <ul>
                                      {categories?.length > 0 &&
                                        categories?.map((cat) => (
                                          <li>
                                            <Link to={`/Capsules/${cat?.id}`}>
                                              {cat?.name}
                                            </Link>
                                          </li>
                                        ))}
                                    </ul>
                                  </div>
                                  {/* will be visible on screens 1199px and below */}
                                  {/* {showherbaldropdown && ( */}
                                  <>
                                    <div className='media-body d-block d-xl-none'>
                                      <ul className='navbar-nav mr-auto'>
                                        <li className='nav-item dropdown'>
                                          <Link
                                            className='nav-link dropdown-toggle'
                                            to='#'
                                            id='megadropdown'
                                            onClick={() => {
                                              setshowdrop(true)
                                            }}
                                            role='button'
                                            data-toggle='dropdown'
                                            aria-expanded='false'
                                          >
                                            <h4
                                              className='mb-2'
                                              onClick={() => {
                                                setshowdrop(true)
                                              }}
                                            >
                                              Product Categories{' '}
                                              <i className='fas fa-caret-down fa-1x ml-1' />
                                            </h4>
                                          </Link>
                                          <div
                                            className='dropdown-menu'
                                            aria-labelledby='megadropdown'
                                          >
                                            {/* <Link
                                              to='/Consultation'
                                              className='dropdown-item'
                                            >
                                              Consultations
                                            </Link> */}
                                            {categories?.length > 0 &&
                                              categories?.map((cat) => (
                                                <li>
                                                  <a
                                                    href={`/Capsules/${cat?.id}`}
                                                    target='_self'
                                                  >
                                                    {cat?.name}
                                                  </a>
                                                </li>
                                              ))}
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </>
                                  {/* )} */}
                                </div>
                              </div>
                              {/* {showherbaldropdown && ( */}
                              <>
                                <div className='col-md-7 col-xl-3 mb-0 mb-xl-4 mx-auto'>
                                  <div className='media'>
                                    <div className='media-body d-none d-xl-block'>
                                      <h4 className='mb-2'>
                                        I need healing in...
                                      </h4>
                                      <ul>
                                        <li>
                                          <Link to='/MuscularSystem'>
                                            The Muscular System
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/IntegumentarySystem'>
                                            The Integumentary System
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/SkeletalSystem'>
                                            The Skeletal System
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/NervousSystem'>
                                            The Nervous System
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/UrinarySystem'>
                                            The Urinary System
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/DigestiveSystem'>
                                            The Digestive System
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/OralSystem'>
                                            The Oral Cavity System
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/RespiratorySystem'>
                                            The Respiratory System
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/CardioSystem'>
                                            The Cardiovascular System
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/LymphaticSystem'>
                                            The Lymphatic System
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/ReproductiveSystem'>
                                            The Reproductive System
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/EndocrineSystem'>
                                            The Endocrine System
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/BodySystem'>
                                            All Body Systems
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* will be visible on screens 1199px and below */}
                                    <div className='media-body d-block d-xl-none'>
                                      <ul className='navbar-nav mr-auto'>
                                        <li className='nav-item dropdown'>
                                          <Link
                                            onClick={() => {
                                              setshowdrop(true)
                                            }}
                                            className='nav-link dropdown-toggle'
                                            to='#'
                                            id='megadropdown'
                                            role='button'
                                            data-toggle='dropdown'
                                            aria-expanded='false'
                                          >
                                            <h4
                                              className='mb-2'
                                              onClick={() => {
                                                setshowdrop(true)
                                              }}
                                            >
                                              I need healing in...{' '}
                                              <i className='fas fa-caret-down fa-1x ml-1' />
                                            </h4>
                                          </Link>
                                          <div
                                            className='dropdown-menu'
                                            aria-labelledby='megadropdown'
                                          >
                                            <a
                                              target='_self'
                                              href='/MuscularSystem'
                                            >
                                              The Muscular System
                                            </a>
                                            <a
                                              target='_self'
                                              href='/IntegumentarySystem'
                                            >
                                              The Integumentary System
                                            </a>

                                            <a
                                              target='_self'
                                              href='/SkeletalSystem'
                                            >
                                              The Skeletal System
                                            </a>

                                            <a
                                              target='_self'
                                              href='/NervousSystem'
                                            >
                                              The Nervous System
                                            </a>

                                            <a
                                              target='_self'
                                              href='/UrinarySystem'
                                            >
                                              The Urinary System
                                            </a>

                                            <a
                                              target='_self'
                                              href='/DigestiveSystem'
                                            >
                                              The Digestive System
                                            </a>

                                            <a
                                              target='_self'
                                              href='/OralSystem'
                                            >
                                              The Oral Cavity System
                                            </a>

                                            <a
                                              target='_self'
                                              href='/RespiratorySystem'
                                            >
                                              The Respiratory System
                                            </a>

                                            <a
                                              target='_self'
                                              href='/CardioSystem'
                                            >
                                              The Cardiovascular System
                                            </a>

                                            <a
                                              target='_self'
                                              href='/LymphaticSystem'
                                            >
                                              The Lymphatic System
                                            </a>

                                            <a
                                              target='_self'
                                              href='/ReproductiveSystem'
                                            >
                                              The Reproductive System
                                            </a>

                                            <a
                                              target='_self'
                                              href='/EndocrineSystem'
                                            >
                                              The Endocrine System
                                            </a>

                                            <a
                                              target='_self'
                                              href='/BodySystem'
                                            >
                                              All Body Systems
                                            </a>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className='media-body d-none d-xl-block'>
                                      <h4 className='mb-2'>My Account</h4>
                                      <ul>
                                        <li>
                                          <Link
                                            to={userInfo ? '/EditProfile' : '#'}
                                            onClick={() => {
                                              !userInfo && UnauthorizedAlert()
                                            }}
                                          >
                                            Account Details
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to={userInfo ? '/MyCart' : '#'}
                                            onClick={() => {
                                              !userInfo && UnauthorizedAlert()
                                            }}
                                          >
                                            View My Cart
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to={userInfo ? '/Checkout' : '#'}
                                            onClick={() => {
                                              !userInfo && UnauthorizedAlert()
                                            }}
                                          >
                                            Checkout
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to={userInfo ? '/WishList' : '#'}
                                            onClick={() => {
                                              !userInfo && UnauthorizedAlert()
                                            }}
                                          >
                                            Wishlist
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to={userInfo ? '/OrderLog' : '#'}
                                            onClick={() => {
                                              !userInfo && UnauthorizedAlert()
                                            }}
                                          >
                                            Order Tracking
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to={
                                              userInfo ? '/DamageClaims' : '#'
                                            }
                                            onClick={() => {
                                              !userInfo && UnauthorizedAlert()
                                            }}
                                          >
                                            Damage Claims
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            to={
                                              userInfo
                                                ? '/AppointmentLogs'
                                                : '#'
                                            }
                                            onClick={() => {
                                              !userInfo && UnauthorizedAlert()
                                            }}
                                            // className="dropdown-item"
                                          >
                                            My Appointments
                                          </Link>
                                        </li>
                                      </ul>
                                    </div> */}
                                {/* will be visible on screens 1199px and below */}

                                <div className='col-md-7 col-xl-3 mb-0 mb-xl-4 mx-auto'>
                                  <div className='media'>
                                    <div className='media-body d-none d-xl-block'>
                                      <h4 className='mb-2'>Customer Support</h4>
                                      <ul>
                                        <li>
                                          <Link to='/Faqs'>
                                            Questions &amp; Answers
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/OrderandPayment'>
                                            Orders &amp; Payments
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/ShippingandPickup'>
                                            Shipping &amp; Pickups
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to='/ReturnsandRefund'>
                                            Returns &amp; Refunds
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    {/* will be visible on screens 1199px and below */}
                                    <div className='media-body d-block d-xl-none'>
                                      <ul className='navbar-nav mr-auto'>
                                        <li className='nav-item dropdown'>
                                          <Link
                                            onClick={() => {
                                              setshowdrop(true)
                                            }}
                                            className='nav-link dropdown-toggle'
                                            to='#'
                                            id='megadropdown'
                                            role='button'
                                            data-toggle='dropdown'
                                            aria-expanded='false'
                                          >
                                            <h4
                                              className='mb-2'
                                              onClick={() => {
                                                setshowdrop(true)
                                              }}
                                            >
                                              Customer Support{' '}
                                              <i className='fas fa-caret-down fa-1x ml-1' />
                                            </h4>
                                          </Link>
                                          <div
                                            className='dropdown-menu'
                                            aria-labelledby='megadropdown'
                                          >
                                            <a
                                              target={'_self'}
                                              href='/Faqs'
                                              className='dropdown-item'
                                            >
                                              Questions &amp; Answers
                                            </a>
                                            <a
                                              target={'_self'}
                                              href='/OrderandPayment'
                                              className='dropdown-item'
                                            >
                                              Orders &amp; Payments
                                            </a>
                                            <a
                                              target={'_self'}
                                              href='/ShippingandPickup'
                                              className='dropdown-item'
                                            >
                                              Shipping &amp; Pickups
                                            </a>
                                            <a
                                              target={'_self'}
                                              href='/ReturnsandRefund'
                                              className='dropdown-item'
                                            >
                                              Returns &amp; Refunds
                                            </a>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </>
                              {/* )} */}
                            </div>
                          </div>
                        </li>
                        <li className='nav-item'>
                          <a
                            target={'_self'}
                            className='nav-link'
                            href='/Consultation'
                          >
                            Consultations
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a
                            className='nav-link'
                            href='#'
                            data-toggle='modal'
                            data-target='#clientModal'
                          >
                            CLIENT PORTAL
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a
                            className='nav-link'
                            target={'_self'}
                            href='/GeoGenetics'
                          >
                            GEO'GENETICS THERAPY
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a
                            className='nav-link'
                            href='#'
                            data-toggle='modal'
                            data-target='#yahkitvModal'
                          >
                            YAHKITV
                          </a>
                        </li>

                        <li className='nav-item dropdown'>
                          <Link
                            className='nav-link dropdown-toggle'
                            data-toggle='dropdown'
                            to='#'
                          >
                            EDUCATION
                          </Link>
                          <ul className='dropdown-menu yahki-dropdown'>
                            <li>
                              <a target={'_self'} href='/EattotLive'>
                                Eat to Live
                              </a>
                            </li>
                            <li>
                              <a target={'_self'} href='/Instruction'>
                                Instructions
                              </a>
                            </li>
                            <li>
                              <a target={'_self'} href='/BodySystem'>
                                12 Body Systems
                              </a>
                            </li>
                            <li>
                              <a target={'_self'} href='/ApprovedHerb'>
                                YAH'KI Approved Herbs
                              </a>
                            </li>
                            <li>
                              <a target={'_self'} href='/ProductResource'>
                                List of Resources
                              </a>
                            </li>
                            <li>
                              <a target={'_self'} href='/Document'>
                                Document Downloads
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='nav-item'>
                          <a
                            className='nav-link'
                            href='/Events'
                            target={'_self'}
                            // data-toggle="modal"
                            // data-target="#detoxModal"
                          >
                            Events
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a
                            className='nav-link'
                            href='#'
                            data-toggle='modal'
                            data-target='#detoxModal'
                          >
                            Detox Home
                          </a>
                        </li>
                        <li className='nav-item dropdown'>
                          <a
                            className='nav-link dropdown-toggle'
                            data-toggle='dropdown'
                            href='#'
                          >
                            OUR COMPANY
                          </a>
                          <ul className='dropdown-menu yahki-dropdown'>
                            <li>
                              <a target='_self' href='/AboutCompany'>
                                About our Company
                              </a>
                            </li>
                            <li>
                              <a target='_self' href='/MasterHerbalist'>
                                Master Herbalist
                              </a>
                            </li>
                            <li>
                              <a target='_self' href='/MeettheTeam'>
                                Meet The Team
                              </a>
                            </li>
                            <li>
                              <a target='_self' href='/Contactus'>
                                Get in Touch
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className='nav-item'>
                          <a target='_self' href='/Donate' className='nav-link'>
                            DONATIONS
                          </a>
                        </li>
                        <li className='nav-item'>
                          <ul className='list-inline menu-icons'>
                            {userInfo ? (
                              <li className='list-inline-item'>
                                <div className='btn-group'>
                                  <button
                                    type='button'
                                    className='btn'
                                    data-toggle='dropdown'
                                    aria-haspopup='true'
                                    aria-expanded='false'
                                  >
                                    <a href='#' className='mr-2'>
                                      <i className='far fa-user' />
                                    </a>{' '}
                                  </button>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    {/* <button className="dropdown-item" type="button">
                                Action
                              </button> */}
                                    <Link
                                      className='dropdown-item'
                                      to='/EditProfile'
                                    >
                                      My Account
                                    </Link>
                                    <button
                                      className='dropdown-item'
                                      type='button'
                                      onClick={() => {
                                        logOutHandler()
                                      }}
                                    >
                                      Logout
                                    </button>
                                  </div>
                                </div>
                              </li>
                            ) : (
                              <li className='list-inline-item'>
                                <Link
                                  to='#'
                                  className='mr-2'
                                  data-toggle='modal'
                                  data-target='#loginModal'
                                >
                                  <i className='far fa-user' />
                                </Link>
                              </li>
                            )}
                            {userInfo && (
                              <li className='list-inline-item'>
                                <Link to='/Notification' className='mr-2'>
                                  <i className='fas fa-bell' />
                                </Link>
                              </li>
                            )}
                            <li className='list-inline-item'>
                              <Link to='/Capsules' className='mr-2'>
                                <i className='fas fa-search' />
                              </Link>
                            </li>
                            <li className='list-inline-item'>
                              <Link
                                to={userInfo ? '/WishList' : '#'}
                                onClick={() => {
                                  !userInfo && UnauthorizedAlert()
                                }}
                                className='mr-2'
                              >
                                <i className='far fa-heart' />
                              </Link>
                            </li>
                            <li className='list-inline-item'>
                              <div className='position-relative'>
                                <Link
                                  to={userInfo ? '/MyCart' : '#'}
                                  onClick={() => {
                                    !userInfo && UnauthorizedAlert()
                                  }}
                                >
                                  <i className='fas fa-shopping-bag' />
                                  <span className='cart-count'>
                                    {cartItems?.length}
                                  </span>
                                </Link>
                              </div>
                            </li>
                            <li className='list-inline-item'>
                              <select name id='switcher'>
                                <option value>USD</option>
                              </select>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  {/* {window?.location?.pathname?.includes('Login') ||
                  window?.location?.pathname?.includes('Signup') ||
                  window?.location?.pathname?.includes('PasswordRecovery') ||
                  window?.location?.pathname?.includes('VerificationCode') ||
                  window?.location?.pathname?.includes(
                    'ResetPassword'
                  ) ? null : ( */}
                  <>
                    <div className='tabheight'>
                      <h1
                        className='banner-h2 aos-init aos-animate bannerheading'
                        style={{ fontSize: 44 }}
                      >
                        THE WORLDS #1 HIGHEST QUALITY WILD CRAFTED HERBS &
                        HERBAL PROGRAMS
                      </h1>
                      <p
                        className='bannerpara'
                        style={{ lineHeight: '10px !important' }}
                      >
                        Intracellular Detoxification, Cellular Regeneration, &
                        Holistic Revitalization, Yah'ki Awakened Keeps Everyone
                        Healthy
                      </p>
                      <div className='btn-main'>
                        <Link
                          to='/Signup'
                          className='btn banner-btn aos-init aos-animate mt-3 abccc'
                          data-aos='zoom-in-left'
                          data-aos-duration={1500}
                          style={{
                            backgroundColor: '#528900',
                            border: 'none',
                            fontFamily:
                              'Soleil_Bold,Helvetica,Arial,sans-serif',
                            fontWeight: 'bold',
                          }}
                          data-aos-delay={400}
                        >
                          Membership Signup
                        </Link>
                        {/* <Link
                    to={userInfo ? '/EditProfile' : '/Login'}
                    // onClick={() => {
                    //   !userInfo && UnauthorizedAlert()
                    // }}
                    className='btn utb banner-btn aos-init aos-animate mt-3 abccc '
                    data-aos='zoom-in-left'
                    data-aos-duration={1500}
                    style={{
                      backgroundColor: '#00a82d',
                      border: 'none',
                      fontFamily: 'Soleil_Bold,Helvetica,Arial,sans-serif',
                      fontWeight: 'bold',
                    }}
                    data-aos-delay={400}
                  >
                    {userInfo ? 'My Profile' : 'Login'}
                  </Link> */}
                      </div>
                    </div>
                  </>
                  {/* )} */}
                </div>
                {/* {window?.location?.pathname?.includes('Login') ||
                window?.location?.pathname?.includes('Signup') ||
                window?.location?.pathname?.includes('PasswordRecovery') ||
                window?.location?.pathname?.includes('VerificationCode') ||
                window?.location?.pathname?.includes('ResetPassword') ? null : ( */}

                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className='modal fade'
        id='loginModal'
        tabIndex={-1}
        aria-labelledby='exampleModalCenterTitle'
        style={{ display: 'none' }}
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-md modal-dialog-centered '
          role='document'
        >
          <div className='modal-content py-5'>
            {/* <button type="button" class="close text-right mr-1 mt-1" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&#10006;</span>
      </button> */}
            <div className='pt-1 pb-5 px-sm-5 px-1'>
              <div className='text-center'>
                <h2 className=' mt-2'>LOGIN</h2>
              </div>
              <div className='text-center mt-2'>
                <form id='modalForm'>
                  <label htmlFor className='my-label'>
                    Email Address <span className='red'>*</span>
                  </label>
                  <input
                    type='email'
                    className='form-control my-textbox'
                    placeholder='Enter Email Address'
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value)
                    }}
                  />
                </form>
                {!loading ? (
                  <Link
                    to='#'
                    className='btn red-btn-solid mt-2'
                    data-dismiss='modal'
                    onClick={() =>
                      email?.length > 0
                        ? submitHandler()
                        : Toasty(
                            'error',
                            `Please fill out all the required fields`
                          )
                    }
                  >
                    Login
                  </Link>
                ) : (
                  <i className='fas fa-spinner fa-pulse'></i>
                )}
                <p className='modal-note'>
                  Don't Have Account?{' '}
                  <Link
                    to='/Signup'
                    onClick={() => {
                      window?.$('.modal').modal('hide')

                      window?.$('.modal-backdrop').remove()
                    }}
                    className='red'
                  >
                    Register!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='modal fade logout-modal p-0'
        data-bs-backdrop='static'
        data-keyboard='false'
        tabIndex={-1}
        id='detoxModal'
        aria-labelledby
        aria-hidden='true'
      >
        <div className='modal-dialog modal-md modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body text-center pt-5 pb-3'>
              <div className='modal-img'>
                <i className='fas fa-check' />
              </div>
              <h3 className='modal-title pt-3' />
              <p className='modal-sub-content'>
                New &amp; Improved Detox Experience Coming Soon Booking
                Currently Not Available"
              </p>
            </div>
            <div className='modal-footer justify-content-center'></div>
          </div>
        </div>
      </div>

      <div
        className='modal fade logout-modal p-0'
        data-bs-backdrop='static'
        data-keyboard='false'
        tabIndex={-1}
        id='clientModal'
        aria-labelledby
        aria-hidden='true'
      >
        <div className='modal-dialog modal-md modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body text-center pt-5 pb-3'>
              <div className='modal-img'>
                <i className='fas fa-check' />
              </div>
              <h3 className='modal-title pt-3' />
              <p className='modal-sub-content'>
                New &amp; Improved Client Portal Coming Soon Booking Currently
                Not Available"
              </p>
            </div>
            <div className='modal-footer justify-content-center'></div>
          </div>
        </div>
      </div>

      <div
        className='modal fade logout-modal p-0'
        data-bs-backdrop='static'
        data-keyboard='false'
        tabIndex={-1}
        id='yahkitvModal'
        aria-labelledby
        aria-hidden='true'
      >
        <div className='modal-dialog modal-md modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body text-center pt-5 pb-3'>
              <div className='modal-img'>
                <i className='fas fa-check' />
              </div>
              <h3 className='modal-title pt-3' />
              <p className='modal-sub-content'>
                New &amp; Improved Yahki TV Coming Soon Currently Not Available"
              </p>
            </div>
            <div className='modal-footer justify-content-center'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
