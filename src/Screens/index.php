<?php
$title = "Home";
include('header.php');
include('site-header.php');
include('home-banner.php');
?>

<div class="container">
    <div class="row align-items-center justify-content-center my-5 pt-5 pb-3">
        <div class="col-lg-6 col-md-8 mx-auto my-3" data-aos="fade-up" data-aos-duration="3000">
            <img src="images/Yahki-awakened-welcome-image.jpg" alt="" class="img-fluid">
        </div>
        <div class="col-lg-6 col-md-8 mx-auto my-3" data-aos="fade-down" data-aos-duration="3000">
            <p class="yahki-p pl-4">Welcome to Yah’ki Awakened LLC, where Peace, Health, Energy and Awareness is always first priority.
                Our purpose is to provide life changing information to a brilliant, intelligent people who have been
                deceived and misinformed for centuries. Experience the true power of alkaline herbal therapy with Master Herbalist Yah’ki.
            </p>
            <img src="images/yahki-awakened.png" alt="" class="img-fluid w-55 mt-4">
        </div>
    </div>
</div>

<div class="filteration">
    <div class="container pb-4">
        <div class="row my-5 align-items-start justify-content-between">
            <div class="col-12"> <h6 class="text-uppercase">SEARCH PRODUCTS</h6></div>
            <div class="col-md-4 mb-3">
                <div class="form-group my-3">
                    <select class="form-control" id="helpWith">
                        <option selected disabled>I need help with</option>
                        <option>Digestive Health</option>
                        <option>Endocrine</option>
                        <option>Men's Health</option>
                        <option>Women's Health</option>
                        <option>Children's Health</option>
                        <option>Pregnancy/Postpartum</option>
                    </select>
                </div>
            </div>

            <div class="col-md-4 mb-3">
                <div class="form-group my-3">
                    <select class="form-control" id="formula">
                        <option selected disabled>Formula...</option>
                        <option>Capsule</option>
                        <option>Capsule Blend</option>
                        <option>Glycerin</option>
                        <option>Loose Tea</option>
                        <option>Powder Blend</option>
                        <option>Tincture</option>
                    </select>
                </div>
            </div>

            <div class="col-md-4 mb-3">
                <div class="form-group my-3">
                    <select class="form-control" id="detoxGoal">
                        <option selected disabled>Detox Goal...</option>
                        <option>Deep</option>
                        <option>Maintenance</option>
                        <option>Mild</option>
                        <option>Moderate</option>
                        <option>Rebuilding</option>
                    </select>
                </div>
            </div>

            <div class="col-12 my-2 text-center">
                <a href="#" class="btn maroon-btn-solid d-inline-block py-2 px-5">Find</a>
            </div>
        </div>
    </div>
</div>

<div class="yahki-features">
    <div class="container mt-5 pt-3">
        <div class="row text-center">
            <div class="col-lg-4">
                <img src="images/consultant.png" alt="" class="img-fluid mx-auto">
                <h3 class="my-4">CONSULT AN EXPERT</h3>
                <p>Members can chat one on one with a counselor or therapist</p>
                <a href="#" class="linear-white-link my-5">learn more</a>
            </div>
            <div class="col-lg-4">
                <img src="images/shop-online.png" alt="" class="img-fluid mx-auto">
                <h3 class="my-4">SHOP ONLINE</h3>
                <p>Members can shop online 24/7 from our exclusive Members Only Top Quality Herbal Alkaline products.</p>
                <a href="#" class="linear-white-link my-5">learn more</a>
            </div>
            <div class="col-lg-4">
                <img src="images/multimedia.png" alt="" class="img-fluid mx-auto">
                <h3 class="my-4">MULTIMEDIA COURSES</h3>
                <p>Premiere Members can view our media gallery with exclusive access to all of our videos and courses.</p>
                <a href="#" class="linear-white-link my-5">learn more</a>
            </div>
        </div>
    </div>
</div>

<div class="container my-5 py-3">
    <div class="row my-4">
        <div class="col-12 text-center">
            <p class="yahki-blockquote">
                “And by the river upon the bank thereof, on this side and on that side,
                shall grow all trees for meat, whose leaf shall not fade, neither shall the fruit thereof be consumed:
                it shall bring forth new fruit according to his months, because their waters they issued out of the sanctuary:
                and the fruit thereof shall be for meat, and the leaf thereof for medicine.”
            </p>
        </div>
    </div>
