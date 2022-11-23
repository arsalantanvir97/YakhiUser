import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ImageSelector from '../components/ImageSelector'
import { updateUserInfoAction } from '../actions/userAction'
import Toasty from '../utils/toast'
import { validateEmail } from '../utils/ValidateEmail'

const EditProfile = ({ history }) => {
  const [loading, setloading] = useState(false)

  const [firstName, setfirstName] = useState()
  const [email, setemail] = useState()

  const [image, setimage] = useState()
  const [is_edit, setIsEdit] = useState(false)
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      setfirstName(userInfo?.firstName)
      setimage(userInfo?.userImage)
      setemail(userInfo?.email)
    }
  }, [userInfo])

  const updateProfileData = async () => {
    const emailvalidation = validateEmail(email)
    console.log('emmmm', emailvalidation)
    console.log('addEmployeeHandler')
    console.log('image', image)
    if (emailvalidation == true) {
      if (firstName?.length > 0 && email.length > 0) {
        setloading(true)
        const formData = new FormData()
        formData.append('user_image', image)
        formData.append('firstName', firstName)
        formData.append('email', email)

        const body = formData
        await dispatch(updateUserInfoAction(body, history))
        setloading(false)

        setIsEdit(false)
      } else {
        setloading(false)
        Toasty('error', `Please fill out all the required fields`)
      }
    } else {
      setloading(false)
      Toasty('error', `Please enter a valid email`)
    }
  }
  return (
    <>
      <div className='app-content content dashboard'>
        <div className='content-wrapper'>
          <div className='content-body'>
            {/* Basic form layout section start */}
            <section id='configuration' className='edit-profile'>
              <div className='row'>
                <div className='col-12'>
                  <div className='card rounded pad-20'>
                    <div className='card-body p-md-2 p-lg-3 p-xl-4'>
                      <div className='page-title'>
                        <div className='row'>
                          {/* <div className="col-12">
                          <h1>
                            <Link to="/Dashboard">
                              <i className="fa fa-angle-left" />
                            </Link>
                            {is_edit ? "Edit profile" : "My Profile"}
                          </h1>
                        </div> */}
                        </div>
                      </div>
                      <div className='user-block'>
                        <div className='row justify-content-center'>
                          <div className='col-12 col-lg-10 col-md-8 col-xl-5 light-primary-bg text-center'>
                            <div className='d-flex justify-content-center mb-3'>
                              <div className='main-over-box'>
                                <ImageSelector
                                  setImage={setimage}
                                  image={image}
                                  is_edit={is_edit}
                                />
                              </div>
                            </div>
                            {/* {!is_edit && (
                            <div className="col-12 mb-3">
                              <Link to="/UpdatePassword">Change Password</Link>
                            </div>
                          )} */}
                            <div className='row detail-row d-flex align-items-center justify-content-around px-3'>
                              <div className='col-md-6 col-12 text-left mb-3 lablename'>
                                <label htmlFor>First Name:</label>
                              </div>
                              <div className='col-md-6 col-12 text-left mb-3'>
                                {is_edit ? (
                                  <input
                                    type='text'
                                    className='form-control cutum-input'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='First Name'
                                    value={firstName}
                                    onChange={(e) => {
                                      setfirstName(e.target.value)
                                    }}
                                  />
                                ) : (
                                  <p>{firstName}</p>
                                )}
                              </div>

                              <div className='col-md-6 col-12 text-left mb-3 lablename'>
                                <label htmlFor>Email Address:</label>
                              </div>
                              <div className='col-md-6 col-12 text-left mb-3'>
                                {is_edit ? (
                                  <input
                                    type='email'
                                    className='form-control cutum-input'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => {
                                      setemail(e.target.value)
                                    }}
                                  />
                                ) : (
                                  <p>{email}</p>
                                )}
                              </div>
                            </div>
                            <div className='row detail-row d-flex align-items-center mb-1'>
                              <div className='col-12'>
                                {!loading ? (
                                  <Link
                                    to='#'
                                    onClick={() => {
                                      if (!is_edit) {
                                        setIsEdit(true)
                                      } else {
                                        updateProfileData()
                                      }
                                    }}
                                    className='btn btn-primary btn-fixed-190 update-btn-profile'
                                  >
                                    Update
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
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile
