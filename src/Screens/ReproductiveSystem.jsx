import React from 'react'
import AllHerbs from '../components/AllHerbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PrivateRouteSlider from '../components/PrivateRouteSlider'
import ShopnowButton from '../components/ShopnowButton'
import ToggleBack from '../components/ToggleBack'
let capsules = [
  'Brain Nerve Vitalmax Capsules',
  'Inner-Cellular Cleanse Capsules',
  'Parasite Elimination Capsules',
  'Brain, Nerve & Adrenal Capsules',
  'Endocrino Capsules',
  'GI Super Mover Capsules',
  'Blood Purifier Capsules',
  'Calcium Tri-Phosphate Capsules',
  'Atomic Strengthener Capsules',
  'Lymphatic System Detox Capsules',
  'Cayenne Pepper Capsules',
  'Adult All Purpose Vitamin Capsules',
  'Turmeric Infusion Capsules',
  'Superfood Powder Plus Capsules',
]

let Tinctures = [
  'Brain Nerve Vitalmax Tincture',
  'Inner-Cellular Cleanse Tincture',
  'Parasite Elimination Tincture',
  'Brain, Nerve, & Adrenal Tincture',
  'Endocrino Tincture',
  'GI Super Mover Tincture',
  'Blood Purifier Tincture',
  'Calcium Tri-Phosphate Tincture',
  'Atomic Strengthener Tincture',
  'Lymphatic System Sweep Tonic Tincture',
]

let Teas = [
  'Brain Nerve Vitalmax Tea',
  'Cellular Regeneration Tea',
  'Revitalizer Tea',
  '3BITTERS',
  'IV Elements',
  'Burdock Root Tea',
]
const ReproductiveSystem = ({ history }) => {
  return (
    <>
      <Header />
      <PrivateRouteSlider />

      <div className='container-fluid my-1 py-1'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <ToggleBack name={'Reproductive System'} />
            <div className='row'>
              <div className='col-12 text-center my-3'>
                <h4 className='sub-heading'>
                  Male &amp; Female Productive System
                </h4>
                <h3 className='main-heading'>The Reproductive System</h3>
              </div>
            </div>
            <div className='about-company'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-xl-6 col-10 text-center'>
                  <img
                    src='images/reproductive-system.jpg'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <div className='col-xl-6 col-12 mt-xl-0 mt-5'>
                  <p className='general-para'>
                    The reproductive system is the only body system that differs
                    substantially between individuals. There is a range of
                    Biological sex, but most books divide them into male and
                    female.
                  </p>
                  <h4 className='red system-sub-heading my-3'>
                    Suggested Products
                  </h4>
                  <div
                    className='panel-group mb-4'
                    id='accordion'
                    role='tablist'
                    aria-multiselectable='true'
                  >
                    {/* Capsules */}
                    <div className='panel panel-default mb-3'>
                      <div className='panel-heading' role='tab' id='headingTwo'>
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#capsules'
                            aria-expanded='false'
                            aria-controls='capsules'
                          >
                            CAPSULES
                          </a>
                        </h4>
                      </div>
                      <div
                        id='capsules'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='headingTwo'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            {capsules?.length > 0 &&
                              capsules?.map((cap) => (
                                <li
                                  className='abccccc'
                                  onClick={() => {
                                    history?.push(`/ProductViewByName/${cap}`)
                                  }}
                                >
                                  {cap}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*Tinctures  */}
                    <div className='panel panel-default mb-3'>
                      <div className='panel-heading' role='tab' id='headingTwo'>
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#tinctures'
                            aria-expanded='false'
                            aria-controls='tinctures'
                          >
                            Tinctures
                          </a>
                        </h4>
                      </div>
                      <div
                        id='tinctures'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='headingTwo'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            {Tinctures?.length > 0 &&
                              Tinctures?.map((cap) => (
                                <li
                                  className='abccccc'
                                  onClick={() => {
                                    history?.push(`/ProductViewByName/${cap}`)
                                  }}
                                >
                                  {cap}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Teas */}
                    <div className='panel panel-default mb-3'>
                      <div
                        className='panel-heading'
                        role='tab'
                        id='headingThree'
                      >
                        <h4 className='panel-title'>
                          <a
                            className='collapsed'
                            data-toggle='collapse'
                            data-parent='#accordion'
                            href='#teas'
                            aria-expanded='false'
                            aria-controls='teas'
                          >
                            Teas
                          </a>
                        </h4>
                      </div>
                      <div
                        id='teas'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='headingThree'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            {Teas?.length > 0 &&
                              Teas?.map((cap) => (
                                <li
                                  className='abccccc'
                                  onClick={() => {
                                    history?.push(`/ProductViewByName/${cap}`)
                                  }}
                                >
                                  {cap}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ShopnowButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AllHerbs />
      <Footer />
    </>
  )
}

export default ReproductiveSystem
