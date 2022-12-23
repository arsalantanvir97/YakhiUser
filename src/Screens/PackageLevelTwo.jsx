import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PrivateRouteSlider from '../components/PrivateRouteSlider'
import UnauthorizedAlert from '../components/UnauthorizedAlert'
import Toasty from '../utils/toast'

const PackageLevelTwo = ({ match, history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [product, setproduct] = useState([])
  const [quantity, setquantity] = useState(1)
  const [recommendedproducts, setrecommendedproducts] = useState([])
  const [userwishlist, setuserwishlist] = useState([])
  const addToCartHandler = async () => {
    console.log('addToCartHandler')
    history.push(`/GeoGeneticsCheckout/${match.params.id}?qty=${quantity}`)
  }

  const subQuantity = async () => {
    quantity == 0 || quantity <= 0
      ? setquantity(0)
      : setquantity(Number(quantity - 1))
  }
  return (
    <>
      <Header />
      <section
        className='inner-banner'
        style={{
          backgroundImage: 'url(' + `${'../images/geogentics.jpg'} ` + ')',
          minHeight:
            // match?.params?.id == '62415fde1b97a530529276b3' ||
            // match?.params?.id == '624160071b97a530529276b7' ||
            // match?.params?.id == '62415fc11b97a530529276af' ||
            // match?.params?.id == '62415f8d1b97a530529276ab'
            window.innerWidth > 1300
              ? '670px'
              : window.innerWidth > 1200
              ? '490px'
              : window.innerWidth > 1100
              ? '440px'
              : window.innerWidth > 925
              ? '400px'
              : window.innerWidth > 780
              ? '335px'
              : window.innerWidth > 510
              ? '275px'
              : window.innerWidth > 465
              ? '210px'
              : '120px',
          // : '440px',

          // backgroundPosition: 'center',
          backgroundSize: 'contain',

          // backgroundRepeat: 'no-repeat',
          // height: '440px',
        }}
      ></section>{' '}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            {/* product grid and add to cart option */}
            <section className='product-grid'>
              <div className='row align-items-start justify-content-center mb-5 pb-5'>
                <div className='col-lg-6 col-md-8'>
                  <div className='p-view-main'>
                    <img
                      src='/images/product-main.png'
                      alt=''
                      className='img-fluid h-100'
                    />
                  </div>
                  <div className='row'>
                    <div className='col-4'>
                      <div className='p-view-thumb'>
                        <img
                          src='/images/product-thumb.png'
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='p-view-thumb'>
                        <img
                          src='/images/product-thumb.png'
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='p-view-thumb'>
                        <img
                          src='/images/product-thumb.png'
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-10'>
                  <h2 className='p-title'>
                    GEO’GENETICS THERAPEUTIC PACKAGE LEVEL 2
                  </h2>
                  <ul className='list-inline py-4'>
                    <li className='list-inline-item'>
                      <i className='fas fa-star rate' />
                    </li>
                    <li className='list-inline-item'>
                      <i className='fas fa-star rate' />
                    </li>
                    <li className='list-inline-item'>
                      <i className='fas fa-star rate' />
                    </li>
                    <li className='list-inline-item'>
                      <i className='fas fa-star rate' />
                    </li>
                    <li className='list-inline-item'>
                      <i className='fas fa-star rate' />
                    </li>
                  </ul>
                  <p className='short-desc'>
                    ALL HERBS ARE ORGANIC ALKALINE BOTANICALS AND ARE NATURALLY
                    WILDCRAFTED FROM THE LAND OF THEIR ORIGIN <br />
                    <strong>
                      These ingredients have been tested and carefully selected
                      by a certified herbalist. Must be 21 years of age and
                      older to purchase. Check ingredients for allergens.
                    </strong>
                  </p>
                  <h4 className='big-price'>$1,500</h4>
                  <div id='field1'>
                    Quantity
                    <div className='quantifier'>
                      <button
                        type='button'
                        id='sub'
                        className='minus'
                        value={quantity}
                        onClick={() =>
                          // setquantity(Number(quantity - 1))
                          subQuantity()
                        }
                      >
                        <i className='fas fa-minus' />
                      </button>
                      <input
                        type='number'
                        id={1}
                        defaultValue={1}
                        min={0}
                        className='quantity quantity p-2'
                        value={quantity}
                        onChange={(e) => {
                          setquantity(Number(e.target.value))
                        }}
                        // max={product?.countInStock}
                      />
                      <button
                        type='button'
                        id='add'
                        className='plus'
                        value={quantity}
                        onClick={() => setquantity(Number(quantity + 1))}
                      >
                        <i className='fas fa-plus' />
                      </button>
                    </div>
                  </div>
                  <div className='weight my-4'>
                    <p>
                      Weight<span>30.2 oz</span>
                    </p>
                  </div>
                  <button
                    type='button'
                    onClick={() => {
                      userInfo
                        ? quantity > 0
                          ? addToCartHandler(product?._id)
                          : Toasty('error', `Quantity must be greater than 0`)
                        : UnauthorizedAlert()
                    }}
                    className='btn maroon-btn-solid px-5 py-2'
                  >
                    <img
                      src='/images/add-to-cart.png'
                      alt=''
                      className='img-fluid mr-2 pt-1'
                    />
                    Add to cart
                  </button>
                </div>
              </div>
            </section>
            {/* Details tabs */}
            <section className='detail-tabs'>
              <div className='row'>
                <div className='col-12'>
                  <div className='yahki-tabs'>
                    <ul className='yahki-tabs-nav'>
                      <li>
                        <a href='#yahki-tab-1'>Description</a>
                      </li>
                      <li>
                        <a href='#yahki-tab-2'>Additional Information</a>
                      </li>
                      <li>
                        <a href='#yahki-tab-3'>Reviews</a>
                      </li>
                    </ul>
                    <div className='yahki-tabs-stage'>
                      <div
                        id='yahki-tab-1'
                        className='yahki-tab-content px-8 light-bg'
                      >
                        <div className='container-fluid'>
                          <div className='row justify-content-between '>
                            <div className='col-12 text-center mb-3 mb-sm-4 mb-md-5 py-4 py-lg-3'>
                              <h2 className='y-tab-heading'>
                                GEO’GENETICS THERAPEUTIC PACKAGE LEVEL 2
                              </h2>
                            </div>
                            <div className='col-lg-6 mb-3'>
                              <p className='pr-4 mb-4'>
                                Yah’ki uses a very unique and effective herbal
                                therapy approach when addressing disease! The
                                Geo’Genetics Therapeutic Package Was Created To
                                Cleanse Every Cellular Structure And System Of
                                Your Body, It Breaks Up Mucus And Calcification,
                                Kills Parasites, Revitalize and Rinses The Cells
                                While Supplying Carbon, Oxygen, Hydrogen And
                                Pairing Them With A Monosaccharide Sugar,
                                Phosphate And Nitrogen Base! REPAIRING THE DNA
                                AND REWRITING THE GENETIC CODE!
                              </p>
                              <p className='pr-4 mb-4'>
                                Feeding The Cells Phytonutrients, Simple Amino
                                Acid Structures, And Minerals. Amino Acid
                                Therapy Steps Of Healing Is To Aggressively
                                Address The Nervous System, Blood, Colon,
                                Kidneys, Lymphatic System, Skin, Bones and
                                Glymphatic System. While Aligning The Glandular
                                Highway System Simultaneously! This Increases
                                The Amount Of Electrical Magnetic Energy That’s
                                Being Conveyed Throughout Each Cell Of The Body.
                                Bringing The Body To A State Of Vibrant Health,
                                Highly Electrifying Cells , And Healthy
                                Longevity.
                              </p>
                            </div>
                            <div className='col-lg-6 mb-3'>
                              <p className='pr-4 mb-4'>
                                Amino acids are the small particles that make up
                                the building block of life, Cellular Structures,
                                and tissues of the human body. When simple amino
                                acids become complex, Yah’ki calls it protein.
                                When we eat essential amino acid alkaline foods,
                                our body breaks down and absorbs these small
                                amino acids. Amino acids are used by our body to
                                make muscle, brain chemicals
                                (neurotransmitters), and other important
                                proteins found in our skin, hair and vital
                                organs.
                              </p>
                              <p className='pr-4 mb-4'>
                                Amino acids are also used by every cell in the
                                body to generate energy molecules called ATP.
                                Many people take amino acid supplements or have
                                amino acid IVs administered to improve muscle
                                strength, endurance, tissue repair, mood and
                                energy. In our practice, we repeatedly advise
                                our patients to eat highly alkaline electrical
                                foods to ensure they receive proper levels of
                                all the essential amino acids. However, eating
                                adequate amounts of amino acids isn’t always
                                enough. People dealing with viruses, bad
                                bacteria, poor digestion or chronic illness and
                                stress often have difficulty breaking down and
                                assimilating amino acids from food. So you would
                                need assistance from potent electrical herbs!
                              </p>
                            </div>
                            <div className='col-lg-12 mb-3'>
                              <div
                                className='alert alert-danger alert-dismissible fade show border border-danger py-4 mb-5'
                                role='alert'
                              >
                                <button
                                  type='button'
                                  className='close py-1'
                                  data-dismiss='alert'
                                  aria-label='Close'
                                >
                                  <span aria-hidden='true'>×</span>
                                </button>
                                <i className='fas fa-exclamation-triangle' /> NO
                                YEAST, SUGAR, MEAT, SALT, ALCOHOL, OR DAIRY
                                PRODUCTS MAY BE CONSUMED WITH HERBAL COMPOUNDS.
                              </div>
                              <div
                                className='alert alert-primary  py-4 mb-5'
                                role='alert'
                              >
                                <i className='fas fa-info-circle' /> For Legal
                                Purposes Only Family. DISCLAIMER: These
                                statements have not been evaluated by the Food
                                and Drug Administration (FDA). This product is
                                not intended to diagnose, treat, cure, or
                                prevent any disease.
                              </div>
                            </div>
                            <div className='col-12 mb-3'>
                              <h3 className='y-tab-subheading'>Expiration</h3>
                            </div>
                            <div className='col-lg-6 mb-3'>
                              <p className='pr-4 mb-4'>
                                All tonics, loose teas, herbal leaves, and
                                powders should be refrigerated after seal is
                                broken for longest potency and freshness of
                                herbs. Herbal compounds such as tinctures and
                                capsules doesn’t need to be refrigerated and
                                should be stored in a cool, dark place out of
                                direct light.
                              </p>
                            </div>
                            <div className='col-lg-6 mb-3'>
                              <p className='pr-4 mb-4'>
                                These methods will guarantee the longest potency
                                and freshness. All herbal compounds will have
                                expiration date on item packages effective
                                immediately. If Stored correctly these herbal
                                compounds will last far longer than the
                                recommended expiration date.
                              </p>
                            </div>
                            <div className='col-12 mb-4'>
                              <h3 className='y-tab-subheading'>
                                FRESH JUICE FASTING IS RECOMMENDED WITH THIS
                                PACKAGE TO SPEED UP HEALING PROCESS!
                              </h3>
                            </div>
                            <div className='col-12 p-4'>
                              <div className='bg-white row px-md-5 px-2 pb-5'>
                                {/* in this package details */}
                                <div className='col-12 mb-4 mt-5'>
                                  <h3 className='y-tab-heading text-left '>
                                    IN THIS PACKAGE
                                  </h3>
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-3 '>
                                  <h3 className='mini-heading mb-4'>
                                    WEEK 1-2 PROTOCOL
                                  </h3>
                                  <ul className='package-list'>
                                    <li>3 BITTERS</li>
                                    <li>Innercellular Cleanse Capsules</li>
                                    <li>Innercellular Cleanse Tincture</li>
                                    <li>Endocrino Balance Capsules</li>
                                    <li>Endocrino Balance Tincture</li>
                                    <li>Lymphatic Sweep Tonic Capsules</li>
                                    <li>GI Super Mover Capsules</li>
                                    <li>Parasites Elimination Tincture</li>
                                    <li>
                                      Liver &amp; Gallbladder Support Tincture
                                    </li>
                                  </ul>
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-3'>
                                  <h3 className='mini-heading mb-4'>
                                    WEEK 3-4 PROTOCOL
                                  </h3>
                                  <ul className='package-list'>
                                    <li>Innercellular Cleanse Capsules</li>
                                    <li>Innercellular Cleanse Tincture</li>
                                    <li>Endocrino Balance Capsules</li>
                                    <li>Lymphatic Sweep Tonic Capsules</li>
                                    <li>Lymphatic Sweep Tonic Tincture</li>
                                    <li>GI Super Mover Capsules</li>
                                    <li>Parasites Elimination Tincture</li>
                                    <li>
                                      Liver &amp; Gallbladder Support Tincture
                                    </li>
                                    <li>Super Food Plus Powder</li>
                                  </ul>
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-3'>
                                  <h3 className='mini-heading mb-4'>
                                    WEEK 5-6 PROTOCOL
                                  </h3>
                                  <ul className='package-list'>
                                    <li>Innercellular Cleanse Capsules</li>
                                    <li>Innercellular Cleanse Tincture</li>
                                    <li>Endocrino Balance Capsules</li>
                                    <li>Lymphatic Sweep Tonic Capsules</li>
                                    <li>Lymphatic Sweep Tonic Tincture</li>
                                    <li>GI Super Mover Capsules</li>
                                    <li>Parasites Elimination Tincture</li>
                                    <li>
                                      Brain, Nerve &amp; Adrenal Support
                                      Tincture
                                    </li>
                                    <li>Circulatory System High ^ Tincture</li>
                                  </ul>
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-3'>
                                  <h3 className='mini-heading mb-4'>
                                    WEEK 7-8 PROTOCOL
                                  </h3>
                                  <ul className='package-list'>
                                    <li>Innercellular Cleanse Capsules</li>
                                    <li>Innercellular Cleanse Tincture</li>
                                    <li>Lymphatic Sweep Tonic Capsules</li>
                                    <li>Lymphatic Sweep Tonic Tincture</li>
                                    <li>GI Super Mover Capsules</li>
                                    <li>
                                      Brain, Nerve &amp; Adrenal Support
                                      Capsules
                                    </li>
                                    <li>Circulatory System High ^ Tincture</li>
                                    <li>Blood Purifier Capsules</li>
                                    <li>CardioTonic Tincture</li>
                                  </ul>
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-3'>
                                  <h3 className='mini-heading mb-4'>
                                    WEEK 9-10 PROTOCOL
                                  </h3>
                                  <ul className='package-list'>
                                    <li>Innercellular Cleanse Capsules</li>
                                    <li>Innercellular Cleanse Tincture</li>
                                    <li>Endocrino Balance Capsules</li>
                                    <li>Lymphatic Sweep Tonic Capsules</li>
                                    <li>Lymphatic Sweep Tonic Tincture</li>
                                    <li>GI Super Mover Capsules</li>
                                    <li>
                                      Brain, Nerve &amp; Adrenal Support
                                      Tincture
                                    </li>
                                    <li>Circulatory System High ^ Tincture</li>
                                    <li>Blood Purifier Capsules</li>
                                    <li>CardioTonic Tincture</li>
                                  </ul>
                                </div>
                                <div className='col-12 mt-5 text-center'>
                                  <h3 className='y-tab-subheading  text-center'>
                                    THE GEO'GENETICS PROTOCOL WILL BE INCLUDED
                                    WITH THIS PACKAGE
                                  </h3>
                                  <p className='my-4'>
                                    Organically grown fresh fruits and vegetable
                                    juice are highly recommended while using any
                                    of Yah’ki Awakened Geo’Genetic Therapeutic
                                    Packages, Protocols, and Kits. While on
                                    protocol, we do not suggest you drink any
                                    water unless your making herbal teas. We
                                    encourage you to juice, juice, juice!! Every
                                    herbal compound should be taken with 8oz of
                                    fresh juice. Suggested juicers are on our
                                    source page under “EDUCATION TAB”.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id='yahki-tab-2'
                        className='yahki-tab-content p-md-5 px-3 py-5'
                      >
                        <h3 className='mini-heading mb-4'>
                          ADDITIONAL INFORMATION
                        </h3>
                        <div className='container-fluid'>
                          <div className='row justify-content-between'>
                            <div className='col-6 mb-4'>
                              <p className='font-weight-bold'>Weight</p>
                            </div>
                            <div className='col-6 mb-4'>
                              <p>224 oz</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id='yahki-tab-3'
                        className='yahki-tab-content p-md-5 px-3 py-5'
                      >
                        {/* reviews */}
                        <section className='reviews-detail mt-lg-5'>
                          <div className='row'>
                            <div className='col-lg-4 col-md-6'>
                              <h3>Customer Reviews</h3>
                              {/* <p class="star-numbers">4.5 Star</p> */}
                              <ul className='list-inline my-3'>
                                <li className='list-inline-item'>
                                  <i className='fas fa-star rate' />
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fas fa-star rate' />
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fas fa-star rate' />
                                </li>
                                <li className='list-inline-item'>
                                  <i className='fas fa-star rate' />
                                </li>
                                <li className='list-inline-item'>
                                  <i className='far fa-star rate' />
                                </li>
                              </ul>
                              <span className='rate-total'>
                                Base on 20 reviews
                              </span>
                            </div>
                            <div className='col-lg-6 col-md-10 mt-lg-0 mt-5'>
                              <div className='row justify-content-center align-items-center text-right'>
                                {/* 1  STAR*/}
                                <div className='col-md-4 mb-1'>
                                  <ul className='list-inline my-3'>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                  </ul>
                                </div>
                                <div className='col-md-6 col-6 mb-1'>
                                  <div className='progress'>
                                    <div
                                      className='progress-bar'
                                      role='progressbar'
                                      style={{ width: '85%' }}
                                      aria-valuenow={10}
                                      aria-valuemin={0}
                                      aria-valuemax={85}
                                    />
                                  </div>
                                </div>
                                <div className='col-md-1 col-3 mb-1'>
                                  <span className='star-percent'>85%</span>
                                </div>
                                <div className='col-md-1 col-3 mb-1'>
                                  <span className='star-number'>(17)</span>
                                </div>
                                {/* 2  STAR*/}
                                <div className='col-md-4 mb-1'>
                                  <ul className='list-inline my-3'>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='far fa-star rate fs-18' />
                                    </li>
                                  </ul>
                                </div>
                                <div className='col-md-6 col-6 mb-1'>
                                  <div className='progress'>
                                    <div
                                      className='progress-bar'
                                      role='progressbar'
                                      style={{ width: '20%' }}
                                      aria-valuenow={10}
                                      aria-valuemin={0}
                                      aria-valuemax={20}
                                    />
                                  </div>
                                </div>
                                <div className='col-md-1 col-3 mb-1'>
                                  <span className='star-percent'>10%</span>
                                </div>
                                <div className='col-md-1 col-3 mb-1'>
                                  <span className='star-number'>(2)</span>
                                </div>
                                {/* 3  STAR*/}
                                <div className='col-md-4 mb-1'>
                                  <ul className='list-inline my-3'>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='far fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='far fa-star rate fs-18' />
                                    </li>
                                  </ul>
                                </div>
                                <div className='col-md-6 col-6 mb-1'>
                                  <div className='progress'>
                                    <div
                                      className='progress-bar'
                                      role='progressbar'
                                      style={{ width: '10%' }}
                                      aria-valuenow={10}
                                      aria-valuemin={0}
                                      aria-valuemax={10}
                                    />
                                  </div>
                                </div>
                                <div className='col-md-1 col-3 mb-1'>
                                  <span className='star-percent'>5%</span>
                                </div>
                                <div className='col-md-1 col-3 mb-1'>
                                  <span className='star-number'>(1)</span>
                                </div>
                                {/* 4  STAR*/}
                                <div className='col-md-4 mb-1'>
                                  <ul className='list-inline my-3'>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='far fa-star rate fs-18' />
                                    </li>
                                  </ul>
                                </div>
                                <div className='col-md-6 col-6 mb-1'>
                                  <div className='progress'>
                                    <div
                                      className='progress-bar'
                                      role='progressbar'
                                      style={{ width: '0%' }}
                                      aria-valuenow={10}
                                      aria-valuemin={0}
                                      aria-valuemax={0}
                                    />
                                  </div>
                                </div>
                                <div className='col-md-1 col-3 mb-1'>
                                  <span className='star-percent'>0%</span>
                                </div>
                                <div className='col-md-1 col-3 mb-1'>
                                  <span className='star-number'>(0)</span>
                                </div>
                                {/* 5  STAR*/}
                                <div className='col-md-4 mb-1'>
                                  <ul className='list-inline my-3'>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='fas fa-star rate fs-18' />
                                    </li>
                                    <li className='list-inline-item mr-0'>
                                      <i className='far fa-star rate fs-18' />
                                    </li>
                                  </ul>
                                </div>
                                <div className='col-md-6 col-6 mb-1'>
                                  <div className='progress'>
                                    <div
                                      className='progress-bar'
                                      role='progressbar'
                                      style={{ width: '0%' }}
                                      aria-valuenow={10}
                                      aria-valuemin={0}
                                      aria-valuemax={0}
                                    />
                                  </div>
                                </div>
                                <div className='col-md-1 col-3 mb-1'>
                                  <span className='star-percent'>0%</span>
                                </div>
                                <div className='col-md-1 col-3 mb-1'>
                                  <span className='star-number'>(0)</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/* user review cards */}
                        <section className='user-reviews mt-5'>
                          <div className='row'>
                            <div className='col-12'>
                              <div className='review-card'>
                                <div className='row'>
                                  <div className='col-lg-1 col-5'>
                                    <img
                                      src='/images/commentor-avatar.png'
                                      alt=''
                                      className='img-fluid'
                                    />
                                  </div>
                                  <div className='col-lg-10 col-12'>
                                    <h4 className='commentor-name'>
                                      Ben Döring
                                    </h4>
                                    <p className='comment-date'>
                                      Oct 27 - 8 Minutes read
                                    </p>
                                    <p className='comment'>
                                      Lorem ipsum dolor sit amet, consetetur
                                      sadipscing elitr, sed diam nonumy eirmod
                                      tempor invidunt ut labore et dolore magna
                                      aliquyam erat, sed diam voluptua. At vero
                                      eos et accusam et justo duo dolores et ea
                                      rebum. Stet clita kasd gubergren, no sea
                                      takimata sanctus est Lorem ipsum dolor sit
                                      amet. Lorem ipsum dolor sit amet
                                    </p>
                                    <ul className='list-inline py-2'>
                                      <li className='list-inline-item mr-0'>
                                        <i className='fas fa-star rate' />
                                      </li>
                                      <li className='list-inline-item mr-0'>
                                        <i className='fas fa-star rate' />
                                      </li>
                                      <li className='list-inline-item mr-0'>
                                        <i className='fas fa-star rate' />
                                      </li>
                                      <li className='list-inline-item mr-0'>
                                        <i className='fas fa-star rate' />
                                      </li>
                                      <li className='list-inline-item mr-0'>
                                        <i className='far fa-star rate' />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className='review-card'>
                                <div className='row'>
                                  <div className='col-lg-1 col-5'>
                                    <img
                                      src='/images/commentor-avatar.png'
                                      alt=''
                                      className='img-fluid'
                                    />
                                  </div>
                                  <div className='col-lg-10 col-12'>
                                    <h4 className='commentor-name'>
                                      Ben Döring
                                    </h4>
                                    <p className='comment-date'>
                                      Oct 27 - 8 Minutes read
                                    </p>
                                    <p className='comment'>
                                      Lorem ipsum dolor sit amet, consetetur
                                      sadipscing elitr, sed diam nonumy eirmod
                                      tempor invidunt ut labore et dolore magna
                                      aliquyam erat, sed diam voluptua. At vero
                                      eos et accusam et justo duo dolores et ea
                                      rebum. Stet clita kasd gubergren, no sea
                                      takimata sanctus est Lorem ipsum dolor sit
                                      amet. Lorem ipsum dolor sit amet
                                    </p>
                                    <ul className='list-inline py-2'>
                                      <li className='list-inline-item mr-0'>
                                        <i className='fas fa-star rate' />
                                      </li>
                                      <li className='list-inline-item mr-0'>
                                        <i className='fas fa-star rate' />
                                      </li>
                                      <li className='list-inline-item mr-0'>
                                        <i className='fas fa-star rate' />
                                      </li>
                                      <li className='list-inline-item mr-0'>
                                        <i className='fas fa-star rate' />
                                      </li>
                                      <li className='list-inline-item mr-0'>
                                        <i className='far fa-star rate' />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className='review-card bg-white'>
                                <form id='addReview'>
                                  <div className='row'>
                                    <div className='col-lg-11 col-12 mx-auto'>
                                      <h3 className='mb-4 font-weight-bold add-review-heading'>
                                        Add your review
                                      </h3>
                                      <fieldset>
                                        <span className='star-cb-group'>
                                          <input
                                            type='radio'
                                            id='rating-5'
                                            name='rating'
                                            defaultValue={5}
                                          />
                                          <label htmlFor='rating-5' />
                                          <input
                                            type='radio'
                                            id='rating-4'
                                            name='rating'
                                            defaultValue={4}
                                          />
                                          <label htmlFor='rating-4' />
                                          <input
                                            type='radio'
                                            id='rating-3'
                                            name='rating'
                                            defaultValue={3}
                                          />
                                          <label htmlFor='rating-3' />
                                          <input
                                            type='radio'
                                            id='rating-2'
                                            name='rating'
                                            defaultValue={2}
                                          />
                                          <label htmlFor='rating-2' />
                                          <input
                                            type='radio'
                                            id='rating-1'
                                            name='rating'
                                            defaultValue={1}
                                            defaultChecked='checked'
                                          />
                                          <label htmlFor='rating-1' />
                                        </span>
                                      </fieldset>
                                      <label htmlFor='writeReview' />
                                      <textarea
                                        className='form-control'
                                        name='writeReview'
                                        id='writeReview'
                                        cols={30}
                                        rows={6}
                                        placeholder='Leave a review'
                                        defaultValue={''}
                                      />
                                      <button
                                        type='button'
                                        className='btn maroon-btn-solid px-5 py-2'
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* recommended products */}
            <section className='recomended-products mt-5 border-top border-grey pt-4'>
              <div className='row'>
                <div className='col-12 mb-4'>
                  <h3>Recommended Products</h3>
                </div>
                <div className='col-xl-3 col-md-6'>
                  {/* Product 1 */}
                  <div className='product-card'>
                    <button type='button' className='wishlist-btn'>
                      <i className='wishlist-icon far fa-heart maroon' />
                    </button>
                    <a href='product-view.php'>
                      {' '}
                      <img
                        src='/images/recommended-p1.png'
                        alt=''
                        className='img-fluid'
                      />{' '}
                    </a>
                    <h5 className='product-name'>
                      <a href='product-view.php' className='f-21'>
                        {' '}
                        Boston Cloths for Women
                      </a>
                    </h5>
                    <ul className='list-inline py-2'>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                    </ul>
                    <div className='row justify-content-between align-items-center mt-3'>
                      <div className='col-4'>
                        <p className='p-price'>Price</p>
                        <span className='red-color'>$999</span>
                      </div>
                      <div className='col-8 text-right'>
                        <a href='#' className='btn maroon-btn-solid '>
                          <img
                            src='/images/add-to-cart.png'
                            alt=''
                            className='img-fluid mr-2 pt-1'
                          />
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6'>
                  {/* Product 2 */}
                  <div className='product-card'>
                    <button type='button' className='wishlist-btn'>
                      <i className='wishlist-icon far fa-heart maroon' />
                    </button>
                    <a href='product-view.php'>
                      {' '}
                      <img
                        src='/images/recommended-p2.png'
                        alt=''
                        className='img-fluid'
                      />{' '}
                    </a>
                    <h5 className='product-name'>
                      <a href='product-view.php' className='f-21'>
                        {' '}
                        Boston Cloths for Women
                      </a>
                    </h5>
                    <ul className='list-inline py-2'>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                    </ul>
                    <div className='row justify-content-between align-items-center mt-3'>
                      <div className='col-4'>
                        <p className='p-price'>Price</p>
                        <span className='red-color'>$999</span>
                      </div>
                      <div className='col-8 text-right'>
                        <a href='#' className='btn maroon-btn-solid '>
                          <img
                            src='/images/add-to-cart.png'
                            alt=''
                            className='img-fluid mr-2 pt-1'
                          />
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6'>
                  {/* Product 3 */}
                  <div className='product-card'>
                    <button type='button' className='wishlist-btn'>
                      <i className='wishlist-icon far fa-heart maroon' />
                    </button>
                    <a href='product-view.php'>
                      {' '}
                      <img
                        src='/images/recommended-p3.png'
                        alt=''
                        className='img-fluid'
                      />{' '}
                    </a>
                    <h5 className='product-name'>
                      <a href='product-view.php' className='f-21'>
                        {' '}
                        Boston Cloths for Women
                      </a>
                    </h5>
                    <ul className='list-inline py-2'>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                    </ul>
                    <div className='row justify-content-between align-items-center mt-3'>
                      <div className='col-4'>
                        <p className='p-price'>Price</p>
                        <span className='red-color'>$999</span>
                      </div>
                      <div className='col-8 text-right'>
                        <a href='#' className='btn maroon-btn-solid '>
                          <img
                            src='/images/add-to-cart.png'
                            alt=''
                            className='img-fluid mr-2 pt-1'
                          />
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6'>
                  {/* Product 4 */}
                  <div className='product-card'>
                    <button type='button' className='wishlist-btn'>
                      <i className='wishlist-icon far fa-heart maroon' />
                    </button>
                    <a href='product-view.php'>
                      {' '}
                      <img
                        src='/images/recommended-p4.png'
                        alt=''
                        className='img-fluid'
                      />{' '}
                    </a>
                    <h5 className='product-name'>
                      <a href='product-view.php' className='f-21'>
                        {' '}
                        Boston Cloths for Women
                      </a>
                    </h5>
                    <ul className='list-inline py-2'>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                      <li className='list-inline-item'>
                        <i className='fas fa-star rate' />
                      </li>
                    </ul>
                    <div className='row justify-content-between align-items-center mt-3'>
                      <div className='col-4'>
                        <p className='p-price'>Price</p>
                        <span className='red-color'>$999</span>
                      </div>
                      <div className='col-8 text-right'>
                        <a href='#' className='btn maroon-btn-solid '>
                          <img
                            src='/images/add-to-cart.png'
                            alt=''
                            className='img-fluid mr-2 pt-1'
                          />
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className='row mt-5'>
              <div className='col-12 text-center'>
                <div className='about-bottom-banner'>
                  <h3>
                    All Herbs Are Organic Alkaline and Are Naturally Wildcrafted
                    from the Land of their Origin
                  </h3>
                  <p>
                    All herbs used in our products are 100% naturally organic
                    and are selectively picked and tested by a laboratory before
                    use. Each herbal compound is personally prepared with
                    gratification for the purpose of restoring health to our
                    clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PackageLevelTwo
