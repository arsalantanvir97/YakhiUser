import React, { useState } from 'react'
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

const Donate = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [amount, setamount] = useState(0)
  const [notes, setnotes] = useState('')

  async function handleToken(token) {
    let product = Number(amount)
    console.log('product', product)
    const config = {
      header: {
        Authorization: 'Bearer sk_test_OVw01bpmRN2wBK2ggwaPwC5500SKtEYy9V',
      },
    }
    const response = await axios.post(
      `${baseURL}/checkout`,
      { token, product },
      config
    )
    console.log('response', response)
    const { status } = response.data
    Swal.fire({
      icon: 'success',
      title: '',
      text: 'Donation done Successfully',
      showConfirmButton: false,
      timer: 1500,
    })
    console.log(
      'res',
      response.data.id,
      response.data.status,
      response.headers.date,
      response.data.receipt_email
    )
    setamount('')
    setnotes('')
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
                                    {/* <div className="row">
                                      <div className="col-md-12 mt-3 text-left">
                                        <label htmlFor className="my-label">
                                          Enter Amount
                                        </label>
                                        <input
                                          type="number"
                                          className="form-control my-textbox"
                                          placeholder="Ex: 1000"
                                          value={amount}
                                          onChange={(e) => {
                                            setamount(e.target.value);
                                          }}
                                        />
                                      </div>
                                    </div> */}
                                    {/* Your Message*/}
                                    {/* <div className="row">
                                      <div className="col-md-12 mt-3 text-left">
                                        <label htmlFor className="my-label">
                                          Enter Notes
                                        </label>
                                        <textarea
                                          className="form-control"
                                          id="exampleFormControlTextarea1"
                                          placeholder="Notes"
                                          rows={5}
                                          value={notes}
                                          onChange={(e) => {
                                            setnotes(e.target.value);
                                          }}
                                        />
                                      </div>
                                    </div> */}
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
                          <img
                            src='images/paypal-option.png'
                            alt=''
                            className='img-fluid'
                          />
                        </div>
                        <PayPalButton
                          options={{
                            clientId:
                              'AYRPum5MCP6OVrHetOKvYD0CxpyGbGnu6U-n-mokG1mcDa4E_jW9VmOIWp7756ttzZ-LvB3lhe3r1Cey',
                            currency: 'USD',
                          }}
                          createOrder={(data, actions) => {
                            return actions.order.create({
                              purchase_units: [
                                {
                                  description: 'REZERWACJA',
                                  amount: {
                                    currency_code: 'USD',
                                    value: 100,
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

                            // OPTIONAL: Call your server to save the transaction
                            // return fetch("/paypal-transaction-complete", {
                            //   method: "post",
                            //   body: JSON.stringify({
                            //     orderID: data.orderID
                            //   })
                            // });
                          }}
                        />
                      </div>
                      <div className='col-lg-5 col-md-6 col-12'>
                        <div className='pay-with'>
                          <img
                            src='images/cash-app-option.png'
                            alt=''
                            className='img-fluid'
                          />
                        </div>
                        <Link
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
      <AllHerbs />
      <Footer />
    </>
  )
}

export default Donate
