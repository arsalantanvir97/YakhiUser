import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PrivateRouteSlider from '../components/PrivateRouteSlider'
import ToggleBack from '../components/ToggleBack'
import UnauthorizedAlert from '../components/UnauthorizedAlert'
import Toasty from '../utils/toast'

const Week78Protocol = ({ match, history }) => {
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
            <ToggleBack
              name={`WEEK 7-8 GEO’GENETICS PROTOCOL(FORMERLY AMINO ACID HERBAL PROTOCOL)

`}
            />
            {/* product grid and add to cart option */}
            <section className='product-grid'>
              <div className='row align-items-start justify-content-center mb-5 pb-5'>
                <div className='col-lg-6 col-md-8'>
                  <div className='p-view-main'>
                    <img
                      src='/images/product-main.png'
                      alt=''
                      className='img-fluid '
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
                    WEEK 7-8 GEO’GENETICS PROTOCOL(FORMERLY AMINO ACID HERBAL
                    PROTOCOL)
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
                  <h4 className='big-price'>$300.00</h4>
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
                                WEEK 7-8 GEO’GENETICS PROTOCOL(FORMERLY AMINO
                                ACID HERBAL PROTOCOL)
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
                            <div className='col-12 p-4 mb-3'>
                              <div className='bg-white row px-md-5 px-2 pb-5'>
                                {/* in this package details */}
                                <div className='col-12 mb-4 mt-5'>
                                  <h3 className='y-tab-heading text-left '>
                                    IN THIS PACKAGE
                                  </h3>
                                </div>
                                <div className='col-xl-4 col-lg-6 mb-3 '>
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
                                <div className='col-12'>
                                  <h3 className='y-tab-heading text-left '>
                                    PROTOCOL INSTRUCTIONS
                                  </h3>
                                </div>
                                <div className='col-12 mt-5 text-center'>
                                  <h3 className='y-tab-subheading  text-center'>
                                    GEO-GENETIC THERAPEUTIC DIET PROGRAM
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
                                <div className='col-12 mt-5'>
                                  <div
                                    className='accordion mb-4'
                                    id='regimeAccord'
                                  >
                                    <div className='card'>
                                      <div className='card-header' id='regime1'>
                                        <h2 className='mb-0'>
                                          <button
                                            className='btn btn-link btn-block text-left'
                                            type='button'
                                            data-toggle='collapse'
                                            data-target='#collapseOne'
                                            aria-expanded='true'
                                            aria-controls='collapseOne'
                                          >
                                            HERBAL REGIMEN 8:30AM
                                          </button>
                                        </h2>
                                      </div>
                                      <div
                                        id='collapseOne'
                                        className='collapse show'
                                        aria-labelledby='regime1'
                                        data-parent='#regimeAccord'
                                      >
                                        <div className='card-body'>
                                          <p className='m-2'>
                                            <small>
                                              <strong>
                                                Prepare fresh “Cellular
                                                Elimination” 8oz fruit juice
                                                (Juice Recipe Is Listed Below)
                                              </strong>{' '}
                                            </small>{' '}
                                          </p>
                                          <p className='m-2'>
                                            <strong>
                                              Tincture Instructions:
                                            </strong>{' '}
                                            Use tincture dropper to drop
                                            recommend dosage into “Yahki
                                            Awakened” shot glass (Refer To
                                            Dosage Chart Below).
                                          </p>
                                          <p className='m-2'>
                                            <strong>
                                              Capsule Instructions:
                                            </strong>{' '}
                                            Separate capsules and pour herbal
                                            compound into 8oz of fresh juice.
                                          </p>
                                          <p className='m-2'>
                                            <strong>
                                              Capsule-Less Powder Instructions:
                                            </strong>{' '}
                                            Take 1 Tsp of each power provided
                                            for an associated week. For example
                                            1 tsp of Innercellular Powder, 1 Tsp
                                            of Endocrino Powder, 1 Tsp of
                                            Lymphatic Sweep Powder, and 1 Tsp of
                                            GI Super Mover Powder (Week 1
                                            &amp;2)
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='card'>
                                      <div className='card-header' id='regime2'>
                                        <h2 className='mb-0'>
                                          <button
                                            className='btn btn-link btn-block text-left collapsed'
                                            type='button'
                                            data-toggle='collapse'
                                            data-target='#collapseTwo'
                                            aria-expanded='false'
                                            aria-controls='collapseTwo'
                                          >
                                            HERBAL REGIMEN 10:00AM
                                          </button>
                                        </h2>
                                      </div>
                                      <div
                                        id='collapseTwo'
                                        className='collapse'
                                        aria-labelledby='regime2'
                                        data-parent='#regimeAccord'
                                      >
                                        <div className='card-body'>
                                          <p className='m-2'>
                                            <strong>
                                              Potassium Monophosphate Tincture
                                              &amp; Fresh Cellular Elimination 8
                                              oz.
                                            </strong>{' '}
                                            Juice Use tincture dropper to drop
                                            the recommended amount in your Yahki
                                            Awakened Shot Glass{' '}
                                            <strong>
                                              <span className='italic'>
                                                (Refer to Capsule Tincture
                                                Powder Dosage Chart for proper
                                                dosage).
                                              </span>
                                            </strong>{' '}
                                            Drink your 8 oz of Cellular
                                            Elimination Juice after taking
                                            tincture.{' '}
                                            <strong>
                                              <span className='italic'>
                                                (Fresh Cellular Elimination 8
                                                oz. Juice Is Listed Below)
                                              </span>
                                            </strong>{' '}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='card'>
                                      <div className='card-header' id='regime3'>
                                        <h2 className='mb-0'>
                                          <button
                                            className='btn btn-link btn-block text-left collapsed'
                                            type='button'
                                            data-toggle='collapse'
                                            data-target='#collapseThree'
                                            aria-expanded='false'
                                            aria-controls='collapseThree'
                                          >
                                            HERBAL REGIMEN 11:00AM
                                          </button>
                                        </h2>
                                      </div>
                                      <div
                                        id='collapseThree'
                                        className='collapse'
                                        aria-labelledby='regime3'
                                        data-parent='#regimeAccord'
                                      >
                                        <div className='card-body'>
                                          <p className='m-2'>
                                            Use tincture dropper to drop the
                                            recommended dosage in your Yahki
                                            Weakened Shot glass.{' '}
                                            <strong>
                                              <span className='italic'>
                                                (Refer to Capsule Tincture
                                                Powder Dosage Chart for proper
                                                dosage).
                                              </span>
                                            </strong>{' '}
                                            Add 1 tsp of Liver and Gallbladder
                                            Powder to your fresh Cellular
                                            Elimination Juice.{' '}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='card'>
                                      <div className='card-header' id='regime4'>
                                        <h2 className='mb-0'>
                                          <button
                                            className='btn btn-link btn-block text-left collapsed'
                                            type='button'
                                            data-toggle='collapse'
                                            data-target='#collapseFour'
                                            aria-expanded='false'
                                            aria-controls='collapseFour'
                                          >
                                            BREAK-FAST 12:00PM
                                          </button>
                                        </h2>
                                      </div>
                                      <div
                                        id='collapseFour'
                                        className='collapse'
                                        aria-labelledby='regime4'
                                        data-parent='#regimeAccord'
                                      >
                                        <div className='card-body'>
                                          <p className='m-2'>
                                            <strong>
                                              This will consist of{' '}
                                            </strong>{' '}
                                          </p>
                                          <p className='m-2'>
                                            GEO’GENETIC APPLE SAUCE BOWL: (See
                                            full recipe below)
                                          </p>
                                          <p className='m-2'>
                                            GEO’GENETIC SEA MOSS SMOOTHIE: (See
                                            full recipe below)
                                          </p>
                                          <p className='m-2 text-left '>
                                            <small>
                                              <strong>
                                                <a
                                                  className='text-left d-block mx-0 px-0'
                                                  href='https://vimeo.com/user100751305/review/497539090/2411e0fa3d:'
                                                >
                                                  GEO’GENETIC APPLE SAUCE BOWL
                                                  VIDEO
                                                </a>
                                              </strong>
                                            </small>
                                          </p>
                                          <p className='m-2'>
                                            2 RAW FRESH FRUITS OF YOUR CHOICE:
                                            NO MELONS ( See “Food Combination
                                            Chart for approved fruit
                                            combination)
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='card'>
                                      <div className='card-header' id='regime5'>
                                        <h2 className='mb-0'>
                                          <button
                                            className='btn btn-link btn-block text-left'
                                            type='button'
                                            data-toggle='collapse'
                                            data-target='#collapseFive'
                                            aria-expanded='true'
                                            aria-controls='collapseFive'
                                          >
                                            HERBAL REGIMEN 2:00PM
                                          </button>
                                        </h2>
                                      </div>
                                      <div
                                        id='collapseFive'
                                        className='collapse'
                                        aria-labelledby='regime5'
                                        data-parent='#regimeAccord'
                                      >
                                        <div className='card-body'>
                                          <p className='m-2'>
                                            <small>
                                              <strong>
                                                Prepare fresh “Cellular
                                                Elimination” 8oz fruit juice{' '}
                                                <span className='italic'>
                                                  (Juice Recipe Is Listed Below)
                                                </span>
                                              </strong>{' '}
                                            </small>{' '}
                                          </p>
                                          <p className='m-2'>
                                            <strong>
                                              Tincture Instructions:
                                            </strong>{' '}
                                            Use tincture dropper to drop
                                            recommend dosage into “Yahki
                                            Awakened” shot glass (Refer To
                                            Dosage Chart Below).
                                          </p>
                                          <p className='m-2'>
                                            <strong>
                                              Capsule Instructions:
                                            </strong>{' '}
                                            Separate capsules and pour herbal
                                            compound into 8oz of fresh juice.
                                          </p>
                                          <p className='m-2'>
                                            <strong>
                                              Capsule-Less Powder Instructions:
                                            </strong>{' '}
                                            Take 1 Tsp of each power provided
                                            for an associated week. For example
                                            1 tsp of Innercellular Powder, 1 Tsp
                                            of Endocrino Powder, 1 Tsp of
                                            Lymphatic Sweep Powder, and 1 Tsp of
                                            GI Super Mover Powder (Week 1
                                            &amp;2)
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='card'>
                                      <div className='card-header' id='regime6'>
                                        <h2 className='mb-0'>
                                          <button
                                            className='btn btn-link btn-block text-left'
                                            type='button'
                                            data-toggle='collapse'
                                            data-target='#collapseSix'
                                            aria-expanded='true'
                                            aria-controls='collapseSix'
                                          >
                                            HERBAL REGIMEN 2:00PM
                                          </button>
                                        </h2>
                                      </div>
                                      <div
                                        id='collapseSix'
                                        className='collapse'
                                        aria-labelledby='regime6'
                                        data-parent='#regimeAccord'
                                      >
                                        <div className='card-body'>
                                          <p className='m-2'>
                                            Prepare a hot alkaline meal with no
                                            oil for dinner along with 3 bitters
                                            30 mins after dinner has been
                                            finished. (Refer to recipe list
                                            below for meal suggestions).
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='card'>
                                      <div className='card-header' id='regime7'>
                                        <h2 className='mb-0'>
                                          <button
                                            className='btn btn-link btn-block text-left'
                                            type='button'
                                            data-toggle='collapse'
                                            data-target='#collapseSeven'
                                            aria-expanded='true'
                                            aria-controls='collapseSeven'
                                          >
                                            HOT DINNER 3:30PM
                                          </button>
                                        </h2>
                                      </div>
                                      <div
                                        id='collapseSeven'
                                        className='collapse'
                                        aria-labelledby='regime7'
                                        data-parent='#regimeAccord'
                                      >
                                        <div className='card-body'>
                                          <p className='m-2'>
                                            Prepare a hot alkaline meal with no
                                            oil for dinner along with 3 bitters
                                            30 mins after dinner has been
                                            finished. (Refer to recipe list
                                            below for meal suggestions).
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='card'>
                                      <div className='card-header' id='regime8'>
                                        <h2 className='mb-0'>
                                          <button
                                            className='btn btn-link btn-block text-left'
                                            type='button'
                                            data-toggle='collapse'
                                            data-target='#collapseEight'
                                            aria-expanded='true'
                                            aria-controls='collapseEight'
                                          >
                                            HERBAL REGIMEN 5:00PM
                                          </button>
                                        </h2>
                                      </div>
                                      <div
                                        id='collapseEight'
                                        className='collapse'
                                        aria-labelledby='regime8'
                                        data-parent='#regimeAccord'
                                      >
                                        <div className='card-body'>
                                          <p className='m-2'>
                                            Liver &amp; Gallbladder Powder and
                                            Tincture w/Fresh Rebuild &amp;
                                            Revitalizer 8oz vegetable juice{' '}
                                          </p>
                                          <p className='m-2'>
                                            Use tincture dropper to drop the
                                            recommended amount in your Yahki
                                            Awakened Shot Glass. Use provided
                                            Tspn to mix recommend powder into
                                            8oz juice{' '}
                                            <strong>
                                              <span className='italic'>
                                                (Refer to Capsule Tincture
                                                Powder Dosage Chart for proper
                                                dosage).{' '}
                                              </span>
                                            </strong>
                                            Drink your “Rebuild &amp;
                                            Revitalizer ” 8oz vegetable juice
                                            after taking tincture. (“Rebuild
                                            &amp; Revitalizer ” Juice Recipe Is
                                            Listed Below) Note: If you cannot
                                            make vegetable juice fresh because
                                            of work and other inconveniences
                                            please stick with fruit juices. All
                                            Vegetable Juice Must Be Consumed
                                            Immediately After Juicing. However
                                            Fresh Fruit Juice Can Be Stored In
                                            Glass Jar and{' '}
                                            <strong>
                                              {' '}
                                              Refrigerated For Later Use.
                                            </strong>{' '}
                                            (“Cellular Elimination ” 8oz
                                            vegetable juice Recipe Is Listed
                                            Below)
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='card'>
                                      <div className='card-header' id='regime9'>
                                        <h2 className='mb-0'>
                                          <button
                                            className='btn btn-link btn-block text-left'
                                            type='button'
                                            data-toggle='collapse'
                                            data-target='#collapseNine'
                                            aria-expanded='true'
                                            aria-controls='collapseNine'
                                          >
                                            JUICE REGIMEN 6:00PM
                                          </button>
                                        </h2>
                                      </div>
                                      <div
                                        id='collapseNine'
                                        className='collapse'
                                        aria-labelledby='regime9'
                                        data-parent='#regimeAccord'
                                      >
                                        <div className='card-body'>
                                          <p className='m-2'>
                                            Prepare fresh “Rebuild &amp;
                                            Revitalizer ” 8oz vegetable juice{' '}
                                          </p>
                                          <p className='m-2'>
                                            <strong>
                                              <span className='italic'>
                                                {' '}
                                                (“Rebuild &amp; Revitalizer ”
                                                Juice Recipe Is Listed Below)
                                              </span>
                                            </strong>
                                          </p>
                                          <p className='m-2'>
                                            Note: If you cannot make vegetable
                                            juice fresh because of work and
                                            other inconveniences please stick
                                            with fruit juices. All Vegetable
                                            Juice Must Be Consumed Immediately
                                            After Juicing. However Fresh Fruit
                                            Juice Can Be Stored In Glass Jar and{' '}
                                            <strong>
                                              Refrigerated For Later Use.{' '}
                                            </strong>{' '}
                                            (“Cellular Elimination ” 8oz
                                            vegetable juice Recipe Is Listed
                                            Below)
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='card'>
                                      <div
                                        className='card-header'
                                        id='regime10'
                                      >
                                        <h2 className='mb-0'>
                                          <button
                                            className='btn btn-link btn-block text-left'
                                            type='button'
                                            data-toggle='collapse'
                                            data-target='#collapseTen'
                                            aria-expanded='true'
                                            aria-controls='collapseTen'
                                          >
                                            HERBAL REGIMEN 8:30PM
                                          </button>
                                        </h2>
                                      </div>
                                      <div
                                        id='collapseTen'
                                        className='collapse'
                                        aria-labelledby='regime10'
                                        data-parent='#regimeAccord'
                                      >
                                        <div className='card-body'>
                                          <p className='m-2'>
                                            <small>
                                              <strong>
                                                Prepare fresh “Cellular
                                                Elimination” 8oz fruit juice
                                                (Juice Recipe Is Listed Below)
                                              </strong>{' '}
                                            </small>{' '}
                                          </p>
                                          <p className='m-2'>
                                            <strong>
                                              Tincture Instructions:
                                            </strong>{' '}
                                            Use tincture dropper to drop
                                            recommend dosage into “Yahki
                                            Awakened” shot glass (Refer To
                                            Dosage Chart Below).
                                          </p>
                                          <p className='m-2'>
                                            <strong>
                                              Capsule Instructions:
                                            </strong>{' '}
                                            Separate capsules and pour herbal
                                            compound into 8oz of fresh juice.
                                          </p>
                                          <p className='m-2'>
                                            <strong>
                                              Capsule-Less Powder Instructions:
                                            </strong>{' '}
                                            Take 1 Tsp of each power provided
                                            for an associated week. For example
                                            1 tsp of Innercellular Powder, 1 Tsp
                                            of Endocrino Powder, 1 Tsp of
                                            Lymphatic Sweep Powder, and 1 Tsp of
                                            GI Super Mover Powder (Week 1
                                            &amp;2)
                                          </p>
                                          <p className='m-2'>
                                            Note: If you cannot make vegetable
                                            juice fresh because of work and
                                            other inconveniences please stick
                                            with fruit juices. All Vegetable
                                            Juice Must Be Consumed Immediately
                                            After Juicing. However Fresh Fruit
                                            Juice Can Be Stored In Glass Jar and{' '}
                                            <strong>
                                              Refrigerated For Later Use.{' '}
                                            </strong>{' '}
                                            (“Cellular Elimination ” 8oz
                                            vegetable juice Recipe Is Listed
                                            Below)
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='card'>
                                      <div
                                        className='card-header'
                                        id='regime11'
                                      >
                                        <h2 className='mb-0'>
                                          <button
                                            className='btn btn-link btn-block text-left'
                                            type='button'
                                            data-toggle='collapse'
                                            data-target='#collapseEleven'
                                            aria-expanded='true'
                                            aria-controls='collapseEleven'
                                          >
                                            HERBAL REGIMEN 9:30PM
                                          </button>
                                        </h2>
                                      </div>
                                      <div
                                        id='collapseEleven'
                                        className='collapse'
                                        aria-labelledby='regime11'
                                        data-parent='#regimeAccord'
                                      >
                                        <div className='card-body'>
                                          <p className='m-2'>
                                            Potassium Monophosphate Tincture
                                            &amp; fresh “Rebuild &amp;
                                            Revitalizer ” 8oz vegetable juice{' '}
                                          </p>
                                          <p className='m-2'>
                                            Use tincture dropper to drop the
                                            recommended amount in your Yahki
                                            Awakened Shot Glass{' '}
                                            <strong>
                                              (Refer to Capsule Tincture Powder
                                              Dosage Chart for proper dosage).
                                            </strong>{' '}
                                            Drink your “Rebuild &amp;
                                            Revitalizer ” 8oz vegetable juice
                                            after taking tincture.{' '}
                                            <strong>
                                              (“Rebuild &amp; Revitalizer ”
                                              Juice Recipe Is Listed Below)
                                            </strong>
                                          </p>
                                          <p className='m-2'>
                                            Note: If you cannot make vegetable
                                            juice fresh because of work and
                                            other inconveniences please stick
                                            with fruit juices. All Vegetable
                                            Juice Must Be Consumed Immediately
                                            After Juicing. However Fresh Fruit
                                            Juice Can Be Stored In Glass Jar and{' '}
                                            <strong>
                                              Refrigerated For Later Use.{' '}
                                            </strong>{' '}
                                            (“Cellular Elimination ” 8oz
                                            vegetable juice Recipe Is Listed
                                            Below)
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='col-md-6 mx-auto'>
                                  <a
                                    href='/images/dummy.pdf'
                                    download='newfilename'
                                    className='btn maroon-btn-solid px-md-5 px-2 py-2 d-block mb-2 mt-5 mx-auto w-100 text-white'
                                  >
                                    <i className='fas fa-file-download mr-3' />
                                    Download Amino Acid Therapeutic Diet Program
                                  </a>
                                  <a
                                    href='/images/dummy.pdf'
                                    download='newfilename'
                                    className='btn maroon-btn-solid px-md-5 px-2 py-2 d-block mb-4 mt-3 mx-auto w-100 text-white'
                                  >
                                    Download Protocol Sheet
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className='col-12 mb-3'>
                              <h3 className='y-tab-subheading mb-3'>
                                YAHKI AWAKENED HERBAL DOSAGE CHART
                              </h3>
                              <p className='font-weight-bold text-center mb-4'>
                                YAH’KI’s Geo’Genetics Herbal protocol was
                                created to answer simple questions that one
                                might have after receiving their herbal package.
                                More than likely the answers to your questions
                                are presented below. Every herbal package is
                                different and all protocols will be listed even
                                if you don’t have one of the herbal items. Added
                                On herbal items can also be added to the
                                protocol.
                              </p>
                              <p className='italic mb-4'>
                                For Example: If you purchased a tea with the
                                protocol/package the tea can be put into the
                                herbal regimen just follow the time and
                                instructions for teas listed below.
                              </p>
                              <p className='text-center mb-5'>
                                <small className='font-weight-bold'>
                                  Most of your protocols and packages come in
                                  one big box. Sort out all of your weekly
                                  protocols by matching them from week 1-2
                                  through week 13-14 listed above titled <br />
                                  “In This Package”
                                </small>
                              </p>
                              <h4 className='mini-heading maroon mb-3'>
                                PROTOCOL FOR TONICS (6AM)
                              </h4>
                              <h4 className='font-weight-bold'>
                                It’s best to take Tonics early in the morning.
                              </h4>
                              <h4 className='font-weight-bold'>
                                Suggested Time:
                              </h4>
                              <ul className='my-4'>
                                <li>
                                  <p>
                                    {' '}
                                    <i className='far fa-clock mr-1' /> 6:00 am
                                    – <u>Bitter Liquid Mineral Balance Tonic</u>{' '}
                                    : Take 4 oz on an empty stomach
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    {' '}
                                    <i className='far fa-clock mr-1' /> 6:00 am
                                    – <u>Lymphatic System Sweep Tonic:</u> Take
                                    2.5 oz shots on an empty stomach; Repeat at
                                    6:00pm
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    {' '}
                                    <i className='far fa-clock mr-1' /> 6:00 am
                                    – <u> Digestive Restoration Tonic:</u> Take
                                    2.5 oz shots on an empty stomach; Repeat at
                                    6:00pm
                                  </p>
                                </li>
                              </ul>
                              <h4 className='mini-heading maroon mb-3'>
                                PROTOCOL FOR CAPSULES (8:30AM)
                              </h4>
                              <p className='mb-4 fs-13'>
                                Take your capsules according to the instructions
                                written on the label of the bottles. If you have
                                more than one bottle take them all together
                                according to their daily dosages. We highly
                                recommend and encourage you to break capsules
                                apart and add herbal compounds to your fresh
                                Juice.
                              </p>
                              <p className='mb-4 px-5 fs-13'>
                                <span className='font-weight-bold'>
                                  {' '}
                                  For Example:
                                </span>{' '}
                                If you have Innercellular Cleanse capsules and
                                Lymphatic Sweep Capsules, the directions on both
                                labels says{' '}
                                <span className='font-weight-bold text-uppercase'>
                                  TAKE 3 CAPSULES TWICE DAILY ON A EMPTY
                                  STOMACH.
                                </span>{' '}
                                This means take 3 capsules of both cleanses at
                                the same time in the morning 8:30 AM and at
                                night 8:30 PM. Be sure to take them with freshly
                                prepared Juice.
                              </p>
                              <p className='text-center mb-5 fs-13'>
                                <small>
                                  If Capsule Dosage Is To Strong Be Sure To Let
                                  Us Know . Also Cut Your Dosage In Half Until
                                  We Come To A Solution To Move Forward.
                                </small>
                              </p>
                              <h4 className='mini-heading maroon mb-3'>
                                PROTOCOL FOR 3 BITTERS (4:00PM)
                              </h4>
                              <p className='mb-4 fs-13'>
                                Bitter 1, Bitter 2, and Bitter 3, will be made
                                and prepared like YAH’Ki Teas. Drink all the
                                bitters back to back after evening meal.
                              </p>
                              <p className='text-center fs-13'>
                                <small>
                                  If Dosage Is To Strong Be Sure To Let Us Know
                                  . Also Cut Your Dosage In Half Until We Come
                                  To A Solution To Move Forward.
                                </small>
                              </p>
                            </div>
                            <div className='col-12 my-4'>
                              <iframe
                                width='100%'
                                height={641}
                                src='https://www.youtube.com/embed/mGHMrvWcJ5g'
                                title='YouTube video player'
                                frameBorder={0}
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                              />
                              <h4 className='mini-heading maroon my-4'>
                                PROTOCOL FOR HERBAL CAPSULE-LESS "POWDERS"
                              </h4>
                              <p className='my-3 fs-13'>
                                All Powders can be taken any time of day as long
                                as they are taken 4 hours apart from each other
                              </p>
                              <p className='my-3 fs-13'>
                                Instructions: Capsule-Less Powder Instructions:
                                Take 1 Tsp of powder and add it to a 8oz of
                                fresh juice.
                              </p>
                              <p className='my-3 fs-13'>
                                <small>
                                  For example take 1Tsp of{' '}
                                  <span className='font-weight-bold italic'>
                                    Inner-Cellular Cleanse Capsule-Less Powder
                                  </span>{' '}
                                  and add it to a 8oz of fresh juice.
                                </small>
                              </p>
                              <p className='my-3 fs-13'>
                                <small>
                                  <span className='font-weight-bold italic'>
                                    Super Food Plus Powder{' '}
                                  </span>{' '}
                                  Add 1 Tbsp to a 8oz of fresh juice. mix well
                                  and drink{' '}
                                </small>
                              </p>
                              <h4 className='mini-heading maroon mt-5 mb-3'>
                                PROTOCOL FOR HERBAL TEAS (6:00AM, 1:00PM, &amp;
                                7PM)
                              </h4>
                              <p className='my-3 fs-13'>
                                Make and drink your herbal teas. If you have
                                multiple teas, rotate them daily until gone.
                              </p>
                              <p className='mb-3 fs-13'>
                                <strong>For example:</strong> If you have Lemon
                                Balm Tea, Cellular Regeneration Tea, and
                                Revitalizer Tea, on Sunday at 6AM, 1PM, &amp;
                                7PM, take Lemon Balm Tea; on Monday at 6AM, 1PM,
                                &amp; 7PM, take Cellular Regeneration Tea; on
                                Tuesday at 6AM, 1PM, &amp; 7PM take Revitalizer
                                Tea.
                              </p>
                              <small>
                                Repeat every every other day, rotating each tea.
                                THIS ALSO INCLUDES THE IV ELEMENTS INFUSIONS
                              </small>
                              <h6 className='mt-4'>Instructions</h6>
                              <p className='mt-4 fs-13'>
                                Add 16 ounces of distilled water into a glass,
                                clay, or copper pot. Add ¼ a cup of loose herbs
                                to the water. Soak herbs in pot for 4-6 hours
                                before applying any heat to them. After soaking,
                                boil on high for 3 minutes then simmer on low
                                for 25 minutes. Strain and let cool, what should
                                be remaining is 8-12 ounces of tea. Place
                                strained herbs in the refrigerator in a sealed
                                jar to preserve for a second use.
                              </p>
                            </div>
                            <div className='col-12 my-3'>
                              <div className='row align-items-start justify-content-between'>
                                <div className='col-lg-6 mb-4'>
                                  <h4 className='mini-heading maroon mb-3'>
                                    PROTOCOL FOR TINCTURES (3 TIMES DAILY)
                                  </h4>
                                  <p className='fs-13'>
                                    <strong> Recommended Dosage: </strong>
                                    Adults, shake well and take two dropperfuls,
                                    three times daily, 30 minutes prior to
                                    eating a meal. Double check your weight and
                                    compare it to the dosing recommendation
                                    listed below, especially for children. For
                                    children, add to a little spring water or
                                    fresh juice.
                                  </p>
                                  <h4 className='mini-heading lime mb-3 mt-5'>
                                    TINCTURE DOSAGES SUGGESTED BY WEIGHT
                                  </h4>
                                  <div className='row my-4 justify-content-between align-items-center'>
                                    <div className='col-6'>
                                      <p className='mb-3 font-weight-bold'>
                                        25 - 50 lbs
                                      </p>
                                      <p className='mb-3 font-weight-bold'>
                                        50 - 75 lbs
                                      </p>
                                      <p className='mb-3 font-weight-bold'>
                                        75 - 150 lbs
                                      </p>
                                    </div>
                                    <div className='col-6 text-end'>
                                      <p className='mb-3'>2/3 Dropperfuls</p>
                                      <p className='mb-3'>1 Dropperful</p>
                                      <p className='mb-3'>2 Dropperfuls</p>
                                    </div>
                                  </div>
                                  <p className='fs-13'>
                                    <strong>Oregano Oil Instructions:</strong>
                                    Take 3 – 6 drops under the tongue twice
                                    daily. Clients Treating Herpes should apply
                                    3 – 6 drops of oregano oil on a cotton ball.
                                    Rub the cotton ball on the bottom of the
                                    spinal column up to the middle of your back
                                    every morning and evening.
                                  </p>
                                </div>
                                <div className='col-lg-6 mb-4'>
                                  <img
                                    src='/images/tincture-measurements.jpg'
                                    alt=''
                                    className='img-fluid my-4 w-100'
                                  />
                                  <img
                                    src='/images/capsule-dosage.jpg'
                                    alt=''
                                    className='img-fluid'
                                  />
                                </div>
                              </div>
                            </div>
                            <div className='col-10 my-3'>
                              <h4 className='mini-heading maroon'>
                                PROTOCOL FOR SEA MOSS
                              </h4>
                              <h4 className='mini-heading mt-3 mb-3'>
                                RAW SEA MOSS SHOULD BE TAKEN ALL THROUGHOUT THE
                                DAY!!
                              </h4>
                              <ul className='default-list'>
                                <li className='mb-3'>
                                  Avoid all chemicals (unnatural water,
                                  toothpaste, deodorants, laundry detergent,
                                  perfumes, lotions, makeups, unnatural soaps,
                                  shampoos, etc. and such things alike)
                                </li>
                                <li className='mb-3'>
                                  Limit bathing and shower time to avoid
                                  fluoride. If possible, purchase a shower
                                  filter.
                                </li>
                                <li className='mb-3'>
                                  Sauna is highly recommended at least 30
                                  minutes daily (avoid inferred saunas; they’re
                                  very acidic)
                                </li>
                                <li className='mb-3'>
                                  Light workouts are highly recommended at least
                                  30 minutes daily (only lift your own body
                                  weight)
                                </li>
                                <li className='mb-3'>
                                  Skin brushing is highly recommended three
                                  times weekly
                                </li>
                              </ul>
                            </div>
                            <div className='col-12'>
                              <iframe
                                width='100%'
                                height={641}
                                src='https://www.youtube.com/embed/mGHMrvWcJ5g'
                                title='YouTube video player'
                                frameBorder={0}
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id='yahki-tab-2'
                        className='yahki-tab-content p-sm-5 px-0 py-5'
                      >
                        <h3 className='mini-heading mb-4'>
                          ADDITIONAL INFORMATION
                        </h3>
                        <div className='container-fluid'>
                          <div className='row justify-content-between'>
                            <div className='col-5 mb-2'>
                              <p className='font-weight-bold mb-4'>Weight</p>
                              <p className='font-weight-bold mb-4'>
                                Dimensions
                              </p>
                            </div>
                            <div className='col-7 mb-2'>
                              <p className='mb-4'>315.2 oz</p>
                              <p className='mb-4'>12.25 × 12.25 × 6 in</p>
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

export default Week78Protocol
