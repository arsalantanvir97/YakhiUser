import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {
  userSignUpAction,
  
} from "../actions/userAction";
const Signup = ({history}) => {
  const dispatch = useDispatch();

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState();
  
    const [confirmpassword, setconfirmpassword] = useState();
    const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log('userInfo',userInfo);
  const onSubmitHandler=async(e)=>{
    console.log("submitHandler");
    e.preventDefault();
    await dispatch(userSignUpAction(name,  email,password,confirmpassword,history));
    setemail("");
    setpassword("");
    setconfirmpassword("");
    setname("");

  }


  useEffect(() => {
    if (userInfo) {
      history.replace("/Home");
    }
  }, [userInfo]);
    return (
        <div className="container-fluid mt-5">
        <div className="row py-5">
          <div className="col-xl-6 col-lg-8 col-md-10 col-10 mx-auto">
            <div className="account-form">
              <h3 className="text-center">Sign Up</h3>
              <form>
                <div className="row pt-5 align-items-center justify-content-center">
                  <div className="col-12">
                    <div className="row justify-content-md-center">
                      <div className="col-md-12 mt-2">
                        <div className="row">
                          <div className="col-md-12 mt-3">
                            <label htmlFor className="my-label">Name<span className="red">*</span></label>
                            <input type="text" className="form-control my-textbox" placeholder="Enter Name" value={name}
                        onChange={(e) => {
                          setname(e.target.value);
                        }}/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 mt-3">
                            <label htmlFor className="my-label">Email Address <span className="red">*</span></label>
                            <input type="email" className="form-control my-textbox" placeholder="Enter Email Address" value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 mt-3">
                            <label htmlFor className="my-label">New Password<span className="red">*</span></label>
                            <div className="position-relative">
                              <input type="password" className="form-control enter-input my-textbox" placeholder="Enter Password" value={password}
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}/>
                              <i className="fa enter-icon right-icon fa-eye-slash" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 mt-3">
                            <label htmlFor className="my-label">Confirm Password<span className="red">*</span></label>
                            <div className="position-relative">
                              <input type="password" className="form-control enter-input my-textbox" placeholder="Enter Password" value={confirmpassword}
                        onChange={(e) => {
                          setconfirmpassword(e.target.value);
                        }}/>
                              <i className="fa enter-icon right-icon fa-eye-slash" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-5">
                          <div className="col-12 text-center">
                            <Link to="#" className="btn red-btn-solid ml-0 px-5 py-2" onClick={onSubmitHandler}>Sign Up</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row pb-5">
                      <div className="col-12 text-center">
                        <h6 className="f-18">Have An Account?<Link to='/' className="red" > Login!</Link></h6>
                      </div>
                    </div>  
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Signup
