import React from 'react'
import InnerPageBanner from './InnerPageBanner'
const Donate = () => {
    return (<>
    <InnerPageBanner/>
        <div className="container-fluid my-5 py-4" id="donation-shapes">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="donation">
              <div className="row">
                <div className="col-md-9 col-12 mx-auto text-center">
                  <h4 className="sub-heading">Enter the amount you wish to donate and click “Make a Difference”.</h4>
                  <h3 className="main-heading">Make A Donation Directly On This Website</h3>
                  <div className="donation-box my-5">
                    <div className="row my-4 align-items-center">
                      <div className="col-xl-7 col-lg-6">
                        <div className="account-form">
                          <form>
                            <div className="row align-items-center justify-content-center">
                              <div className="col-12">
                                <div className="row justify-content-md-center">
                                  <div className="col-md-12 mt-2">
                                    {/* first and last name */}
                                    <div className="row">
                                      <div className="col-md-12 mt-3 text-left">
                                        <label htmlFor className="my-label">Enter Amount</label>
                                        <input type="text" className="form-control my-textbox" placeholder="Ex: 1000" />
                                      </div>
                                    </div>
                                    {/* Your Message*/}
                                    <div className="row">
                                      <div className="col-md-12 mt-3 text-left">
                                        <label htmlFor className="my-label">Enter Notes</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Notes" rows={5} defaultValue={""} />
                                      </div>
                                    </div>
                                    <div className="row mb-5">
                                      <div className="col-12 text-center">
                                        <a href="#" className="btn red-btn-solid ml-0 px-5 py-2">Send</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-6 my-auto">
                        <div className="money-orders my-auto">
                          <h4>MONEY ORDERS</h4>
                          <p>Please send a money order payable to YAHKI AWAKENED LLC to:</p>
                          <h3>Yah’ki Awakened LLC
                            1650 Shackelford Rd
                            PO Box 1529
                            Florissant, MO 63031
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="main-heading">Peace, Love &amp; Light Family</h3>
                  <p className="general-para my-3">
                    Yah’Ki Awakened LLC &amp; Eye of Lotus Botanicals greatly appreciates your donations. 
                    Every cent given is used to help heal our community which include furthering our research, creating healing retreats, 
                    funds for free herbal programs &amp; packages, and creating new herbal courses.
                  </p>
                  <p className="general-para my-3">
                    We accept donation in many different forms. Below are a few different ways to donate to the healing of our people. 
                    Please be sure to list “donation” when paying for money to be utilized properly.
                  </p>
                  <p className="red text-capitalize my-3 f-20">WE GREATLY APPRECIATE ALL THAT YOU DO!</p>
                  <div className="payment-options my-5 pt-5 px-5">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-lg-5 col-md-6 col-12">
                        <div className="pay-with">
                          <img src="images/paypal-option.png" alt="" className="img-fluid" />
                        </div>
                        <a href="#" className="btn maroon-btn-solid mx-auto my-4 ">Donate with Paypal</a>
                      </div>
                      <div className="col-lg-5 col-md-6 col-12">
                        <div className="pay-with">
                          <img src="images/cash-app-option.png" alt="" className="img-fluid" />
                        </div>
                        <a href="#" className="btn maroon-btn-solid mx-auto my-4 ">Donate with Cash App</a>
                      </div>
                    </div>
                  </div>
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
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Donate
