import React from 'react'

const Instruction = () => {
    return (
        <section className="about-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-11 mx-auto">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h4 className="sub-heading">Yah'ki Awakened Eye of Lotus Botanical Health Club</h4>
                  <h3 className="main-heading">INSTRUCTIONS</h3>
                  <p className="general-para">All herbal compounds must be taken on an empty stomach 30 minutes before eating. 
                    While taking herbal compounds at least 64 oz. of spring water must be consumed daily.
                    Unless told otherwise by Yah’ki, Spring water is the most recommended drink while on herbal compounds.
                    A raw alkaline plant based diet is required when detoxing the Mind, Body, and Spirit. 
                    The effectiveness of herbal compounds are greatly compromised when diet is not followed. 
                    Optimal results are only achievable when herbal diet and regimen are followed correctly.</p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12">
                  <div className="about-video">
                    <img src="images/about-video-banner.jpg" alt="" className="img-fluid" />
                    <button type="button" className="play-banner" tabIndex={0}><i className="fas fa-play" /></button>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-content-between my-5">
                <div className="col-lg-8 col-12">
                  <h4 className="cta-line">NO YEAST, SUGAR, MEAT, ALCOHOL, OR DAIRY PRODUCTS MAY BE CONSUMED  WITH HERBAL COMPOUNDS.</h4>
                </div>
                <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-right">
                  <a href="#" className="btn red-btn-solid ml-md-0">Download Document</a>
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
      </section>
      
    )
}

export default Instruction
