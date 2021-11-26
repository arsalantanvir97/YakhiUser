import React from 'react'

const MeettheTeam = () => {
    return (
        <div className="container-fluid my-5 py-4">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="team">
              <div className="row">
                <div className="col-md-8 mx-auto text-center">
                  <h4 className="sub-heading">Yah'ki Awakened Eye of Lotus Botanical Health Club</h4>
                  <h3 className="main-heading">Meet The Team</h3>
                  <p className="general-para mb-4">
                    As Yah’ki is transitioning out of his role of consulting and diagnosing clients 
                    to put 100% of his energy into future botanical and anatomy research and building 
                    The Eye Of Lotus Healing Center, get to know the individuals that, are helping you every 
                    step of the on your journey to healing.  Each therapist is highly trained in their particular 
                    area to best suit your needs and was selectively chosen by Yah’ki himself.
                  </p>
                </div>
              </div>
              {/* Team members grid */}
              <div className="row my-5 align-items-start justify-content-center pb-5">
                <div className="col-lg-4 col-md-6 my-4 my-lg-0">
                  <div className="team-member-box">
                    <img src="images/team-1.jpg" alt="" className="img-fluid" />
                    <div className="member-info-card">
                      <h3>KAWAH ASHYET</h3>
                      <ul className="member-features list-inline">
                        <li className="list-inline-item"> Herbalist</li>
                        <li className="list-inline-item">Counselor</li>
                        <li className="list-inline-item">Aromatherapist</li>
                        <li className="list-inline-item">Detoxification Specialist</li>
                        <li className="list-inline-item">Processing and Shipping</li>
                      </ul>
                      <div className="sepatator" />
                      <p className="text-center member-email"><a href="mailto:kawah@yahkiawakened.com"><i className="fas fa-envelope" />kawah@yahkiawakened.com</a></p>
                    </div>
                  </div>
                  <div className="send-msg mx-auto text-center">
                    <a href="#" className="btn red-btn-solid">Send A Message</a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 my-4 my-lg-0">
                  <div className="team-member-box">
                    <img src="images/team-2.jpg" alt="" className="img-fluid" />
                    <div className="member-info-card">
                      <h3>RUBY FOSTER</h3>
                      <ul className="member-features list-inline">
                        <li className="list-inline-item"> Counselor</li>
                        <li className="list-inline-item">Processing and Shipping</li>
                        <li className="list-inline-item"> Administrative Assistant</li>
                      </ul>
                      <div className="sepatator" />
                      <p className="text-center member-email"><a href="mailto:claims@yahkiawakened.com"><i className="fas fa-envelope" />claims@yahkiawakened.com</a></p>
                    </div>
                  </div>
                  <div className="send-msg mx-auto text-center">
                    <a href="#" className="btn red-btn-solid">Send A Message</a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 my-4 my-lg-0">
                  <div className="team-member-box">
                    <img src="images/team-1.jpg" alt="" className="img-fluid" />
                    <div className="member-info-card">
                      <h3>ANIYAH AWAKENED</h3>
                      <ul className="member-features list-inline">
                        <li className="list-inline-item"> Dietitian</li>
                        <li className="list-inline-item">Herbalist</li>
                        <li className="list-inline-item">Counselor</li>
                        <li className="list-inline-item">Detoxification Specialist</li>
                        <li className="list-inline-item">Processing and Shipping</li>
                      </ul>
                      <div className="sepatator" />
                      <p className="text-center member-email"><a href="mailto:Aniyah@yahkiawakened.com"><i className="fas fa-envelope" />Aniyah@yahkiawakened.com</a></p>
                    </div>
                  </div>
                  <div className="send-msg mx-auto text-center">
                    <a href="#" className="btn red-btn-solid">Send A Message</a>
                  </div>
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
      </div>
      
    )
}

export default MeettheTeam
