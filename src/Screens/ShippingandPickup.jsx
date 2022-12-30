import React from 'react'
import AllHerbs from '../components/AllHerbs'
import Footer from '../components/Footer'
import FooterHeader from '../components/FooterHeader'
import Header from '../components/Header'
import PrivateRouteSlider from '../components/PrivateRouteSlider'
import ToggleBack from '../components/ToggleBack'

const ShippingandPickup = () => {
  return (
    <>
      <Header />
      <FooterHeader />

      <div className='container-fluid my-1 py-1'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <ToggleBack name={'Shipping and Pickup'} />
            <section className='orders'>
              <div className='row'>
                <div className='col-12 text-center'>
                  <h2>Shipping &amp; Pickups</h2>
                </div>
              </div>
              {/* ORDERS */}
              <div className='row my-5'>
                <div className='col-12 mt-5'>
                  <h4>LOCAL PICKUP</h4>
                  <p className='mt-3'>
                    We don’t offer any onsite pickups. All orders must be
                    shipped.
                  </p>
                </div>
                <div className='col-12 mt-5 text-left'>
                  <h3>Domestic Shipping:</h3>
                </div>
                {/* Standard Orders */}
                <div className='col-12 mt-5'>
                  <h4>Standard Orders</h4>
                  <p className='mt-3'>
                    Processing may take up to 5 or 10 business days. After your
                    order is processed it takes additional time for packaging,
                    shipping, and delivery. Please allow 7-30 business days to
                    receive your order (does not include the day your order was
                    placed, weekends, or holydays. It’s our priority to get your
                    orders out to you a soon as possible.
                  </p>
                  <p className='mt-5'>
                    We are not responsible for additional shipping charges are
                    packages received outside of the specified shipping date
                    determined by USPS. Once your prepared package is scanned
                    into the post office, USPS is solely responsible for the
                    shipping and delivery time. . If you paid for expedited
                    shipping, expedited ship only expedites the shipping
                    overnight once the package is prepared. Expedited shipping
                    does not expedite the processing, and preparation of your
                    order, only the length of the shipping time once your
                    package is prepared and complete.
                  </p>
                  <p className='mt-5'>
                    All standard orders shipped within the USA will ship via UPS
                    Ground, UPS Flat Rate (if requirements are met, available
                    online ONLY) or USPS Priority mail 2-3 day, depending on the
                    members request at the time of placing the order. All orders
                    are processed in the order in which they are received.
                  </p>
                </div>
                {/* Signature Requirement */}
                <div className='col-12 mt-5'>
                  <h4>Signature Requirement</h4>
                  <p className='mt-3'>
                    A valid Signature of a person at least 18 years of age is
                    required upon delivery for ALL UPS and USPS shipments for
                    orders over $250.00 All 3rd party shipments (Drop-ship
                    orders) will require a Signature upon delivery regardless of
                    whether the waiver is filled out. We feel this is necessary
                    to ensure our products arrive to our Health Club Members
                    safely. A tracking number will be emailed once an order has
                    shipped for the member’s convenience.
                  </p>
                  <p className='mt-5'>
                    Any returned package due to lack of signature at the time of
                    delivery is subject to a 20% restocking fee. All shipping
                    charges are non-refundable. This cost is included within the
                    Shipping &amp; Handling rates available online.
                  </p>
                </div>
                {/* Lost Packages */}
                <div className='col-12 mt-5'>
                  <h4>Lost Packages</h4>
                  <p className='mt-3'>
                    In the event that a package is lost during transit, we ask
                    that our members contact Yah’ki Awakened Eye Of lotus
                    Botanical Health Club ASAP in order for an investigation to
                    be opened with the appropriate carrier. Investigation
                    response times typically take 2-5 business days, but can
                    take longer. Once an outcome is reached, Yah’ki Awakened Eye
                    Of Lotus Botanical Health Club will be in contact with the
                    member to discuss the next available step.
                  </p>
                </div>
              </div>
              {/* International Shipping */}
              <div className='row my-5'>
                <div className='col-12 text-left'>
                  <h3>International Shipping:</h3>
                </div>
                <div className='col-12 mt-5'>
                  <p>
                    We strongly suggest that all International Members check
                    with their local customs agency for their Rules &amp;
                    Regulations/Restrictions on the importation of Dietary
                    Supplements and/or our Herbal Formula ingredients prior to
                    placing an order. All International orders MUST be placed
                    through our website. Thank you in advance for your
                    understanding and cooperation.
                  </p>
                </div>
                {/* International Shipping Restrictions */}
                <div className='col-12 mt-5'>
                  <h4>International Shipping Restrictions</h4>
                  <p className='mt-3'>
                    Due to restrictions on herbal products and/or Dietary
                    Supplements, we are unable to ship to the following
                    countries:
                  </p>
                  <ul className='mt-5'>
                    <li>Afghanistan</li>
                    <li>Africa (all countries)</li>
                    <li>Austria</li>
                    <li>Brazil</li>
                    <li>Bulgaria</li>
                    <li>Costa Rica</li>
                    <li>Cuba</li>
                    <li>Denmark</li>
                    <li>Ecuador</li>
                    <li>Estonia</li>
                    <li>Germany</li>
                    <li>Greece</li>
                    <li>Iran</li>
                    <li>Iraq</li>
                    <li>Israel</li>
                    <li>Italy</li>
                    <li>Libya</li>
                    <li>Luxembourg</li>
                    <li>Mexico</li>
                    <li>North Korea</li>
                    <li>Norway</li>
                    <li>Peru</li>
                    <li>Spain</li>
                    <li>Thailand</li>
                    <li>Turkey</li>
                    <li>United Arab Emirates</li>
                  </ul>
                </div>
              </div>
              {/* Packages To Canada */}
              <div className='row my-5'>
                <div className='col-12 text-left'>
                  <h4>Packages To Canada</h4>
                </div>
                <div className='col-12 mt-5'>
                  <p>
                    Due to Health Canada’s policies, we are only able to ship to
                    Canada under the following conditions:
                  </p>
                  <p className='mt-5'>
                    * Shipments to Canada must be addressed to a Health Club
                    Member and NOT a Company/Business name.
                  </p>
                  <p className='mt-5'>
                    * Orders addressed to a single Health Club Member can only
                    receive up to a 90 day supply within a 90 day period.
                  </p>
                  <p className='mt-5'>
                    Failure to comply will result in the package being held,
                    returned and/or contents removed by Health Canada. Yahki
                    Awakened Eye of Lotus Botanical Club is not responsible for
                    any seized or returned package due to an individual’s
                    non-compliance with Health Canada regulations.
                  </p>
                </div>
                <div className='col-12 text-left my-5'>
                  <h4>Endangered Species (Canada) CITES</h4>
                </div>
                <div className='col-12 '>
                  <p className=''>
                    CITES is an agency which monitors the importation of
                    endangered plant and animal species into Canada. Some
                    botanicals are endangered and may be confiscated by customs.
                    Please reference the CITES Endangered Species list before
                    placing your order as we are not responsible for monitoring
                    the list. If your items are confiscated, we will not be
                    responsible for confiscated items.
                  </p>
                  <p className='mt-5'>
                    We encourage all Canadian members to check with customs
                    before placing orders to make sure your orders are in
                    compliance.
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

export default ShippingandPickup
