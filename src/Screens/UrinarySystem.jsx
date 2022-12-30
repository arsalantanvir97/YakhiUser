import React from 'react'
import AllHerbs from '../components/AllHerbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PrivateRouteSlider from '../components/PrivateRouteSlider'
import ShopnowButton from '../components/ShopnowButton'
import ToggleBack from '../components/ToggleBack'

let capsules = [
  'Brain, Nerve & Adrenal Capsules',
  'ENDOCRINO BALANCE CAPSULES',
  'INNER-CELLULAR CLEANSE CAPSULES',
  'GI SUPER MOVER CAPSULES',
  'Liver & Gall Bladder Capsules',
]

let Tinctures = [
  'Astringent X Tincture',
  'BLACK OLIVE LEAF EXTRACT TINCTURE',
  'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
  'CIRCULATORY LOW TINCTURE',
  'ENDOCRINO BALANCE TINCTURE',
  'Inner-Cellular Cleanse Tincture',
  'LIVER & GALLBLADDER SUPPORT',
  'Lymphatic Sweep Tonic Tincture',
]

let Teas = [
  'Cellular Regeneration Tea',
  '3BITTERS',
  'NEEM LEAF TEA',
  'Red Clover Tea',
]

let powders = [
  'Aeolian Islands Bladderwrack',
  'DULSE (PALMARIA PALMATA)',
  'Kelp Sea',
  'Raw Organic Sea Moss',
]
let tonics = [
  'BITTER LIQUID MINERAL BALANCE TONIC KIT',
  'BRAIN, NERVE, & ADRENAL SUPPORT BUNDLE',
  'CIRCULATORY SYSTEM HIGH & LOW TINCTURE BUNDLES',
  'Essential Glandular Endocrine Kit',
  'FOUNDATION FOURS CAPSULES',
  'FOUNDATION FOURS TINCTURE/CAPSULES BUNDLE',
  'FOUNDATION FOURS TINCTURES',
  'INNER-CELLULAR CLEANSE BUNDLE',
  'KIDNEY & ADRENAL KIT',
  'LYMPHATIC SYSTEM SWEEP KIT',
]
const UrinarySystem = ({ history }) => {
  return (
    <>
      <Header />
      <PrivateRouteSlider />

      <div className='container-fluid my-1 py-1'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <ToggleBack name={'Urinary System'} />
            <div className='row'>
              <div className='col-12 text-center my-3'>
                <h4 className='sub-heading'>Kidneys, Bladder</h4>
                <h3 className='main-heading'>The Urinary System</h3>
              </div>
            </div>
            <div className='about-company'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-xl-6 col-10 text-center'>
                  <img
                    src='images/urinary-system.jpg'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <div className='col-xl-6 col-12 mt-xl-0 mt-5'>
                  <p className='general-para'>
                    The Renal System (urinary system) includes the pair of
                    kidneys, which filter excess water and a waste product
                    called urea from the blood and form urine. Two tubes called
                    ureters carry the urine from the kidneys to the urinary
                    bladder, which stores the urine until it is excreted from
                    the body through another tube named the urethra. The kidneys
                    also produce an enzyme called renin and a variety of
                    hormones. These substances help regulate blood pressure, the
                    production of red blood cells, and the balance of calcium
                    and phosphorus in the body.
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
                    {/* Powders */}
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
                            SEAWEED &amp; POWDERS
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
                    {/* Tonics */}
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
                            href='#tonic'
                            aria-expanded='false'
                            aria-controls='tonic'
                          >
                            TONICS
                          </a>
                        </h4>
                      </div>
                      <div
                        id='tonic'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='headingThree'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            {tonics?.length > 0 &&
                              tonics?.map((cap) => (
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

export default UrinarySystem
