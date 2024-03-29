import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userResetPasswordAction } from "../actions/userAction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Toasty from "../utils/toast";

const ResetPassword = (props) => {
  const dispatch = useDispatch();

  const [password, setpassword] = useState();
  const [confirm_password, setconfirm_password] = useState();
  const [showicon, setshowicon] = useState(true);
  const [showicon2, setshowicon2] = useState(true);
  const [loading, setloading] = useState(false);

  // const [state, setstate] = useState(initialState)

  // useEffect(() => {
  //   console.log('prpos',props.location.state.code)

  // }, [])
  const onSubmitHandler = () => {
    console.log(
      "body",
      password,
      confirm_password,
      props?.location?.state?.code,
      props?.location?.state?.email
    );
    setloading(true);
    dispatch(
      userResetPasswordAction(
        password,
        confirm_password,
        props?.location?.state?.code,
        props?.location?.state?.email,
        props?.history
      )
    );
    setloading(false);
  };
  return (
    <>
    <Header/>
    <div style={{height:55}}></div>

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
                      <div className="row justify-content-between align-items-center">
                        <div className="col-md-12 mt-3">
                          <label htmlFor className="my-label">
                            New Password <span className="red">*</span>
                          </label>
                          <div className="position-relative">
                            <input
                              type={showicon ? "password" : "text"}
                              className="form-control enter-input my-textbox"
                              placeholder="Enter New Password"
                              value={password}
                              onChange={(e) => {
                                setpassword(e.target.value);
                              }}
                            />
                            <i
                              onClick={() => setshowicon(!showicon)}
                              className={
                                showicon
                                  ? "fa enter-icon-3 right-icon fa-eye-slash right-icon-90"
                                  : "fa enter-icon-3 right-icon fa-eye right-icon-90"
                              }
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mt-3">
                          <label htmlFor className="my-label">
                            Confirm Password <span className="red">*</span>
                          </label>
                          <div className="position-relative">
                            <input
                              type={showicon2 ? "password" : "text"}
                              className="form-control enter-input my-textbox"
                              placeholder="Enter New Password"
                              value={confirm_password}
                              onChange={(e) => {
                                setconfirm_password(e.target.value);
                              }}
                            />
                            <i
                              onClick={() => setshowicon2(!showicon2)}
                              className={
                                showicon2
                                  ? "fa enter-icon-3 right-icon fa-eye-slash right-icon-90"
                                  : "fa enter-icon-3 right-icon fa-eye right-icon-90"
                              }
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row my-5">
                        <div className="col-12 text-center">
                          {!loading ? (
                            <Link
                              to="#"
                              className="btn red-btn-solid ml-0 px-5 py-2"
                              onClick={() =>
                                password?.length > 0 &&
                                confirm_password?.length > 0
                                  ? onSubmitHandler()
                                  : Toasty(
                                      "error",
                                      `Please fill out all the required fields!`
                                    )
                              }
                            >
                              Update
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
                      <Link to="/Login" className="red">
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
    <Footer/>
    </>
  );
};

export default ResetPassword;
