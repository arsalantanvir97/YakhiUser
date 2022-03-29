import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const SkeletalSystem = () => {
  return (
    <>
    <Header/>
    <section className="inner-banner">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-7 col-10 offset-sm-2 offset-1">
          <div className="banner-content">
            <div className="banner-outline">
              <h1 className="slider-heading">Healing The Illusion We Call disease</h1>
              <p className="slider-para">You deserve healing! We are not currently accepting detox home clients. </p>
            </div>
          </div>
        </div>
      </div>
    </div>  </section>

    <div className="container-fluid my-5 py-4">
  <div className="row">
    <div className="col-11 mx-auto">
      <div className="row">
        <div className="col-12 text-center my-3">
          <h4 className="sub-heading">Bones</h4>
          <h3 className="main-heading">The Skeletal System</h3>
        </div>
      </div>
      <div className="about-company">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-6 col-10 text-center">
            <img src="images/skeletal-system.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-xl-6 col-12 mt-xl-0 mt-5">
            <p className="general-para">
              The skeletal system consists of bones, joints, teeth. The bones of the skeletal system are connected by tendons, 
              ligaments, and cartilage. Functions of the skeletal system include supporting the body and giving it shape. 
              Along with the muscular system, the skeletal system enables the body to move. 
              The bones of the skeletal system also protect internal organs, store calcium, and produce red and white blood cells.
            </p>
            <h4 className="red system-sub-heading my-3">Suggested Products</h4>
            <div className="panel-group mb-4" id="accordion" role="tablist" aria-multiselectable="true">
              {/* Capsules */}
              <div className="panel panel-default mb-3">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <h4 className="panel-title">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#capsules" aria-expanded="false" aria-controls="capsules">
                      CAPSULES
                    </a>
                  </h4>
                </div>
                <div id="capsules" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="panel-body">
                    <ul className="system-list ml-4 py-4">
                      <li>Intracellular Cleanse Capsules</li>
                      <li>Parasite Elimination Capsules</li>
                      <li>Brain-Nerve Adrenal Support Capsules</li>
                      <li>Calcium Tri-Phosphate Capsules</li>
                      <li>Atomic Strengthener Capsules</li>
                      <li>Superfood+ Capsules</li>
                      <li>All Purpose Adult Vitamin Capsules</li>
                      <li>Turmeric Infusion Capsules</li>
                      <li>Black Seed Oil Capsules</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Tinctures  */}
              <div className="panel panel-default mb-3">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <h4 className="panel-title">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#tinctures" aria-expanded="false" aria-controls="tinctures">
                      Tinctures
                    </a>
                  </h4>
                </div>
                <div id="tinctures" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="panel-body">
                    <ul className="system-list ml-4 py-4">
                      <li>Intracellular Cleanse Tincture</li>
                      <li>Calcium Tri-Phosphate Tincture</li>
                      <li>Blood Purifier Tincture</li>
                      <li>Atomic Strengthener Tincture</li>
                      <li>Heavy Metal Detox Tincture</li>
                      <li>Thyroid and Parathyroid Support Tincture</li>
                      <li>Foundation Fours Tincture</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Teas */}
              <div className="panel panel-default mb-3">
                <div className="panel-heading" role="tab" id="headingThree">
                  <h4 className="panel-title">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#teas" aria-expanded="false" aria-controls="teas">
                      Teas
                    </a>
                  </h4>
                </div>
                <div id="teas" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div className="panel-body">
                    <ul className="system-list ml-4 py-4">
                      <li className="wbp_wrapper">Cellular Regeneration Tea</li>
                      <li>Revitalizer Tea</li>
                      <li>3BITTERS</li>
                      <li>IV Elements</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Kits & Bundles */}
              <div className="panel panel-default mb-3">
                <div className="panel-heading" role="tab" id="headingThree">
                  <h4 className="panel-title">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#kits" aria-expanded="false" aria-controls="kits">
                      Kits &amp; Bundles
                    </a>
                  </h4>
                </div>
                <div id="kits" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div className="panel-body">
                    <ul className="system-list ml-4 py-4">
                      <li>Revitalizer and Rebuilder Kit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Link to='/Capsules' className="btn red-btn-solid ">Shop Now</Link>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 text-center mt-5">
          <div className="about-bottom-banner">
            <h3>All Herbs Are Organic Alkaline and Are Naturally Wildcrafted from the Land of their Origin</h3>
            <p>All herbs used in our products are 100% naturally organic and are selectively picked and tested by a laboratory before use. Each herbal compound is personally prepared with gratification for the purpose of restoring health to our clients.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
  </>
  )
}

export default SkeletalSystem