</div>

<!-- <section class="orders">
    <div class="container">
        <div class="row text-center py-5">
            <div class="col-12 py-5">
                <h3 class="yahki-black-heading mb-5">WE'RE WORKING ON YOUR ORDERS!!</h3>
                <p class="dual-text"><strong>As of <span class="red">January 13, 2022</span>, we are currently processing orders</strong> </p>

                <div class="yahki-stats d-flex justify-content-center align-items-center">
                    <div class="stat-count">
                        <p class="number">9996</p>
                    </div>
                    <div class="stat-count">
                        <p class="through">Through</p>
                    </div>
                    <div class="stat-count">
                        <p class="number">10167</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> -->

<!-- <section class="yahki-products">
    <div class="container">
        <div class="row mb-5">
            <div class="col-12">
                <h3>FEATURED PRODUCTS</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-3 col-md-6 col-8 mx-auto my-3">
                <a href="#">
                    <div class="product-box">
                        <img src="images/Amino-Acid-Protocol.jpg" alt="" class="img-fluid">
                        <div class="product-actions">
                            <button type="button" href="#" class="quickview-button"><i class="fas fa-eye"></i></button>
                            <button type="button" href="#" class="wishlist_button"><i class="far fa-heart"></i></button>
                            <button type="button" href="#" class="cart-_button" title="Add to cart"><i class="fal fa-shopping-cart"></i></button>
                        </div>
                    </div>
                    <div class="product-meta mt-3">
                        <p class="product-title">DIABETES REVERSAL KIT (Pancreas Healing)</p>
                        <p class="product-price">$300.00</p>
                    </div>
                </a>
            </div>
            <div class="col-xl-3 col-md-6 col-8 mx-auto my-3">
                <a href="#">
                    <div class="product-box">
                        <img src="images/Elderberries.jpg" alt="" class="img-fluid">
                        <div class="product-actions">
                            <button type="button" href="#" class="quickview-button"><i class="fas fa-eye"></i></button>
                            <button type="button" href="#" class="wishlist_button"><i class="far fa-heart"></i></button>
                            <button type="button" href="#" class="cart-_button" title="Add to cart"><i class="fal fa-shopping-cart"></i></button>
                        </div>
                    </div>
                    <div class="product-meta mt-3">
                        <p class="product-title">ELDERBERRY (Sambucus Nigra) Whole Berries</p>
                        <p class="product-price">$70.00</p>
                    </div>
                </a>
            </div>
            <div class="col-xl-3 col-md-6 col-8 mx-auto my-3">
                <a href="#">
                    <div class="product-box">
                        <img src="images/Black-Seed-Oil.png" alt="" class="img-fluid">
                        <div class="product-actions">
                            <button type="button" href="#" class="quickview-button"><i class="fas fa-eye"></i></button>
                            <button type="button" href="#" class="wishlist_button"><i class="far fa-heart"></i></button>
                            <button type="button" href="#" class="cart-_button" title="Add to cart"><i class="fal fa-shopping-cart"></i></button>
                        </div>
                    </div>
                    <div class="product-meta mt-3">
                        <p class="product-title">Black Seed Oil</p>
                        <p class="product-price">$45.00</p>
                    </div>
                </a>
            </div>
            <div class="col-xl-3 col-md-6 col-8 mx-auto my-3">
                <a href="#">
                    <div class="product-box">
                        <img src="images/Parasite-Elimination.png" alt="" class="img-fluid">
                        <div class="product-actions">
                            <button type="button" href="#" class="quickview-button"><i class="fas fa-eye"></i></button>
                            <button type="button" href="#" class="wishlist_button"><i class="far fa-heart"></i></button>
                            <button type="button" href="#" class="cart-_button" title="Add to cart"><i class="fal fa-shopping-cart"></i></button>
                        </div>
                    </div>
                    <div class="product-meta mt-3">
                        <p class="product-title">PARASITIC ELIMINATION PRO TINCTURE</p>
                        <p class="product-price">$60.00</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section> -->

