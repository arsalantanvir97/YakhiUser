import React from 'react'

const ReturnsandRefund = () => {
    return (
        <div className="container-fluid my-5 py-3">
        <div className="row">
          <div className="col-11 mx-auto">
            <section className="orders">
              <div className="row">
                <div className="col-12 text-center">
                  <h2>Return, Refunds &amp; Cancellation Policy</h2>
                </div>
              </div>
              {/* ORDERS */}
              <div className="row my-5">
                <div className="col-12 mt-5 text-left">
                  <h3>All Sales Are Final:</h3>
                </div>
                {/* Refund Policy */}
                <div className="col-12 mt-3">
                  <h4>Refund Policy</h4>
                  <p>All herbal compounds are custom made and cannot be sold to other another person.</p>
                  <p className="mt-3">
                    We do not accept returns, refunds, or exchanges. 
                    If your purchased item(s) is/are damaged in transit, a new package will be sent out upon 
                    return of the damaged package. Please complete the Damage Form within 7 days of receiving your package. 
                    You may also send an email to <a href="mailto:info@yahikiawakened.com" className="grey">info@yahikiawakened.com</a>  if you choose not to fill out the form. Please include your name,
                    a detailed description of the damage with photos, the order number and tracking number.
                  </p>
                  <a href="#" className="btn red-btn-solid mt-lg-4 mt-3">Submit A Damaged Claim</a>
                  <p className="mt-3">
                    We do not issue refunds on any premium membership subscription purchases whatsoever. 
                    You are free to downgrade, pause or cancel your Melanin Gold or Melanin Silver membership at any time. 
                    If you are having issues accessing your membership account, you must fill out a membership issues ticket and our 
                    memberships department will assist you.
                  </p>
                  <a href="#" className="btn red-btn-solid mt-lg-4 mt-3">Submit A Membership Help Ticket</a>
                </div>
                {/* Damaged Packaging */}
                <div className="col-12 mt-5">
                  <h4>Damaged Packaging</h4>
                  <p>Customers will be reimbursed for the returned shipping of damaged packages. upon receipt of the damaged package, 
                    a replacement will be sent out if available. If you are shipping an item over $75, please consider using a trackable
                    shipping service or purchasing shipping insurance. We do not guarantee that your returned item will be received.</p>
                  <p className="mt-3">
                    If a replacement is not available, we will refund the full purchase price of your package. 
                    If your package is no longer available, your refund will be processed within seven (7) business days.
                    A credit will automatically be applied to your credit card or original method of payment.
                  </p>
                  <p className="mt-3 bottom-note">
                    REFUNDS ARE ONLY HONORED FOR REPLACEMENT OF DAMAGED PACKAGES THAT ARE NO LONGER AVAILABLE.
                  </p>
                </div>
                {/* Late or Missing Refunds ( If Applicable ) */}
                <div className="col-12 mt-5">
                  <h4>Late or Missing Refunds ( If Applicable )</h4>
                  <p> If you haven’t received a refund yet and it has been at least seven (7) business days, first check your bank account
                    or credit card account. It may take some time before your refund is officially posted. Refund processing times vary for
                    different banks and credit card companies. If your refund has not posted within 14 days please contact us at <a className="grey" href="mailto:info@yahkiawakened.com">info@yahkiawakened.com</a> 
                  </p>
                </div>
                {/* Lost or Stolen Packages */}
                <div className="col-12 my-5">
                  <h4>Lost or Stolen Packages</h4>
                  <p> 
                    <span className="dark-text">Yah’ki Awakened Eye Of Lotus Botanical Health Club</span>  is not responsible for lost or stolen 
                    packages confirmed to be delivered to the address entered for an order. Upon inquiry, <span className="dark-text"> Yah’ki Awakened 
                      Eye Of Lotus Botanical Health Club </span>will confirm delivery to the address provided, date of delivery, tracking 
                    information, and shipping carrier information for the customer to investigate the missing package.
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

export default ReturnsandRefund
