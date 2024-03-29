import React, { useEffect, useState } from 'react'
import AllHerbs from '../components/AllHerbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainHeader from '../components/MainHeader'
// import Calendar from 'react-calendar'
import { Calendar, momentLocalizer } from 'react-big-calendar'

import ToggleBack from '../components/ToggleBack'
import api, { baseURL, imageURL } from '../utils/api'
import moment from 'moment'
import Toasty from '../utils/toast'
import Swal from 'sweetalert2'
import 'react-big-calendar/lib/css/react-big-calendar.css'
moment.locale('en-GB')
const localizer = momentLocalizer(moment)

// const allViews = Object.keys(Calendar.Views).map((k) => Calendar.Views[k])

const Events = () => {
  const [value, onChange] = useState(new Date())
  const [showcalendar, setshowcalendar] = useState(false)
  const [events, setevents] = useState([])
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [usetbookings, setusetbookings] = useState('')

  // const [occupation, setoccupation] = useState('')
  const [id, setid] = useState('')

  const getEvents = async () => {
    const res = await api.get(`/event/userevents`)
    setevents(res?.data?.events)
    const res2 = await api.get(`/event/userBookings`)

    console.log('resss,res', res2)
  }
  useEffect(() => {
    getEvents()
  }, [])
  const submitHandler = async () => {
    try {
      const body = { name, email, event: id }
      console.log('body', body)
      const res = await api.post(`/event/bookevent`, body)
      if (res?.status == 203) {
        await Swal.fire({
          icon: 'info',
          title: '',
          text: 'Event already booked by you',
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        await Swal.fire({
          icon: 'success',
          title: '',
          text: 'Event Booked successfully',
          showConfirmButton: false,
          timer: 1500,
        })
        getEvents()
      }
      window?.$('.modal').modal('hide')
      window?.$('.modal-backdrop').remove()
      setevents('')
      setname('')
      setemail('')
      // setoccupation('')
      setid('')
    } catch (error) {}
  }
  const getUserEvents = async () => {
    try {
      const res = await api.get(`/event/userBookings`)
      setusetbookings(res?.data?.bookings)
    } catch (error) {}
  }

  useEffect(() => {
    console.log('usetbookings', usetbookings)
  }, [usetbookings])
  return (
    <>
      <section
        className='inner-banner'
        style={{
          backgroundImage: 'url(' + `${'../images/events.png'} ` + ')',
          minHeight:
            // match?.params?.id == '62415fde1b97a530529276b3' ||
            // match?.params?.id == '624160071b97a530529276b7' ||
            // match?.params?.id == '62415fc11b97a530529276af' ||
            // match?.params?.id == '62415f8d1b97a530529276ab'
            window.innerWidth > 1300
              ? '670px'
              : window.innerWidth > 1200
              ? '490px'
              : window.innerWidth > 1100
              ? '440px'
              : window.innerWidth > 925
              ? '400px'
              : window.innerWidth > 780
              ? '335px'
              : window.innerWidth > 510
              ? '275px'
              : window.innerWidth > 465
              ? '210px'
              : '120px',
          // : '440px',

          // backgroundPosition: 'center',
          backgroundSize: 'contain',

          // backgroundRepeat: 'no-repeat',
          // height: '440px',
        }}
      ></section>{' '}
      <div>
        <section className='mainEvents pb-5 '>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <ToggleBack name={'Events'} />
                <nav className='mt-4'>
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
                        getUserEvents()
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
                      {events?.length > 0 &&
                        events?.map((event) => (
                          <div className='col-lg-4 col-sm-6 mb-3'>
                            <div className='eventContents'>
                              <div className='eventVideo position-relative'>
                                {event?.filetype?.includes('image') ? (
                                  <img
                                    src={`${imageURL}${event?.file}`}
                                    alt=''
                                    className='img-fluid w-100'
                                  />
                                ) : (
                                  <video
                                    width='100%'
                                    height='100%'
                                    // poster={`${imageURL}${thumbnail}`}
                                    controls
                                  >
                                    <source
                                      src={`${imageURL}${event?.file}`}
                                      type='video/mp4'
                                    />
                                    Your browser does not support HTML video.
                                  </video>
                                )}
                                {/* <a href='#' className='eventPlayBtn'>
                                  <i className='fas fa-play' />
                                </a> */}
                              </div>
                              <div className='p-3'>
                                <div className='d-block d-md-flex align-items center justify-content-between mb-3'>
                                  <h4>{event?.title}</h4>
                                  <h6>
                                    {moment.utc(event?.date).format('LL')}
                                  </h6>
                                </div>
                                {/* <ul className='m-0 p-0 mb-3'>
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
                                </ul> */}
                                <p className='mb-0'>{event?.desc}</p>
                              </div>
                              <hr />
                              <div className='m-3'>
                                <a href='#' className='eventLinks'>
                                  info@yahkiawakened.com
                                </a>
                              </div>
                            </div>
                            <div className='text-center'>
                              <button
                                onClick={() => {
                                  setid(event._id)
                                }}
                                className='btn btnBook'
                                data-toggle='modal'
                                data-target='#eventBooking'
                              >
                                Book Now
                              </button>
                            </div>
                          </div>
                        ))}
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
                  // <div
                  //   style={{
                  //     width: '100%',
                  //     height: '100%',
                  //     backgroundColor: 'reds',
                  //     display: 'flex',
                  //     justifyContent: 'center',
                  //     alignItems: 'center',
                  //   }}
                  // >
                  //   {' '}
                  //   <Calendar
                  //     onChange={onChange}
                  //     value={value}
                  //     backgroundColor='#720215'
                  //   />
                  // </div>
                  <Calendar
                    events={usetbookings}
                    // step={60}
                    // views={allViews}
                    localizer={localizer}
                    // defaultDate={new Date(2015, 3, 1)}
                    popup={false}
                    startAccessor='start'
                    endAccessor='end'
                    style={{ height: 500 }}
                    onShowMore={(events, date) =>
                      this.setState({ showModal: true, events })
                    }
                  />
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
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                    }}
                  >
                    <div className='mb-3'>
                      <label>
                        Name<span className='text-red'>*</span>
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e) => {
                          setname(e.target.value)
                        }}
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
                        value={email}
                        onChange={(e) => {
                          setemail(e.target.value)
                        }}
                      />
                    </div>
                    {/* <div className='mb-3'>
                      <label>
                        Occupation<span className='text-red'>*</span>
                      </label>
                      <select
                        className='form-control'
                        value={occupation}
                        onChange={(e) => {
                          setoccupation(e.target.value)
                        }}
                      >
                        <option selected disabled>
                          Select Occupation
                        </option>
                        <option value={'Agriculture'}>Agriculture</option>
                        <option value={'Contruction'}>Contruction</option>
                        <option value={'Education'}>Education</option>
                        <option value={'Law'}>Law</option>
                        <option value={'Health'}>Health</option>
                      </select>
                    </div> */}
                    <div className='text-center'>
                      <button
                        onClick={() => {
                          name?.length > 0 && email?.length > 0
                            ? // occupation?.length > 0
                              submitHandler()
                            : Toasty(
                                'error',
                                `Please fill out all the required fields`
                              )
                        }}
                        className='btn btnSubmit'
                      >
                        Submit
                      </button>
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
