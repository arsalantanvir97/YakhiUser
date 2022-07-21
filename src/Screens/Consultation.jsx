import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { savConsultaionAddress } from "../actions/cartAction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InputNumber from "../components/InputNumber";
import InputPhone from "../components/InputPhone";
import Toasty from "../utils/toast";
import DatePicker from "react-datepicker";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { baseURL } from "../utils/api";
import Swal from "sweetalert2";
import PrivateRouteSlider from "../components/PrivateRouteSlider";
let showformm = 1;
let timings = [
  { time: "8:30 CST" },

  { time: "9 CST" },
  { time: "9:30 CST" },

  { time: "10 CST" },
  { time: "10:30 CST" },

  { time: "11 CST" },
  { time: "11:30 CST" },

  { time: "12 CST" },
  { time: "12:30 CST" },

  { time: "1 CST" },
  { time: "1:30 CST" },

  { time: "2 CST" },
  { time: "2:30 CST" },

  { time: "3 CST" },
  { time: "3:30 CST" },

  { time: "4 CST" },
  { time: "4:30 CST" }
];
const Consultation = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [loading, setloading] = useState(false);

  const [showform, setshowform] = useState(1);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [paymentconfirm, setpaymentconfirm] = useState(false);

  const [age, setage] = useState("");
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [ethnicity, setethnicity] = useState("");
  const [consultaionfor, setconsultaionfor] = useState("");
  const [currentmedication, setcurrentmedication] = useState("");
  const [reason, setreason] = useState("");
  const [diagnosis, setdiagnosis] = useState("");
  const [doc_schedule, setdoc_schedule] = useState("");
  const [appointment, setappointment] = useState("");
  const [appointmentdate, setappointmentdate] = useState("");

  const [paymentname, setpaymentname] = useState("");
  const [cardnumber, setcardnumber] = useState("");
  const [expirymonth, setexpirymonth] = useState("");
  const [expiryyear, setexpiryyear] = useState("");

  // const [cvv, setcvv] = useState("");

  const [confirmationname, setconfirmationname] = useState("");
  const [confirmationpassword, setconfirmationpassword] = useState("");

  const filedocsHandler = (e) => {
    console.log("eeee", e?.target?.files[0]);
    setdoc_schedule(e?.target?.files[0]);
  };

  const saveConsultationAddressHandler = async () => {
    if (
      firstName?.length > 0 &&
      lastName?.length > 0 &&
      phone?.length > 0 &&
      email?.length > 0 &&
      age > 0 &&
      height > 0 &&
      weight > 0 &&
      ethnicity?.length > 0 &&
      consultaionfor?.length > 0 &&
      currentmedication?.length > 0 &&
      reason?.length > 0 &&
      diagnosis?.length > 0 &&
      doc_schedule?.name?.length > 0
    ) {
      await dispatch(
        savConsultaionAddress({
          firstName,
          lastName,
          phone,
          email,
          age,
          height,
          weight,
          ethnicity,
          consultaionfor,
          currentmedication,
          reason,
          diagnosis,
          governmentid: doc_schedule?.name
        })
      );
      setshowform(showform == 4 ? 4 : showform + 1);
    } else {
      Toasty("error", `Please fill out all the required fields`);
    }
  };
  const chooseAppointmentHandler = async () => {
    if (appointment?.length > 0 && appointmentdate) {
      setshowform(showform == 4 ? 4 : showform + 1);
    } else {
      Toasty("error", `Please fill out all the required fields`);
    }
  };
  // const consultationPaymentHandler = async () => {
  //   if (
  //     paymentname?.length > 0 &&
  //     cardnumber?.length > 0
  //     // cvv > 0 &&
  //   ) {

  //   } else {
  //     Toasty("error", `Please fill out all the required fields`);
  //   }
  // };
  const confirmationHandler = async () => {
    if (confirmationname?.length > 0 && confirmationpassword?.length > 0) {
      const formData = new FormData();
      const consultationaddress = {
        firstName,
        lastName,
        phone,
        email,
        age,
        height,
        weight,
        ethnicity,
        consultaionfor,
        currentmedication,
        reason,
        diagnosis
      };
      const paymentinfo = { paymentname, cardnumber, expirymonth, expiryyear };

      const confirmationinfo = { confirmationname, confirmationpassword };

      formData.append("doc_schedule", doc_schedule);
      formData.append("appointmenttime", appointment);
      formData.append("appointmentdate", appointmentdate);
      formData.append("paymentinfo", JSON.stringify(paymentinfo));
      formData.append(
        "consultationaddress",
        JSON.stringify(consultationaddress)
      );

      // formData.append("weight", product?.weight);
      formData.append("confirmationinfo", JSON.stringify(confirmationinfo));
      formData.append("user", userInfo?._id);

      const body = formData;
      try {
        console.log("createConsultation");
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        };
        const res = await axios.post(
          `${baseURL}/consultationRoutes/createConsultation`,
          body,
          config
        );

        console.log("res", res);
        if (res?.status == 201) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "Your Appointment Has Been Created",
            showConfirmButton: false,
            timer: 1500
          });
          history.replace("/");
        }
        // else if(res?.status==201){
        //   Toasty('error',`Invalid Email or Password`);
        //   dispatch({
        //     type: ADMIN_LOGIN_FAIL,
        //     payload:
        //     res?.data?.message
        //   })
        //   document.location.href = '/'

        // }
      } catch (error) {
        console.log("error", error?.response?.data?.message);
        Swal.fire({
          icon: "error",
          title: "ERROR",
          text: error?.response?.data?.message,
          showConfirmButton: false,
          timer: 1500
        });
      }
      setshowform(showform == 4 ? 4 : showform + 1);
    } else {
      Toasty("error", `Please fill out all the required fields`);
    }
  };
  const disableWeekends = (current) => {
    return current.day() !== 0 && current.day() !== 6;
  };
  async function handleToken(token) {
    setloading(true);

    const config = {
      header: {
        Authorization: "Bearer sk_test_OVw01bpmRN2wBK2ggwaPwC5500SKtEYy9V"
      }
    };
    const response = await axios.post(
      `${baseURL}/checkout`,
      { token, product: 100 },
      config
    );
    console.log("response", response);
    const { status } = response.data;

    console.log(
      "res",
      response.data.id,
      response.data.status,
      response.headers.date,
      response.data.receipt_email
    );
    if (status === "succeeded") {
      setloading(false);
      setpaymentname(response?.data?.receipt_email);
      setcardnumber(response?.data?.payment_method_details?.card?.last4);
      // setcvv(response?.data?.payment_method_details?.card?.last4)
      setexpirymonth(response?.data?.payment_method_details?.card?.exp_month);
      setexpiryyear(response?.data?.payment_method_details?.card?.exp_year);
      setpaymentconfirm(true);
      setshowform(showform == 4 ? 4 : showform + 1);
      console.log(status, "succes");
    } else {
      console.log(status, "fail");
      setloading(false);
    }
  }
  const setappointmentdateHandler = (dayy) => {
    console.log(dayy);
    const datee = new Date(dayy);
    console.log("datee", datee);
    console.log(datee.getDay());
    if (datee.getDay() == 0 || datee.getDay() == 6) {
      Toasty(
        "error",
        `Saturday and Sundays are off. Please select another day for appointment`
      );
    } else {
      console.log("456");
      setappointmentdate(dayy);
    }
  };
  useEffect(() => {
    console.log("phone", phone);
  }, [phone]);

  return (
    <>
      <Header />
      <PrivateRouteSlider/>


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
                                <InputPhone value={phone} onChange={setphone} />
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
                                <InputNumber
                                  value={age}
                                  onChange={setage}
                                  max={99}
                                  className="form-control"
                                />
                              </div>
                              <div className="col-md-6">
                                <label>
                                  Height in meters<span className="red">*</span>
                                </label>
                                <InputNumber
                                  value={height}
                                  onChange={setheight}
                                  max={1000}
                                  placeholder={"Heigth in meters"}
                                  className="form-control"
                                />
                              </div>
                              <div className="col-md-6">
                                <label>
                                  Weight in kgs<span className="red">*</span>
                                </label>
                                <InputNumber
                                  value={weight}
                                  onChange={setweight}
                                  max={1000}
                                  className="form-control"
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
                                  value={ethnicity}
                                  onChange={(e) => {
                                    setethnicity(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="col-md-6">
                                <label>
                                  Consultation For<span className="red">*</span>
                                </label>
                                <select
                                  className="form-control text-left"
                                  id="timeZone"
                                  value={consultaionfor}
                                  onChange={(e) => {
                                    setconsultaionfor(e.target.value);
                                  }}
                                >
                                  <option value={"General cleanse"}>
                                    General cleanse
                                  </option>
                                  <option value={"HSV & HPV"}>
                                    HSV &amp; HPV
                                  </option>
                                  <option value={"Diabetes"}>Diabetes</option>
                                  <option value={"Cancer/ Tumors"}>
                                    Cancer/ Tumors
                                  </option>
                                  <option value={"Chronic Condition"}>
                                    Chronic Condition
                                  </option>
                                  <option value={"Multiple Conditions"}>
                                    Multiple Conditions
                                  </option>
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
                                  value={currentmedication}
                                  onChange={(e) => {
                                    setcurrentmedication(e.target.value);
                                  }}
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
                                  value={reason}
                                  onChange={(e) => {
                                    setreason(e.target.value);
                                  }}
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
                                  value={diagnosis}
                                  onChange={(e) => {
                                    setdiagnosis(e.target.value);
                                  }}
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
                                  accept="application/pdf,application/vnd.ms-excel"
                                  onChange={filedocsHandler}
                                  className="form-control"
                                />
                                <label
                                  htmlFor="govt-id"
                                  className="d-block id-upload"
                                >
                                  {doc_schedule?.name ? (
                                    <i className="fas fa-file-upload fa-2x" />
                                  ) : (
                                    <i className="fas fa-upload fa-2x" />
                                  )}
                                </label>
                              </div>
                              <div className="col-12 text-right">
                                <Link to="#" className="red-link">
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
                                {/* <select className="form-control" id="timeZone">
                                  <option>( GMT + 4:00 ) DUBAI</option>
                                  <option>( GMT + 4:00 ) DUBAI</option>
                                </select> */}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <label>
                              Select a date<span className="red">*</span>
                            </label>
                            <DatePicker
                              minDate={moment().toDate()}
                              isValidDate={disableWeekends}
                              selected={appointmentdate}
                              onChange={(e) => setappointmentdateHandler(e)}
                              className="sort-date customdate form-control"
                            />{" "}
                          </div>
                          <div className="table-responsive">
                            <table className="table table-borderless">
                              <thead></thead>
                              <tbody>
                                {timings?.length > 0 &&
                                  timings?.map((tim, index) => (
                                    <tr>
                                      <td>
                                        <input
                                          type="radio"
                                          value={appointment}
                                          onChange={() => {
                                            setappointment(tim?.time);
                                          }}
                                          id={index}
                                          name={`jeff${index}`}
                                        />
                                        <label htmlFor={index} >
                                          {tim?.time}
                                        </label>
                                      </td>
                                    </tr>
                                  ))}
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
                            {/* <div className="form-row" style={{justifyContent:'center',display:'flex',textAlign:'center'}}> */}
                            {/* <div className="form-row">
                              <div className="col-6">
                             
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="col-6">
                                <label>
                                  Name <span className="red">*</span>
                                </label>

                                <input
                                  className="form-control"
                                  placeholder="Enter Name"
                                  type="text"
                                  value={paymentname}
                                  onChange={(e) => {
                                    setpaymentname(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="col-6">
                                <label for="ccn">
                                  Card Number <span className="red">*</span>
                                </label>
                                <input
                                  id="ccn"
                                  value={cardnumber}
                                  onChange={(e) => {
                                    setcardnumber(e.target.value);
                                  }}
                                  type="tel"
                                  inputmode="numeric"
                                  pattern="[0-9\s]{13,19}"
                                  autocomplete="cc-number"
                                  maxlength="19"
                                  placeholder="xxxx xxxx xxxx xxxx"
                                />
                              </div>
                              <div className="col-12">
                                <label>
                                  Expiry Date <span className="red">*</span>
                                </label>
                                <DatePicker
                                  minDate={moment().toDate()}
                                  selected={expirydate}
                                  onChange={(expirydate) =>
                                    setexpirydate(expirydate)
                                  }
                                  className="sort-date customdate form-control"
                                />{" "}
                              </div>
                              <div className="col-12">
                                <label>
                                  CVV <span className="red">*</span>
                                </label>
                                <InputNumber
                                  value={cvv}
                                  onChange={setcvv}
                                  max={99}
                                  className="form-control"
                                />
                              </div>
                              
                            </div> */}
                            <div
                              className="form-row"
                              style={{
                                justifyContent: "center",
                                display: "flex",
                                textAlign: "center"
                              }}
                            >
                              {loading ? (
                                <i className="fas fa-spinner fa-pulse"></i>
                              ) : (
                                <StripeCheckout
                                  //  cardnumber={cardnumber}
                                  //  cvv={cvv}
                                  email={userInfo?.email}
                                  //  expirydate={expirydate}
                                  stripeKey="pk_test_IdCqGO7sona7aWZqqiXTs3MN00vl1vkEQa"
                                  token={handleToken}
                                  amount={100 * 100}
                                ></StripeCheckout>
                              )}
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
                              value={confirmationname}
                              onChange={(e) => {
                                setconfirmationname(e.target.value);
                              }}
                            />
                          </p>
                          <p>
                            <input
                              placeholder="Password..."
                              value={confirmationpassword}
                              onChange={(e) => {
                                setconfirmationpassword(e.target.value);
                              }}
                            />
                          </p>
                        </div>
                      </div>
                    ) : null}
                    <div className="text-center mt-5 pt-5 ">
                      <button
                        type="button"
                        className="red-btn-outline mr-2"
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
                          showform == 1
                            ? saveConsultationAddressHandler()
                            : showform == 2
                            ? chooseAppointmentHandler()
                            : showform == 3 && paymentconfirm == true
                            ? setshowform(showform + 1)
                            : showform == 4 && confirmationHandler();
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

      <Footer />
    </>
  );
};

export default Consultation;
