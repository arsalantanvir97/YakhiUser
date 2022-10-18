import Footer from '../components/Footer'
import Header from '../components/Header'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL, imageURL } from '../utils/api'
import { Link } from 'react-router-dom'
import HomeSlider from '../components/HomeSlider'
import ProductSlider from '../components/ProductSlider'
import ClientsSlider from '../components/ClientsSlider'
import { useSelector } from 'react-redux'
import { SliderSkeleton } from '../components/SliderSkeleton'
const Index = ({ history }) => {
  const [product, setproduct] = useState([])
  const [allofcategory, setallofcategory] = useState([])
  const [catid, setcatid] = useState('')
  const [prdouctbycategories, setprdouctbycategories] = useState([])
  const [bitternadelement, setbitternadelement] = useState([])

  const [loading, setloading] = useState(false)
  const herbalsupport = [
    {
      name: `The Muscular System 
  (Tissue Health)`,
    },
    {
      name: `The Integumentary System (Skin/ Hair/ Nails Health)
  `,
    },
    {
      name: `The Skeletal System 
  (Bone Health) 

  `,
    },
    {
      name: `The Nervous System
  (Brain, Nerves, Adrenal Health)
  `,
    },
    {
      name: `The Urinary System
  `,
    },
    {
      name: `The Digestive System
  (Gut Health)
  `,
    },
    {
      name: `The Endocrine System
  (The Glands Health)

  `,
    },
    {
      name: `The Respiratory System
  (Lungs, Bronchial Health)
  `,
    },
    {
      name: `The Lymphatic System Health 
  `,
    },
    {
      name: `The Cardiovascular System
  Heart/Blood/Arteries Health


  `,
    },
    {
      name: `Reproductive Systems Health 

  `,
    },

    {
      name: `Oral Health

  `,
    },
  ]
  const herbalproducts = [
    'Consultation',
    'Capsules',
    'Children Products',
    'Capsule-Less Powders',
    'Geo’Genetics',
    'Tinctures',
    'Teas',
    'Powders',
    'Sea Herbs',
    'Kits & Bundle',
    'Tonics',
    'Oils',
    'Hygiene',
    'Bulk Herbs',
    'Crystal, Stones',
    'Soups',
    'Salves',
  ]
  const detoxdesired = [
    'Moderate Detox',
    'Advanced Detox',
    'Intense Detox',
    'Revitalize/ReBuild Detox',
    'Preventive Maintenance Detox',
  ]
  useEffect(() => {
    gettingProducts()
  }, [])
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const gettingProducts = async () => {
    setloading(true)
    try {
      const res = await axios({
        url: `${baseURL}/product/getlimitedProducts`,
        method: 'GET',
      })
      setloading(false)
      const ress = await axios({
        url: `${baseURL}/product/bittersandElementProducts`,
        method: 'GET',
      })
      await setbitternadelement(ress?.data?.product)
      console.log('ressss', ress)
      setproduct(res?.data?.products)
    } catch (err) {
      console.log(err)
      setloading(false)
    }
    setloading(false)
  }
  useEffect(() => {
    gettingallCategoriesHandler()
  }, [])
  const gettingallCategoriesHandler = async () => {
    const res = await axios.get(`${baseURL}/category/allOfCategories`, {})
    console.log('res', res)
    setallofcategory(res?.data?.getAllCategories)
    localStorage.setItem(
      'categories',
      JSON.stringify(res?.data?.getAllCategories)
    )
  }

  // const gettingproductsbyCategoryidHandler = async (id) => {
  //   const res = await axios.get(
  //     `${baseURL}/product/getproductsbycategoryid/${id}`
  //   );
  //   console.log("res", res);
  //   setprdouctbycategories(res?.data?.products);
  // };
  // const productViewRedirectHandler = async (id) => {
  //   history?.push(`/ProductView/${id}`);
  // };
  const gettingproductsbyCategoryidHandler = async (id) => {
    const res = await axios.get(
      `${baseURL}/product/getproductsbycategoryid/${id}`
    )
    console.log('res', res)
    setprdouctbycategories(res?.data?.products)
  }
  const productViewRedirectHandler = async (id) => {
    history?.push(`/ProductView/${id}`)
  }
  return (
    <>
      <Header />

      <section className='main-banner'>
        <div className='container-fluid h-100'>
          <div className='row align-items-end justify-content-center h-100 pt-5 pb-4'>
            {/* <div className="col-lg-7 col-md-10 col-xl-5 text-center">
              <h1
                className="banner-h1 aos-init aos-animate"
                data-aos="zoom-in-left"
                data-aos-duration={1500}
              >
                the body was created <br />{" "}
                <span class="heading-break">to heal itself...</span>
              </h1>
              <h2
                className="banner-h2 aos-init aos-animate"
                data-aos="zoom-in-left"
                data-aos-duration={1500}
                data-aos-delay={300}
              >
                if provided with the right environmental conditions!
              </h2>
              <Link
                to="/Capsules"
                className="btn banner-btn aos-init aos-animate"
                data-aos="zoom-in-left"
                data-aos-duration={1500}
                data-aos-delay={400}
              >
                find out how
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      <div className='container'>
        <div className='row align-items-center justify-content-center my-md-5 pt-5 pb-3'>
          <div
            className='col-lg-6 col-md-8 mx-auto my-3 aos-init aos-animate'
            data-aos='fade-up'
            data-aos-duration={3000}
            style={{ width: 540, height: 405 }}
          >
            <iframe
              width='100%'
              height='100%'
              frameborder='0'
              allowfullscreen
              src='https://www.youtube.com/embed/tgbNymZ7vqY'
            ></iframe>

            {/* <img
              src="images/Yahki-awakened-welcome-image.jpg"
              alt=""
              className="img-fluid"
            /> */}
          </div>

          <div
            className='col-lg-6 col-md-8 mx-auto my-3 aos-init aos-animate'
            data-aos='fade-down'
            data-aos-duration={3000}
          >
            <p className='yahki-p pl-4'>
              THE BODY WAS CREATED TO HEAL ITSELF... IF PROVIDED WITH THE RIGHT
              ENVIRONMENTAL CONDITIONS! EXPERIENCE POWERFUL HERBAL THERAPY NOW
              WITH THE WORLD'S RENOWNED MASTER HEALER YAH'KI RAPHA EL AWAKEND!{' '}
            </p>
            <img
              src='images/yahki-awakened.png'
              alt=''
              className='img-fluid w-55 mt-4'
            />
          </div>
          <div className='filteration'>
            <div className='container py-4'>
              <div className='row my-5 align-items-start justify-content-between'>
                <div className='col-12'>
                  {' '}
                  <h6 className='text-uppercase'>Healing Assistance</h6>
                </div>
                <div className='col-md-4 mb-3'>
                  <div className='form-group my-3'>
                    <select
                      className='form-control'
                      id='helpWith'
                      // value={catid}
                      // onChange={(event) => {
                      //   setcatid(event.target.value);
                      //   gettingproductsbyCategoryidHandler(event.target.value);
                      // }}
                    >
                      <option>I Need Herbal Support For</option>
                      {herbalsupport?.length > 0 &&
                        herbalsupport?.map((herb) => (
                          <option value={herb?.name}>{herb?.name}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <div className='form-group my-3'>
                    <select
                      className='form-control'
                      id='formula'
                      onChange={(event) => {
                        // productViewRedirectHandler(event.target.value);
                      }}
                    >
                      <option>Herbal Products</option>
                      {herbalproducts?.length > 0 &&
                        herbalproducts?.map((herb) => (
                          <option value={herb}>{herb}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <div className='form-group my-3'>
                    <select
                      className='form-control'
                      id='helpWith'
                      value={catid}
                      onChange={(event) => {
                        setcatid(event.target.value)
                        // gettingproductsbyCategoryidHandler(event.target.value);
                      }}
                    >
                      <option>Detox Desired</option>
                      {detoxdesired?.length > 0 &&
                        detoxdesired?.map((det) => (
                          <option value={det}>{det}</option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className='col-12 my-2 text-center'>
                  <Link
                    to='#'
                    onClick={() => {
                      history?.push(
                        `/ProductViewByName/Turmeric Infusion Capsules`
                      )
                    }}
                    className='btn maroon-btn-solid d-inline-block py-2 px-5'
                  >
                    Find
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='featured'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-11 mx-auto'>
                <div className='row'>
                  <div className='col-md-12 text-center'>
                    <h4>Tranding Products</h4>
                    <h3>Featured Products</h3>
                  </div>
                </div>
                <div className='row mt-5'>
                  <div className='col-md-10 mx-auto text-center'>
                    <div id=''>
                      {/* <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-1.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-2.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-3.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-4.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-1.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-2.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-3.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-4.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div> */}
                      {loading ? (
                        <SliderSkeleton listsToRender={4} />
                      ) : (
                        <ProductSlider
                          history={history}
                          images={product}
                          userInfo={userInfo}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className='about-company '
          // style={{ backgroundColor: 'pink' }}
        >
          <div className='row justify-content-center align-items-center'>
            <div className='col-xl-6 col-10'>
              <img
                style={{ height: 430, width: 430 }}
                src='images/digestive_system.png'
                alt=''
                className='img-fluid'
              />
            </div>
            <div className='col-xl-6 col-12 mt-xl-0 '>
              <h3 className='main-heading' style={{ textAlign: 'center' }}>
                RESTORE YOUR DIGESTIVE SYSTEM!
              </h3>
              <p
                className='general-para dark-text mt-5'
                style={{ textAlign: 'center' }}
              >
                Improve Your Mood & Mobility By Efficiently Cleansing Your Gut
              </p>
            </div>
          </div>
        </div>
        <div
          className='about-company mt-5'
          // style={{ backgroundColor: 'pink' }}
        >
          <div className='row justify-content-center align-items-center'>
            <div className='col-xl-6 col-10'>
              <img
                style={{ height: 430, width: 430 }}
                src='images/Closed-circulatory-system.png'
                alt=''
                className='img-fluid'
              />
            </div>
            <div className='col-xl-6 col-12 mt-xl-0 '>
              <h3 className='main-heading' style={{ textAlign: 'center' }}>
                ABSORB NUTRIENTS TO REBUILD!
              </h3>
              <p
                className='general-para dark-text mt-5'
                style={{ textAlign: 'center' }}
              >
                Improve The Uptake Of The Minerals and Amino Acids Your Intaking
              </p>
            </div>
          </div>
        </div>
        <div
          className='about-company mt-5'
          // style={{ backgroundColor: 'pink' }}
        >
          <div className='row justify-content-center align-items-center'>
            <div className='col-xl-6 col-10'>
              <img
                src='images/maximizefood.png'
                style={{ height: 430, width: 430 }}
                alt=''
                className='img-fluid'
              />
            </div>
            <div className='col-xl-6 col-12 mt-xl-0 '>
              <h3 className='main-heading' style={{ textAlign: 'center' }}>
                MAXIMIZE ON THE FOODS YOUR DIGESTING!
              </h3>
              <p
                className='general-para dark-text mt-5'
                style={{ textAlign: 'center' }}
              >
                Improve Your Utilization Factory’s, Benefit from all that you
                Consume
              </p>
            </div>
          </div>
        </div>
        <div
          className='about-company mt-5'
          // style={{ backgroundColor: 'pink' }}
        >
          <div className='row justify-content-center align-items-center'>
            <div className='col-xl-6 col-10'>
              <img
                style={{ height: 430, width: 430 }}
                src='images/lymphatic-system2.png'
                alt=''
                className='img-fluid'
              />
            </div>
            <div className='col-xl-6 col-12 mt-xl-0 '>
              <h3 className='main-heading' style={{ textAlign: 'center' }}>
                CREATE A ELIMINATION PATHWAY
              </h3>
              <p
                className='general-para dark-text mt-5'
                style={{ textAlign: 'center' }}
              >
                One’s Body Must Eliminate What It Accumulates. Experience NOW!
              </p>
            </div>
          </div>
        </div>
        <div
          className='about-company mt-5'
          // style={{ backgroundColor: 'pink' }}
        >
          <div className='row justify-content-center align-items-center'>
            <div className='col-xl-6 col-10'>
              <img
                style={{ height: 430, width: 430 }}
                src='images/brain.png'
                alt=''
                className='img-fluid'
              />
            </div>
            <div className='col-xl-6 col-12 mt-xl-0 '>
              <h3 className='main-heading' style={{ textAlign: 'center' }}>
                IMPROVE YOUR CLARITY & FOCUS
              </h3>
              <p
                className='general-para dark-text mt-5'
                style={{ textAlign: 'center' }}
              >
                Reach a state of peace and happiness never experienced before
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 30 }}></div>
      <div
        className='yahki-features '
        style={{
          backgroundImage: 'none',
          backgroundColor: '#fff',
          color: '#000',
        }}
      >
        <div className='container mt-5 pt-3'>
          <div className='row text-center'>
            <div className='col-lg-4'>
              <i
                className='fas fa-light fa-headset fa-5x '
                style={{ fontSize: 85 }}
              />{' '}
              <h3 className='my-4'>CONSULT AN EXPERT</h3>
              <p>Members can chat one on one with a counselor or therapist</p>
              <Link
                style={{ color: '#000' }}
                to='#'
                className='linear-white-link my-5'
              >
                learn more
              </Link>
            </div>
            <div className='col-lg-4'>
              <i
                className='fas fa-solid fa-cart-plus fa-5x '
                style={{ fontSize: 85 }}
              />{' '}
              <h3 className='my-4'>SHOP ONLINE</h3>
              <p>
                Members can shop online 24/7 from our exclusive Members Only Top
                Quality Herbal Alkaline products.
              </p>
              <Link
                style={{ color: '#000' }}
                to='/Capsules'
                className='linear-white-link my-5'
              >
                learn more
              </Link>
            </div>
            <div className='col-lg-4'>
              <i
                className='fas fa-solid fa-tv fa-5x '
                style={{ fontSize: 85 }}
              />{' '}
              <h3 className='my-4'>MULTIMEDIA COURSES</h3>
              <p>
                Premiere Members can view our media gallery with exclusive
                access to all of our videos and courses.
              </p>
              <Link
                to='#'
                style={{ color: '#000' }}
                className='linear-white-link my-5'
              >
                learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='container my-md-5 my-3 py-3'>
        <div className='row my-4'>
          <div className='col-12 text-center'>
            <p className='yahki-blockquote' style={{ fontSize: 28 }}>
              “And by the river upon the bank thereof, on this side and on that
              side, shall grow all trees for meat, whose leaf shall not fade,
              neither shall the fruit thereof be consumed: it shall bring forth
              new fruit according to his months, because their waters they
              issued out of the sanctuary: and the fruit thereof shall be for
              meat, and the leaf thereof for medicine.”
            </p>
          </div>
        </div>
      </div>

      {/* <div className='must-watch-video'>
        <div className='container-fluid'>
          <div className='row g-0'>
            <div className='col-12 px-0'>
              <div className='video-container'>
                <video autoPlay muted loop>
                  <source src='images/must-watch.mp4' type='video/mp4' />
                </video>
                <div className='caption'>
                  <h4 className='mb-4'>MUST WATCH</h4>
                  <Link to='#' className='play-btn' id='headerVideoLink'>
                    <i className='far fa-play my-4' />
                  </Link>
                  <p className='mt-4'>
                    ALL DISEASE, INFECTIONS, AND VIRUSES CAN BE COMPLETELY
                    HEALED IF YOU LEARN THIS SIMPLE SYSTEM!!
                  </p>
                </div>
              </div>
              <div
                id='headerPopup'
                className='mfp-hide embed-responsive embed-responsive-21by9'
              >
                <iframe
                  className='embed-responsive-item'
                  width={854}
                  height={480}
                  src='https://www.youtube.com/embed/ebzbKa32kuk'
                  frameBorder={0}
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <section className="offer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row align-items-start justify-content-center text-center">
                <div className="col-xl-3 col-lg-5 col-md-10 mx-auto">
                  <div className="offer-box animate__animated animate__fadeInUp">
                    <img
                      src="images/leaf.png"
                      alt=""
                      className="img-fluid mb-3 curve-leaf "
                    />
                    <h4>Iv Elements</h4>
                    <div className="overlay-heading">
                      <h5 className="purple">
                        40
                        <span className="characters">
                          %<br /> Off
                        </span>
                      </h5>
                      <h5 className="maroon">
                        40
                        <span className="characters">
                          %<br /> Off
                        </span>
                      </h5>
                    </div>
                    <Link to="/Capsules" className="red-link">
                      Shop Now
                    </Link>
                  </div>
                  <img
                    src="images/elementsCircle.png"
                    alt=""
                    className="img-fluid elementsCircle"
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-10 mx-auto offset-lg-1">
                  <img
                    src="images/IVElements.png"
                    alt=""
                    className="img-fluid animate__animated animate__fadeInUp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className='yahki-features'>
        <div className='container py-3'>
          <div className='row text-center'>
            <div className='col-12 text-center'>
              <div className='fixed-banner'>
                <h4>
                  ALL HERBS ARE ORGANIC ALKALINE BOTANICALS AND ARE NATURALLY
                  WILDCRAFTED FROM THE LAND OF THEIR ORIGIN
                </h4>
                <p className='mt-5'>
                  All herbs used in our products are 100% naturally organic and
                  are selectively picked and tested by a laboratory before use.
                  Each herbal compound is personally prepared with gratification
                  for the purpose of restoring health to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Index
