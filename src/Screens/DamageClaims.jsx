import React from 'react'

const DamageClaims = () => {
    return (
        <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h4 className="sub-heading">Complains</h4>
            <h3 className="main-heading">Damage Claims</h3>
            <p className="general-para mb-4">
              An email must be sent within 7 days of receiving your package alerting us of the damage. <br />
              In the email to <a href="mailto:info@yahkiawakened.com" className>info@yahkiawakened.com</a>    please include your name, a detailed description of the damage, 
              the order number, and the tracking number.
            </p>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-xl-10 col-lg-8 col-md-10 col-10 mx-auto">
            <div className="account-form">
              <form>
                <div className="row align-items-center justify-content-center">
                  <div className="col-12">
                    <div className="row justify-content-md-center">
                      <div className="col-md-12 mt-2">
                        {/* first and last name */}
                        <div className="row">
                          <div className="col-md-6 mt-3">
                            <label htmlFor className="my-label">First Name<span className="red">*</span></label>
                            <input type="text" className="form-control my-textbox" placeholder="Enter First Name" />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label htmlFor className="my-label">Last Name<span className="red">*</span></label>
                            <input type="text" className="form-control my-textbox" placeholder="Enter Last Name" />
                          </div>
                        </div>
                        {/* email address and contact number */}
                        <div className="row">
                          <div className="col-md-6 mt-3">
                            <label htmlFor className="my-label">Email Address <span className="red">*</span></label>
                            <input type="email" className="form-control my-textbox" placeholder="Enter Email Address" />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label htmlFor className="my-label">Contact Number <span className="red">*</span></label>
                            <input type="tel" className="form-control my-textbox" placeholder="Enter Contact Number" />
                          </div>
                        </div>
                        {/* order number and date of recieving */}
                        <div className="row">
                          <div className="col-md-6 mt-3">
                            <label htmlFor className="my-label">Order Number <span className="red">*</span></label>
                            <input type="email" className="form-control my-textbox" placeholder="Enter Order Number" />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label htmlFor className="my-label">Date Received <span className="red">*</span></label>
                            <input placeholder="Select Date" className="textbox-n" type="text" onfocusin="(this.type='date')" onfocusout="(this.type='text')" id="date" /> 
                          </div>
                        </div>
                        {/* type of damage selection */}
                        <div className="row">
                          <div className="col-md-12 mt-3">
                            <label htmlFor className="my-label">Type of Damage <span className="red">*</span></label>
                            <select className="form-control">
                              <option>Select Type</option>
                              <option>--</option>
                            </select> 
                          </div>
                        </div>
                        {/* UPLOAD DAMAGE PHOTOS*/}
                        <div className="row">
                          <div className="col-md-12 mt-3">
                            <label htmlFor className="my-label">Upload Damage Photos <span className="red">*</span></label>
                            <div className="browse-images" textholder="Browse Images">
                              <label htmlFor="file-upload" className="custom-img-upload w-100">
                                Browse
                              </label>
                            </div>
                            <input id="file-upload" type="file" accept="image/*" placeholder="Browse Images" />
                          </div>
                        </div>
                        {/* Description*/}
                        <div className="row">
                          <div className="col-md-12 mt-3">
                            <label htmlFor className="my-label">Description <span className="red">*</span></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Discription" rows={5} defaultValue={""} />
                          </div>
                        </div>
                        <div className="row mb-5">
                          <div className="col-12 text-center">
                            <a href="#" className="btn red-btn-solid ml-0 px-5 py-2">Submit</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-10 mx-auto my-5">
            <p className="mb-3 pr-3 general-para f-16">
              Customers will be reimbursed for the returned shipping of damaged packages. 
              Upon receipt of the damaged package a replacement will be sent out if available. 
              If you are shipping an item over $75, you should consider using shipping service 
              with tracking or purchase shipping insurance. We do not guarantee that we will receive your returned item.
            </p>
            <p className="mb-3 pr-3 general-para f-16">
              If a replacement is not available, we will refund the full purchase price of your package. 
              If your package is no longer available, your refund will be processed within 7 days. 
              A credit will automatically be applied to your credit card or original method of payment.
            </p>
            <p className="mt-4 red text-uppercase">
              *REFUNDS ARE ONLY HONORED FOR REPLACEMENT OF DAMAGED PACKAGES THAT ARE NO LONGER AVAILABLE.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-10 mx-auto text-center">
            <div className="about-bottom-banner">
              <h3>All Herbs Are Organic Alkaline and Are Naturally Wildcrafted from the Land of their Origin</h3>
              <p>All herbs used in our products are 100% naturally organic and are selectively picked and tested by a laboratory before use. Each herbal compound is personally prepared with gratification for the purpose of restoring health to our clients.</p>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default DamageClaims
