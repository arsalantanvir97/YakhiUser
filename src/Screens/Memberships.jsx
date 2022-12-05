import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userMemberAction } from '../actions/userAction'
import AllHerbs from '../components/AllHerbs'
import Footer from '../components/Footer'
import FooterHeader from '../components/FooterHeader'
import Header from '../components/Header'
import PrivateRouteSlider from '../components/PrivateRouteSlider'
import { Signature } from '../components/Signature'
import api from '../utils/api'
import Toasty from '../utils/toast'
let filee = ''
const Memberships = ({ history }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')

  const [allValues, setAllValues] = useState({
    signature: '',
  })
  const subscriptionHandler = async () => {
    // fetch(allValues?.signature)
    //   .then((res) => res.blob())
    //   .then((blob) => {
    //     filee = new File([blob], 'File name', { type: 'image/png' })
    //     console.log('abc', filee)
    //   })

    const dataUrlToFile = async (dataUrl, fileName, mimeType) => {
      const res = await axios(dataUrl)
      const blob = res.data
      return new File([blob], fileName, { type: mimeType })
    }
    filee = await dataUrlToFile(
      allValues?.signature,
      `${Math.floor(10000 + Math.random() * 900000)}.png`,
      'image/png'
    )

    console.log('filee', filee)
    try {
      const formData = new FormData()

      formData.append('user_image', filee)
      // formData.append('firstName', firstName)
      // formData.append('email', email)
      const body = formData
      await dispatch(userMemberAction(body, history))

      // const res = await api.post('/user/becomemeber', body)
    } catch (error) {}
  }
  useEffect(() => {
    console.log('allValues', allValues)
  }, [allValues])

  return (
    <>
      <FooterHeader />
      <div>
        <section className='about-page'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-11 mx-auto'>
                <div className='row mb-5 pb-5'>
                  <div className='col-md-12 text-center'>
                    <h3 className='main-heading'>Memberships</h3>
                    <p className='general-para px-sm-5'>
                      Join now for full access to Yahki Awakened Eye of Lotus
                      Botanical Health Club including exclusive access to the
                      Yahki Approved Herbal List, All charts and data, Our Detox
                      center, Cooking Classes, Online Shop and more.
                    </p>
                  </div>
                </div>
                {/* MEMBERSHIP PACKAGES */}
                <form>
                  <div className='row align-items-start justify-content-center text-center my-5 pb-5'>
                    <div className='col-lg-4 col-md-8 mb-5 mx-auto'>
                      <div className='package-box mx-xl-5'>
                        <img
                          src='images/free.png'
                          alt=''
                          className='img-fluid mb-3'
                        />
                        <div className='package-selection'>
                          <label className='labl'>
                            {/* <input type="radio" name="radioname" value="one_value" checked="checked"/> */}
                            <div>
                              <h3>Melanin Free</h3>
                              <p>Basic Access</p>
                              <h4 className='mt-4 membership-price'>free</h4>
                            </div>
                          </label>
                        </div>
                        {userInfo && userInfo?.ismember ? (
                          <h3>Already a member</h3>
                        ) : (
                          <>
                            <div className='row my-4'>
                              <div className='col-12 mb-4'>
                                <label>First Name*</label>
                                <input
                                  type='text'
                                  className='form-control mt-2'
                                  placeholder='Enter First Name'
                                  value={firstname}
                                  onChange={(e) => {
                                    setfirstname(e.target.value)
                                  }}
                                />
                              </div>
                              <div className='col-12 mb-4'>
                                <label>Last Name*</label>
                                <input
                                  type='text'
                                  className='form-control mt-2'
                                  placeholder='Enter Last Name'
                                  value={lastname}
                                  onChange={(e) => {
                                    setlastname(e.target.value)
                                  }}
                                />
                              </div>
                            </div>{' '}
                            <Signature
                              allValues={allValues}
                              setAllValues={setAllValues}
                            />
                            <div style={{ height: 45 }}></div>
                            <Link
                              to='#'
                              onClick={() => {
                                allValues?.signature?.length > 0
                                  ? subscriptionHandler()
                                  : Toasty(
                                      'error',
                                      `Please fill out all the required fields`
                                    )
                              }}
                              className='btn maroon-btn-solid d-inline-block mt-5 mx-auto'
                            >
                              Subscribe
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
                <AllHerbs />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Memberships
