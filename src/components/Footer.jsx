import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [newsletter, setnewsletter] = useState("");
  const newsLetterHandler = () => {
    setnewsletter("");
  };
  return (
    <>
      <footer className="site-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row align-items-start justify-content-around">
                {/* Footer col 1 */}
                <div className="col-xl-2 col-lg-3 col-md-6 order-2 order-lg-1 mt-5 mt-lg-0">
                  <h4 className="footer-title">INFORMATION</h4>
                  <ul className="foot-links">
                    <li>
                      <Link to="/AboutCompany" data-hover="About Us">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="#" data-hover="Counselors">
                        Counselors
                      </Link>
                    </li>
                    <li>
                      <Link to="/Document" data-hover="Documents">
                        Documents
                      </Link>
                    </li>
                    <li>
                      <Link to="/Instruction" data-hover="Instructions">
                        Instructions
                      </Link>
                    </li>
                    <li>
                      <Link to="#" data-hover="Member Agreement">
                        Member Agreement
                      </Link>
                    </li>
                    <li>
                      <Link to="#" data-hover="Membership Help">
                        Membership Help
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Footer col 2 */}
                <div className="col-xl-8 col-lg-6 col-md-12 text-center order-1 order-lg-2 ">
                  <h4 className="footer-title">Newsletter Signup</h4>
                  <div className="newsletter-part">
                    <p>
                      Subscribe for information on new products, courses, media
                      and more
                    </p>
                    <div onClick={newsLetterHandler} className="newsletter-box">
                      <i className="fas fa-paper-plane" />
                      <input
                        value={newsletter}
                        type="email"
                        className="form-control newsletter p-3 mt-3"
                        placeholder="Email Address Here...."
                        onChange={(e) => {
                          setnewsletter(e.target.value);
                        }}
                      />
                    </div>
                    <ul className="mt-4 list-inline">
                      <li className="list-inline-item">
                        <div className="social-icon">
                          <Link to="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="social-icon maroon-icon">
                          <Link to="#">
                            <i className="fab fa-facebook-messenger" />
                          </Link>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="social-icon">
                          <Link to="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="social-icon">
                          <Link to="#">
                            <i className="fab fa-youtube" />
                          </Link>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="social-icon">
                          <Link to="#">
                            <i className="fas fa-envelope" />
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Footer col 3 */}
                <div className="col-xl-2 col-lg-3 col-md-6 order-3 order-lg-3 mt-5 mt-lg-0">
                  <h4 className="footer-title">SUPPORT</h4>
                  <ul className="foot-links">
                    <li>
                      <Link
                        to="/OrderandPayment"
                        data-hover="Orders & Payments"
                      >
                        Orders &amp; Payments
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ShippingandPickup"
                        data-hover="Shipping & Pickups"
                      >
                        Shipping &amp; Pickups
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ReturnsandRefund"
                        data-hover="Returns % Cancellations"
                      >
                        Returns &amp; Cancellations
                      </Link>
                    </li>
                    <li>
                      <Link to="/Faqs" data-hover="Questions & Answers">
                        Questions &amp; Answers
                      </Link>
                    </li>
                    <li>
                      <Link to="/PrivacyPolicy" data-hover="Privacy Policy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="#" data-hover="Terms of Service">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="copy-rights">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <p>
                COPYRIGHT © 2021 <Link to="#">YAH'KI AWAKENED</Link>, LLC. ALL
                RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
