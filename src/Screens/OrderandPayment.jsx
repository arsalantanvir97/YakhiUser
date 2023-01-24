import React from 'react'
import AllHerbs from '../components/AllHerbs'
import Footer from '../components/Footer'
import MainHeader from '../components/MainHeader'
import Header from '../components/Header'
// import MainHeader from '../components/MainHeader'
import ToggleBack from '../components/ToggleBack'

const OrderandPayment = () => {
  return (
    <>
      <Header />
      <MainHeader />

      <div className='container-fluid my-1 py-1'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <ToggleBack name={`Order & Payment`} />
            <section className='orders'>
              <div className='row'>
                <div className='col-12 text-center'>
                  <h2>Orders &amp; Payments</h2>
                </div>
              </div>
              {/* ORDERS */}
              <div className='row my-5'>
                <div className='col-12 text-left'>
                  <h3>Orders:</h3>
                </div>
                {/* Placing An Order */}
                <div className='col-12 mt-3'>
                  <h4>Placing An Order</h4>
                  <p>
                    <span className='bottom-note'>
                      Orders can be placed on our website 24 hours a day, 7 days
                      a week.{' '}
                    </span>
                    Processing may take up to 5 or 10 business days. After your
                    order is processed it takes additional time for packaging,
                    shipping, and delivery. Please allow 7-30 business days to
                    receive your order (does not include the day your order was
                    placed, weekends, or holydays). It’s our priority to get
                    your orders out to you a soon as possible.
                  </p>
                </div>
                <div className='col-12 mt-3'>
                  <h4 className='order-note'>Please Note:</h4>
                  <p>
                    Once an order has been placed it cannot be changed, added
                    to, or combined. Any additions will be billed and shipped as
                    a separate order.
                  </p>
                </div>
                {/* Phone Orders */}
                <div className='col-12 mt-5'>
                  <h4>Phone Orders</h4>
                  <p>
                    Soon you will be able to place your orders over the phone.
                    We will provide the phone number for phone orders once it
                    launches. When placing a phone order please have a general
                    idea of what you need and form payment ready. We accept all
                    debit and major credit cards.
                  </p>
                </div>
                {/* <div class="col-12 mt-3">
                  <h4 class="order-note">Please Note:</h4>
                  <p>
                      We are a very busy office and will require a voicemail to be left if there is not a 
                      representative available at the time of your call. All voicemails are returned in the order 
                      in which they are received. Please allow up to 72 hours (Monday -Thursday) for a return call. 
                      International orders must be placed on our website or via email. Thank you in advance for your understanding 
                      and willful cooperation.
                  </p>
              </div> */}
                {/* Local Pickup */}
                <div className='col-12 mt-5'>
                  <h4>Local Pickup</h4>
                  <p>
                    We don’t currently offer any onsite pickups. All orders must
                    be shipped.
                  </p>
                  <h4 className='mt-5'>Mail In Orders</h4>
                  <p>
                    To order by mail, we ask that you first phone our office to
                    receive a grand total with Shipping and Handling costs
                    included. Please send a personal or business check or money
                    order payable to YAH’KI AWAKENED LLC along with a list of
                    the items you wish to purchase to:
                  </p>
                  <p className='bottom-note mt-2'>
                    7217 Watson Rd PO 190563St. Louis, Mo 63119
                  </p>
                  <h4 className='mt-5'>Out of Stock Items</h4>
                  <p>
                    If there is not a suitable substitution to be made, the
                    remainder of the order will be sent without the out of stock
                    item(s). No item will be placed on back-order. Out of stock
                    items must be reordered by the Member when the item is back
                    in stock.
                  </p>
                </div>
              </div>
              {/* PAYMENTS */}
              <div className='row my-5'>
                <div className='col-12 text-left'>
                  <h3>Payments:</h3>
                </div>
                {/* Credit Card */}
                <div className='col-12 mt-3'>
                  <h4>Credit Card</h4>
                  <p>
                    Credit card payments are processed through Stripe and
                    PayPal. Please include the Name that appears on the card,
                    Account Number, Expiration Date, CVV security code (if
                    requested), and Billing Address that is associated with the
                    Credit Card.
                  </p>
                </div>
                {/* Paypal */}
                <div className='col-12 mt-5'>
                  <h4>Paypal</h4>
                  <p>
                    Once you have received an invoice from a member of our
                    processing team be sure to update your shipping address and
                    complete payment to ensure your order is received.
                  </p>
                </div>
                <div className='col-12 mt-3'>
                  <h4 className='order-note'>International Orders</h4>
                  <p>
                    International orders must be placed on our website or via
                    email. Thank you in advance for your understanding and
                    willful cooperation. <br />
                    <a href='paypal.me/YahkiAwakenedLLC' className='red'>
                      paypal.me/YahkiAwakenedLLC
                    </a>
                  </p>
                </div>
                <div className='col-12 mt-3'>
                  <h4 className='order-note'>Please Note:</h4>
                  <p>
                    All standard orders shipped within the USA will ship via UPS
                    Ground, UPS Flat Rate (if requirements are met, available
                    online ONLY) or USPS Priority mail 2-3 day, depending on the
                    members request at the time of placing the order. All orders
                    are processed in the order in which they are received.
                  </p>
                </div>
                <div className='col-12 mt-3'>
                  <p className='mt-3'>
                    *All information and tools on this website are strictly for
                    members only. Use of any of the information given on this
                    website by a non-member is strictly prohibited.
                    <br />
                    *ALL orders placed with Yah’ki Awakened Eye Of Lotus
                    Botanical Health Club must be addressed and shipped to a
                    Health Club Member. All shipping details are verified with
                    registered members. Any orders placed with shipping of any
                    product to a non-member will result in immediate
                    cancellation of the order.
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

export default OrderandPayment
