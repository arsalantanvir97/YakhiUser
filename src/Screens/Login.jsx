import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLoginAction } from "../actions/userAction";
import Toasty from "../utils/toast";
const Login = ({ history }) => {
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const submitHandler = async () => {
    console.log("submitHandler");
    await dispatch(userLoginAction(email, password, history));
    setemail("");
    setpassword("");
  };

  useEffect(() => {
    if (userInfo) {
      history.replace("/");
    }
  }, [userInfo]);
  return (
    <div className="container-fluid mt-5">
      <div className="row py-5">
        <div className="col-xl-6 col-lg-8 col-md-10 col-10 mx-auto">
          <div className="account-form">
            <h3 className="text-center">LOGIN</h3>
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
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 mt-3">
                          <label htmlFor className="my-label">
                            Password <span className="red">*</span>
                          </label>
                          <div className="position-relative">
                            <input
                              type="password"
                              className="form-control enter-input my-textbox"
                              placeholder="Enter Password"
                              value={password}
                              onChange={(e) => {
                                setpassword(e.target.value);
                              }}
                            />
                            <i
                              className="fa enter-icon right-icon fa-eye-slash"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-between py-4">
                        <div className="col-md-6 col-12 text-left">
                          <div className="checkbox-group">
                            <input type="checkbox" id="html" />
                            <label htmlFor="html">Remember me </label>
                          </div>
                        </div>
                        <div className="col-md-6 col-12 text-right">
                          <h6 className="f-18">
                            <Link to="/PasswordRecovery" className="red-link">
                              Forgot Password
                            </Link>
                          </h6>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-12 text-center">
                          <Link
                            to="#"
                            className="btn red-btn-solid ml-0 px-5 py-2"
                            data-toggle="modal"
                            data-target="#confirmOrder"
                            onClick={() =>
                              email?.length > 0 && password?.length > 0
                                ? submitHandler()
                                : Toasty(
                                    "error",
                                    `Please fill out all the required fields`
                                  )
                            }
                          >
                            Login
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row pb-5">
                    <div className="col-12 text-center">
                      <h6 className="f-18">
                        Don't Have Account?{" "}
                        <Link to="/Signup" className="red">
                          Register!
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
