import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
let showformm = 1;
const Consultation = () => {
  const [showform, setshowform] = useState(1);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [timing, settiming] = useState("");

  return (
    <>
      <Header />
      <section class="inner-banner">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-5 col-lg-6 col-md-6 col-sm-7 col-10 offset-sm-2 offset-1">
              <div class="banner-content">
                <div class="banner-outline">
                  <h1 class="slider-heading">
                    Healing The Illusion We Call disease
                  </h1>
                  <p class="slider-para">
                    You deserve healing! We are not currently accepting detox
                    home clients.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-11 mx-auto">
              <div className="row">
                <div className="col-md-8 text-center mx-auto">
                  <h4 className="sub-heading">Consultation Scheduling Form</h4>
                  <h3 className="main-heading">YAH'KI AWAKENED CONSULTATION</h3>
                  <p className="general-para">
                    We are honored and do not take it lightly that you have
                    chosen to do a consultation with the Yahkiawakend Team.
                    Below is some general information about your consultation.
                  </p>
                </div>
                <div className="col-md-8 mx-auto text-left">
                  <ul className="consultation-rules">
                    <li>
                      1. Consultations can have up to a 30 minute duration.
                    </li>
                    <li>
                      2. Please be available for an hour as your consultation
                      may not start exactly at your scheduled time. It's like
                      going to the doctor's office. For example, if your
                      consultation starts at 8:30am you should be available from
                      8:30am -9:30am.
                    </li>
                    <li>
                      3. If the internet connection is bad you will receive a
                      phone call instead of a zoom call so look out for
                      (636-345-5010) just in case.
                    </li>
                    <li>
                      4. Consultations are designed for 1 person --if you would
                      like to address several people at once it limits the depth
                      of your consultation--use your time wisely.{" "}
                    </li>
                  </ul>
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
                          <span
                            className={
                              showform == 1 ? "step active" : "step finish"
                            }
                          >
                            <div className="step-icon">
                              <i className="fas fa-address-card" />
                            </div>
                            <p className="mt-4">Your Information</p>
                          </span>
                          <span
                            className={
                              showform == 2
                                ? "step active"
                                : showform > 2
                                ? "step finish"
                                : null
                            }
                          >
                            <div className="step-icon">
                              <i className="fas fa-calendar" />
                            </div>
                            <p className="mt-4">Choose Appoinment</p>
                          </span>
                          <span
                            className={
                              showform == 3
                                ? "step active"
                                : showform > 3
                                ? "step finish"
                                : null
                            }
                          >
                            <div className="step-icon">
                              <i className="fas fa-credit-card" />
                            </div>
                            <p className="mt-4">Payment</p>
                          </span>
                          <span
                            className={showform == 4 ? "step active" : null}
                          >
                            <div className="step-icon">
                              <i className="fas fa-check-square" />
                            </div>
                            <p className="mt-4">Confirmation</p>
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* One "tab" for each step in the form: */}
                    {showform == 1 ? (
                      <div className="">
                        <div className="consultation-form">
                          <div className="form-group">
                            <div className="form-row">
                              <div className="col-md-6">
                                <label>
                                  First Name <span className="red">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  placeholder="Enter First Name"
                                  type="text"
                                  value={firstName}
                          onChange={(e) => {
                            setfirstName(e.target.value);
                          }}
                                />
                              </div>
                              <div className="col-md-6">
                                <label>
                                  Last Name <span className="red">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  placeholder="Enter Last Name"
                                  type="text"
                                  value={lastName}
                                  onChange={(e) => {
                                    setlastName(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="col-md-6">
                                <label>
                                  Phone <span className="red">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  placeholder="Enter Phone Number"
                                  type="tel"
                                  value={phone}
                                  onChange={(e) => {
                                    setphone(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="col-md-6">
                                <label>
                                  Email <span className="red">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  placeholder="Enter Email"
                                  type="email"
                                  value={email}
                                  onChange={(e) => {
                                    setemail(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="col-md-6">
                                <label>
                                  Age <span className="red">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  placeholder="Enter Age"
                                  type="text"
                                  oninput="this.className = ''"
                                />
                              </div>
                              <div className="col-md-6">
                                <label>
                                  Height <span className="red">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  placeholder="Enter Height"
                                  type="number"
                                  oninput="this.className = ''"
                                />
                              </div>
                              <div className="col-md-6">
                                <label>
                                  Weight <span className="red">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  placeholder="Enter Weight"
                                  type="number"
                                  oninput="this.className = ''"
                                />
                              </div>
                              <div className="col-md-6">
                                <label>
                                  Ethnicity <span className="red">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  placeholder="Enter Ethnicity"
                                  type="text"
                                  oninput="this.className = ''"
                                />
                              </div>
                              <div className="col-md-6">
                                <label>
                                  Consultation For<span className="red">*</span>
                                </label>
                                <select
                                  className="form-control text-left"
                                  id="timeZone"
                                >
                                  <option>General cleanse</option>
                                  <option>HSV &amp; HPV</option>
                                  <option>Diabetes</option>
                                  <option>Cancer/ Tumors</option>
                                  <option>Chronic Condition</option>
                                  <option>Multiple Conditions</option>
                                </select>
                              </div>
                              <div className="col-md-6">
                                <label>
                                  Current Medication
                                  <span className="red">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  placeholder="Enter Current Medication"
                                  type="text"
                                  oninput="this.className = ''"
                                />
                              </div>
                              <div className="col-md-12">
                                <label>
                                  Reason for Consultation{" "}
                                  <span className="red">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  placeholder="Enter Reason for Consultation"
                                  type="text"
                                  oninput="this.className = ''"
                                />
                              </div>
                              <div className="col-md-12">
                                <label>
                                  Current Diagnoses (provided by MD)
                                  <span className="red">*</span>
                                </label>
                                <textarea
                                  className="form-control"
                                  id="exampleFormControlTextarea1"
                                  placeholder="Message"
                                  rows={5}
                                  defaultValue={""}
                                />
                              </div>
                              <div className="col-md-6">
                                <label>
                                  Upload Valid Government Issued ID{" "}
                                  <span className="red">*</span>
                                </label>
                                <input
                                  type="file"
                                  name
                                  id="govt-id"
                                  className="form-control"
                                />
                                <label
                                  htmlFor="govt-id"
                                  className="d-block id-upload"
                                >
                                  <i className="fas fa-upload fa-2x" />
                                </label>
                              </div>
                              <div className="col-12 text-right">
                                 <Link to="#"  className="red-link">
                                  Redeem Coupon
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : showform == 2 ? (
                      <div className="">
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
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <input type="radio" id="t1" name="jeff" />
                                    <label htmlFor="t1">8:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t2" name="jeff" />
                                    <label htmlFor="t2">8:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t3" name="jeff" />
                                    <label htmlFor="t3">8:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t4" name="jeff" />
                                    <label htmlFor="t4">8:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t5" name="jeff" />
                                    <label htmlFor="t5">8:30 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t8" name="jeff" />
                                    <label htmlFor="t8">9:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t9" name="jeff" />
                                    <label htmlFor="t9">9:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t10" name="jeff" />
                                    <label htmlFor="t10">9:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t11" name="jeff" />
                                    <label htmlFor="t11">9:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t12" name="jeff" />
                                    <label htmlFor="t12">9:00 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t15" name="jeff" />
                                    <label htmlFor="t15">9:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t16" name="jeff" />
                                    <label htmlFor="t16">9:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t17" name="jeff" />
                                    <label htmlFor="t17">9:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t18" name="jeff" />
                                    <label htmlFor="t18">9:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t19" name="jeff" />
                                    <label htmlFor="t19">9:30 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t22" name="jeff" />
                                    <label htmlFor="t22">10:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t23" name="jeff" />
                                    <label htmlFor="t23">10:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t24" name="jeff" />
                                    <label htmlFor="t24">10:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t25" name="jeff" />
                                    <label htmlFor="t25">10:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t26" name="jeff" />
                                    <label htmlFor="t26">10:00 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t29" name="jeff" />
                                    <label htmlFor="t29">10:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t30" name="jeff" />
                                    <label htmlFor="t30">10:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t31" name="jeff" />
                                    <label htmlFor="t31">10:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t32" name="jeff" />
                                    <label htmlFor="t32">10:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t33" name="jeff" />
                                    <label htmlFor="t33">10:30 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t36" name="jeff" />
                                    <label htmlFor="t36">11:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t37" name="jeff" />
                                    <label htmlFor="t37">11:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t38" name="jeff" />
                                    <label htmlFor="t38">11:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t39" name="jeff" />
                                    <label htmlFor="t39">11:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t40" name="jeff" />
                                    <label htmlFor="t40">11:00 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t43" name="jeff" />
                                    <label htmlFor="t43">11:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t44" name="jeff" />
                                    <label htmlFor="t44">11:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t45" name="jeff" />
                                    <label htmlFor="t45">11:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t46" name="jeff" />
                                    <label htmlFor="t46">11:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t47" name="jeff" />
                                    <label htmlFor="t47">11:30 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t50" name="jeff" />
                                    <label htmlFor="t50">12:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t51" name="jeff" />
                                    <label htmlFor="t51">12:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t52" name="jeff" />
                                    <label htmlFor="t52">12:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t53" name="jeff" />
                                    <label htmlFor="t53">12:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t54" name="jeff" />
                                    <label htmlFor="t54">12:00 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t55" name="jeff" />
                                    <label htmlFor="t55">12:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t56" name="jeff" />
                                    <label htmlFor="t56">12:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t57" name="jeff" />
                                    <label htmlFor="t57">12:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t58" name="jeff" />
                                    <label htmlFor="t58">12:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t59" name="jeff" />
                                    <label htmlFor="t59">12:30 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t60" name="jeff" />
                                    <label htmlFor="t60">01:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t61" name="jeff" />
                                    <label htmlFor="t61">01:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t62" name="jeff" />
                                    <label htmlFor="t62">01:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t63" name="jeff" />
                                    <label htmlFor="t63">01:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t64" name="jeff" />
                                    <label htmlFor="t64">01:00 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t65" name="jeff" />
                                    <label htmlFor="t65">01:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t66" name="jeff" />
                                    <label htmlFor="t66">01:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t67" name="jeff" />
                                    <label htmlFor="t67">01:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t68" name="jeff" />
                                    <label htmlFor="t68">01:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t69" name="jeff" />
                                    <label htmlFor="t69">01:30 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t70" name="jeff" />
                                    <label htmlFor="t70">02:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t71" name="jeff" />
                                    <label htmlFor="t71">02:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t72" name="jeff" />
                                    <label htmlFor="t72">02:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t73" name="jeff" />
                                    <label htmlFor="t73">02:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t74" name="jeff" />
                                    <label htmlFor="t74">02:00 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t75" name="jeff" />
                                    <label htmlFor="t75">02:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t76" name="jeff" />
                                    <label htmlFor="t76">02:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t77" name="jeff" />
                                    <label htmlFor="t77">02:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t78" name="jeff" />
                                    <label htmlFor="t78">02:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t79" name="jeff" />
                                    <label htmlFor="t79">02:30 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t80" name="jeff" />
                                    <label htmlFor="t80">03:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t81" name="jeff" />
                                    <label htmlFor="t81">03:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t82" name="jeff" />
                                    <label htmlFor="t82">03:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t83" name="jeff" />
                                    <label htmlFor="t83">03:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t84" name="jeff" />
                                    <label htmlFor="t84">03:00 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t85" name="jeff" />
                                    <label htmlFor="t85">03:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t86" name="jeff" />
                                    <label htmlFor="t86">03:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t87" name="jeff" />
                                    <label htmlFor="t87">03:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t88" name="jeff" />
                                    <label htmlFor="t88">03:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t89" name="jeff" />
                                    <label htmlFor="t89">03:30 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t90" name="jeff" />
                                    <label htmlFor="t90">04:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t91" name="jeff" />
                                    <label htmlFor="t91">04:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t92" name="jeff" />
                                    <label htmlFor="t92">04:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t93" name="jeff" />
                                    <label htmlFor="t93">04:00 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t94" name="jeff" />
                                    <label htmlFor="t94">04:00 Cst</label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="radio" id="t95" name="jeff" />
                                    <label htmlFor="t95">04:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t96" name="jeff" />
                                    <label htmlFor="t96">04:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t97" name="jeff" />
                                    <label htmlFor="t97">04:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t98" name="jeff" />
                                    <label htmlFor="t98">04:30 Cst</label>
                                  </td>
                                  <td>
                                    <input type="radio" id="t99" name="jeff" />
                                    <label htmlFor="t99">04:30 Cst</label>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="text-right consultation-meta mt-3">
                          Consultation: <span>30 Minutes @ $100.00</span>
                        </p>
                      </div>
                    ) : showform == 3 ? (
                      <div className="">
                        <div className="consultation-form">
                          <div className="form-group">
                            <div className="form-row">
                              <div className="col-6">
                                <label>
                                  Name <span className="red">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  placeholder="Enter Name"
                                  type="text"
                                  oninput="this.className = ''"
                                />
                              </div>
                              <div className="col-6">
                                <label>
                                  Card Number <span className="red">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  placeholder="Enter Card Number"
                                  type="number"
                                  oninput="this.className = ''"
                                />
                              </div>
                              <div className="col-12">
                                <label>
                                  Expiry Date <span className="red">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  placeholder="Enter Expiry Date"
                                  type="date"
                                  oninput="this.className = ''"
                                />
                              </div>
                              <div className="col-12">
                                <label>
                                  CVV <span className="red">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  placeholder="Enter Your CVV"
                                  type="email"
                                  oninput="this.className = ''"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : showform == 4 ? (
                      <div className="">
                        <div className="consultation-form">
                          <p>
                            <input
                              placeholder="Username..."
                              oninput="this.className = ''"
                            />
                          </p>
                          <p>
                            <input
                              placeholder="Password..."
                              oninput="this.className = ''"
                            />
                          </p>
                        </div>
                      </div>
                    ) : null}
                    <div className="text-center mt-5 pt-5">
                      <button
                        type="button"
                        className="red-btn-outline"
                        id="prevBtn"
                        onClick={() => {
                          setshowform(showform == 1 ? 1 : showform - 1);
                        }}
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="red-btn-solid"
                        id="nextBtn"
                        onClick={() => {
                          setshowform(showform == 4 ? 4 : showform + 1);
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 text-center">
                  <div className="about-bottom-banner">
                    <h3>
                      All Herbs Are Organic Alkaline and Are Naturally
                      Wildcrafted from the Land of their Origin
                    </h3>
                    <p>
                      All herbs used in our products are 100% naturally organic
                      and are selectively picked and tested by a laboratory
                      before use. Each herbal compound is personally prepared
                      with gratification for the purpose of restoring health to
                      our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="appointment"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered "
          role="document"
        >
          <div className="modal-content">
            {/* <button type="button" class="close text-right mr-1 mt-1" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&#10006;</span>
      </button> */}
            <div className="pt-1 pb-5 px-sm-5 px-1">
              <div className="text-center">
                <img src="images/success-icon.png" alt="" className="mt-4" />
                <h2 className=" mt-2">Congratulations!</h2>
                <p className="mt-2">Your Appointment Has Been Confirmed</p>
              </div>
              <div className="text-center mt-2">
                <a
                  href="#"
                  className="btn red-btn-solid mt-lg-4 mt-3"
                  data-dismiss="modal"
                >
                  OK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Consultation;
