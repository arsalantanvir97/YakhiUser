import React from 'react'
import { Link } from 'react-router-dom'
import { CreateWishList } from '../hooks/WishList'
import { imageURL } from '../utils/api'
import Toasty from '../utils/toast'
import AllHerbs from './AllHerbs'
import Footer from './Footer'
import Header from './Header'
import PrivateRouteSlider from './PrivateRouteSlider'

const DetailsofProduct = ({
  product,
  quantity,
  subQuantity,
  setquantity,
  addToCartHandler,
  userwishlist,
  history,
  htmlToReactParser,
  recommendedproducts,
  userInfo,
  UnauthorizedAlert,
}) => {
  return (
    <>
      {' '}
      <Header />
      <PrivateRouteSlider />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            {/* product grid and add to cart option */}
            <section className='product-grid'>
              <div className='row align-items-start justify-content-center my-5 py-5'>
                <div className='col-lg-6 col-md-8'>
                  <div className='p-view-main'>
                    <img
                      src={
                        product?.productimage?.length > 0 &&
                        `${imageURL}${product?.productimage[0]}`
                      }
                      alt=''
                      className='img-fluid h-100'
                    />
                  </div>
                  <div className='row'>
                    {product?.productimage?.length > 0 &&
                      product?.productimage?.slice(1)?.map((img) => (
                        <div className='col-4'>
                          <div className='p-view-thumb'>
                            <img
                              src={`${imageURL}${img}`}
                              alt=''
                              className='img-fluid'
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className='col-lg-6 col-md-10'>
                  <h2 className='p-title'>{product?.name}</h2>
                  <ul className='list-inline py-4'>
                    <li className='list-inline-item'>
                      <i
                        style={{ color: '#F3DE43' }}
                        className={
                          product?.rating >= 1
                            ? 'fas fa-star'
                            : product?.rating >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                        }
                      />
                    </li>
                    <li className='list-inline-item'>
                      <i
                        style={{ color: '#F3DE43' }}
                        className={
                          product?.rating >= 2
                            ? 'fas fa-star'
                            : product?.rating >= 1.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                        }
                      />
                    </li>
                    <li className='list-inline-item'>
                      <i
                        style={{ color: '#F3DE43' }}
                        className={
                          product?.rating >= 3
                            ? 'fas fa-star'
                            : product?.rating >= 2.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                        }
                      />
                    </li>
                    <li className='list-inline-item'>
                      <i
                        style={{ color: '#F3DE43' }}
                        className={
                          product?.rating >= 4
                            ? 'fas fa-star'
                            : product?.rating >= 3.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                        }
                      />
                    </li>
                    <li className='list-inline-item'>
                      <i
                        style={{ color: '#F3DE43' }}
                        className={
                          product?.rating >= 5
                            ? 'fas fa-star'
                            : product?.rating >= 4.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                        }
                      />
                    </li>
                  </ul>
                  <div className='d-flex align-items-center'>
                    <h4>Add to wishlist</h4>
                    <Link
                      to='#'
                      onClick={() => {
                        userInfo
                          ? CreateWishList(product?._id, history)
                          : UnauthorizedAlert()
                      }}
                      className='ml-3 product-view-wish'
                    >
                      <i
                        className={
                          userwishlist?.includes(product?._id)
                            ? `fas fa-heart maroon`
                            : `far fa-heart`
                        }
                      ></i>
                    </Link>
                  </div>
                  {/* <p className="short-desc">{product?.description}</p> */}
                  <h4 className='big-price'>${product?.price}</h4>
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
                        min={0}
                        className='quantity quantity p-2'
                        value={quantity}
                        onChange={(e) => {
                          setquantity(Number(e.target.value))
                        }}
                        max={product?.countInStock}
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
                  {/* <div className="weight my-4">
                <p>
                  Weight<span>30.2 oz</span>
                </p>
              </div> */}
                  <button
                    type='button'
                    onClick={() => {
                      userInfo
                        ? quantity > 0
                          ? addToCartHandler(product?._id)
                          : Toasty('error', `Quantity must be greater than 0`)
                        : UnauthorizedAlert()
                    }}
                    className='btn maroon-btn-solid px-5 py-2 mt-4'
                    disabled={product?.countInStock == 0}
                  >
                    <img
                      src='images/add-to-cart.png'
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
                  <div className='tabs'>
                    <input
                      type='radio'
                      name='tab-btn'
                      id='tab-btn-1'
                      defaultValue
                      defaultChecked
                    />
                    <label htmlFor='tab-btn-1'>Description </label>
                    <input
                      type='radio'
                      name='tab-btn'
                      id='tab-btn-2'
                      defaultValue
                    />
                    <label htmlFor='tab-btn-2'>Additional information</label>
                    <input
                      type='radio'
                      name='tab-btn'
                      id='tab-btn-3'
                      defaultValue
                    />
                    <label htmlFor='tab-btn-3'>
                      Claims <span className='review-counts' />
                    </label>
                    <div id='content-1'>
                      {/* specifications */}
                      <div className='specifications py-4'>
                        <div className='row'>
                          <div className='col-11'>
                            <h3>Product Specification</h3>

                            <p className='my-3'>
                              {' '}
                              {htmlToReactParser.parse(product?.description)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div id="content-2">
                  <div className="row py-4 align-items-center">
                    <div className="col-md-2">
                      <h5 className="weight">Weight</h5>
                    </div>
                    <div className="col-md-2 text-right">
                      <p> 224 oz</p>
                    </div>
                  </div>
                </div> */}
                    <div id='content-3'>
                      <div className='specifications py-4'>
                        <div className='row'>
                          <div className='col-11'>
                            <p className='my-3'>
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                              voluptua. At vero eos et accusam et justo duo
                              dolores et ea rebum. Stet clita kasd gubergren, no
                              sea takimata sanctus est Lorem ipsum dolor sit
                              amet. Lorem ipsum dolor sit amet, consetetur
                              sadipscing elitr, sed diam nonumy eirmod tempor
                              invidunt ut labore et dolore magna aliquyam erat,
                              sed diam voluptua. At vero eos et accusam et justo
                              duo dolores et ea rebum. Stet clita kasd
                              gubergren, no sea takimata sanctus est Lorem ipsum
                              dolor sit amet.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
                  <span className='rate-total'>Base on 20 reviews</span>
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
                          src='images/commentor-avatar.png'
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                      <div className='col-lg-10 col-12'>
                        <h4 className='commentor-name'>Ben Döring</h4>
                        <p className='comment-date'>Oct 27 - 8 Minutes read</p>
                        <p className='comment'>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet
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
                          src='images/commentor-avatar.png'
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                      <div className='col-lg-10 col-12'>
                        <h4 className='commentor-name'>Ben Döring</h4>
                        <p className='comment-date'>Oct 27 - 8 Minutes read</p>
                        <p className='comment'>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet
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
                </div>
              </div>
            </section>
            {/* recommended products */}
            <section className='recomended-products mt-5 border-top border-grey pt-4'>
              <div className='row'>
                {recommendedproducts?.products?.length > 0 && (
                  <div className='col-12 mb-4'>
                    <h3>Recommended Products</h3>
                  </div>
                )}
                {recommendedproducts?.products?.length > 0 &&
                  recommendedproducts?.products?.map((rec) => (
                    <div className='col-xl-3 col-md-6'>
                      {/* Product 1 */}
                      <div className='product-card'>
                        <button
                          type='button'
                          className='wishlist-btn'
                          onClick={() => {
                            userInfo
                              ? CreateWishList(rec?._id, history)
                              : UnauthorizedAlert()
                          }}
                        >
                          <i
                            className={
                              userwishlist?.includes(rec?._id)
                                ? `wishlist-icon fas fa-heart maroon`
                                : `wishlist-icon far fa-heart`
                            }
                          />
                        </button>
                        <Link to={`/ProductView/${rec?._id}`}>
                          {' '}
                          <img
                            src={`${imageURL}${rec?.productimage[0]}`}
                            style={{ width: 238, height: 239 }}
                            alt=''
                            className='img-fluid'
                          />{' '}
                        </Link>
                        <h5 className='product-name'>
                          <Link
                            to={`/ProductView/${rec?._id}`}
                            className='f-21'
                          >
                            {' '}
                            {rec?.name}
                          </Link>
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
                            <span className='red-color'>${rec?.price}</span>
                          </div>
                          <div className='col-8 text-right'>
                            <Link
                              to='#'
                              onClick={() => {
                                userInfo
                                  ? addToCartHandler(rec?._id, 1)
                                  : UnauthorizedAlert()
                              }}
                              className='btn maroon-btn-solid '
                            >
                              <img
                                src='images/add-to-cart.png'
                                alt=''
                                className='img-fluid mr-2 pt-1'
                              />
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <AllHerbs />
      <Footer />
    </>
  )
}

export default DetailsofProduct
