import React from 'react'
import AllHerbs from '../components/AllHerbs'
import ToggleBack from '../components/ToggleBack'

const HerbalTherapy = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <ToggleBack name={`Herbal Therapy`} />
            {/* product grid and add to cart option */}
            <section className='product-grid'>
              <div className='row align-items-start justify-content-center my-5 py-5'>
                <div className='col-lg-6 col-md-8'>
                  <div className='p-view-main'>
                    <img
                      src='images/de-vaxxed-detailed-img.jpg'
                      alt=''
                      className='img-fluid '
                    />
                  </div>
                </div>
                <div className='col-lg-6 col-md-10'>
                  <h2 className='p-title'>DE-VAXXED HERBAL THERAPY</h2>
                  <h4 className='big-price'>$999</h4>
                  <div id='field1' className='mb-5'>
                    Quantity
                    <div className='quantifier'>
                      <button type='button' id='sub' className='minus'>
                        <i className='fas fa-minus' />
                      </button>
                      <input
                        type='number'
                        id={1}
                        defaultValue={1}
                        min={1}
                        className='quantity quantity p-2'
                        max={10}
                      />
                      <button type='button' id='add' className='plus'>
                        <i className='fas fa-plus' />
                      </button>
                    </div>
                  </div>
                  <button
                    type='button'
                    className='btn maroon-btn-solid px-5 py-2'
                  >
                    <img
                      src='images/add-to-cart.png'
                      alt=''
                      className='img-fluid mr-2 pt-1'
                    />
                    Add to cart
                  </button>
                  <div className='d-flex align-items-center  mt-4'>
                    <h5 className='font-weight-bold'>Wishlist</h5>{' '}
                    <button
                      type='button'
                      className='wishlist-button ml-2 bg-transparent border-0'
                    >
                      <i className='wishlist-icon far fa-heart maroon' />{' '}
                    </button>
                  </div>
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
                      Reviews <span className='review-counts' />
                    </label>
                    <div id='content-1'>
                      {/* specifications */}
                      <div className='specifications py-4'>
                        <div className='row'>
                          <div className='col-11'>
                            <h3 className='mini-heading'>DESCRIPTION</h3>
                            <p className='my-3 font-weight-light fs-16'>
                              The De-Vax font-weight-lightxed Herbal Therapy
                              Package was created to Detox the body and cells of
                              the poisonous chemicals and ingredients that are
                              found inside the Vaxx. While on this herbal
                              therapy, we strongly recommend an all fruit diet
                              consisting of mostly fruit juices. This therapy
                              was carefully formulated to break up mucus and
                              calcification, kill parasites, revitalize and
                              rebuild the cells while supplying Carbon, Oxygen,
                              and Hydrogen to the body, and pairing them up with
                              Monosaccharide Sugar, Phosphate and Nitrogen
                              Bases! REPAIRING THE DNA AND REWRITING THE GENETIC
                              CODE! DESTROYING ALL FOREIGN PATHOGENS BRINGING
                              THE BODY BACK TO OPTIMAL HEALTH!
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              DE-VAXXED HERBAL THERAPY
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              {' '}
                              Cleanse Capsule-Less Powder
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              {' '}
                              Cleanse Tincture
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              .Brain, Nerve, &amp; Adrenal Capsule-Less Powder
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              .Brain, Nerve, &amp; Adrenal Tinture
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              .Licorice Root/Wild Afrikan Yam Root Tea (Notify
                              If You Have High Blood Pressure)
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              .GI Super Mover Capsule-Less Powder
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              .Metal Detox Tea
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              .Brain Nerve Vital-Max Tea
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              .Brain Nerve Vital-Max Capsule-Less Powder
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              .Brain Nerve Vital-Max Tinture
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              .Thyroid/ParaThyroid Tincture
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              .Lymphatic Sweep Tonic Tincture
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              .Lymphatic Sweep Tonic Capsule-Less Powder
                            </p>
                            <p className='my-3 font-weight-light fs-16'>
                              .3Bitters
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id='content-2'>
                      <div className='row py-4 align-items-center'>
                        <div className='col-md-2'>
                          <h5 className='weight'>Weight</h5>
                        </div>
                        <div className='col-md-2 text-right'>
                          <p> 224 oz</p>
                        </div>
                      </div>
                    </div>
                    <div id='content-3'>
                      <div className='specifications py-4'>
                        <div className='row'>
                          <div className='col-11'>
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
                                          src='images/commentor-avatar.png'
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
                                          sadipscing elitr, sed diam nonumy
                                          eirmod tempor invidunt ut labore et
                                          dolore magna aliquyam erat, sed diam
                                          voluptua. At vero eos et accusam et
                                          justo duo dolores et ea rebum. Stet
                                          clita kasd gubergren, no sea takimata
                                          sanctus est Lorem ipsum dolor sit
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
                                          src='images/commentor-avatar.png'
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
                                          sadipscing elitr, sed diam nonumy
                                          eirmod tempor invidunt ut labore et
                                          dolore magna aliquyam erat, sed diam
                                          voluptua. At vero eos et accusam et
                                          justo duo dolores et ea rebum. Stet
                                          clita kasd gubergren, no sea takimata
                                          sanctus est Lorem ipsum dolor sit
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
                        src='images/recommended-p1.png'
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
                            src='images/add-to-cart.png'
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
                        src='images/recommended-p2.png'
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
                            src='images/add-to-cart.png'
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
                        src='images/recommended-p3.png'
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
                            src='images/add-to-cart.png'
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
                        src='images/recommended-p4.png'
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
                            src='images/add-to-cart.png'
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
          </div>
        </div>
      </div>
      <AllHerbs />
    </>
  )
}

export default HerbalTherapy
