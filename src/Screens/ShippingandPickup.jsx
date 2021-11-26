import React from 'react'

const ShippingandPickup = () => {
    return (
        <div className="container-fluid my-5 py-3">
        <div className="row">
          <div className="col-11 mx-auto">
            <section className="orders">
              <div className="row">
                <div className="col-12 text-center">
                  <h2>Shipping &amp; Pickups</h2>
                </div>
              </div>
              {/* ORDERS */}
              <div className="row my-5">
                <div className="col-12 mt-3">
                  <h4>LOCAL PICKUP</h4>
                  <p>We don’t offer any onsite pickups. All orders must be shipped.</p>
                </div>
                <div className="col-12 mt-5 text-left">
                  <h3>Domestic Shipping:</h3>
                </div>
                {/* Standard Orders */}
                <div className="col-12 mt-3">
                  <h4>Standard Orders</h4>
                  <p> 
                    Our processing takes anywhere from 2-30 business days, depending on supplies. 
                    We are not responsible for shipping charges or time frames dealing with the postal service. 
                    Once we have completed and sealed the package, we then put it into USPS system and drop off and 
                    at that point they are responsible for shipping time frame. If you paid for expedited shipping, 
                    that only applies to once the package officially ships.
                  </p>
                  <p className="mt-3">
                    All standard orders shipped within the USA will ship via UPS Ground, UPS Flat Rate 
                    (if requirements are met, available online ONLY) or USPS Priority mail 2-3 day, depending on
                    the members request at the time of placing the order. All orders are processed in the order 
                    in which they are received.
                  </p>
                </div>
                {/* Signature Requirement */}
                <div className="col-12 mt-5">
                  <h4>Signature Requirement</h4>
                  <p> 
                    A valid Signature of a person at least 18 years of age is required upon delivery 
                    for ALL UPS and USPS shipments for order over $250.00  All 3rd party shipments (Drop-ship orders) 
                    will require a Signature upon delivery regardless of whether the waiver is filled out.  We feel this 
                    is necessary to ensure our products arrive to our Health Club Members safely. A tracking number will be 
                    emailed once an order has shipped for the member’s convenience.
                  </p>
                  <p className="mt-3"> Any returned package due to a signature not being able to be obtained at the time of delivery is subject to a 
                    20% restocking fee. All shipping charges are non-refundable. This cost is included within the Shipping &amp; Handling
                    rates available online.
                  </p>
                </div>
                {/* Lost Packages */}
                <div className="col-12 mt-5">
                  <h4>Lost Packages</h4>
                  <p> 
                    In the event that a package is lost during transit, we ask that our members contact Yah’ki Awakened Eye 
                    Of lotus Botanical Health Club ASAP in order for an investigation to be opened with the appropriate carrier.  
                    Investigation response times typically take 2-5 business days, but can take longer.  Once an outcome is reached, 
                    Yah’ki Awakened Eye Of Lotus Botanical Health Club will be in contact with the member to discuss the next available step.
                  </p>
                </div>
              </div>
              {/* International Shipping */}
              <div className="row my-5">
                <div className="col-12 text-left">
                  <h3>International Shipping:</h3>
                </div>
                <div className="col-12 mt-3">
                  <p>
                    We strongly suggest that all International Members check with their local customs agency for their Rules 
                    &amp; Regulations/Restrictions on the importation of Dietary Supplements and/or our Herbal Formula ingredients prior 
                    to placing an order. All International orders MUST be placed in writing, either through our website or via email.  
                    Thank you in advance for your understanding and cooperation.
                  </p>
                </div>
                {/* International Shipping Restrictions */}
                <div className="col-12 mt-5">
                  <h4>International Shipping Restrictions</h4>
                  <p> 
                    Due to restrictions on herbal products and/or Dietary Supplements, we are unable to ship to the following countries:
                  </p>
                  <ul className="mt-3">
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
              <div className="row my-5">
                <div className="col-12 text-left">
                  <h4>Packages To Canada</h4>
                </div>
                <div className="col-12 mt-3">
                  <p>Due to Health Canada’s policies, we are only able to ship to Canada under the following conditions:</p>
                  <p className="mt-3">* Shipments to Canada must be addressed to a Health Club Member and NOT a Company/Business name.</p>
                  <p className="mt-3">*Orders addressed to a single Health Club Member can only receive up to a 90 day supply within a 90 day period.</p>
                  <p className="mt-3">
                    Failure to comply will result in the package being held, returned and/or contents removed by Health Canada. Yahki Awakened Eye of Lotus Botanical 
                    Club is not responsible for any seized or returned package due to an individual’s non-compliance with Health Canada regulations.
                  </p>
                </div>
                <div className="col-12 text-left my-5">
                  <h4>Endangered Species (Canada) CITES</h4>
                </div>
                <div className="col-12 mt-3">
                  <p className="mt-3">
                    CITES is an agency which monitors the importation of endangered plant and animal species into Canada.
                    Some botanicals are endangered and may be confiscated by customs.  Please reference the CITES Endangered 
                    Species list before placing your order as we are not responsible for monitoring the list. 
                    If your items are confiscated, we will not be responsible for confiscated items.
                  </p>
                  <p className="bottom-note my-2">
                    We encourage all Canadian members to check with customs before placing orders to make sure your orders are in compliance
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 text-center">
                  <div className="about-bottom-banner">
                    <h3>All Herbs Are Organic Alkaline and Are Naturally Wildcrafted from the Land of their Origin</h3>
                    <p>All herbs used in our products are 100% naturally organic and are selectively picked and tested by a 
                      laboratory before use. Each herbal compound is personally prepared with gratification for the purpose of
                      restoring health to our clients.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
    )
}

export default ShippingandPickup
