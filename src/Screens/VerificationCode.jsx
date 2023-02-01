import React, { useState, useEffect } from 'react'
import api from '../utils/api'
import Toasty from '../utils/toast'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import InputNumber from '../components/InputNumber'
import Header from '../components/Header'
import Footer from '../components/Footer'
const VerificationCode = ({ match, history }) => {
  const [loading, setloading] = useState(false)

  const [code, setcode] = useState()

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()
      console.log('body', code, match?.params?.email)
      const body = { code, email: match?.params?.email }
      console.log('TEST')
      // try {
      setloading(true)
      console.log('123')
      const res = await api.post('/auth/userverifyRecoverCode', body)
      console.log('123456')

      setloading(false)

      console.log('res', res)
      history?.push({
        pathname: '/ResetPassword',
        state: { code: code, email: match?.params?.email },
      })
    } catch (error) {
      console.log('error', error?.response)
      setloading(false)

      // alert(error?.response?.data?.message)
      Toasty('error', `🦄 ${error?.response?.data?.message}!`)
    }
    setcode('')
    //   if(res?.status==201){
    //     Toasty('success',`Verification Code Has Been Emailed To Your Email Address`);
    //     history.push('/verificationcode')

    //   }
    // } catch (error) {
    //   Toasty('error',`🦄 Invalid Email!`);

    // }
  }
  const resentCodeHandler = async (e) => {
    e.preventDefault()
    const useremail = match?.params?.email
    const body = { email: useremail }

    try {
      const res = await api.post('/auth/userRecoverPassword', body)
      console.log('res', res)
      if (res?.status == 201) {
        Swal.fire({
          icon: 'success',
          title: 'SUCCESS',
          text: 'Verification Code Sent to your mail',
          showConfirmButton: false,
          timer: 1500,
        })
      }
    } catch (error) {
      console.log(error.response)
      Toasty('error', `🦄 Invalid Email!`)
    }
  }
  return (
    <>
      <Header />

      <div className='container-fluid '>
        <div className='row '>
          <div className='col-xl-6 col-lg-8 col-md-10 col-10 mx-auto'>
            <div className='account-form'>
              <h3 className='text-center'>PASSWORD RECOVERY</h3>
              <form>
                <div className='row pt-5 align-items-center justify-content-center'>
                  <div className='col-12'>
                    <div className='row justify-content-md-center'>
                      <div className='col-md-12 mt-2'>
                        <div className='row justify-content-between align-items-center'>
                          <div className='col-md-12 mt-3'>
                            <label htmlFor className='my-label'>
                              Verification Code<span className='red'>*</span>
                            </label>
                            <InputNumber
                              value={code}
                              onChange={setcode}
                              max={12}
                              className='form-control my-textbox'
                            />
                          </div>
                          {/* <div className='col-6'>
                            <small>Please Enter The Verification Code</small>
                          </div> */}
                          <div className='col-12 '>
                            <h6 className='f-18'>
                              Didn't Get A Code?{' '}
                              <Link
                                className='red'
                                to='#'
                                onClick={resentCodeHandler}
                              >
                                Sent It Again{' '}
                              </Link>
                            </h6>
                          </div>
                        </div>
                        <div className='row my-5'>
                          <div className='col-12 text-center'>
                            {!loading ? (
                              <Link
                                to='#'
                                className='btn red-btn-solid ml-0 px-5 py-2'
                                onClick={onSubmitHandler}
                              >
                                Continue
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
                        <Link to='/Login' className='red' href='login.php'>
                          Back To Login
                        </Link>
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

export default VerificationCode
