import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { baseURL } from '../utils/api'
import Swal from 'sweetalert2'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Toasty from '../utils/toast'
import { validateEmail } from '../utils/ValidateEmail'
import PrivateRouteSlider from '../components/PrivateRouteSlider'

const Contactus = () => {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setemail] = useState('')
  const [reasonforcontacting, setreasonforcontacting] = useState('')
  const [message, setmessage] = useState('')
  const [loading, setloading] = useState(false)

  const contactusHandler = async () => {
    const emailvalidation = validateEmail(email)
    console.log('emmmm', emailvalidation)
    console.log('addEmployeeHandler')
    if (emailvalidation == true) {
      try {
        setloading(true)
        const res = await axios.post(`${baseURL}/feedback/create-feedback`, {
          firstName,
          lastName,
          email,
          reasonforcontacting,
          message,
        })
        setloading(false)

        console.log('res', res)
        Swal.fire({
          icon: 'success',
          title: '',
          text: 'Message sent Successfully',
          showConfirmButton: false,
          timer: 1500,
        })
      } catch (error) {
        setloading(false)
      }
      setfirstName('')
      setlastName('')
      setemail('')
      setreasonforcontacting('')
      setmessage('')
      setloading(false)
    } else {
      setloading(false)

      Toasty('error', `Please enter a valid email`)
    }
  }

  return (
    <>
      <Header />
      <PrivateRouteSlider />

      <div className='container-fluid my-5 py-4'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='contact-us'>
              <div className='row'>
                <div className='col-md-9 col-12 mx-auto text-center'>
                  <h4 className='sub-heading'>
                    Yah'ki Awakened Eye of Lotus Botanical Health Club
                  </h4>
                  <h3 className='main-heading'>Contact Us</h3>
                  <p className='general-para mb-4'>
                    Though this form is secure, please do not include any
                    personal information in this contact form aside from what is
                    already requested.
                  </p>
                </div>
              </div>
              <div className='row py-5'>
                <div className='col-md-10 col-12 mx-auto'>
                  <div className='account-form'>
                    <form>
                      <div className='row align-items-center justify-content-center'>
                        <div className='col-12'>
                          <div className='row justify-content-md-center'>
                            <div className='col-md-12 mt-2'>
                              {/* first and last name */}
                              <div className='row'>
                                <div className='col-md-6 mt-3'>
                                  <label htmlFor className='my-label'>
                                    First Name<span className='red'>*</span>
                                  </label>
                                  <input
                                    type='text'
                                    className='form-control my-textbox'
                                    placeholder='Enter First Name'
                                    value={firstName}
                                    onChange={(e) => {
                                      setfirstName(e.target.value)
                                    }}
                                  />
                                </div>
                                <div className='col-md-6 mt-3'>
                                  <label htmlFor className='my-label'>
                                    Last Name<span className='red'>*</span>
                                  </label>
                                  <input
                                    type='text'
                                    className='form-control my-textbox'
                                    placeholder='Enter Last Name'
                                    value={lastName}
                                    onChange={(e) => {
                                      setlastName(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>
                              {/* email address and Reason for Contacting Us*/}
                              <div className='row'>
                                <div className='col-md-6 mt-3'>
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
                                </div>
                                <div className='col-md-6 mt-3'>
                                  <label htmlFor className='my-label'>
                                    Reason for Contacting Us{' '}
                                    <span className='red'>*</span>
                                  </label>
                                  <select
                                    className='form-control'
                                    value={reasonforcontacting}
                                    onChange={(e) => {
                                      setreasonforcontacting(e.target.value)
                                    }}
                                  >
                                    <option>Please Select</option>
                                    <option value={'Issue 1'}>Issue 1</option>
                                    <option value={'Issue 2'}>Issue 2</option>
                                    <option value={'Issue 3'}>Issue 3</option>
                                    <option value={'Issue 4'}>Issue 4</option>
                                  </select>
                                </div>
                              </div>
                              {/* Your Message*/}
                              <div className='row'>
                                <div className='col-md-12 mt-3'>
                                  <label htmlFor className='my-label'>
                                    Your Message <span className='red'>*</span>
                                  </label>
                                  <textarea
                                    className='form-control'
                                    id='exampleFormControlTextarea1'
                                    placeholder='Message'
                                    rows={5}
                                    value={message}
                                    onChange={(e) => {
                                      setmessage(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>
                              <div className='row mb-5'>
                                <div className='col-12 text-center'>
                                  {!loading ? (
                                    <Link
                                      to='#'
                                      className='btn red-btn-solid ml-0 px-5 py-2'
                                      onClick={() =>
                                        firstName?.length > 0 &&
                                        lastName?.length > 0 &&
                                        email?.length > 0 &&
                                        reasonforcontacting?.length > 0 &&
                                        message?.length > 0
                                          ? contactusHandler()
                                          : Toasty(
                                              'error',
                                              `Please fill out all the required fields`
                                            )
                                      }
                                    >
                                      Send
                                    </Link>
                                  ) : (
                                    <i className='fas fa-spinner fa-pulse'></i>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* contact cards */}
                  <div className='row justify-content-centetr align-items-start'>
                    <div className='col-md-4 my-4'>
                      <div className='contact-card text-center'>
                        <h4>Address</h4>
                        <p>4406 St VINCENT AVE, SAINT LOUIS MO, 63119</p>
                      </div>
                    </div>
                    <div className='col-md-4 my-4'>
                      <div className='contact-card text-center'>
                        <h4>Business</h4>
                        <p>(314) 925-8317</p>
                      </div>
                    </div>
                    <div className='col-md-4 my-4'>
                      <div className='contact-card text-center'>
                        <h4>Email</h4>
                        <p>contact@yahkiawakened.com</p>
                      </div>
                    </div>
                  </div>
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

export default Contactus
