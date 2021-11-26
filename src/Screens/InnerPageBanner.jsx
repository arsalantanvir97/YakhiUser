import React from 'react'

const InnerPageBanner = () => {
    return (
        <section className="inner-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 offset-lg-2">
              <div className="banner-content">
                <div className="banner-outline">
                  <h1 className="slider-heading">Healing The Illusion <br /> We  <span className="green">Call Disease</span></h1>
                  <p className="slider-para mt-2">You Deserve Healing! We Are Excited To Announce That We Are Now 
                    Accepting Registration And Bookings for The YAH'KI Detoxification Home.</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="leafy-fall">
                <img src="images/inner-banner-leaf.png" alt="" className="img-fluid banner-leaf" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}

export default InnerPageBanner
