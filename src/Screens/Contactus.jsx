import React from 'react'

const Contactus = () => {
    return (
        <div className="container-fluid my-5 py-4">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="contact-us">
              <div className="row">
                <div className="col-md-9 col-12 mx-auto text-center">
                  <h4 className="sub-heading">Yah'ki Awakened Eye of Lotus Botanical Health Club</h4>
                  <h3 className="main-heading">Contact Us</h3>
                  <p className="general-para mb-4">
                    Though this form is secure, please do not include any personal information in this contact form aside from what is already requested.
                  </p>
                </div>
              </div>
              <div className="row py-5">
                <div className="col-md-10 col-12 mx-auto">
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
                              {/* email address and Reason for Contacting Us*/}
                              <div className="row">
                                <div className="col-md-6 mt-3">
                                  <label htmlFor className="my-label">Email Address <span className="red">*</span></label>
                                  <input type="email" className="form-control my-textbox" placeholder="Enter Email Address" />
                                </div>
                                <div className="col-md-6 mt-3">
                                  <label htmlFor className="my-label">Reason for Contacting Us <span className="red">*</span></label>
                                  <select className="form-control">
                                    <option>Please Select</option>
                                    <option>--</option>
                                  </select> 
                                </div>
                              </div>
                              {/* Your Message*/}
                              <div className="row">
                                <div className="col-md-12 mt-3">
                                  <label htmlFor className="my-label">Your Message <span className="red">*</span></label>
                                  <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows={5} defaultValue={""} />
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
                  {/* contact cards */}
                  <div className="row justify-content-centetr align-items-start">
                    <div className="col-md-4 my-4">
                      <div className="contact-card text-center">
                        <h4>Address</h4>
                        <p>3533 Dunn Rd Ste. 224-226 St. Louis, MO 63033</p>
                      </div>
                    </div>
                    <div className="col-md-4 my-4">
                      <div className="contact-card text-center">
                        <h4>Business</h4>
                        <p>+1 (888) 360-4448</p>
                      </div>
                    </div>
                    <div className="col-md-4 my-4">
                      <div className="contact-card text-center">
                        <h4>Email</h4>
                        <p>info@yahkiawakened.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Contactus
