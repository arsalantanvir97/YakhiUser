import React from 'react'
import { Link } from 'react-router-dom'
import AllHerbs from '../components/AllHerbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ImageLazyLoad from '../components/ImageLazyLoad'
import MainHeader from '../components/MainHeader'
import ToggleBack from '../components/ToggleBack'
let capsules = [
  'All Purpose Adult Vitamin Capsules',
  'ATOMIC STRENGTHENER CAPSULES',
  'BLOOD PURIFIER CAPSULES',
  'Brain, Nerve & Adrenal Capsules',
  'CALCIUM TRI PHOSPHATE CAPSULES',
  'Superfood+ Capsules',
  'INNER-CELLULAR CLEANSE CAPSULES',
  'Lymphatic Sweep Tonic Capsules',
  'ENDOCRINO BALANCE CAPSULES',
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
let bundles = [
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
const SkeletalSystem = ({ history }) => {
  return (
    <>
      <Header />
      <MainHeader />

      <div className='container-fluid my-1 py-1'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <ToggleBack name={'Skeletal System'} />
            <div className='row'>
              <div className='col-12 text-center my-3'>
                <h4 className='sub-heading'>Bones</h4>
                <h3 className='main-heading'>The Skeletal System</h3>
              </div>
            </div>
            <div className='about-company'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-xl-6 col-10 text-center'>
                  <ImageLazyLoad
                    src='images/skeletal-system.jpg'
                    alt=''
                    classname='img-fluid'
                  />
                </div>
                <div className='col-xl-6 col-12 mt-xl-0 mt-5'>
                  <p className='general-para'>
                    The skeletal system consists of bones, joints, teeth. The
                    bones of the skeletal system are connected by tendons,
                    ligaments, and cartilage. Functions of the skeletal system
                    include supporting the body and giving it shape. Along with
                    the muscular system, the skeletal system enables the body to
                    move. The bones of the skeletal system also protect internal
                    organs, store calcium, and produce red and white blood
                    cells.
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
                  <Link to='/Capsules' className='btn red-btn-solid '>
                    Shop Now
                  </Link>
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

export default SkeletalSystem
