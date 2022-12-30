import React, { useState } from 'react'
import AllHerbs from '../components/AllHerbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PrivateRouteSlider from '../components/PrivateRouteSlider'
import Calendar from 'react-calendar'
import ToggleBack from '../components/ToggleBack'

const Events = () => {
  const [value, onChange] = useState(new Date())
  const [showcalendar, setshowcalendar] = useState(false)
  return (
    <>
      <Header />
      <div>
        <PrivateRouteSlider />
        <section className='mainEvents py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <ToggleBack name={'Events'} />
                <nav>
                  <div
                    className='nav nav-tabs justify-content-center mb-4'
                    id='nav-tab'
                    role='tablist'
                  >
                    <button
                      className='nav-link active'
                      id='nav-events-view-tab'
                      data-toggle='tab'
                      data-target='#nav-events-view'
                      type='button'
                      role='tab'
                      aria-controls='nav-events-view'
                      aria-selected='true'
                      onClick={() => {
                        setshowcalendar(false)
                      }}
                    >
                      Events View
                    </button>
                    <button
                      className='nav-link'
                      id='nav-calendar-view-tab'
                      data-toggle='tab'
                      data-target='#nav-calendar-view'
                      type='button'
                      role='tab'
                      aria-controls='nav-calendar-view'
                      aria-selected='false'
                      onClick={() => {
                        setshowcalendar(true)
                      }}
                    >
                      Calendar View
                    </button>
                  </div>
                </nav>
                <div className='tab-content' id='nav-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='nav-events-view'
                    role='tabpanel'
                    aria-labelledby='nav-events-view-tab'
                  >
                    <div className='row'>
                      <div className='col-lg-4 col-sm-6 mb-3'>
                        <div className='eventContents'>
                          <div className='eventVideo position-relative'>
                            <img
                              src='images/event-video-1.png'
                              alt=''
                              className='img-fluid w-100'
                            />
                            <a href='#' className='eventPlayBtn'>
                              <i className='fas fa-play' />
                            </a>
                          </div>
                          <div className='p-3'>
                            <div className='d-block d-md-flex align-items center justify-content-between mb-3'>
                              <h4>YOGA'S EVENTS</h4>
                              <h6>17'Mar 2017</h6>
                            </div>
                            <ul className='m-0 p-0 mb-3'>
                              <li>
                                <img
                                  src='images/event-thumb-1.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </li>
                              <li>
                                <img
                                  src='images/event-thumb-2.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </li>
                              <li>
                                <img
                                  src='images/event-thumb-3.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </li>
                              <li>
                                <img
                                  src='images/event-thumb-4.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </li>
                              <li className='position-relative'>
                                <img
                                  src='images/event-thumb-5.png'
                                  alt=''
                                  className='img-fluid'
                                />
                                <h5>+5</h5>
                              </li>
                            </ul>
                            <p className='mb-0'>
                              If you miss your scheduled appointment time
                              without prior notice of at least 24 hours to
                              reschedule, you will have to book another
                            </p>
                          </div>
                          <hr />
                          <div className='m-3'>
                            <a href='#' className='eventLinks'>
                              nfo@yahkiawakened.com
                            </a>
                          </div>
                        </div>
                        <div className='text-center'>
                          <button
                            className='btn btnBook'
                            data-toggle='modal'
                            data-target='#eventBooking'
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                      <div className='col-lg-4 col-sm-6 mb-3'>
                        <div className='eventContents'>
                          <div className='eventVideo position-relative'>
                            <img
                              src='images/event-video-2.png'
                              alt=''
                              className='img-fluid w-100'
                            />
                            <a href='#' className='eventPlayBtn'>
                              <i className='fas fa-play' />
                            </a>
                          </div>
                          <div className='p-3'>
                            <div className='d-block d-md-flex align-items center justify-content-between mb-3'>
                              <h4>LIFE HEALING'22</h4>
                              <h6>17'Mar 2017</h6>
                            </div>
                            <ul className='m-0 p-0 mb-3'>
                              <li>
                                <img
                                  src='images/event-thumb-1.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </li>
                              <li>
                                <img
                                  src='images/event-thumb-2.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </li>
                              <li>
                                <img
                                  src='images/event-thumb-3.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </li>
                              <li>
                                <img
                                  src='images/event-thumb-4.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </li>
                              <li className='position-relative'>
                                <img
                                  src='images/event-thumb-5.png'
                                  alt=''
                                  className='img-fluid'
                                />
                                <h5>+5</h5>
                              </li>
                            </ul>
                            <p className='mb-0'>
                              If you miss your scheduled appointment time
                              without prior notice of at least 24 hours to
                              reschedule, you will have to book another
                            </p>
                          </div>
                          <hr />
                          <div className='m-3'>
                            <a href='#' className='eventLinks'>
                              nfo@yahkiawakened.com
                            </a>
                          </div>
                        </div>
                        <div className='text-center'>
                          <button
                            className='btn btnBook'
                            data-toggle='modal'
                            data-target='#eventBooking'
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                      <div className='col-lg-4 col-sm-6 mb-3'>
                        <div className='eventContents'>
                          <div className='eventVideo position-relative'>
                            <img
                              src='images/event-video-3.png'
                              alt=''
                              className='img-fluid w-100'
                            />
                            <a href='#' className='eventPlayBtn'>
                              <i className='fas fa-play' />
                            </a>
                          </div>
                          <div className='p-3'>
                            <div className='d-block d-md-flex align-items center justify-content-between mb-3'>
                              <h4>DEPRESSION IS A MYTH</h4>
                              <h6>17'Mar 2017</h6>
                            </div>
                            <ul className='m-0 p-0 mb-3'>
                              <li>
                                <img
                                  src='images/event-thumb-1.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </li>
                              <li>
                                <img
                                  src='images/event-thumb-2.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </li>
                              <li>
                                <img
                                  src='images/event-thumb-3.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </li>
                              <li>
                                <img
                                  src='images/event-thumb-4.png'
                                  alt=''
                                  className='img-fluid'
                                />
                              </li>
                              <li className='position-relative'>
                                <img
                                  src='images/event-thumb-5.png'
                                  alt=''
                                  className='img-fluid'
                                />
                                <h5>+5</h5>
                              </li>
                            </ul>
                            <p className='mb-0'>
                              If you miss your scheduled appointment time
                              without prior notice of at least 24 hours to
                              reschedule, you will have to book another
                            </p>
                          </div>
                          <hr />
                          <div className='m-3'>
                            <a href='#' className='eventLinks'>
                              nfo@yahkiawakened.com
                            </a>
                          </div>
                        </div>
                        <div className='text-center'>
                          <button
                            className='btn btnBook'
                            data-toggle='modal'
                            data-target='#eventBooking'
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='nav-calendar-view'
                    role='tabpanel'
                    aria-labelledby='nav-calendar-view-tab'
                  >
                    <div id='calendar' className='booking-dates' />
                  </div>
                </div>{' '}
                {showcalendar && (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'reds',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {' '}
                    <Calendar
                      onChange={onChange}
                      value={value}
                      backgroundColor='#720215'
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <AllHerbs />
        {/* Appointment   Modal Start Here */}
        <div
          className='modal fade'
          id='eventBooking'
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalCenterTitle'
          aria-hidden='true'
        >
          <div
            className='modal-dialog modal-md modal-dialog-centered '
            role='document'
          >
            <div className='modal-content'>
              {/* <button type="button" class="close text-right mr-1 mt-1" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&#10006;</span>
        </button> */}
              <div>
                <div>
                  <h2 className='text-center mb-3'>
                    YOGA'S EVENT BOOKING FORM
                  </h2>
                  <form>
                    <div className='mb-3'>
                      <label>
                        Name<span className='text-red'>*</span>
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Name'
                      />
                    </div>
                    <div className='mb-3'>
                      <label>
                        Email<span className='text-red'>*</span>
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Email Address'
                      />
                    </div>
                    <div className='mb-3'>
                      <label>
                        Occupation<span className='text-red'>*</span>
                      </label>
                      <select className='form-control'>
                        <option selected disabled>
                          Select Occupation
                        </option>
                        <option>Agriculture</option>
                        <option>Contruction</option>
                        <option>Education</option>
                        <option>Law</option>
                        <option>Health</option>
                      </select>
                    </div>
                    <div className='text-center'>
                      <button className='btn btnSubmit'>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Events
