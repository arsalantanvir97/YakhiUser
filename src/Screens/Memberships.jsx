import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { becomemember, userMemberAction } from '../actions/userAction'
import AllHerbs from '../components/AllHerbs'
import Diseases from '../components/Diseases'
import Select from 'react-select'
import DatePicker from 'react-datepicker'

import csc from 'country-state-city'
import MainHeader from '../components/MainHeader'
import Autocomplete from '../components/Autocomplete'
import InputNumber from '../components/InputNumber'
import InputPhone from '../components/InputPhone'
// import MainHeader from '../components/MainHeader'
import { Signature } from '../components/Signature'
import ToggleBack from '../components/ToggleBack'
import api from '../utils/api'
import Toasty from '../utils/toast'
import UnauthorizedAlert from '../components/UnauthorizedAlert'
import Swal from 'sweetalert2'
import DatePick from '../components/DatePick'
import Header from '../components/Header'
const isWindowContext = typeof window !== 'undefined'

let filee = ''
const Memberships = ({
  pathname,
  onSubmit,
  handleStep,
  handleChange,
  setFormState,
  formState,
  history,
}) => {
  const [formData, setformData] = useState({
    country: '',
    state: null,
    city: null,
    country2: '',
    state2: null,
    city2: null,
  })
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.replace('/')
    }
  }, [userInfo])
  const countries = csc.getAllCountries()

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }))
  const [address, setaddress] = useState('')
  const [hearaboutus, sethearaboutus] = useState('')

  const [geolocation, setgeolocation] = useState([])
  const [dob, setdob] = useState('')
  const [visible, setvisible] = useState(false)
  const [visible2, setvisible2] = useState(false)
  const [visible3, setvisible3] = useState(false)
  const [modal, setmodal] = useState(false)
  const [modal2, setmodal2] = useState(false)
  const [modal3, setmodal3] = useState(false)

  const updatedStates = (countryId) =>
    csc
      .getStatesOfCountry(countryId)
      .map((state) => ({ label: state.name, value: state.id, ...state }))
  const updatedCities = (stateId) =>
    csc
      .getCitiesOfState(stateId)
      .map((city) => ({ label: city.name, value: city.id, ...city }))
  const handleLocation = (
    latitude,
    longitude,
    address,
    city,
    state,
    country,
    zip_code
  ) => {
    console.log(
      'handleLocation',
      latitude,
      longitude,
      address,
      city,
      state,
      country,
      zip_code
    )

    setaddress(address)
    setgeolocation([latitude, longitude])
  }
  useEffect(() => {
    console.log('dob', dob)
  }, [dob])

  const [allValues, setAllValues] = useState({
    firstName: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    zipcode: '',
    country: '',
    password: '',

    city: '',
    state: '',
    termsservices: '',
    privacypolicy: '',
    membershipstatus: '',
  })
  const changeHandler = (e, namee) => {
    setAllValues({
      ...allValues,
      [namee ? namee : e?.target?.name]: namee ? e : e?.target?.value,
    })
  }
  useEffect(() => {
    console.log('allValues', allValues)
  }, [allValues])
  const handleChangeHandler = (value, setvalue, mod, setmod) => {
    console.log('value', value)
    if (value == true || value == null) {
      setmod(!mod)
      console.log('abcc')
    } else {
      setvalue(true)
    }
  }
  const closeModalHandler = async (setvalue) => {
    console.log('closeModalHandler')
    var element = document.getElementById('overlay')
    element.classList.remove('show')
    await setvalue(null)
  }
  const closeModalHandler2 = () => {
    isWindowContext && window?.$('#overlay').remove('show')
    console.log('closeModalHandler2')
    window?.location?.reload()
  }
  const SubmitHandler = async () => {
    // console.log(
    //   'allValues?.firstName?.length',
    //   allValues?.firstName?.length,
    //   allValues?.lastname?.length,
    //   allValues?.email?.length,
    //   allValues?.phone?.length,
    //   address?.length,
    //   hearaboutus?.length,
    //   allValues?.zipcode?.length,
    //   formData?.country?.name?.length,
    //   formData?.state?.name?.length,
    //   formData?.city?.name?.length
    // )
    try {
      if (
        allValues?.firstName?.length > 0 &&
        allValues?.password?.length > 0 &&
        allValues?.lastname?.length > 0 &&
        allValues?.email?.length > 0 &&
        allValues?.phone?.length > 0 &&
        address?.length > 0 &&
        hearaboutus?.length > 0 &&
        formData?.country?.name?.length > 0 &&
        formData?.state?.name?.length > 0 &&
        formData?.city?.name?.length > 0
      ) {
        const body = {
          firstname: allValues?.firstName,
          lastname: allValues?.lastname,
          email: allValues?.email,
          phone: allValues?.phone,
          password: allValues?.password,

          address: address,
          hearaboutus: hearaboutus,
          zipcode: allValues?.zipcode,
          country: formData?.country?.name,
          city: formData?.city?.name,
          state: formData?.state?.name,
          dob: dob,
        }
        dispatch(becomemember(body, history))
      } else {
        Toasty('error', `Please fill out all the required fields`)
      }
    } catch (error) {}
  }
  return (
    <>
      {' '}
      <Header />
      <MainHeader />
      <div>
        <section className='about-page'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-11 mx-auto'>
                <ToggleBack name={`Memberships`} />
                <div className='row mb-5 pb-5'>
                  <div className='col-md-12 text-center'>
                    <h3 className='main-heading mem-head'>
                      Free Club Membership Registration
                    </h3>
                    <p className='general-para px-sm-5'>
                      Complete the form and you're in.
                    </p>
                  </div>
                </div>
                {/* MEMBERSHIP PACKAGES */}
                <div className='row'>
                  <div className='col-xl-12 col-lg-12 col-md-12'>
                    <div className='consultation-form'>
                      <div className='form-group'>
                        <div className='form-row'>
                          <div className='col-md-6'>
                            <label>
                              First Name <span className='red'>*</span>
                            </label>
                            <input
                              className='form-control'
                              placeholder='Enter First Name'
                              type='text'
                              value={allValues?.firstName}
                              onChange={changeHandler}
                              name='firstName'
                            />
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Last Name <span className='red'>*</span>
                            </label>
                            <input
                              className='form-control'
                              placeholder='Enter Last Name'
                              type='text'
                              value={allValues?.lastname}
                              onChange={changeHandler}
                              name='lastname'
                            />
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Email <span className='red'>*</span>
                            </label>
                            <input
                              className='form-control'
                              placeholder='Enter Email'
                              type='email'
                              value={allValues?.email}
                              onChange={changeHandler}
                              name='email'
                            />
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Password <span className='red'>*</span>
                            </label>
                            <input
                              className='form-control'
                              placeholder='Enter Email'
                              type='password'
                              value={allValues?.password}
                              onChange={changeHandler}
                              name='password'
                            />
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Phone <span className='red'>*</span>
                            </label>
                            <InputPhone
                              unique={true}
                              uniquevalue={allValues}
                              name={'phone'}
                              value={allValues?.phone}
                              onChange={setAllValues}
                            />
                          </div>

                          <div className='col-md-6'>
                            <label htmlFor className='pading-lable'>
                              Country <span className='red'>*</span>
                            </label>
                            <Select
                              id='country'
                              name='country'
                              label='country'
                              options={updatedCountries}
                              value={formData?.country}
                              onChange={(value) => {
                                setformData({
                                  ...formData,
                                  country: value,
                                  state: null,
                                  city: null,
                                })
                                // setFormState({
                                //   ...formState,
                                //   sender: {
                                //     ...formState?.sender,
                                //     country: value.name,
                                //     state: '',
                                //     city: '',
                                //   },
                                // })
                              }}
                            />{' '}
                          </div>

                          <div className='col-md-6'>
                            <label htmlFor className='pading-lable'>
                              State <span className='red'>*</span>
                            </label>
                            <Select
                              id='state'
                              name='state'
                              options={updatedStates(
                                formData.country ? formData.country.value : null
                              )}
                              value={formData.state}
                              onChange={(value) => {
                                setformData({
                                  ...formData,
                                  state: value,
                                  city: null,
                                })
                                // setFormState({
                                //   ...formState,
                                //   sender: {
                                //     ...formState?.sender,
                                //     state: value.name,
                                //     city: '',
                                //   },
                                // })
                              }}
                            />
                          </div>
                          <div className='col-md-6'>
                            <label htmlFor className='pading-lable'>
                              City <span className='red'>*</span>
                            </label>
                            <Select
                              id='city'
                              name='city'
                              options={updatedCities(
                                formData.state ? formData.state.value : null
                              )}
                              value={formData.city}
                              onChange={(value) => {
                                setformData({ ...formData, city: value })
                                // setFormState({
                                //   ...formState,
                                //   sender: {
                                //     ...formState?.sender,
                                //     city: value.name,
                                //   },
                                // })
                              }}
                            />
                          </div>

                          <div className='col-md-6'>
                            <label>
                              Address
                              <span className='red'>*</span>
                            </label>
                            <Autocomplete handleLocation={handleLocation} />
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Zip Code <span className='red'>*</span>
                            </label>
                            <InputNumber
                              unique={true}
                              uniquevalue={allValues}
                              name={'zipcode'}
                              onChange={setAllValues}
                              value={allValues?.zipcode}
                              max={105}
                              className='form-control'
                            />
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Birth Date <span className='red'>*</span>
                            </label>
                            <DatePick
                              name={'dob'}
                              // minDate={moment().toDate()}
                              // isValidDate={disableWeekends}
                              dob={dob}
                              setdob={setdob}
                              className='sort-date customdate form-control'
                            />{' '}
                          </div>
                          <div className='col-md-12'>
                            <label>
                              Where did you hear about us
                              <span className='red'>*</span>
                            </label>
                            <div className='row mb-4'>
                              <div className='col-md-6'>
                                <div className='pricing'>
                                  <div>
                                    <input
                                      type='radio'
                                      id='html'
                                      name='fav_language'
                                      value={'Blog Post'}
                                      onChange={() => {
                                        sethearaboutus('Blog Post')
                                      }}
                                    />
                                    <div
                                      className='social-icon envelope-icon'
                                      data-toggle='tooltip'
                                      data-placement='right'
                                      title='Blog Post'
                                    >
                                      <Link to='#'>
                                        <i className='fab fa-blog' />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-6'>
                                <div className='pricing'>
                                  <div>
                                    <input
                                      type='radio'
                                      id='html2'
                                      name='fav_language'
                                      value={'Article'}
                                      onChange={() => {
                                        sethearaboutus('Article')
                                      }}
                                    />
                                    <div
                                      className='social-icon envelope-icon '
                                      data-toggle='tooltip'
                                      data-placement='right'
                                      title='Article'
                                    >
                                      <Link to='#'>
                                        <i className='fab fa-newspaper' />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='row mb-4'>
                              <div className='col-md-6'>
                                <div className='pricing'>
                                  <div>
                                    <input
                                      type='radio'
                                      id='html3'
                                      name='fav_language'
                                      value={'Google'}
                                      onChange={() => {
                                        sethearaboutus('Google')
                                      }}
                                    />
                                    <div
                                      className='social-icon google-icon'
                                      data-toggle='tooltip'
                                      data-placement='right'
                                      title='Google'
                                    >
                                      <Link to='#'>
                                        <i className='fab fa-google' />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-6'>
                                <div className='pricing'>
                                  <div>
                                    <input
                                      type='radio'
                                      id='html4'
                                      name='fav_language'
                                      value={'Facebook'}
                                      onChange={() => {
                                        sethearaboutus('Facebook')
                                      }}
                                    />
                                    <div
                                      className='social-icon face-icon'
                                      data-toggle='tooltip'
                                      data-placement='right'
                                      title='Facebook'
                                    >
                                      <Link to='#'>
                                        <i className='fab fa-facebook-f ' />
                                      </Link>
                                    </div>
                                    {/* <label for={750}> Facebook</label>{' '} */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='row mb-4'>
                              <div className='col-md-6'>
                                <div className='pricing'>
                                  <div>
                                    <input
                                      type='radio'
                                      id='html5'
                                      name='fav_language'
                                      value={'Instagram'}
                                      onChange={() => {
                                        sethearaboutus('Instagram')
                                      }}
                                    />
                                    <div
                                      className='social-icon insta-icon'
                                      data-toggle='tooltip'
                                      data-placement='right'
                                      title='Instagram'
                                    >
                                      <Link to='#'>
                                        <i className='fab fa-instagram' />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-6'>
                                <div className='pricing'>
                                  <div>
                                    <input
                                      type='radio'
                                      id='html6'
                                      name='fav_language'
                                      value={'TikTok'}
                                      onChange={() => {
                                        sethearaboutus('TikTok')
                                      }}
                                    />
                                    <div
                                      className='social-icon envelope-icon'
                                      data-toggle='tooltip'
                                      data-placement='right'
                                      title='TikTok'
                                    >
                                      <Link to='#'>
                                        <img
                                          src='/images/tiktok.png'
                                          alt=''
                                          className='img-fluid'
                                        />{' '}
                                        {/* <i class='fab fa-tiktok'></i> */}
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='row mb-4'>
                              <div className='col-md-6'>
                                <div className='pricing'>
                                  <div>
                                    <input
                                      type='radio'
                                      id='html7'
                                      name='fav_language'
                                      value={'Twitter'}
                                      onChange={() => {
                                        sethearaboutus('Twitter')
                                      }}
                                    />
                                    <div
                                      className='social-icon  msg-icon'
                                      data-toggle='tooltip'
                                      data-placement='right'
                                      title='Twitter'
                                    >
                                      <Link to='#'>
                                        <i className='fab fa-twitter' />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-6'>
                                <div className='pricing'>
                                  <div>
                                    <input
                                      type='radio'
                                      id='html8'
                                      name='fav_language'
                                      value={'YouTube'}
                                      onChange={() => {
                                        sethearaboutus('YouTube')
                                      }}
                                    />
                                    <div
                                      className='social-icon youtube-icon'
                                      data-toggle='tooltip'
                                      data-placement='right'
                                      title='YouTube'
                                    >
                                      <Link to='#'>
                                        <i className='fab fa-youtube' />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='row mb-4'>
                              <div className='col-md-6'>
                                <div className='pricing'>
                                  <div>
                                    <input
                                      type='radio'
                                      id='htm9l'
                                      name='fav_language'
                                      value={'Word of Mouth'}
                                      onChange={() => {
                                        sethearaboutus('Word of Mouth')
                                      }}
                                    />
                                    <div
                                      className='social-icon envelope-icon'
                                      data-toggle='tooltip'
                                      data-placement='right'
                                      title='Word of Mouth'
                                    >
                                      <Link to='#'>
                                        <i className='fab fa-users' />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='hovv col-md-6'>
                            <label>
                              Membership Rules and Privacy Policy{' '}
                              <span className='red'>*</span>
                            </label>
                            <div className='checkbox-group mt-4'>
                              <input
                                type='checkbox'
                                id='html11'
                                checked={modal == true}
                                onClick={() => {
                                  handleChangeHandler(
                                    visible,
                                    setvisible,
                                    modal,
                                    setmodal
                                  )
                                  // setvisible(true)
                                }}
                              />
                              <label htmlFor='html11'>
                                <span>I Agree to Terms of Services</span>{' '}
                              </label>
                            </div>
                            <div className='checkbox-group mt-4'>
                              <input
                                type='checkbox'
                                checked={modal2 == true}
                                id='html12'
                                onClick={() => {
                                  handleChangeHandler(
                                    visible2,
                                    setvisible2,
                                    modal2,
                                    setmodal2
                                  )

                                  // setvisible2(true)
                                }}
                              />
                              <label htmlFor='html12'>
                                <span> I Agree to Membership Disclaimer</span>{' '}
                              </label>
                            </div>
                            <div className='checkbox-group mt-4'>
                              <input
                                type='checkbox'
                                checked={modal3 == true}
                                id='html13'
                                onClick={() => {
                                  handleChangeHandler(
                                    visible3,
                                    setvisible3,
                                    modal3,
                                    setmodal3
                                  )

                                  // setvisible3(true)
                                }}
                              />
                              <label htmlFor='html13'>
                                <span>I Agree to Shipping Policy</span>{' '}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='btn-main' style={{ textAlign: 'center' }}>
                        <Link
                          to='#'
                          onClick={() => {
                            modal == true && modal2 == true && modal3 == true
                              ? SubmitHandler()
                              : Toasty(
                                  'error',
                                  `You first have to agree to our Membership Rules and Privacy Policy`
                                )
                          }}
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
                          Submit
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <AllHerbs />
      <div
        className={visible == true ? 'modal fade show' : 'modal fade'}
        id='overlay'
      >
        <div className='modal-dialog modal-xl'>
          <div className='modal-content'>
            <div className='termspopupcontainer'>
              <h3 className='termstitle'>
                Yahki Awakened Eye of Lotus Health Club Terms of Use
              </h3>
              <div className='termscontentwrapper'>
                <div id='wp-terms-popup-content'>
                  <div>
                    <div className='wbp_wrapper'>
                      <h4 style={{ textAlign: 'center', marginTop: 4 }}>
                        Before Continuing to this Website, You must agree to Our
                        Terms of Use, Privacy Policy and Health Club Disclaimer
                      </h4>
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '14pt', fontWeight: 'bold' }}>
                          <strong>Terms and Services</strong>
                        </span>
                      </p>
                      <div className='col-12 mt-3'>
                        <p>
                          Our services, tools, and products are only available
                          to registered members. By visiting our site and/or
                          purchasing our products and/or services you affirm
                          that you are a Yah’ki Awakened Eye of Lotus Botanical
                          Club member and that you agree and are bound by the
                          following terms and conditions. These terms and
                          conditions apply to all members who use this site.
                          Members are defined as customers, merchants, browsers,
                          and/ or vendors.
                        </p>
                        <p className='my-3 mt-2'>
                          We reserve the right to update, change, or replace any
                          part of these Terms of Use by posting updates and or
                          changes to our website. Your continued use of or
                          access to this website after a subsequent change
                          establishes acceptance of those changes. PayPal and
                          Sezzle is the online commerce platforms in which we
                          sell products and services from our store.
                        </p>
                        <div className='col-12 mt-5 pl-0'>
                          <strong>GENERAL CONDITIONS</strong>
                        </div>
                        <p className='my-3 mt-2'>
                          <span style={{ fontWeight: 'bold', color: 'black' }}>
                            Yahki Awakened Eye of Lotus Botanical Health Club
                          </span>{' '}
                          is a Private Health club and refuses all services to
                          non-members. As a member you agree not to duplicate or
                          sale any products or portions of the website.
                        </p>

                        <div className='col-12 mt-5 pl-0'>
                          <strong>PRODUCTS & SERVICES CONDITIONS</strong>
                        </div>

                        <p className='my-3 mt-2'>
                          Members of the Yah’ki Awakened Eye of Lotus Botanical
                          Health Club must be at least the age of majority as
                          designated by your state of residence.
                        </p>
                        <p className='my-3 mt-2'>
                          All products and services are only available to
                          members. We do not accept returns, refunds, or
                          exchanges. If purchased items are damaged in transit,
                          a new package will be sent upon the return of the
                          damaged package. A damage form or email must be sent
                          within seven (7) days of receiving your package
                          alerting us of the damage.
                        </p>
                        <p className='my-3 mt-2'>
                          If you choose to send an email, send it to
                          info@yahkiawakened.com and please include your name, a
                          detailed description of the damage, a photo, the order
                          number, and the tracking number.
                        </p>
                        <p className='mt-2'>
                          We do not issue refunds on any premium membership
                          subscription purchases whatsoever. You are free to
                          downgrade, pause or cancel your Melanin Gold or
                          Melanin Silver membership at any time. If you are
                          having issues accessing your membership account, you
                          must fill out a membership issues ticket and our
                          memberships department will assist you.
                        </p>
                      </div>
                      {/* Tracking Technologies and Cookies */}
                      <div className='col-12 mt-2'>
                        <div className='col-12  pl-0'>
                          <strong>
                            SERVICE MODIFICATIONS AND PRICE ADJUSTMENTS
                          </strong>
                        </div>
                        <p className='mt-2'>
                          We reserve the right to change or terminate any
                          services or products without notice at any time. We
                          also reserve the right to adjust prices of our
                          products and services at our discretion as necessary.
                        </p>
                        <div className='col-12  pl-0'>
                          <strong>BILLING</strong>
                        </div>
                        <p className='mt-2'>
                          As a member you agree to provide accurate account
                          information which includes full name, address, phone
                          number, email address, and credit card information. An
                          accurate account ensures that we are able to contact
                          to you in the event we need to make a change to or
                          cancel your order.
                        </p>
                        <div className='col-12  pl-0'>
                          <strong>THIRD PARTY LINKS</strong>
                        </div>
                        <p className='mt-2'>
                          As a member you can access third party products. We
                          are not directly affiliated with any third-party
                          websites that are accessible on the website. We are
                          not responsible for third party products or materials.
                          We are not liable for any damages related to any
                          third-party products. Any questions, complaints, or
                          concerns related to third party products should be
                          addressed directed to the third-party entity.
                        </p>
                        <div className='col-12  pl-0'>
                          <strong>TESTIMONIES, FEEDBACK, AND COMMENTS</strong>
                        </div>
                        <p className='mt-2'>
                          If at any time you send testimonies, ideas, and other
                          materials by email, chat, or by mail you agree that we
                          may edit, copy, publish, distribute and use any
                          material that is sent to us. We are not obligated to
                          pay compensation for any comments or respond to any
                          comments. We may remove any content that we feel is
                          inappropriate an or violates the terms of this
                          agreement. You are responsible for your own comments
                          and we will assume no liability for your comments.
                        </p>
                        <div className='col-12  pl-0'>
                          <strong>ERRORS, TYPOS, AND EXCEPTIONS</strong>
                        </div>
                        <p className='mt-2'>
                          Typographical errors may occur on our website. We
                          reserve the right to correct any errors related to
                          products, services, and their availability.
                        </p>
                        <div className='col-12  pl-0'>
                          <strong>FORBIDDEN ACTIONS AND TERMINATION</strong>
                        </div>
                        <p className='mt-2'>
                          Use of the website is forbidden to any person who is
                          not a member. There are no group or family
                          memberships; each individual must sign up separately.
                          It is prohibited to use this website for unlawful
                          acts, any associates with federal, state, or local
                          government agencies, for the purpose of abuse,
                          harassment, or discrimination, and to collect personal
                          information of others. Violation of these terms will
                          result in immediate termination of membership.
                        </p>
                        <p className='mt-2'>
                          As a member, you agree that you will not fraudulently
                          sign up for any membership tier. We are not
                          responsible for any membership obtained through
                          fraudulent or other activity that violates these
                          Terms. If we suspect illegal activity, fraud,
                          misrepresentation, abuse or violation of these Terms,
                          we also have the right to take appropriate legal
                          action, in our sole discretion.
                        </p>{' '}
                        <p className='mt-2'>
                          You agree that you will not sign up for a membership,
                          purchase products, download and/or copy the contents
                          of this site and later open a dispute with our
                          merchant processors to file a claim. You agree to give
                          us an opportunity to resolve any disputes or claims
                          relating in any way to the Services, any dealings with
                          our customer service agents, any services or products
                          provided, any representations made by us, or our
                          Privacy Policy.
                        </p>{' '}
                        <p className='mt-2'>
                          As a member you have the right to terminate your
                          membership at any time by notifying us that you wish
                          to cancel your membership. If you decide to cancel
                          your membership you will no longer have access to our
                          website, products, or services. If you fail to comply
                          with our Terms of Service and conditions for the
                          Yah’ki Awakened Eye of Lotus Botanical Health Club, we
                          may terminate your membership at any time.
                        </p>{' '}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='button'>
                  <button
                    type='button'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                    onClick={async () => {
                      await closeModalHandler(setvisible)
                      handleChangeHandler(visible, setvisible, modal, setmodal)
                      // setvisible(true)
                    }}
                  >
                    I agree
                  </button>
                  <button
                    data-bs-dismiss='modal'
                    aria-label='Close'
                    style={{ backgroundColor: 'black' }}
                    onClick={() => {
                      closeModalHandler2()
                    }}
                  >
                    I disagree
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={visible2 == true ? 'modal fade show' : 'modal fade'}
        id='overlay'
      >
        <div className='modal-dialog modal-xl'>
          <div className='modal-content'>
            <div className='termspopupcontainer'>
              <h3 className='termstitle'>
                Yahki Awakened Eye of Lotus Health Club Terms of Use
              </h3>
              <div className='termscontentwrapper'>
                <div id='wp-terms-popup-content'>
                  <div>
                    <div className='wbp_wrapper'>
                      <h4 style={{ textAlign: 'center', marginTop: 4 }}>
                        Before Continuing to this Website, You must agree to Our
                        Terms of Use, Privacy Policy and Health Club Disclaimer
                      </h4>
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '14pt', fontWeight: 'bold' }}>
                          <strong>
                            POTENTIAL CLIENT DISCLAIMER AND LIABILITY
                            INFORMATION
                          </strong>
                        </span>
                      </p>
                      <p>
                        <strong>
                          Yah’ki Awakened Eye of Lotus Botanical Club
                        </strong>
                        &nbsp; is a private health club. We promote an alkaline
                        diet and botanical protocols to assist with illness and
                        mineral deficiencies. Being a member of our Private
                        Health Club gives you access to vital information on
                        proper diet, botanical regimens, daily routine, and
                        knowledge on common Dis-Eases that plague the community
                        today. Botanical recommendations are based on health
                        history, blood work, and iridology readings. We offer
                        both free and paid membership to this club. All paid
                        memberships are non-refundable, but may be downgraded,
                        paused or canceled at any time. Your signature indicates
                        acceptance and agreement to the following terms of
                        membership.
                      </p>
                      <p>
                        As a member of the&nbsp;
                        <strong>
                          Yah’ki Awakened Eye of Lotus Botanical Club,&nbsp;
                        </strong>
                        I understand that I have the constitutional right to
                        pursue various health practices and consult whom I wish
                        to achieve my goals for better health. I enter this
                        agreement on the behalf of any person I am legally
                        responsible for which includes myself, a minor
                        dependent, or any adult I am legally responsible for.
                        This agreement is between me and the &nbsp;
                        <span style={{ fontWeight: 400 }}>
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                        </span>
                      </p>
                      <p>
                        I also understand that I am working with a consultant
                        who makes no claims of being a health practitioner; I do
                        this on my own free will. I understand that no diagnosis
                        or prescription will be given. I understand that Yah’ki
                        is a Master Herbalist and Master Reiki Healer and that
                        he is not a medical doctor. I also understand that only
                        a medical doctor can diagnose and prescribe treatment.
                      </p>
                      <p>
                        I will willingly provide the representatives of&nbsp;
                        <strong>
                          Yah’ki Awakened Eye of Lotus Botanical Club
                        </strong>
                        &nbsp; permission (all rights) to openly discuss my
                        personal health concerns as well as solutions to those
                        issues. &nbsp;
                        <strong>
                          Yah’ki Awakened Eye of Lotus Botanical Club
                        </strong>
                        &nbsp; representatives may provide educational
                        information including, but not limited to, fasting,
                        herbal botanicals, diet, nutrition, and other health
                        information which does not include diagnosing, or
                        prescribing treatment, and is not considered to be a
                        substitute for medically necessary diagnostics.
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          I fully agree to hold harmless any member or
                          representative of&nbsp;
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          &nbsp; with whom I communicate in any manner. I also
                          understand that I am working with a consultant who
                          makes no claims of being a health practitioner; I do
                          this on my own free will. I assume total liability for
                          my actions. I understand and acknowledge that no
                          members of the&nbsp;
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          &nbsp; hold malpractice insurance and I agree to not
                          file a malpractice lawsuit against any member of
                          &nbsp;
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          . Any violation of these terms will result in a
                          no-contest legal proceeding against me.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          I attest that my actions with the &nbsp;
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          &nbsp; are private and I refuse to share with any
                          state, or Federal Regulatory Board, FDA, FTC, Medicaid
                          or any other insurance company without said
                          permission. I agree to waive all HIPPA privacy rights
                          and complaint processes. I understand that no
                          doctor-patient relationship exists. I understand that
                          it is my responsibility to educate myself on any
                          advice or recommendations given to me by any member
                          of&nbsp;
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club.
                          </strong>
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          &nbsp; declares one of our primary objectives is to
                          maintain and improve the civil rights, constitutional
                          guarantees, and political freedom of every member
                          throughout the world who chooses to participate in our
                          Private Sector Private Health Club. We believe the
                          First Amendment of the Constitution of the United
                          States of America guarantees our members the right to
                          free speech, petition, assembly and the right to
                          gather together for the lawful purpose of advising and
                          helping one another to attain vibrant health by
                          asserting our rights under the Federal and State
                          Constitutions and Statutes. It is hereby declared that
                          we, as a Private Sector Private Health Club are
                          exercising our right of “Freedom of Assembly” as
                          guaranteed by both the 1st and 14th Amendments of the
                          U.S. Constitution and the equivalent provisions of the
                          various State Declarations. This means any activities
                          through or within&nbsp;
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          &nbsp; are restricted to that of the Private Domain
                          only.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          Further, the application of any learned techniques
                          intended to remedy my personal health considerations
                          without a medical doctor’s approval, is also of my own
                          free will and is considered an act of exercising my
                          Constitutional Rights. Purchasing&nbsp;
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          &nbsp; products as recommendation for reversing
                          illness and mineral deficiency in the body and cells
                          is only a general recommendation. The recommendations
                          given are only suggestions and I (the client) must
                          take responsibility for further educating and making
                          myself in regard to my body’s health issues and
                          receiving proper medical care.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          <strong>
                            Yah’ki Awakened Eye of Lotus Botanical Club
                          </strong>
                          &nbsp; products are considered to be supplements and
                          not cures to conditions such as herpes, cancers,
                          diabetes, autoimmune diseases and others. With a
                          proper diet these supplements have the ability to
                          revitalize the immune system, nervous system, and
                          lymphatic system. The Food and Drug Administration has
                          not evaluated statements made about specific
                          supplements nor does the Food and Drug Administration
                          recognize that any nutritional supplement is to be
                          used as a cure for any condition.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          I agree to and digitally sign this affidavit, without
                          coercion or remuneration, in exchange for access to
                          benefits this Private Health Club offers. By clicking
                          “I agree” at the time of creating my membership, I
                          acknowledge that I have read, understand and agree to
                          the above stated terms.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='button'>
                  <button
                    type='button'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                    onClick={async () => {
                      await closeModalHandler(setvisible2)
                      handleChangeHandler(
                        visible2,
                        setvisible2,
                        modal2,
                        setmodal2
                      )

                      // setvisible3(true)
                    }}
                  >
                    I agree
                  </button>
                  <button
                    data-bs-dismiss='modal'
                    aria-label='Close'
                    style={{ backgroundColor: 'black' }}
                    onClick={() => {
                      closeModalHandler2()
                    }}
                  >
                    I disagree
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={visible3 == true ? 'modal fade show' : 'modal fade'}
        id='overlay'
      >
        <div className='modal-dialog modal-xl'>
          <div className='modal-content'>
            <div className='termspopupcontainer'>
              <h3 className='termstitle'>
                Yahki Awakened Eye of Lotus Health Club Terms of Use
              </h3>
              <div className='termscontentwrapper'>
                <div id='wp-terms-popup-content'>
                  <div>
                    <div className='wbp_wrapper'>
                      <h4 style={{ textAlign: 'center', marginTop: 4 }}>
                        Before Continuing to this Website, You must agree to Our
                        Terms of Use, Privacy Policy and Health Club Disclaimer
                      </h4>
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '14pt', fontWeight: 'bold' }}>
                          <strong>Shipping Policy</strong>
                        </span>
                      </p>
                      <div className='row '>
                        <div className='col-12 '>
                          <strong>LOCAL PICKUP</strong>
                          <p className='mt-3'>
                            We don’t offer any onsite pickups. All orders must
                            be shipped.
                          </p>
                        </div>
                        <div className='col-12  text-left'>
                          <strong>Domestic Shipping:</strong>
                        </div>
                        {/* Standard Orders */}
                        <div className='col-12 mt-3'>
                          <strong>Standard Orders</strong>
                          <p className='mt-2'>
                            Processing may take up to 5 or 10 business days.
                            After your order is processed it takes additional
                            time for packaging, shipping, and delivery. Please
                            allow 7-30 business days to receive your order (does
                            not include the day your order was placed, weekends,
                            or holydays. It’s our priority to get your orders
                            out to you a soon as possible.
                          </p>
                          <p className=''>
                            We are not responsible for additional shipping
                            charges are packages received outside of the
                            specified shipping date determined by USPS. Once
                            your prepared package is scanned into the post
                            office, USPS is solely responsible for the shipping
                            and delivery time. . If you paid for expedited
                            shipping, expedited ship only expedites the shipping
                            overnight once the package is prepared. Expedited
                            shipping does not expedite the processing, and
                            preparation of your order, only the length of the
                            shipping time once your package is prepared and
                            complete.
                          </p>
                          <p className=''>
                            All standard orders shipped within the USA will ship
                            via UPS Ground, UPS Flat Rate (if requirements are
                            met, available online ONLY) or USPS Priority mail
                            2-3 day, depending on the members request at the
                            time of placing the order. All orders are processed
                            in the order in which they are received.
                          </p>
                        </div>
                        {/* Signature Requirement */}
                        <div className='col-12 '>
                          <strong>Signature Requirement</strong>
                          <p className='mt-2'>
                            A valid Signature of a person at least 18 years of
                            age is required upon delivery for ALL UPS and USPS
                            shipments for orders over $250.00 All 3rd party
                            shipments (Drop-ship orders) will require a
                            Signature upon delivery regardless of whether the
                            waiver is filled out. We feel this is necessary to
                            ensure our products arrive to our Health Club
                            Members safely. A tracking number will be emailed
                            once an order has shipped for the member’s
                            convenience.
                          </p>
                          <p className=''>
                            Any returned package due to lack of signature at the
                            time of delivery is subject to a 20% restocking fee.
                            All shipping charges are non-refundable. This cost
                            is included within the Shipping &amp; Handling rates
                            available online.
                          </p>
                        </div>
                        {/* Lost Packages */}
                        <div className='col-12 '>
                          <strong>Lost Packages</strong>
                          <p className='mt-2'>
                            In the event that a package is lost during transit,
                            we ask that our members contact Yah’ki Awakened Eye
                            Of lotus Botanical Health Club ASAP in order for an
                            investigation to be opened with the appropriate
                            carrier. Investigation response times typically take
                            2-5 business days, but can take longer. Once an
                            outcome is reached, Yah’ki Awakened Eye Of Lotus
                            Botanical Health Club will be in contact with the
                            member to discuss the next available step.
                          </p>
                        </div>
                      </div>
                      {/* International Shipping */}
                      <div className='row 5'>
                        <div className='col-12 text-left'>
                          <strong>International Shipping:</strong>
                        </div>
                        <div className='col-12 mt-2'>
                          <p>
                            We strongly suggest that all International Members
                            check with their local customs agency for their
                            Rules &amp; Regulations/Restrictions on the
                            importation of Dietary Supplements and/or our Herbal
                            Formula ingredients prior to placing an order. All
                            International orders MUST be placed through our
                            website. Thank you in advance for your understanding
                            and cooperation.
                          </p>
                        </div>
                        {/* International Shipping Restrictions */}
                        <div className='col-12 '>
                          <strong>International Shipping Restrictions</strong>
                          <p className='mt-2'>
                            Due to restrictions on herbal products and/or
                            Dietary Supplements, we are unable to ship to the
                            following countries:
                          </p>
                          <ul className=''>
                            <li className='mt-2'>Afghanistan</li>
                            <li className='mt-2'>Africa (all countries)</li>
                            <li className='mt-2'>Austria</li>
                            <li className='mt-2'>Brazil</li>
                            <li className='mt-2'>Bulgaria</li>
                            <li className='mt-2'>Costa Rica</li>
                            <li className='mt-2'>Cuba</li>
                            <li className='mt-2'>Denmark</li>
                            <li className='mt-2'>Ecuador</li>
                            <li className='mt-2'>Estonia</li>
                            <li className='mt-2'>Germany</li>
                            <li className='mt-2'>Greece</li>
                            <li className='mt-2'>Iran</li>
                            <li className='mt-2'>Iraq</li>
                            <li className='mt-2'>Israel</li>
                            <li className='mt-2'>Italy</li>
                            <li className='mt-2'>Libya</li>
                            <li className='mt-2'>Luxembourg</li>
                            <li className='mt-2'>Mexico</li>
                            <li className='mt-2'>North Korea</li>
                            <li className='mt-2'>Norway</li>
                            <li className='mt-2'>Peru</li>
                            <li className='mt-2'>Spain</li>
                            <li className='mt-2'>Thailand</li>
                            <li className='mt-2'>Turkey</li>
                            <li className='mt-2'>United Arab Emirates</li>
                          </ul>
                        </div>
                      </div>
                      {/* Packages To Canada */}
                      <div className='row '>
                        <div className='col-12 text-left mt-3'>
                          <strong>Packages To Canada</strong>
                        </div>
                        <div className='col-12 mt-2'>
                          <p>
                            Due to Health Canada’s policies, we are only able to
                            ship to Canada under the following conditions:
                          </p>
                          <p className=''>
                            * Shipments to Canada must be addressed to a Health
                            Club Member and NOT a Company/Business name.
                          </p>
                          <p className=''>
                            * Orders addressed to a single Health Club Member
                            can only receive up to a 90 day supply within a 90
                            day period.
                          </p>
                          <p className=''>
                            Failure to comply will result in the package being
                            held, returned and/or contents removed by Health
                            Canada. Yahki Awakened Eye of Lotus Botanical Club
                            is not responsible for any seized or returned
                            package due to an individual’s non-compliance with
                            Health Canada regulations.
                          </p>
                        </div>
                        <div className='col-12 text-left '>
                          <strong>Endangered Species (Canada) CITES</strong>
                        </div>
                        <div className='col-12 mt-2'>
                          <p className=''>
                            CITES is an agency which monitors the importation of
                            endangered plant and animal species into Canada.
                            Some botanicals are endangered and may be
                            confiscated by customs. Please reference the CITES
                            Endangered Species list before placing your order as
                            we are not responsible for monitoring the list. If
                            your items are confiscated, we will not be
                            responsible for confiscated items.
                          </p>
                          <p className=''>
                            We encourage all Canadian members to check with
                            customs before placing orders to make sure your
                            orders are in compliance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='button'>
                  <button
                    type='button'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                    onClick={async () => {
                      await closeModalHandler(setvisible3)
                      handleChangeHandler(
                        visible3,
                        setvisible3,
                        modal3,
                        setmodal3
                      )
                    }}
                  >
                    I agree
                  </button>
                  <button
                    data-bs-dismiss='modal'
                    aria-label='Close'
                    style={{ backgroundColor: 'black' }}
                    onClick={() => {
                      closeModalHandler2()
                    }}
                  >
                    I disagree
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Memberships
