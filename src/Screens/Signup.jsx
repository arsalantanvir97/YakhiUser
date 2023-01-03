import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userSignUpAction } from '../actions/userAction'
import Toasty from '../utils/toast'
import { validateEmail } from '../utils/ValidateEmail'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Signup = ({ history }) => {
  const dispatch = useDispatch()

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [name, setname] = useState()
  const [lastname, setlastname] = useState()

  const [loading, setloading] = useState(false)

  const [confirmpassword, setconfirmpassword] = useState()
  const [showicon, setshowicon] = useState(true)
  const [showicon2, setshowicon2] = useState(true)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  console.log('userInfo', userInfo)
  const onSubmitHandler = async () => {
    console.log('submitHandler')
    const emailvalidation = validateEmail(email)
    console.log('emmmm', emailvalidation)
    console.log('addEmployeeHandler')
    if (emailvalidation == true) {
      setloading(true)
      await dispatch(
        userSignUpAction(
          name,
          lastname,
          email,
          password,
          confirmpassword,
          history
        )
      )
      setloading(false)
      setemail('')
      setpassword('')
      setconfirmpassword('')
      setname('')
    } else {
      Toasty('error', `Please enter a valid email`)
      setloading(false)
    }
  }

  useEffect(() => {
    if (userInfo) {
      history.replace('/')
    }
  }, [userInfo])
  return (
    <>
      <Header />
      <div style={{ height: 55 }}></div>

      <div className='container-fluid mt-5'>
        <div className='row py-5'>
          <div className='col-xl-6 col-lg-8 col-md-10 col-10 mx-auto'>
            <div className='account-form'>
              <h3 className='text-center'>Sign Up</h3>
              <form>
                <div className='row pt-5 align-items-center justify-content-center'>
                  <div className='col-12'>
                    <div className='row justify-content-md-center'>
                      <div className='col-md-12 mt-2'>
                        <div className='row'>
                          <div className='col-md-12 mt-3'>
                            <label htmlFor className='my-label'>
                              First Name<span className='red'>*</span>
                            </label>
                            <input
                              type='text'
                              className='form-control my-textbox'
                              placeholder='Enter First Name'
                              value={name}
                              onChange={(e) => {
                                setname(e.target.value)
                              }}
                            />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-md-12 mt-3'>
                            <label htmlFor className='my-label'>
                              Last Name<span className='red'>*</span>
                            </label>
                            <input
                              type='text'
                              className='form-control my-textbox'
                              placeholder='Enter Last Name'
                              value={lastname}
                              onChange={(e) => {
                                setlastname(e.target.value)
                              }}
                            />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-md-12 mt-3'>
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
                        </div>
                        <div className='row'>
                          <div className='col-md-12 mt-3'>
                            <label htmlFor className='my-label'>
                              New Password<span className='red'>*</span>
                            </label>
                            <div className='position-relative'>
                              <input
                                type={showicon ? 'password' : 'text'}
                                className='form-control enter-input my-textbox'
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e) => {
                                  setpassword(e.target.value)
                                }}
                              />
                              <i
                                onClick={() => setshowicon(!showicon)}
                                className={
                                  showicon
                                    ? 'fa enter-icon-3 right-icon fa-eye-slash right-icon-90'
                                    : 'fa enter-icon-3 right-icon fa-eye right-icon-90'
                                }
                                aria-hidden='true'
                              />
                            </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-md-12 mt-3'>
                            <label htmlFor className='my-label'>
                              Confirm Password<span className='red'>*</span>
                            </label>
                            <div className='position-relative'>
                              <input
                                type={showicon2 ? 'password' : 'text'}
                                className='form-control enter-input my-textbox'
                                placeholder='Enter Password'
                                value={confirmpassword}
                                onChange={(e) => {
                                  setconfirmpassword(e.target.value)
                                }}
                              />
                              <i
                                onClick={() => setshowicon2(!showicon2)}
                                className={
                                  showicon2
                                    ? 'fa enter-icon-3 right-icon fa-eye-slash right-icon-90'
                                    : 'fa enter-icon-3 right-icon fa-eye right-icon-90'
                                }
                                aria-hidden='true'
                              />
                            </div>
                          </div>
                        </div>
                        <div className='row mb-5'>
                          <div className='col-12 text-center'>
                            {!loading ? (
                              <Link
                                to='#'
                                className='btn red-btn-solid ml-0 px-5 py-2'
                                onClick={() =>
                                  email?.length > 0 &&
                                  password?.length > 0 &&
                                  name?.length > 0 &&
                                  confirmpassword?.length > 0
                                    ? onSubmitHandler()
                                    : Toasty(
                                        'error',
                                        `Please fill out all the required fields`
                                      )
                                }
                              >
                                Sign Up
                              </Link>
                            ) : (
                              <i className='fas fa-spinner fa-pulse'></i>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row pb-5'>
                      <div className='col-12 text-center'>
                        <h6 className='f-18'>
                          Have An Account?
                          <Link to='/Login' className='red'>
                            {' '}
                            Login!
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signup