<!-- Featured Products Section -->
<section class="featured">
    <div class="container-fluid">
        <div class="row">
            <div class="col-11 mx-auto">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h4>Tranding Products</h4>
                        <h3>Featured Products</h3>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-md-10 mx-auto text-center">
                        <div id="fproducts">
                            <div class="featured-product animate__animated animate__slideInUp">
                                <img src="images/featured-prod-1.jpg" alt="" class="img-fluid mx-auto">
                                <h4 class="prod-title">White Handmade Organic Soap</h4>
                                <h5 class="prod-price">$350.00</h5> 
                            </div>
                            <div class="featured-product animate__animated animate__slideInUp">
                                <img src="images/featured-prod-2.jpg" alt="" class="img-fluid mx-auto">
                                <h4 class="prod-title">White Handmade Organic Soap</h4>
                                <h5 class="prod-price">$350.00</h5>
                            </div>
                            <div class="featured-product animate__animated animate__slideInUp">
                                <img src="images/bitter-product.png" alt="" class="img-fluid mx-auto">
                                <h4 class="prod-title">Bitters</h4>
                                <h5 class="prod-price">$350.00</h5>
                            </div>
                            <div class="featured-product animate__animated animate__slideInUp">
                                <img src="images/featured-prod-4.jpg" alt="" class="img-fluid mx-auto">
                                <h4 class="prod-title">White Handmade Organic Soap</h4>
                                <h5 class="prod-price">$350.00</h5>
                            </div>
                            <div class="featured-product animate__animated animate__slideInUp">
                                <img src="images/featured-prod-1.jpg" alt="" class="img-fluid mx-auto">
                                <h4 class="prod-title">White Handmade Organic Soap</h4>
                                <h5 class="prod-price">$350.00</h5> 
                            </div>
                            <div class="featured-product animate__animated animate__slideInUp">
                                <img src="images/featured-prod-2.jpg" alt="" class="img-fluid mx-auto">
                                <h4 class="prod-title">White Handmade Organic Soap</h4>
                                <h5 class="prod-price">$350.00</h5>
                            </div>
                            <div class="featured-product animate__animated animate__slideInUp">
                                <img src="images/featured-prod-3.jpg" alt="" class="img-fluid mx-auto">
                                <h4 class="prod-title">White Handmade Organic Soap</h4>
                                <h5 class="prod-price">$350.00</h5>
                            </div>
                            <div class="featured-product animate__animated animate__slideInUp">
                                <img src="images/featured-prod-4.jpg" alt="" class="img-fluid mx-auto">
                                <h4 class="prod-title">White Handmade Organic Soap</h4>
                                <h5 class="prod-price">$350.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- <div class="filteration">
    <div class="container py-4">
        <div class="row my-5 align-items-start justify-content-between">
            <div class="col-md-6 my-3">
                    <h6 class="text-uppercase">SEARCH PRODUCTS</h6>
                    <input type="text" name="" id="" class="yahki-search" placeholder="Search...">
            </div>
            <div class="col-md-6 my-3">
                <h6 class="text-uppercase">PRODUCT CATEGORIES</h6>
                <select class="custom-select custom-select-sm">
                    <option selected>Select a category</option>
                    <option value=""> Children Products </option>
                    <option value=""> Consultations </option>
                    <option value=""> Crystals, Stones, and Spiritual Healing </option>
                    <option value=""> Detox Home </option>
                    <option value=""> Geo’Genetic Packages </option>
                    <option value=""> Geo’Genetic Protocols </option>
                    <option value=""> Hygiene </option>
                    <option value=""> Sacred Vaginal Line </option>
                    <option value=""> Soaps </option>
                    <option value=""> Kits and Bundles </option>
                    <option value=""> Oils </option>
                    <option value=""> Powders </option>
                    <option value=""> Salve </option>
                    <option value=""> Seaweed Herbs </option>
                    <option value=""> Support </option>
                    <option value=""> Teas </option>
                    <option value=""> Tinctures </option>
                    <option value=""> Tonics </option>
                    <option value=""> Uncategorized </option>
                    <option value=""> Whole Herbs </option>
                </select>
            </div>

            <div class="col-12 my-5 text-center">
                <button class="shop-now">
                    <span>Shop</span>
                    <span>Now</span>
                </button>
            </div>
        </div>
    </div>
</div> -->



