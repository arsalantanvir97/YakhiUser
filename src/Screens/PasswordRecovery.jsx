import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import Toasty from "../utils/toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { validateEmail } from "../utils/ValidateEmail";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PasswordRecovery = ({ history }) => {
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const emailvalidation = validateEmail(email);
    console.log("emmmm", emailvalidation);
    console.log("addEmployeeHandler");
    if (emailvalidation == true) {
      const body = { email };
      console.log("TEST");
      try {
        setloading(true);

        const res = await api.post("/auth/userRecoverPassword", body);
        setloading(false);

        console.log("res", res);
        if (res?.status == 201) {
          Swal.fire({
            icon: "success",
            title: "SUCCESS",
            text: "Verification Code Sent to your email",
            showConfirmButton: false,
            timer: 1500
          });
          history.push({
            pathname: `/VerificationCode${email}`
          });
        }
      } catch (error) {
        setloading(false);
        console.log("IN HERE");
        console.log(error?.response?.data);
        Toasty("error", `🦄 Invalid Email!`);
      }
    } else {
      Toasty("error", `Please enter a valid email`);
    }
  };
  return (
    <>
      <Header />
      <div style={{ height: 55 }}></div>

      <div className="container-fluid mt-5">
        <div className="row py-5">
          <div className="col-xl-6 col-lg-8 col-md-10 col-10 mx-auto">
            <div className="account-form">
              <h3 className="text-center">PASSWORD RECOVERY</h3>
              <form>
                <div className="row pt-5 align-items-center justify-content-center">
                  <div className="col-12">
                    <div className="row justify-content-md-center">
                      <div className="col-md-12 mt-2">
                        <div className="row">
                          <div className="col-md-12 mt-3">
                            <label htmlFor className="my-label">
                              Email Address <span className="red">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control my-textbox"
                              placeholder="Enter Email Address"
                              value={email}
                              onChange={(e) => {
                                setemail(e.target.value);
                              }}
                            />
                            <small>Please Enter Your Email Address</small>
                          </div>
                        </div>
                        <div className="row my-5">
                          <div className="col-12 text-center">
                            {!loading ? (
                              <Link
                                to="#"
                                className="btn red-btn-solid ml-0 px-5 py-2"
                                onClick={submitHandler}
                              >
                                Continue
                              </Link>
                            ) : (
                              <i className="fas fa-spinner fa-pulse"></i>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row pb-5">
                      <div className="col-12 text-center">
                        <Link className="red" to="/Login">
                          Back To Login
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PasswordRecovery;
