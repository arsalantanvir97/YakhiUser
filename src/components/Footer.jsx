import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
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
                <Link to="/AboutCompany" data-hover="About Us">About Us</Link>
              </li>
              <li>
                <a href="#" data-hover="Counselors">Counselors</a>
              </li>
              <li>
                <Link to="/Document" data-hover="Documents">Documents</Link>
              </li>
              <li>
                <Link to="/Instruction" data-hover="Instructions">Instructions</Link>  
              </li>
              <li>
                <a href="#" data-hover="Member Agreement">Member Agreement</a>
              </li>
              <li>
                <a href="#" data-hover="Membership Help">Membership Help</a>
              </li>
            </ul>
          </div>
          {/* Footer col 2 */}
          <div className="col-xl-8 col-lg-6 col-md-12 text-center order-1 order-lg-2 ">
            <h4 className="footer-title">Newsletter Signup</h4>
            <div className="newsletter-part">
              <p>Subscribe for information on new products, courses, media and more</p>
              <div className="newsletter-box">
                <i className="fas fa-paper-plane" />
                <input type="email" className="form-control newsletter p-3 mt-3" placeholder="Email Address Here...." />
              </div>
              <ul className="mt-4 list-inline">
                <li className="list-inline-item"><div className="social-icon"><a href="#_"><i className="fab fa-facebook-f" /></a></div></li>
                <li className="list-inline-item"><div className="social-icon maroon-icon"><a href="#_"><i className="fab fa-facebook-messenger" /></a></div></li>
                <li className="list-inline-item"><div className="social-icon"><a href="#_"><i className="fab fa-instagram" /></a></div></li>
                <li className="list-inline-item"><div className="social-icon"><a href="#_"><i className="fab fa-youtube" /></a></div></li>
                <li className="list-inline-item"><div className="social-icon"><a href="#_"><i className="fas fa-envelope" /></a></div></li>
              </ul>
            </div>
          </div>
          {/* Footer col 3 */}
          <div className="col-xl-2 col-lg-3 col-md-6 order-3 order-lg-3 mt-5 mt-lg-0">
            <h4 className="footer-title">SUPPORT</h4>
            <ul className="foot-links">
              <li>
                <a href="#" data-hover="Orders & Payments">Orders &amp; Payments</a>
              </li>
              <li>
                <a href="#" data-hover="Shipping & Pickups">Shipping &amp; Pickups</a>
              </li>
              <li>
                <a href="#" data-hover="Returns % Cancellations">Returns &amp; Cancellations</a>
              </li>
              <li>
                <Link to='/Faqs' data-hover="Questions & Answers">Questions &amp; Answers</Link>  
              </li>
              <li>
                <a href="#" data-hover="Privacy Policy">Privacy Policy</a>
              </li>
              <li>
                <a href="#" data-hover="Terms of Service">Terms of Service</a>
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
        <p>COPYRIGHT © 2021 <a href="#">YAH'KI AWAKENED</a>, LLC. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  </div>
</section>
   
        </>
    )
}

export default Footer
