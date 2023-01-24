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
  'Brain, Nerve & Adrenal Capsules',
  'ENDOCRINO BALANCE CAPSULES',
  'INNER-CELLULAR CLEANSE CAPSULES',
  'Lymphatic Sweep Tonic Capsules	',
  'Superfood+ Capsules',
]

let Tinctures = [
  'BRAIN, NERVE, & ADRENAL SUPPORT TINCTURE',
  'Calcium Tri-Phosphate Tincture	',
  'CIRCULATORY HIGH TINCTURE',
  'CIRCULATORY LOW TINCTURE',
  'ENDOCRINO BALANCE TINCTURE',
  'Inner-Cellular Cleanse Tincture',
  'Lymphatic Sweep Tonic Tincture',
  'THYROID & PARATHYROID SUPPORT',
]

let Teas = ['Cellular Regeneration Tea', 'Red Clover Tea', '3BITTERS']
let powders = [
  'Aeolian Islands Bladderwrack',
  'DULSE (PALMARIA PALMATA)',
  'Kelp Sea',
  'Raw Organic Sea Moss',
]

let bundles = [
  'BRAIN, NERVE, & ADRENAL SUPPORT BUNDLE',
  'CIRCULATORY SYSTEM HIGH & LOW TINCTURE BUNDLES',
  'Essential Glandular Endocrine Kit',
  'FOUNDATION FOURS TINCTURE/CAPSULES BUNDLE',
  'INNER-CELLULAR CLEANSE BUNDLE',
  'KIDNEY & ADRENAL KIT',
  'LYMPHATIC SYSTEM SWEEP KIT',
]
let oils = ['Black seed Oil']

const CardioSystem = ({ history }) => {
  return (
    <>
      <Header />
      <MainHeader />

      <div className='container-fluid my-1 py-1'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <ToggleBack name={'Cardio System'} />
            <div className='row'>
              <div className='col-12 text-center my-3'>
                <h4 className='sub-heading'>Heart, Blood</h4>
                <h3 className='main-heading'>Cardiovascular System</h3>
              </div>
            </div>
            <div className='about-company'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-xl-6 col-10 text-center'>
                  <ImageLazyLoad
                    src='images/cardio-system.jpg'
                    alt=''
                    classname='img-fluid'
                  />
                </div>
                <div className='col-xl-6 col-12 mt-xl-0 mt-5'>
                  <p className='general-para'>
                    The cardiovascular system (also called the circulatory
                    system) includes the heart, blood, and three types of blood
                    vessels: arteries, veins, and capillaries. The heart pumps
                    blood, which travels through the blood vessels. The main
                    function of the cardiovascular system is transport. Oxygen
                    from the lungs and nutrients from the digestive system are
                    transported to cells throughout the body. Carbon dioxide and
                    other waste materials are picked up from the cells and
                    transported to organs such as the lungs and kidneys for
                    elimination from the body. The cardiovascular system also
                    equalizes body temperature and transports endocrine hormones
                    to cells in the body where they are needed.
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
                    {/* oils */}
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
                            Oils
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

export default CardioSystem
