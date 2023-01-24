import React from 'react'
import AllHerbs from '../components/AllHerbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ImageLazyLoad from '../components/ImageLazyLoad'
import MainHeader from '../components/MainHeader'
import ShopnowButton from '../components/ShopnowButton'
import ToggleBack from '../components/ToggleBack'
let capsules = [
  'All Purpose Adult Vitamin Capsules',
  'ATOMIC STRENGTHENER CAPSULES',
  'BLOOD PURIFIER CAPSULES',
  'Brain, Nerve & Adrenal Capsules',
  'ENDOCRINO BALANCE CAPSULES',
  'INNER-CELLULAR CLEANSE CAPSULES',
  'Lymphatic Sweep Tonic Capsules	',
  'TURMERIC AND GINGER INFUSION CAPSULES',
  'Superfood+ Capsules',
  'CAYENNE PEPPER CAPSULES',
]

let Tinctures = [
  'Astringent X Tincture',
  'BLACK OLIVE LEAF EXTRACT TINCTURE',
  'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
  'CIRCULATORY HIGH TINCTURE',
  'ENDOCRINO BALANCE TINCTURE',
  'Inner-Cellular Cleanse Tincture',
  'Lymphatic Sweep Tonic Tincture',
  'THYROID & PARATHYROID SUPPORT',
]

let teas = [
  'Cellular Regeneration Tea',
  'Red Clover Tea',
  '3BITTERS',
  'NEEM LEAF TEA',
]
let powders = [
  'Aeolian Islands Bladderwrack',
  'DULSE (PALMARIA PALMATA)',
  'Kelp Sea',
  'Raw Organic Sea Moss',
]
let oils = [
  '100% WILD EGYPTIAN TURMERIC OIL',
  '100% WILD INDIA GINGER OIL',
  'INDIA NEEM EXTRACT OIL',
]
let bundles = [
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
const RespiratorySystem = ({ history }) => {
  return (
    <>
      <Header />
      <MainHeader />

      <div className='container-fluid my-1 py-1'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <ToggleBack name={'Respiratory System'} />
            <div className='row'>
              <div className='col-12 text-center my-3'>
                <h4 className='sub-heading'>Lungs</h4>
                <h3 className='main-heading'>Respiratory System</h3>
              </div>
            </div>
            <div className='about-company'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-xl-6 col-10 text-center'>
                  <ImageLazyLoad
                    src='images/respiratory-system.jpg'
                    alt=''
                    classname='img-fluid'
                  />
                </div>
                <div className='col-xl-6 col-12 mt-xl-0 mt-5'>
                  <p className='general-para'>
                    Organs and other structures of the respiratory system
                    include the nasal passages, lungs, and a long tube called
                    the trachea, which carries air between the nasal passages
                    and lungs. The main function of the respiratory system is to
                    deliver oxygen to the blood and remove carbon dioxide from
                    the body. Gases are exchanged between the lungs and blood
                    across the walls of capillaries lining tiny air sacs
                    (alveoli) in the lungs.
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
                            {teas?.length > 0 &&
                              teas?.map((cap) => (
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
                    {/* SEAWEED & POWDERS */}
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
                    {/* OILS */}
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
                            href='#oil'
                            aria-expanded='false'
                            aria-controls='oil'
                          >
                            OILS
                          </a>
                        </h4>
                      </div>
                      <div
                        id='oil'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='headingThree'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            {oils?.length > 0 &&
                              oils?.map((cap) => (
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
                    {/* Kits & Bundles */}
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
                            href='#kits'
                            aria-expanded='false'
                            aria-controls='kits'
                          >
                            Kits &amp; Bundles
                          </a>
                        </h4>
                      </div>
                      <div
                        id='kits'
                        className='panel-collapse collapse'
                        role='tabpanel'
                        aria-labelledby='headingThree'
                      >
                        <div className='panel-body'>
                          <ul className='system-list ml-4 py-4'>
                            {bundles?.length > 0 &&
                              bundles?.map((cap) => (
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

export default RespiratorySystem
