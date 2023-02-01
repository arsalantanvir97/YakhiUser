import React, { useEffect, useState } from 'react'
import InnerPageBanner from './InnerPageBanner'
import StripeCheckout from 'react-stripe-checkout'
import { PayPalButton } from 'react-paypal-button-v2'
import {
  SquarePaymentsForm,
  CreditCardInput,
} from 'react-square-web-payments-sdk'
import { baseURL } from '../utils/api'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainHeader from '../components/MainHeader'
import AllHerbs from '../components/AllHerbs'
import ToggleBack from '../components/ToggleBack'
import addPayPalScript from '../utils/addPayPalScript'
import SezzleWidget from 'sezzle-react-widget'
import { AcceptHosted, FormComponent, FormContainer } from 'react-authorize-net'
import Toasty from '../utils/toast'

const Donate = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [amount, setamount] = useState(1)
  const [notes, setnotes] = useState('')
  const [clientid, setclientid] = useState('')
  const [clientKey, setclientKey] = useState('')
  const [apiLoginId, setapiLoginId] = useState('')
  const [merchantId, setmerchantId] = useState('')

  const [sdkReady, setSdkReady] = useState(false)

  useEffect(async () => {
    const resss = await axios.get(`${baseURL}/config/authorize`)
    setclientKey(resss?.data?.loginid)
    setapiLoginId(resss?.data?.transactionkey)
    const res2ss = await axios.get(`${baseURL}/config/sezzle`)
    setmerchantId(res2ss?.data?.keyid)

    addPayPalScript({ setclientid, setSdkReady })
  }, [])

  const onSuccessHandler = (response) => {
    history.push('/')
  }

  const onErrorHandler = (error) => {
    console.log('error', error)
    Toasty('error', error)
  }
  return (
    <>
      <Header />
      <MainHeader />

      <div className='container-fluid my-1 py-1' id='donation-shapes'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <ToggleBack name={'Donate'} />
            <div className='donation'>
              <div className='row'>
                <div className='col-md-9 col-12 mx-auto text-center'>
                  <h4 className='sub-heading'>
                    Enter the amount you wish to donate and click “Make a
                    Difference”.
                  </h4>
                  <h3 className='main-heading'>
                    Make A Donation Directly On This Website
                  </h3>
                  <h3 className='main-heading'>
                    Peace, Love &amp; Light Family
                  </h3>
                  <p className='general-para my-3'>
                    Yah’Ki Awakened LLC &amp; Eye of Lotus Botanicals greatly
                    appreciates your donations. Every cent given is used to help
                    heal our community which include furthering our research,
                    creating healing retreats, funds for free herbal programs
                    &amp; packages, and creating new herbal courses.
                  </p>
                  <p className='general-para my-3'>
                    We accept donations in many different forms. Below are a few
                    different ways to donate to the healing of our people.
                    Please be sure to list “donation” when paying for money to
                    be utilized properly.
                  </p>
                  <p className='red text-capitalize my-3 f-20'>
                    WE GREATLY APPRECIATE ALL THAT YOU DO!
                  </p>
                  <div className='donation-box my-5'>
                    <div className='row my-4 align-items-center'>
                      <div className='col-xl-7 col-lg-6'>
                        <div className=''>
                          <form>
                            <div className='row align-items-center justify-content-center'>
                              <div className='col-12'>
                                <div className='row justify-content-md-center'>
                                  <div className='col-md-12 mt-2'>
                                    {/* first and last name */}
                                    <div className='row'>
                                      <div className='col-md-12 mt-3 text-left'>
                                        <label htmlFor className='my-label'>
                                          Enter Amount
                                        </label>
                                        <input
                                          type='number'
                                          className='form-control my-textbox'
                                          placeholder='Ex: 1000'
                                          value={amount}
                                          onChange={(e) => {
                                            setamount(e.target.value)
                                          }}
                                        />
                                      </div>
                                    </div>
                                    {/* Your Message*/}
                                    <div className='row'>
                                      <div className='col-md-12 mt-3 text-left'>
                                        <label htmlFor className='my-label'>
                                          Enter Notes
                                        </label>
                                        <textarea
                                          className='form-control'
                                          id='exampleFormControlTextarea1'
                                          placeholder='Notes'
                                          rows={5}
                                          value={notes}
                                          onChange={(e) => {
                                            setnotes(e.target.value)
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                          {/* <label htmlFor className='my-label'>
                            Square Payment
                          </label>
                          <SquarePaymentsForm
                            applicationId='sandbox-sq0idb-v3tKjw-IGf76LuqkI7U3rQ'
                            cardTokenizeResponseReceived={(token, buyer) => {
                              console.log('token, buyer', token, buyer)
                            }}
                            locationId='L17RXM5KHXR8D'
                          >
                            <CreditCardInput text={'Pay now'} />
                          </SquarePaymentsForm> */}
                        </div>
                      </div>
                      <div className='col-xl-5 col-lg-6 my-auto'>
                        <div className='money-orders my-auto'>
                          <h4>MONEY ORDERS</h4>
                          <p>
                            Please send a money order payable to YAHKI AWAKENED
                            LLC to:
                          </p>
                          <h3>7217 Watson Rd PO 190563 St. Louis, Mo 63119</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='payment-options my-5 pt-5 px-5'>
                    <div className='row justify-content-between align-items-center'>
                      <div className='col-lg-5 col-md-6 col-12'>
                        <div className='pay-with'>
                          {/* <img
                            src='images/paypal-option.png'
                            alt=''
                            className='img-fluid'
                          /> */}
                        </div>
                        <SezzleWidget
                          price={String(amount)}
                          merchantId={merchantId}
                        />
                        {!sdkReady ? null : (
                          <PayPalButton
                            options={{
                              clientId: clientid,
                              currency: 'USD',
                            }}
                            createOrder={(data, actions) => {
                              return actions.order.create({
                                purchase_units: [
                                  {
                                    description: 'REZERWACJA',
                                    amount: {
                                      currency_code: 'USD',
                                      value: amount,
                                    },
                                  },
                                ],
                              })
                            }}
                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={(details, data) => {
                              console.log('details')
                              console.log(details)
                              console.log('data')
                              console.log(data)
                              alert(
                                'Transaction completed by ' +
                                  details.payer.name.given_name
                              )

                              history.push('/')

                              // OPTIONAL: Call your server to save the transaction
                              // return fetch("/paypal-transaction-complete", {
                              //   method: "post",
                              //   body: JSON.stringify({
                              //     orderID: data.orderID
                              //   })
                              // });
                            }}
                          />
                        )}

                        <div className='authorizesty'>
                          <h5 class='mb-3'>Authorize.Net</h5>

                          <FormContainer
                            environment='production'
                            onError={onErrorHandler}
                            onSuccess={onSuccessHandler}
                            amount={Number(amount)}
                            component={FormComponent}
                            clientKey={clientKey}
                            apiLoginId={apiLoginId}
                          />
                        </div>
                      </div>
                      <div className='col-lg-5 col-md-6 col-12'>
                        <div className='pay-with'>
                          <img
                            src='images/cash-app-option.png'
                            alt=''
                            className='img-fluid'
                          />
                          {/* <h4>$YahkiAwakenedLLC</h4> */}
                          <Link
                            onClick={() => {
                              window.open('https://cash.app/$YahkiAwakenedLLC/')
                            }}
                            to='#'
                            className='btn maroon-btn-solid mx-auto my-4 '
                          >
                            Donate with Cash App
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllHerbs />
      <Footer />
    </>
  )
}

export default Donate
