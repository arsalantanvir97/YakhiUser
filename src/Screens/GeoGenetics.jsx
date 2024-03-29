import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { baseURL, imageURL } from '../utils/api'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import InnerPageBanner from './InnerPageBanner'
import ProductSlider from '../components/ProductSlider'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ListSkeleton } from '../components/MultipleSkeleton'
import { SliderSkeleton } from '../components/SliderSkeleton'
import { Parser } from 'html-to-react'
import MainHeader from '../components/MainHeader'
import UnauthorizedAlert from '../components/UnauthorizedAlert'
import { CreateWishList } from '../hooks/WishList'
import AllHerbs from '../components/AllHerbs'
import MediaIcons from '../components/MediaIcons'
import ImageLazyLoad from '../components/ImageLazyLoad'

const htmlToReactParser = new Parser()
let links = [
  'DeVaxxedHerbalTherapy',
  'PackageLevelOne',
  'PackageLevelTwo',
  'PackageLevelThree',
  ,
]
let links2 = [
  'Week12Protocol',
  'DeVaxxedHerbalTherapy',
  'Week1112Protocol',
  'Week1314Protocol',
  'Week34Protocol',
  'Week56Protocol',
  'Week78Protocol',
  'Week910Protocol',
]
const GeoGenetics = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [geogeneticstext, setgeogeneticstext] = useState(() => {
    ''
  })

  const [geoGeneticspackages, setgeoGeneticspackages] = useState([])
  const [geoGeneticsprotocols, setgeoGeneticsprotocols] = useState([])
  const [userwishlist, setuserwishlist] = useState([])

  const [loading, setloading] = useState(false)

  useEffect(() => {
    getDetoxProducts()
  }, [])

  const getDetoxProducts = async () => {
    setuserwishlist(
      localStorage.getItem('wishlist') &&
        JSON.parse(localStorage.getItem('wishlist'))
    )
    setloading(true)
    try {
      const { data } = await axios.get(`${baseURL}/product/geoGeneticsProducts`)
      setloading(false)

      console.log('data', data)
      setgeoGeneticspackages(data?.geoGeneticspackages)
      setgeoGeneticsprotocols(data?.geoGeneticsprotocols)
      setgeogeneticstext(data?.geogeneticstext?.text)
    } catch (error) {
      console.log('error', error)
    }
    setloading(false)
  }
  useEffect(() => {
    console.log('geoGeneticsprotocols', geoGeneticsprotocols)
  }, [geoGeneticsprotocols])

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
              ? '640px'
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
      <div className='bread-crumbs'>
        <div className='container-fluid'>
          <div className='row mt-3 mb-5 pb-5'>
            <div className='col-11 mx-auto'>
              <div className='row'>
                <div className='col-md-6'>
                  <ul className='crumbs'>
                    <li>
                      <Link to='/'>Homepage</Link>
                    </li>
                    <li>GEO’GENETIC HERBAL THERAPY</li>
                  </ul>
                  <div className='userbackbtn'>
                    <Link to='/'>
                      <i class='fas fa-long-arrow-alt-left'></i>
                    </Link>
                  </div>
                </div>
                <div className='col-md-6 text-right'>
                  <p className='mt-5'>
                    TO HAVE YOUR QUESTIONS ON TUESDAYS LIVE, SEND THEM TO
                    QUESTIONS@YAHKIAWAKENED.COM
                  </p>
                </div>
              </div>
              <div className='row mt-4'>
                <MediaIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div class='row'>
          <div class='col-12'>
            <h3 style={{ textAlign: 'center' }} class='protocol-heading maroon'>
              GEO'GENETICS HERBAL THERAPY
            </h3>
          </div>
        </div>

        <div className='row  mt-5 intro-geo'>
          {htmlToReactParser.parse(geogeneticstext)}
        </div>
      </div>
      <section className='yahki-protocols py-5'>
        <div className='container'>
          <div class='row mt-3'>
            <div class='col-12'>
              <h3 class='protocol-heading maroon'>GEO'GENETICS PACKAGES</h3>
            </div>
          </div>
          {loading ? (
            <SliderSkeleton listsToRender={4} />
          ) : (
            <div className='row'>
              {geoGeneticspackages?.length > 0 &&
                geoGeneticspackages?.map((geo, index) => (
                  <div className='col-xl-4 col-md-6 col-8 mx-md-0 mx-auto my-3'>
                    <Link
                      to='#'
                      onClick={() => {
                        console.log('abcccccc')

                        history?.push(`/${links[index]}/${geo?._id}`)
                      }}
                    >
                      <div className='product-box'>
                        <img
                          src={
                            geo?.productimage?.length > 0 &&
                            `${imageURL}${geo?.productimage[0]}`
                          }
                          alt=''
                          className='img-fluid package'
                        />
                        <div className='product-actions'>
                          <button
                            type='button'
                            style={{ zIndex: 11111111111111 }}
                            onClick={() => {
                              console.log('abcccccc')

                              history?.push(`/${links[index]}/${geo?._id}`)
                            }}
                            className='quickview-button'
                          >
                            <i className='fas fa-eye' />
                          </button>
                          <button
                            type='button'
                            onClick={() => {
                              !userInfo
                                ? UnauthorizedAlert()
                                : CreateWishList(geo?._id, history)
                            }}
                            className='wishlist_button'
                            style={{ zIndex: 11111111111111 }}
                          >
                            <i
                              className={
                                userwishlist?.includes(geo?._id)
                                  ? `wishlist-icon fas fa-heart maroon`
                                  : `wishlist-icon far fa-heart`
                              }
                            />
                          </button>
                          <button
                            type='button'
                            className='cart-_button'
                            onClick={() => {
                              !userInfo
                                ? UnauthorizedAlert()
                                :null
                                // : history?.push(
                                //     `/GeoGeneticsCheckout/${geo?._id}?qty=${1}`
                                //   )
                            }}
                            title='Add to cart'
                          >
                            <i className='fal fa-shopping-cart' />
                          </button>
                        </div>
                      </div>
                      <div className='product-meta mt-3'>
                        <p className='product-title'>{geo?.name}</p>
                        <div className='d-flex flex-column'>
                          {/* <p className="discount-price">900.00</p> */}
                          <p className='product-price'>{geo?.price}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          )}

          <section className='yahki-protocols mt-5 py-5'>
            <div className='container'>
              <div className='row mt-5 '>
                <div className='col-12'>
                  <h3 className='protocol-heading orange'>
                    GEO'GENETICS PROTOCOLS
                  </h3>
                </div>
              </div>
              {loading ? (
                <SliderSkeleton listsToRender={4} />
              ) : (
                <div className='row' id='protocols'>
                  {geoGeneticsprotocols?.length > 0 &&
                    geoGeneticsprotocols?.map((geo, index) => (
                      <div className='col-xl-4 col-md-6 col-8 mx-md-0 mx-auto my-3'>
                        {/* de vaxxed therapy */}
                        <Link
                          to='#'
                          onClick={() => {
                            console.log('abcccccc')

                            history?.push(`/${links2[index]}/${geo?._id}`)
                          }}
                        >
                          <div className='product-box'>
                            <ImageLazyLoad
                              src={
                                geo?.productimage?.length > 0 &&
                                `${imageURL}${geo?.productimage[0]}`
                              }
                              alt=''
                              classname='img-fluid package'
                            />
                            {/* <span className="sale-tag">sale!</span> */}
                            <div className='product-actions'>
                              <button
                                type='button'
                                onClick={() => {
                                  console.log('abcccccc')
                                  history?.push(`/${links2[index]}/${geo?._id}`)
                                }}
                                className='quickview-button'
                              >
                                <i className='fas fa-eye' />
                              </button>
                              <button
                                type='button'
                                style={{ zIndex: 11111111111111 }}
                                onClick={() => {
                                  !userInfo
                                    ? UnauthorizedAlert()
                                    : CreateWishList(geo?._id, history)
                                }}
                                className='wishlist_button'
                              >
                                <i
                                  className={
                                    userwishlist?.includes(geo?._id)
                                      ? `wishlist-icon fas fa-heart maroon`
                                      : `wishlist-icon far fa-heart`
                                  }
                                />
                              </button>
                              <button
                                type='button'
                                style={{ zIndex: 11111111111111 }}
                                onClick={() => {
                                  !userInfo
                                    ? UnauthorizedAlert()
                                    :null
                                    //  history?.push(
                                    //     `/GeoGeneticsCheckout/${
                                    //       geo?._id
                                    //     }?qty=${1}`
                                    //   )
                                }}
                                className='cart-_button'
                                title='Add to cart'
                              >
                                <i className='fal fa-shopping-cart' />
                              </button>
                            </div>
                          </div>
                          <div className='product-meta mt-3'>
                            <p className='product-title'>{geo?.name}</p>
                            <div className='d-flex flex-column'>
                              <p className='product-price'>{geo?.price}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
      <AllHerbs />
      <Footer />
    </>
  )
}

export default GeoGenetics
