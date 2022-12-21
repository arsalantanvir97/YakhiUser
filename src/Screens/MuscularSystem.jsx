import React from 'react'
import AllHerbs from '../components/AllHerbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PrivateRouteSlider from '../components/PrivateRouteSlider'
import ShopnowButton from '../components/ShopnowButton'
let capsules = [
  'All Purpose Adult Vitamin Capsules',
  'ATOMIC STRENGTHENER CAPSULES',
  'Black Seed Oil Capsules',
  'BLOOD PURIFIER CAPSULES',
  'Brain, Nerve & Adrenal Capsules',
  'CALCIUM TRI PHOSPHATE CAPSULES',
  'ENDOCRINO BALANCE CAPSULES',
  'GI SUPER MOVER CAPSULES',
  'INNER-CELLULAR CLEANSE CAPSULES',
  'Liver & Gall Bladder Capsules',
  'Lymphatic Sweep Tonic Capsules',
  'TURMERIC AND GINGER INFUSION CAPSULES',
  'Superfood+ Capsules',
]
let Tinctures = [
  'Astringent X Tincture',
  'ATOMIC STRENGTHENER TINCTURE',
  'BLACK OLIVE LEAF EXTRACT TINCTURE',
  'BLOOD PURIFIER TINCTURE',
  'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
  'Calcium Tri-Phosphate Tincture	',
  'CIRCULATORY HIGH TINCTURE',
  'CIRCULATORY LOW TINCTURE',
  'ENDOCRINO BALANCE TINCTURE',
  'Inner-Cellular Cleanse Tincture',
  'Lymphatic Sweep Tonic Tincture',
  'THYROID & PARATHYROID SUPPORT',
]
let Teas = [
  'Cellular Regeneration Tea',
  'Red Clover Tea',
  '3BITTERS',
  'NEEM LEAF TEA',
]
let seaherbs = [
  'Aeolian Islands Bladderwrack',
  'DULSE (PALMARIA PALMATA)',
  'Kelp Sea',
  'Raw Organic Sea Moss',
]
let Tonics = [
  'BITTER LIQUID MINERAL BALANCE TONIC',
  'LYMPHATIC SYSTEM SWEEP TONIC',
]
let Oils = [
  '100% WILD EGYPTIAN TURMERIC OIL',
  '100% WILD INDIA GINGER OIL',
  'INDIA NEEM EXTRACT OIL',
]
let Salves = ['100% WILD EGYPTIAN TURMERIC OIL']
let KitsBundle = [
  'BITTER LIQUID MINERAL BALANCE TONIC KIT',
  'BLOOD PURIFIER BUNDLE',
  'BRAIN, NERVE, & ADRENAL SUPPORT BUNDLE',
  'CIRCULATORY SYSTEM HIGH & LOW TINCTURE BUNDLES',
  'Essential Glandular Endocrine Kit',
  'FOUNDATION FOURS CAPSULES',
  'FOUNDATION FOURS TINCTURE/CAPSULES BUNDLE',
  'FOUNDATION FOURS TINCTURES',
  'INNER-CELLULAR CLEANSE BUNDLE',
  'KIDNEY & ADRENAL KIT',
  'LYMPHATIC SYSTEM SWEEP KIT',
  'REVITALIZE & REBUILD KIT',
]
const MuscularSystem = ({ history }) => {
  return (
    <>
      <Header />
      <PrivateRouteSlider />

      <div className='container-fluid my-1 py-1'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row'>
              <div className='col-12 text-center my-3'>
                <h4 className='sub-heading'>Tissues</h4>
                <h3 className='main-heading'>The Muscular System</h3>
              </div>
            </div>
            <div className='about-company'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-xl-6 col-10'>
                  <img
                    src='images/Muscular-System.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <div className='col-xl-6 col-12 mt-xl-0 mt-5'>
                  <p className='general-para'>
                    The muscular system consists of three different types of
                    muscles, including skeletal muscles, which are attached to
                    bones by tendons and allow for voluntary movements of the
                    body. Smooth muscle tissues control the involuntary
                    movements of internal organs, such as the organs of the
                    digestive system, allowing food to move through the system.
                    Smooth muscles in blood vessels allow vasoconstriction and
                    vasodilation and thereby help regulate body temperature.
                    Cardiac muscle tissues control the involuntary beating of
                    the heart, allowing it to pump blood through the blood
                    vessels of the cardiovascular system.
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
                              Tinctures?.map((tin) => (
                                <li
                                  className='abccccc'
                                  onClick={() => {
                                    history?.push(`/ProductViewByName/${tin}`)
                                  }}
                                >
                                  {tin}
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
                              Teas?.map((tea) => (
                                <li
                                  className='abccccc'
                                  onClick={() => {
                                    history?.push(`/ProductViewByName/${tea}`)
                                  }}
                                >
                                  {tea}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* POWDERS & SEA HERBS */}
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
                            href='#powders'
                            aria-expanded='false'
                            aria-controls='powders'
                          >
                            POWDERS &amp; SEA HERBS
                          </a>
                        </h4>
                      </div>
                      <div
                        id='powders'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='headingThree'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            {seaherbs?.length > 0 &&
                              seaherbs?.map((sea) => (
                                <li
                                  className='abccccc'
                                  onClick={() => {
                                    history?.push(`/ProductViewByName/${sea}`)
                                  }}
                                >
                                  {sea}
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

export default MuscularSystem
