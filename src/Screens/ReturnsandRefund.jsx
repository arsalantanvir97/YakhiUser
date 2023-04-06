import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import PrivateRouteSlider from '../components/PrivateRouteSlider'
import MainHeader from '../components/MainHeader'
import AllHerbs from '../components/AllHerbs'
import ToggleBack from '../components/ToggleBack'
import UnauthorizedAlert from '../components/UnauthorizedAlert'
import { useSelector } from 'react-redux'
const ReturnsandRefund = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  
  
  return (
    <>
      <Header />
      <MainHeader />

      <div className='container-fluid my-1 py-1'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <ToggleBack name={'Returns and Refund'} />
            <section className='orders'>
              <div className='row'>
                <div className='col-12 text-center'>
                  <h2>Return, Refunds &amp; Cancellation Policy</h2>
                </div>
              </div>
              {/* ORDERS */}
              <div className='row my-5'>
                <div className='col-12 mt-5 text-left'>
                  <h3>All Sales Are Final:</h3>
                </div>
                {/* Refund Policy */}
                <div className='col-12 mt-3'>
                  <h4>Refund Policy</h4>
                  <p>
                    All herbal compounds are custom made and cannot be sold to
                    another person.
                  </p>
                  <p className='mt-3'>
                    We do not accept returns, refunds, or exchanges. If your
                    purchased item(s) is/are damaged in transit, a new package
                    will be sent out upon return of the damaged package. Please
                    complete the Damage Form within 7 days of receiving your
                    package. Filling out the form is the best way to have your
                    damaged or addressed. Please have your name, a detailed
                    description of the damage with photos, the order number and
                    tracking number because this info is necessary to process a
                    damage form.
                  </p>
                  <Link
                              className='btn red-btn-solid mt-lg-4 mt-3'
                              to={userInfo ? '/DamageClaims' : '#'}
                              onClick={() => {
                                !userInfo && UnauthorizedAlert()
                              }}
                            >
                    Submit A Damage Claim
                            </Link>
                  <p className='mt-3'>
                    We do not issue refunds on any premium membership
                    subscription purchases whatsoever. You are free to
                    downgrade, pause or cancel your Melanin Gold or Melanin
                    Silver membership at any time. If you are having issues
                    accessing your membership account, you must fill out a
                    membership issues ticket and our memberships department will
                    assist you.
                  </p>
                  <Link to='/Signup' className='btn red-btn-solid mt-lg-4 mt-3'>
                    Submit A Membership Help Ticket
                  </Link>
                </div>
                {/* Damaged Packaging */}
                <div className='col-12 mt-5'>
                  <h4>Damaged Packaging</h4>
                  <p>
                    Customers will be reimbursed for the returned shipping of
                    damaged packages. upon receipt of the damaged package, a
                    replacement will be sent out if available. If you are
                    shipping an item over $75, please consider using a trackable
                    shipping service or purchasing shipping insurance. We do not
                    guarantee that your returned item will be received.
                  </p>
                  <p className='mt-3'>
                    If a replacement is not available, we will refund the full
                    purchase price of your package. If your package is no longer
                    available, your refund will be processed within seven (7)
                    business days. A credit will automatically be applied to
                    your credit card or original method of payment.
                  </p>
                  <p className='mt-3 '>
                    REFUNDS ARE ONLY HONORED FOR REPLACEMENT OF DAMAGED PACKAGES
                    THAT ARE NO LONGER AVAILABLE.
                  </p>
                </div>
                {/* Late or Missing Refunds ( If Applicable ) */}
                <div className='col-12 mt-5'>
                  <h4>Late or Missing Refunds ( If Applicable )</h4>
                  <p>
                    {' '}
                    If you haven’t received a refund yet and it has been at
                    least seven (14) business days, first check your bank
                    account or credit card account. It may take some time before
                    your refund is officially posted. Refund processing times
                    vary for different banks and credit card companies. If your
                    refund has not posted within 14 days please contact us at 
                    <Link className='grey' to='#'>
                      orders@yahkiawakened.com
                    </Link>
                  </p>
                </div>
                {/* Lost or Stolen Packages */}
                <div className='col-12 my-5'>
                  <h4>Lost or Stolen Packages</h4>
                  <p>
                    <span className=''>
                      Yah’ki Awakened Eye Of Lotus Botanical Health Club
                    </span>{' '}
                    is not responsible for lost or stolen packages confirmed to
                    be delivered to the address entered for an order. Upon
                    inquiry,{' '}
                    <span className=''>
                      {' '}
                      Yah’ki Awakened Eye Of Lotus Botanical Health Club{' '}
                    </span>
                    will confirm delivery to the address provided, date of
                    delivery, tracking information, and shipping carrier
                    information for the customer to investigate the missing
                    package.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <AllHerbs />
      <Footer />
    </>
  )
}

export default ReturnsandRefund
