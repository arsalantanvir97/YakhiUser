import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { baseURL,imageURL } from '../utils/api'
import { Link } from 'react-router-dom'
const Index = () => {
  const [product, setproduct] = useState([])
  useEffect(() => {
    gettingProducts()
  }, [])

  const gettingProducts = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/product/getproducts`,
        method: "GET",
      });
      console.log("res", res);
      setproduct(res?.data?.products);
    } catch (err) {
      console.log(err);
    }
  };

    return (
        <>
            <div>
  <section className="home-slider">
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-md-12">
          <div id="carousel" className="slider">
            <div className="slider-item">
              <div className="slider-container">
                <img src="images/banner-image-one.jpg" alt="" className="img-fluid" />
                <div className="slider-content">
                  <div className="outline">
                    <h1 className="slider-heading">The Body Was <br /> Created to <span className="red">Heal Itself</span></h1>
                    <p className="slider-para mty-3">You Deserve Healing! We Are Excited To Announce That We Are Now 
                      Accepting Registration And Bookings for The YAH'KI Detoxification Home.</p>
                  </div>
                  <a href="#" className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0">FIND OUT NOW!</a>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-container">
                <img src="images/banner-image-one.jpg" alt="" className="img-fluid" />
                <div className="slider-content">
                  <div className="outline">
                    <h1 className="slider-heading">The Body Was <br /> Created to <span className="red">Heal Itself</span></h1>
                    <p className="slider-para mty-3">You Deserve Healing! We Are Excited To Announce That We Are Now 
                      Accepting Registration And Bookings for The YAH'KI Detoxification Home.</p>
                  </div>
                  <a href="#" className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0">FIND OUT NOW!</a>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-container">
                <img src="images/banner-image-one.jpg" alt="" className="img-fluid" />
                <div className="slider-content">
                  <div className="outline">
                    <h1 className="slider-heading">The Body Was <br /> Created to <span className="red">Heal Itself</span></h1>
                    <p className="slider-para mty-3">You Deserve Healing! We Are Excited To Announce That We Are Now 
                      Accepting Registration And Bookings for The YAH'KI Detoxification Home.</p>
                  </div>
                  <a href="#" className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0">FIND OUT NOW!</a>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-container">
                <img src="images/banner-image-one.jpg" alt="" className="img-fluid" />
                <div className="slider-content">
                  <div className="outline">
                    <h1 className="slider-heading">The Body Was <br /> Created to <span className="red">Heal Itself</span></h1>
                    <p className="slider-para mty-3">You Deserve Healing! We Are Excited To Announce That We Are Now 
                      Accepting Registration And Bookings for The YAH'KI Detoxification Home.</p>
                  </div>
                  <a href="#" className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0">FIND OUT NOW!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Top 3 categories */}
  <section className="categories mt-5 pt-5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="row justify-content-around align-items-center">
            {/* Herbal tea category */}
            <div className="col-lg-5 col-md-6">
              <div className="category-tea">
                <div className="position-relative">
                  <img src="images/herbal-tea-bg.png" alt="" className="img-fluid" />
                  <img src="images/herbal-tea-anim.svg" alt="" className="img-fluid tea-anim" />
                  <h4 className="herbal-tea-offer">SALE UP TO 40% OFF</h4>
                  <div className="cat-title-box">
                    <h3>Herbal Tea</h3>
                    <a href="#" className="red-link">
                      View Collection
                      {/* <span class="shadow-text"> View Collection</span> */}
                    </a>
                  </div>
                  <img src="images/red-hollow.svg" alt="" className="img-fluid red-hollow" />
                </div>
              </div>
              <div className="category-capsules">
                <div className="position-relative">
                  <img src="images/herbal-capsules-bg.png" alt="" className="img-fluid" />
                  <img src="images/herbal-capsules-anim.svg" alt="" className="img-fluid capsules-anim " />
                  <div className="capsules-cat-title-box">
                    <h3>Herbal Capsules</h3>
                    <a href="#" className="red-link">
                      View Collection
                      {/* <span class="shadow-text"> View Collection</span> */}
                    </a>
                  </div>
                  <img src="images/star.svg" alt="" className="img-fluid star-spice" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="category-herbs">
                <div className="position-relative">
                  <img src="images/whole-herbs-bg.png" alt="" className="img-fluid" />
                  <img src="images/whole-herbs-anim.svg" alt="" className="img-fluid herbs-anim" />
                  <h4 className="herbs-offer">NEW ARRIVALS</h4>
                  <div className="herbs-cat-title-box">
                    <h3>Whole hearbs</h3>
                    <a href="#" className="red-link">
                      View Collection
                      {/* <span class="shadow-text"> View Collection</span> */}
                    </a>
                  </div>
                  <img src="images/Cinnamon.svg" alt="" className="img-fluid cinnamon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Shop Selections */}
  <section className="selections">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-8 col-lg-11 mx-auto">
          <div className="row justify-content-start">
            <div className="col-md-12 text-center">
              <h4>Products We Have</h4>
              <h3>Shop Our Selections </h3>
            </div>
          </div>
          <div className="row justify-content-start mt-5 px-padding">
            <div className="col-md-6 text-center">
              <div className="selection-box mb-4 mb-md-0 animate__animated animate__fadeInUp">
                <img src="images/herbal-products-selection-1.jpg" alt="" className="img-fluid mb-0" />
                <h5 className="selection-title-lg">
                  Herbal Products
                  <img src="images/title-line.svg" alt="" className="img-fluid title-line" />
                </h5>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="selection-box mb-4 mb-md-0 animate__animated animate__fadeInUp">
                <img src="images/herbal-products-selection-2.jpg" alt="" className="img-fluid mb-0" />
                <h5 className="selection-title-sm-1">
                  Herbal <br /> Products
                  <img src="images/title-line.svg" alt="" className="img-fluid title-line" />
                </h5>
              </div>
              <div className="row mt-4 px-md-0 px-sm-5 px-0">
                <div className="col-md-6 col-6">
                  <div className="selection-box mb-4 mb-md-0 animate__animated animate__fadeInUp">
                    <img src="images/herbal-products-selection-3.jpg" alt="" className="img-fluid mb-0" />
                    <h5 className="selection-title-sm-2">
                      Herbal <br /> Products
                      <img src="images/title-line.svg" alt="" className="img-fluid title-line" />
                    </h5>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="selection-box mb-4 mb-md-0 animate__animated animate__fadeInUp">
                    <img src="images/herbal-products-selection-4.jpg" alt="" className="img-fluid mb-0" />
                    <h5 className="selection-title-sm-3">
                      Herbal <br /> Products
                      <img src="images/title-line.svg" alt="" className="img-fluid title-line" />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="scattered-images">
      <img src="images/selection-tea-leaf-1.svg" alt="" className="img-fluid scat-1 animate__animated animate__zoomIn" />
      <img src="images/selection-tea-leaf-2.svg" alt="" className="img-fluid scat-2 animate__animated animate__zoomIn" />
      <img src="images/selection-tea.png" alt="" className="img-fluid scat-3 animate__animated animate__zoomIn" />
    </div>
  </section>
  {/* Featured Products Section */}
  <section className="featured">
    <div className="container-fluid">
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="row">
            <div className="col-md-12 text-center">
              <h4>Tranding Products</h4>
              <h3>Featured Products</h3>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-10 mx-auto text-center">
              <div id="fproducts">
                {/* <div className="featured-product animate__animated animate__slideInUp">
                  <img src="images/featured-prod-1.jpg" alt="" className="img-fluid mx-auto" />
                  <h4 className="prod-title">White Handmade Organic Soap</h4>
                  <h5 className="prod-price">$350.00</h5> 
                </div>
                <div className="featured-product animate__animated animate__slideInUp">
                  <img src="images/featured-prod-2.jpg" alt="" className="img-fluid mx-auto" />
                  <h4 className="prod-title">White Handmade Organic Soap</h4>
                  <h5 className="prod-price">$350.00</h5>
                </div>
                <div className="featured-product animate__animated animate__slideInUp">
                  <img src="images/featured-prod-3.jpg" alt="" className="img-fluid mx-auto" />
                  <h4 className="prod-title">White Handmade Organic Soap</h4>
                  <h5 className="prod-price">$350.00</h5>
                </div>
                <div className="featured-product animate__animated animate__slideInUp">
                  <img src="images/featured-prod-4.jpg" alt="" className="img-fluid mx-auto" />
                  <h4 className="prod-title">White Handmade Organic Soap</h4>
                  <h5 className="prod-price">$350.00</h5>
                </div>
                <div className="featured-product animate__animated animate__slideInUp">
                  <img src="images/featured-prod-1.jpg" alt="" className="img-fluid mx-auto" />
                  <h4 className="prod-title">White Handmade Organic Soap</h4>
                  <h5 className="prod-price">$350.00</h5> 
                </div>
                <div className="featured-product animate__animated animate__slideInUp">
                  <img src="images/featured-prod-2.jpg" alt="" className="img-fluid mx-auto" />
                  <h4 className="prod-title">White Handmade Organic Soap</h4>
                  <h5 className="prod-price">$350.00</h5>
                </div>
                <div className="featured-product animate__animated animate__slideInUp">
                  <img src="images/featured-prod-3.jpg" alt="" className="img-fluid mx-auto" />
                  <h4 className="prod-title">White Handmade Organic Soap</h4>
                  <h5 className="prod-price">$350.00</h5>
                </div> */}
                {product?.map(pro=>(
                <div className="featured-product animate__animated animate__slideInUp">
                  <Link to={`/ProductView/${pro._id}`}>
                  <img src={`${imageURL}${pro?.productimage}`} alt="" className="img-fluid mx-auto" /></Link>
                  <h4 className="prod-title">{pro?.name}</h4>
                  <h5 className="prod-price">${pro?.price}</h5>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial sections */}
  <section className="testimonials">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <img src="images/testimonial-aside.png" alt="" className="img-fluid" />
            </div>
            <div className="col-xl-6 col-lg-10 text-center my-5 my-xl-0">
              <h3 className="testi-heading">Satisfied Clients</h3>
              <p className="testi-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className="customer-feedback">
                <div className="owl-carousel feedback-slider">
                  {/* slider item */}
                  <div className="feedback-slider-item">
                    <img src="images/testi-avatar-1.png" className="center-block img-circle" alt="Customer Feedback" />
                    <h3 className="customer-name">Lisa Redfern</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      It is a long established fact that a reader will be distracted by the readable its layout.</p>
                  </div>
                  {/* /slider item */}
                  {/* slider item */}
                  <div className="feedback-slider-item">
                    <img src="images/testi-avatar-mid.png" className="center-block img-circle" alt="Customer Feedback" />
                    <h3 className="customer-name">Cassi</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      It is a long established fact that a reader will be distracted by the readable its layout.</p>
                  </div>
                  {/* /slider item */}
                  {/* slider item */}
                  <div className="feedback-slider-item">
                    <img src="images/testi-avatar-2.png" className="center-block img-circle" alt="Customer Feedback" />
                    <h3 className="customer-name">Md Nahidul</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      It is a long established fact that a reader will be distracted by the readable its layout.</p>
                  </div>
                  {/* /slider item */}
                  {/* slider item */}
                  <div className="feedback-slider-item">
                    <img src="images/testi-avatar-1.png" className="center-block img-circle" alt="Customer Feedback" />
                    <h3 className="customer-name">Lisa Redfern</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      It is a long established fact that a reader will be distracted by the readable its layout.</p>
                  </div>
                  {/* /slider item */}
                  {/* slider item */}
                  <div className="feedback-slider-item">
                    <img src="images/testi-avatar-mid.png" className="center-block img-circle" alt="Customer Feedback" />
                    <h3 className="customer-name">Cassi</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      It is a long established fact that a reader will be distracted by the readable its layout.</p>
                  </div>
                  {/* /slider item */}
                  {/* slider item */}
                  <div className="feedback-slider-item">
                    <img src="images/testi-avatar-2.png" className="center-block img-circle" alt="Customer Feedback" />
                    <h3 className="customer-name">Md Nahidul</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      It is a long established fact that a reader will be distracted by the readable its layout.</p>
                  </div>
                  {/* /slider item */}
                </div>{/* /End feedback-slider */}
                {/* side thumbnail */}
                <div className="feedback-slider-thumb hidden-xs">
                  <div className="thumb-prev">
                    <span>
                      <img src="images/testi-avatar-1.png" alt="Customer Feedback" />
                    </span>
                  </div>
                  <div className="thumb-next">
                    <span>
                      <img src="images/testi-avatar-2.png" alt="Customer Feedback" />
                    </span>
                  </div>
                </div>
                {/* /side thumbnail */}
                <div className="feedback-slider-arrows">
                  <div className="thumb-prev-arrow">
                    <span>
                      <img src="images/back.png" alt="Customer Feedback" />
                    </span>
                  </div>
                  <div className="thumb-next-arrow">
                    <span>
                      <img src="images/forward.png" alt="Customer Feedback" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Current offer section */}
  <section className="offer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="row align-items-start justify-content-center text-center">
            <div className="col-xl-3 col-lg-5 col-md-10 mx-auto">
              <div className="offer-box animate__animated animate__fadeInUp">
                <img src="images/leaf.png" alt="" className="img-fluid mb-3 curve-leaf " />
                <h4>Iv Elements</h4>
                <div className="overlay-heading">
                  <h5 className="purple">40
                    <span className="characters">
                      %<br /> Off
                    </span>
                  </h5>
                  <h5 className="maroon">40
                    <span className="characters">
                      %<br /> Off
                    </span>
                  </h5>
                </div>
                <a href="#" className="red-link">Shop Now</a>
              </div>
              <img src="images/elementsCircle.png" alt="" className="img-fluid elementsCircle" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-10 mx-auto offset-lg-1">
              <img src="images/IVElements.png" alt="" className="img-fluid animate__animated animate__fadeInUp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Yakhi Video Section */}
  <section className="yakhi-video">
    <div className="container-fluid">
      <div className="row mt-5 pt-5">
        <div className="col-md-9 mx-auto">
          <div className="falling-leaves">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 text-center">
                <img src="images/yakhi-logo-light.png" alt="" className="img-fluid" />
                <p className="text-white">Yah’ki Awakened LLC, where Peace, Health, Energy and<br /> Awareness is always first priority</p>
                <a href="#" className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0">Watch Video</a>
              </div>
              <div className="col-lg-6">
                <div className="video-box mt-5 mt-lg-0">
                  <div className="in-video">
                    <img src="images/video-thumbnail.jpg" className="video-img img-fluid" alt="" />
                    <button type="button" className="play-banner" tabIndex={0}><i className="fas fa-play" /></button>
                  </div>
                </div>
              </div>
            </div>
            <img src="images/falling-leaf-1-image.png" alt="" className="img-fluid f-1 falls" />
            <img src="images/falling-leaf-2-image.png" alt="" className="img-fluid f-2 falls" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

        </>
    )
}

export default Index
