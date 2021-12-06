import React from 'react'

const Consultation = () => {
    return (
        <section className="about-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-11 mx-auto">
              <div className="row">
                <div className="col-md-8 text-center mx-auto">
                  <h4 className="sub-heading">Consultation Scheduling Form</h4>
                  <h3 className="main-heading">YAH'KI AWAKENED CONSULTATION</h3>
                  <p className="general-para">
                    If you miss your scheduled appointment time without prior notice of at least 24 hours to reschedule, you will have to book another appointment at the same rate.
                  </p>
                </div>
              </div>
              {/* Step form */}
              <div className="row">
                <div className="col-12">
                  <form id="regForm" action>
                    {/* Circles which indicates the steps of the form: */}
                    <div className="row mb-5">
                      <div className="col-12 text-center">
                        <div className="d-flex justify-content-around">
                          <span className="step">
                            <div className="step-icon">
                              <i className="fas fa-calendar" />
                            </div>
                            <p className="mt-4">Choose Appoinment</p>
                          </span>
                          <span className="step">
                            <div className="step-icon">
                              <i className="fas fa-address-card" />
                            </div>
                            <p className="mt-4">Your Information</p>
                          </span>
                          <span className="step">
                            <div className="step-icon">
                              <i className="fas fa-credit-card" />
                            </div>
                            <p className="mt-4">Payment</p>
                          </span>
                          <span className="step">
                            <div className="step-icon">
                              <i className="fas fa-check-square" />
                            </div>
                            <p className="mt-4">Confirmation</p>
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* One "tab" for each step in the form: */}
                    <div className="tab">
                      <div className="consultation-form">
                        <div className="row mb-5">
                          <div className="col-3 text-center mx-auto">
                            <div className="timezone">
                              <h3>Your Time Zone</h3>
                              <select className="form-control" id="timeZone">
                                <option>( GMT + 4:00 ) DUBAI</option>
                                <option>( GMT + 4:00 ) DUBAI</option>
                              </select> 
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive">
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th scope="col">
                                  Mon <p>6 Oct</p>
                                </th>
                                <th scope="col">
                                  tue <p>7 Oct</p>
                                </th>
                                <th scope="col">
                                  wed <p>8 Oct</p>
                                </th>
                                <th scope="col">
                                  thu <p>9 Oct</p>
                                </th>
                                <th scope="col">
                                  fri <p>10 Oct</p>
                                </th>
                                <th scope="col">
                                  sat <p>11 Oct</p>
                                </th>
                                <th scope="col">
                                  sun <p>12 Oct</p>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><input type="radio" id="t1" name="jeff" /><label htmlFor="t1">7:00 PM</label></td>
                                <td><input type="radio" id="t2" name="jeff" /><label htmlFor="t2">7:00 PM</label></td>
                                <td><input type="radio" id="t3" name="jeff" /><label htmlFor="t3">7:00 PM</label></td>
                                <td><input type="radio" id="t4" name="jeff" /><label htmlFor="t4">7:00 PM</label></td>
                                <td><input type="radio" id="t5" name="jeff" /><label htmlFor="t5">7:00 PM</label></td>
                                <td><input type="radio" id="t6" name="jeff" /><label htmlFor="t6">7:00 PM</label></td>
                                <td><input type="radio" id="t7" name="jeff" /><label htmlFor="t7">7:00 PM</label></td>
                              </tr>
                              <tr>
                                <td><input type="radio" id="t8" name="jeff" /><label htmlFor="t8">7:30 PM</label></td>
                                <td><input type="radio" id="t9" name="jeff" /><label htmlFor="t9">7:30 PM</label></td>
                                <td><input type="radio" id="t10" name="jeff" /><label htmlFor="t10">7:30 PM</label></td>
                                <td><input type="radio" id="t11" name="jeff" /><label htmlFor="t11">7:30 PM</label></td>
                                <td><input type="radio" id="t12" name="jeff" /><label htmlFor="t12">7:30 PM</label></td>
                                <td><input type="radio" id="t13" name="jeff" /><label htmlFor="t13">7:30 PM</label></td>
                                <td><input type="radio" id="t14" name="jeff" /><label htmlFor="t14">7:30 PM</label></td>
                              </tr>
                              <tr>
                                <td><input type="radio" id="t15" name="jeff" /><label htmlFor="t15">8:00 PM</label></td>
                                <td><input type="radio" id="t16" name="jeff" /><label htmlFor="t16">8:00 PM</label></td>
                                <td><input type="radio" id="t17" name="jeff" /><label htmlFor="t17">8:00 PM</label></td>
                                <td><input type="radio" id="t18" name="jeff" /><label htmlFor="t18">8:00 PM</label></td>
                                <td><input type="radio" id="t19" name="jeff" /><label htmlFor="t19">8:00 PM</label></td>
                                <td><input type="radio" id="t20" name="jeff" /><label htmlFor="t20">8:00 PM</label></td>
                                <td><input type="radio" id="t21" name="jeff" /><label htmlFor="t21">8:00 PM</label></td>
                              </tr>
                              <tr>
                                <td><input type="radio" id="t22" name="jeff" /><label htmlFor="t22">8:30 PM</label></td>
                                <td><input type="radio" id="t23" name="jeff" /><label htmlFor="t23">8:30 PM</label></td>
                                <td><input type="radio" id="t24" name="jeff" /><label htmlFor="t24">8:30 PM</label></td>
                                <td><input type="radio" id="t25" name="jeff" /><label htmlFor="t25">8:30 PM</label></td>
                                <td><input type="radio" id="t26" name="jeff" /><label htmlFor="t26">8:30 PM</label></td>
                                <td><input type="radio" id="t27" name="jeff" /><label htmlFor="t27">8:30 PM</label></td>
                                <td><input type="radio" id="t28" name="jeff" /><label htmlFor="t28">8:30 PM</label></td>
                              </tr>
                              <tr>
                                <td><input type="radio" id="t29" name="jeff" /><label htmlFor="t29">9:00 PM</label></td>
                                <td><input type="radio" id="t30" name="jeff" /><label htmlFor="t30">9:00 PM</label></td>
                                <td><input type="radio" id="t31" name="jeff" /><label htmlFor="t31">9:00 PM</label></td>
                                <td><input type="radio" id="t32" name="jeff" /><label htmlFor="t32">9:00 PM</label></td>
                                <td><input type="radio" id="t33" name="jeff" /><label htmlFor="t33">9:00 PM</label></td>
                                <td><input type="radio" id="t34" name="jeff" /><label htmlFor="t34">9:00 PM</label></td>
                                <td><input type="radio" id="t35" name="jeff" /><label htmlFor="t35">9:00 PM</label></td>
                              </tr>
                              <tr>
                                <td><input type="radio" id="t36" name="jeff" /><label htmlFor="t36">9:30 PM</label></td>
                                <td><input type="radio" id="t37" name="jeff" /><label htmlFor="t37">9:30 PM</label></td>
                                <td><input type="radio" id="t38" name="jeff" /><label htmlFor="t38">9:30 PM</label></td>
                                <td><input type="radio" id="t39" name="jeff" /><label htmlFor="t39">9:30 PM</label></td>
                                <td><input type="radio" id="t40" name="jeff" /><label htmlFor="t40">9:30 PM</label></td>
                                <td><input type="radio" id="t41" name="jeff" /><label htmlFor="t41">9:30 PM</label></td>
                                <td><input type="radio" id="t42" name="jeff" /><label htmlFor="t42">9:30 PM</label></td>
                              </tr>
                              <tr>
                                <td><input type="radio" id="t43" name="jeff" /><label htmlFor="t43">10:00 PM</label></td>
                                <td><input type="radio" id="t44" name="jeff" /><label htmlFor="t44">10:00 PM</label></td>
                                <td><input type="radio" id="t45" name="jeff" /><label htmlFor="t45">10:00 PM</label></td>
                                <td><input type="radio" id="t46" name="jeff" /><label htmlFor="t46">10:00 PM</label></td>
                                <td><input type="radio" id="t47" name="jeff" /><label htmlFor="t47">10:00 PM</label></td>
                                <td><input type="radio" id="t48" name="jeff" /><label htmlFor="t48">10:00 PM</label></td>
                                <td><input type="radio" id="t49" name="jeff" /><label htmlFor="t49">10:00 PM</label></td>
                              </tr>
                              <tr>
                                <td><input type="radio" id="t50" name="jeff" /><label htmlFor="t50">10:30 PM</label></td>
                                <td><input type="radio" id="t51" name="jeff" /><label htmlFor="t51">10:30 PM</label></td>
                                <td><input type="radio" id="t52" name="jeff" /><label htmlFor="t52">10:30 PM</label></td>
                                <td><input type="radio" id="t53" name="jeff" /><label htmlFor="t53">10:30 PM</label></td>
                                <td><input type="radio" id="t54" name="jeff" /><label htmlFor="t54">10:30 PM</label></td>
                                <td><input type="radio" id="t55" name="jeff" /><label htmlFor="t55">10:30 PM</label></td>
                                <td><input type="radio" id="t56" name="jeff" /><label htmlFor="t56">10:30 PM</label></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="text-right consultation-meta mt-3">Consultation: <span>30 Minutes @ $100.00</span></p>
                    </div>
                    <div className="tab">
                      <div className="consultation-form">
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col-6">
                              <label>First Name <span className="red">*</span></label>
                              <input className="form-control" placeholder="Enter First Name" type="text" oninput="this.className = ''" />
                            </div>
                            <div className="col-6">
                              <label>Last Name <span className="red">*</span></label>
                              <input className="form-control" placeholder="Enter Last Name" type="text" oninput="this.className = ''" />
                            </div>
                            <div className="col-12">
                              <label>Phone</label>
                              <input className="form-control" maxlength="11" placeholder="Enter Phone Number" type="tel" oninput="this.className = ''" />
                            </div>
                            <div className="col-12">
                              <label>Email</label>
                              <input className="form-control" placeholder="Enter Email" type="email" oninput="this.className = ''" />
                            </div>
                            <div className="col-12 text-right">
                              <a href="#" className="red-link">Redeem Coupon</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab">
                      <div className="consultation-form">
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col-6">
                              <label>Name <span className="red">*</span></label>
                              <input className="form-control" placeholder="Enter Name" type="text" oninput="this.className = ''" />
                            </div>
                            <div className="col-6">
                              <label>Card Number <span className="red">*</span></label>
                              <input className="form-control" placeholder="Enter Card Number" type="number" oninput="this.className = ''" />
                            </div>
                            <div className="col-12">
                              <label>Expiry Date <span className="red">*</span></label>
                              <input className="form-control" placeholder="Enter Expiry Date" type="date" oninput="this.className = ''" />
                            </div>
                            <div className="col-12">
                              <label>CVV <span className="red">*</span></label>
                              <input className="form-control" placeholder="Enter Your CVV" type="email" oninput="this.className = ''" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab">
                      <div className="consultation-form">
                        <p><input placeholder="Username..." oninput="this.className = ''" /></p>
                        <p><input placeholder="Password..." oninput="this.className = ''" /></p>
                      </div>
                    </div>
                    <div className="text-center mt-5 pt-5">
                      <button type="button" className="red-btn-outline" id="prevBtn" onclick="nextPrev(-1)">Back</button>
                      <button type="button" className="red-btn-solid" id="nextBtn" onclick="nextPrev(1)">
                        <a href="#" className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0">Continue</a>
                      </button>
                    </div>
                  </form>
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
      </section>
      
    )
}

export default Consultation
