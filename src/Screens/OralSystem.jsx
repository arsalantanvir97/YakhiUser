import React from 'react'
import AllHerbs from '../components/AllHerbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PrivateRouteSlider from '../components/PrivateRouteSlider'
import ShopnowButton from '../components/ShopnowButton'
import ToggleBack from '../components/ToggleBack'
let capsules = [
  'All Purpose Adult Vitamin Capsules',
  'ATOMIC STRENGTHENER CAPSULES',
  'CALCIUM TRI PHOSPHATE CAPSULES',
  'Brain, Nerve & Adrenal Capsules',
  'ENDOCRINO BALANCE CAPSULES',
  'INNER-CELLULAR CLEANSE CAPSULES',
  'Lymphatic Sweep Tonic Capsules	',
  'Superfood+ Capsules',
]

let Tinctures = [
  'ATOMIC STRENGTHENER TINCTURE',
  'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
  'Calcium Tri-Phosphate Tincture	',
  'CIRCULATORY HIGH TINCTURE',
  'ENDOCRINO BALANCE TINCTURE',
  'Inner-Cellular Cleanse Tincture',
  'Lymphatic Sweep Tonic Tincture',
  'THYROID & PARATHYROID SUPPORT',
]

let powders = [
  'Aeolian Islands Bladderwrack',
  'DULSE (PALMARIA PALMATA)',
  'Kelp Sea',
  'Raw Organic Sea Moss',
]

const OralSystem = ({ history }) => {
  return (
    <>
      <Header />
      <PrivateRouteSlider />

      <div className='container-fluid my-1 py-1'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <ToggleBack name={`Oral System`} />
            <div className='row'>
              <div className='col-12 text-center my-3'>
                <h4 className='sub-heading'>Teeth, Gums</h4>
                <h3 className='main-heading'>ORAL HEALTH</h3>
              </div>
            </div>
            <div className='about-company'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-xl-6 col-10 text-center'>
                  <img
                    src='images/respiratory-system.jpg'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <div className='col-xl-6 col-12 mt-xl-0 mt-5'>
                  <p className='general-para'>
                    Pertaining to the mouth and everything associated with it.
                    Poor oral hygiene can lead to dental cavities and gum
                    disease, and has also been linked to heart disease, cancer,
                    and diabetes.
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
                    {/* HERBAL POWDERS  */}
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
                            href='#powder'
                            aria-expanded='false'
                            aria-controls='powder'
                          >
                            HERBAL POWDERS
                          </a>
                        </h4>
                      </div>
                      <div
                        id='powder'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='headingThree'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            {powders?.length > 0 &&
                              powders?.map((cap) => (
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

export default OralSystem
