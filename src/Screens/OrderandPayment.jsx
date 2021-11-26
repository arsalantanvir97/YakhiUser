import React from 'react'

const OrderandPayment = () => {
    return (
        <div className="container-fluid my-5 py-3">
        <div className="row">
          <div className="col-11 mx-auto">
            <section className="orders">
              <div className="row">
                <div className="col-12 text-center">
                  <h2>Orders &amp; Payments</h2>
                </div>
              </div>
              {/* ORDERS */}
              <div className="row my-5">
                <div className="col-12 text-left">
                  <h3>Orders:</h3>
                </div>
                {/* Placing An Order */}
                <div className="col-12 mt-3">
                  <h4>Placing An Order</h4>
                  <p> 
                    It may take up to 10 business days before your order is processed,
                    and processing may take up to 5 or 10 business days. After your order is
                    processed it takes additional time for packaging, shipping, and delivery. 
                    It is unlikely but it may take your order anywhere between 5 – 30 business days before delivery.
                    (this does not include the day your order was placed, weekends, or holydays).
                    Please note that it’s our priority to get your orders out to you a soon as possible.
                  </p>
                  <p className="bottom-note mt-2">
                    Orders can be placed on our website 24 hours a day, 7 days a week
                  </p>
                </div>
                <div className="col-12 mt-3">
                  <h4 className="order-note">Please Note:</h4>
                  <p> 
                    Expedited shipping options are NOT available online and must be phoned in to our office.
                    Once an order has been placed it cannot be changed, added to, or combined. Any additions will
                    be billed and shipped as a separate order.
                  </p>
                </div>
                {/* Phone Orders */}
                <div className="col-12 mt-5">
                  <h4>Phone Orders</h4>
                  <p> 
                    We do not take orders over the phone. Orders can only be placed on website.
                    If a health club member is having issues ordering on website, please contact us through our website live
                    chat and a staff member will assist.
                  </p>
                </div>
                <div className="col-12 mt-3">
                  <h4 className="order-note">Please Note:</h4>
                  <p>
                    We are a very busy office and will require a voicemail to be left if there is not a 
                    representative available at the time of your call. All voicemails are returned in the order 
                    in which they are received. Please allow up to 72 hours (Monday -Thursday) for a return call. 
                    International orders must be placed on our website or via email. Thank you in advance for your understanding 
                    and willful cooperation.
                  </p>
                </div>
                {/* Local Pickup */}
                <div className="col-12 mt-5">
                  <h4>Local Pickup</h4>
                  <p> 
                    We don’t offer any onsite pickups. All orders must be shipped.
                  </p>
                  <h4 className="mt-5">Mail In Orders</h4>
                  <p> 
                    To order by mail, we ask that you first phone our office to receive a grand total with Shipping 
                    and Handling costs included.  Please send a personal or business check or money order payable to YAH’KI 
                    AWAKENED LLC along with a list of the items you wish to purchase to:
                  </p>
                  <p className="bottom-note mt-2">
                    Yah’ki Awakened LLC 1650 Shackelford Rd, Unit 1529 Florissant, MO 63031
                  </p>
                  <h4 className="mt-5">Out of Stock Items</h4>
                  <p> 
                    If there is not a suitable substitution to be made, the remainder of the order will
                    be sent without the out of stock item(s).  No item will be placed on back-order. Out of stock
                    items must be reordered by the Member when the item is back in stock.
                  </p>
                </div>
              </div>
              {/* PAYMENTS */}
              <div className="row my-5">
                <div className="col-12 text-left">
                  <h3>Payments:</h3>
                </div>
                {/* Credit Card */}
                <div className="col-12 mt-3">
                  <h4>Credit Card</h4>
                  <p> 
                    ICredit card payments are processed through Stripe and PayPal.<br />
                    Please include the Name that appears on the card, Account Number, Expiration Date, CVV security code (if requested), and Billing Address that is associated with the Credit Card.
                  </p>
                </div>
                {/* Paypal */}
                <div className="col-12 mt-5">
                  <h4>Paypal</h4>
                  <p> 
                    Once you have received an invoice from a member of our processing team with your grand total, please submit payment to
                  </p>
                </div>
                <div className="col-12 mt-3">
                  <h4 className="order-note">Please Note:</h4>
                  <p>
                    We are a very busy office and will require a voicemail to be left if there is not a 
                    representative available at the time of your call. All voicemails are returned in the order 
                    in which they are received. Please allow up to 72 hours (Monday -Thursday) for a return call.
                    International orders must be placed on our website or via email. Thank you in advance for your 
                    understanding and willful cooperation. <br />
                    <a href="paypal.me/YahkiAwakenedLLC" className="red">paypal.me/YahkiAwakenedLLC</a>
                  </p>
                </div>
                <div className="col-12 mt-3">
                  <h4 className="order-note">Please Note:</h4>
                  <p>
                    When paying via PayPal for phone orders or additions made to an online order, 
                    your order will be held until all funds have been processed/received. This may result in a delay to your order.
                  </p>
                  <p className="mt-3"> All standard orders shipped within the USA will ship via UPS Ground, UPS Flat Rate (if requirements are met, 
                    available online ONLY) or USPS Priority mail 2-3 day, depending on the members request at the time of placing the order. 
                    All orders are processed in the order in which they are received.</p>
                </div>
                <div className="col-12 mt-3">
                  <p className="red">
                    *All information and tools on this website are strictly for members only.
                    Use of any of the information given on this website by a non-member is strictly prohibited.
                  </p>
                  <p className="bottom-note mt-2">
                    ALL orders placed with Yah’ki Awakened Eye Of Lotus Botanical Health 
                    Club must be addressed and shipped to a Health Club Member. All shipping details are verified with registered members. 
                    Any orders placed with shipping of any product to a non-member will result in immediate cancellation of the order.</p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 text-center">
                  <div className="about-bottom-banner">
                    <h3>All Herbs Are Organic Alkaline and Are Naturally Wildcrafted from the Land of their Origin</h3>
                    <p>All herbs used in our products are 100% naturally organic and are selectively picked and tested by a laboratory before use. Each herbal compound is personally prepared with gratification for the purpose of restoring health to our clients.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
    )
}

export default OrderandPayment