<div class="must-watch-video">
    <div class="container-fluid">
        <div class="row g-0">
            <div class="col-12 px-0">
                <div class="video-container">
                    <video autoplay muted loop>
                        <source src="images/must-watch.mp4" type="video/mp4" />
                    </video>
                    <div class="caption">
                        <h4 class="mb-4">MUST WATCH</h4>
                        <a href="#headerPopup" class="play-btn" id="headerVideoLink" target="_blank" class="popup-modal">
                            <i class="far fa-play my-4"></i>
                        </a>
                        <p class="mt-4">ALL DISEASE, INFECTIONS, AND VIRUSES CAN BE COMPLETELY HEALED IF YOU LEARN THIS SIMPLE SYSTEM!!</p>
                    </div>
                </div>

                <div id="headerPopup" class="mfp-hide embed-responsive embed-responsive-21by9">
                    <iframe class="embed-responsive-item" width="854" height="480" src="https://www.youtube.com/embed/ebzbKa32kuk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- 
<div class="product-ads mt-5">
    <div class="container">
        <div class="row text-center justify-content-between align-items-center">
            <div class="col-md-6" data-aos="fade-up" data-aos-duration="2000">
                <div class="elements">
                    <h4>IV ELEMENTS</h4>
                    <h5 class="orange-text my-md-5">INFUSION</h5>
                    <img src="images/IV-Elements.png" alt="" class="img-fluid">

                    <p>PHOSPHATES, CARBONATES, IODIDES, & BROMIDES</p>

                    <a href="#" class="green-btn my-5">drink your herbs</a>
                </div>
            </div>
            <div class="col-md-6" data-aos="fade-down" data-aos-duration="2000">
                <div class="bitters">
                    <h4>CELLULAR REGENERATION IS REAL!</h4>
                    <h5 class="orange-text my-md-5">TRY YAH'KI 3BITTERS!</h5>
                    <a href="#" class="green-btn mt-5 mb-3">find out how!</a>
                    <img src="images/bitters.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</div> -->


<!-- Current offer section -->
<section class="offer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-11 mx-auto">
                <div class="row align-items-start justify-content-center text-center">
                    <div class="col-xl-3 col-lg-5 col-md-10 mx-auto">
                        <div class="offer-box animate__animated animate__fadeInUp">
                            <img src="images/leaf.png" alt="" class="img-fluid mb-3 curve-leaf ">
                            <h4>Iv Elements</h4>
                            <div class="overlay-heading">
                                <h5 class="purple">40
                                    <span class="characters">
                                        %<br> Off
                                    </span>
                                </h5>
                                <h5 class="maroon">40
                                    <span class="characters">
                                        %<br> Off
                                    </span>
                                </h5>
                            </div>
                            <a href="#" class="red-link">Shop Now</a>
                        </div>
                        <img src="images/elementsCircle.png" alt="" class="img-fluid elementsCircle">
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-10 mx-auto offset-lg-1">
                        <img src="images/IVElements.png" alt="" class="img-fluid animate__animated animate__fadeInUp">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="container my-5 py-3">
    <div class="row my-4">
        <div class="col-12 text-left">
            <p class="yahki-blockquote f-24 mb-1">
            “And God said, Behold, I have given you every herb bearing seed, which [is] upon the face of all the earth, and every tree, in the which [is] the fruit of a tree yielding seed; to you it shall be for meat. And to every beast of the earth, and  to every fowl of the air, and to every thing that creepeth upon the earth, wherein [there is] life, [I have given] every green herb for meat: and it was so.And God saw every thing that he had made, and, behold, [it was] very good. And the evening and the morning were the sixth day.”
            </p>
            <p class="text-right quote-author">Genesis 1:29 – 1:31</p>
        </div>
    </div>
</div>

<div class="yahki-features">
    <div class="container py-3">
        <div class="row text-center">
            <div class="col-12 text-center">
                <div class="fixed-banner">
                    <h4>ALL HERBS ARE ORGANIC ALKALINE BOTANICALS AND ARE NATURALLY WILDCRAFTED FROM THE LAND OF THEIR ORIGIN</h4>
                    <p class="mt-5">All herbs used in our products are 100% naturally organic and are selectively picked and tested by a laboratory before use. Each herbal compound is personally prepared with gratification for the purpose of restoring health to our clients.</p>
                </div>
            </div>
        </div>
    </div>
</div>



<?php include('footer.php') ?>