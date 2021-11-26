import React from 'react'

const ProductViewOutStock = () => {
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            {/* product grid and add to cart option */}
            <section className="product-grid">
              <div className="row align-items-start justify-content-center my-5 py-5">
                <div className="col-lg-6 col-md-8">
                  <div className="p-view-main">
                    <img src="images/product-main.png" alt="" className="img-fluid h-100" />
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="p-view-thumb">
                        <img src="images/product-thumb.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="p-view-thumb">
                        <img src="images/product-thumb.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="p-view-thumb">
                        <img src="images/product-thumb.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-10">
                  <h2 className="p-title">Boston Cloths for Women</h2>
                  <ul className="list-inline py-4">
                    <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                    <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                    <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                    <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                    <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                  </ul>
                  <p className="short-desc">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                  </p>
                  <h4 className="big-price">$999</h4>
                  <div id="field1">Quantity
                    <div className="quantifier">
                      <button type="button" id="sub" className="minus"><i className="fas fa-minus" /></button>
                      <input type="number" id={1} defaultValue={1} min={1} className="quantity quantity p-2" max={10} />
                      <button type="button" id="add" className="plus"><i className="fas fa-plus" /></button>
                    </div>
                  </div>
                  <div className="weight my-4">
                    <p>Weight<span>30.2 oz</span></p>
                  </div>
                  <button type="button" className="btn maroon-btn-solid px-5 py-2 disabled" disabled><img src="images/add-to-cart.png" alt="" className="img-fluid mr-2 pt-1" />Add to cart</button>
                  <span className="out-of-stock">Out of Stock</span>
                </div>
              </div>
            </section>
            {/* specifications */}
            <section className="specifications">
              <div className="row">
                <div className="col-11">
                  <h3>Product Specification</h3>
                  <p className="my-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
                    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p className="my-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
                    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </section>
            {/* reviews */}
            <section className="reviews-detail mt-5 border-top border-grey pt-5">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <h3>Reviews</h3>
                  <p className="star-numbers">4.5 Star</p>
                  <ul className="list-inline mb-3">
                    <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                    <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                    <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                    <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                    <li className="list-inline-item"><i className="far fa-star rate" /></li>
                  </ul>
                  <span className="rate-total">4.5 Ratings &amp; 2 Reviews</span>
                </div>
                <div className="col-lg-6 col-md-10 mt-lg-0 mt-5">
                  <div className="row justify-content-center align-items-center text-center">
                    {/* 1  STAR*/}
                    <div className="col-2 mb-4">
                      <span className="star-number">1 Star</span>
                    </div>
                    <div className="col-8 mb-4">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    <div className="col-2 mb-4">
                      <span className="star-percent">10 %</span>
                    </div>
                    {/* 2  STAR*/}
                    <div className="col-2 mb-4">
                      <span className="star-number">2 Stars</span>
                    </div>
                    <div className="col-8 mb-4">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    <div className="col-2 mb-4">
                      <span className="star-percent">20 %</span>
                    </div>
                    {/* 3  STAR*/}
                    <div className="col-2 mb-4">
                      <span className="star-number">3 Stars</span>
                    </div>
                    <div className="col-8 mb-4">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    <div className="col-2 mb-4">
                      <span className="star-percent">10 %</span>
                    </div>
                    {/* 4  STAR*/}
                    <div className="col-2 mb-4">
                      <span className="star-number">4 Stars</span>
                    </div>
                    <div className="col-8 mb-4">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    <div className="col-2 mb-4">
                      <span className="star-percent">50 %</span>
                    </div>
                    {/* 5  STAR*/}
                    <div className="col-2 mb-4">
                      <span className="star-number">5 Stars</span>
                    </div>
                    <div className="col-8 mb-4">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    <div className="col-2 mb-4">
                      <span className="star-percent">10 %</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* user review cards */}
            <section className="user-reviews">
              <div className="row">
                <div className="col-12">
                  <div className="review-card">
                    <div className="row">
                      <div className="col-lg-1 col-5">
                        <img src="images/commentor-avatar.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-lg-10 col-12">
                        <h4 className="commentor-name">Ben Döring</h4>
                        <p className="comment-date">Oct 27 - 8 Minutes read</p>
                        <p className="comment">
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                          ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                        </p>
                        <ul className="list-inline py-2">
                          <li className="list-inline-item mr-0"><i className="fas fa-star rate" /></li>
                          <li className="list-inline-item mr-0"><i className="fas fa-star rate" /></li>
                          <li className="list-inline-item mr-0"><i className="fas fa-star rate" /></li>
                          <li className="list-inline-item mr-0"><i className="fas fa-star rate" /></li>
                          <li className="list-inline-item mr-0"><i className="far fa-star rate" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="review-card">
                    <div className="row">
                      <div className="col-lg-1 col-5">
                        <img src="images/commentor-avatar.png" alt="" className="img-fluid" />
                      </div>
                      <div className="col-lg-10 col-12">
                        <h4 className="commentor-name">Ben Döring</h4>
                        <p className="comment-date">Oct 27 - 8 Minutes read</p>
                        <p className="comment">
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                          ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                        </p>
                        <ul className="list-inline py-2">
                          <li className="list-inline-item mr-0"><i className="fas fa-star rate" /></li>
                          <li className="list-inline-item mr-0"><i className="fas fa-star rate" /></li>
                          <li className="list-inline-item mr-0"><i className="fas fa-star rate" /></li>
                          <li className="list-inline-item mr-0"><i className="fas fa-star rate" /></li>
                          <li className="list-inline-item mr-0"><i className="far fa-star rate" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* recommended products */}
            <section className="recomended-products mt-5 border-top border-grey pt-4">
              <div className="row">
                <div className="col-12 mb-4">
                  <h3>Recommended Products</h3>
                </div>
                <div className="col-xl-3 col-md-6">
                  {/* Product 1 */}
                  <div className="product-card">
                    <button type="button" className="wishlist-btn">
                      <i className="wishlist-icon far fa-heart maroon" />
                    </button>
                    <a href="product-view.php"> <img src="images/recommended-p1.png" alt="" className="img-fluid" /> </a>
                    <h5 className="product-name"><a href="product-view.php" className="f-21"> Boston Cloths for Women</a></h5>
                    <ul className="list-inline py-2">
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                    </ul>
                    <div className="row justify-content-between align-items-center mt-3">
                      <div className="col-4">
                        <p className="p-price">Price</p>
                        <span className="red-color">$999</span>
                      </div>
                      <div className="col-8 text-right">
                        <a href="#" className="btn maroon-btn-solid "><img src="images/add-to-cart.png" alt="" className="img-fluid mr-2 pt-1" />Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  {/* Product 2 */}
                  <div className="product-card">
                    <button type="button" className="wishlist-btn">
                      <i className="wishlist-icon far fa-heart maroon" />
                    </button>
                    <a href="product-view.php"> <img src="images/recommended-p2.png" alt="" className="img-fluid" /> </a>
                    <h5 className="product-name"><a href="product-view.php" className="f-21"> Boston Cloths for Women</a></h5>
                    <ul className="list-inline py-2">
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                    </ul>
                    <div className="row justify-content-between align-items-center mt-3">
                      <div className="col-4">
                        <p className="p-price">Price</p>
                        <span className="red-color">$999</span>
                      </div>
                      <div className="col-8 text-right">
                        <a href="#" className="btn maroon-btn-solid "><img src="images/add-to-cart.png" alt="" className="img-fluid mr-2 pt-1" />Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  {/* Product 3 */}
                  <div className="product-card">
                    <button type="button" className="wishlist-btn">
                      <i className="wishlist-icon far fa-heart maroon" />
                    </button>
                    <a href="product-view.php"> <img src="images/recommended-p3.png" alt="" className="img-fluid" /> </a>
                    <h5 className="product-name"><a href="product-view.php" className="f-21"> Boston Cloths for Women</a></h5>
                    <ul className="list-inline py-2">
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                    </ul>
                    <div className="row justify-content-between align-items-center mt-3">
                      <div className="col-4">
                        <p className="p-price">Price</p>
                        <span className="red-color">$999</span>
                      </div>
                      <div className="col-8 text-right">
                        <a href="#" className="btn maroon-btn-solid "><img src="images/add-to-cart.png" alt="" className="img-fluid mr-2 pt-1" />Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  {/* Product 4 */}
                  <div className="product-card">
                    <button type="button" className="wishlist-btn">
                      <i className="wishlist-icon far fa-heart maroon" />
                    </button>
                    <a href="product-view.php"> <img src="images/recommended-p4.png" alt="" className="img-fluid" /> </a>
                    <h5 className="product-name"><a href="product-view.php" className="f-21"> Boston Cloths for Women</a></h5>
                    <ul className="list-inline py-2">
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                      <li className="list-inline-item"><i className="fas fa-star rate" /></li>
                    </ul>
                    <div className="row justify-content-between align-items-center mt-3">
                      <div className="col-4">
                        <p className="p-price">Price</p>
                        <span className="red-color">$999</span>
                      </div>
                      <div className="col-8 text-right">
                        <a href="#" className="btn maroon-btn-solid"><img src="images/add-to-cart.png" alt="" className="img-fluid mr-2 pt-1" />Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="row mt-5">
              <div className="col-12 text-center">
                <div className="about-bottom-banner">
                  <h3>All Herbs Are Organic Alkaline and Are Naturally Wildcrafted from the Land of their Origin</h3>
                  <p>All herbs used in our products are 100% naturally organic and are selectively picked and tested by a laboratory before use. Each herbal compound is personally prepared with gratification for the purpose of restoring health to our clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default ProductViewOutStock
