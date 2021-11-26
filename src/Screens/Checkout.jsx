import React from 'react'

const Checkout = () => {
    return (
        <section className="about-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-11 mx-auto">
              {/* Step form */}
              <div className="row">
                <div className="col-12 mb-xl-0 mb-5">
                  <form id="checkoutForm" action>
                    {/* Circles which indicates the steps of the form: */}
                    <div className="row mb-5">
                      <div className="col-12">
                        <div className="d-flex justify-content-between text-center w-70 mb-5">
                          <span className="step">
                            <div className="step-icon">
                              <i className="fas fa-address-card" />
                            </div>
                            <p className="mt-4">Address</p>
                          </span>
                          <span className="step">
                            <div className="step-icon">
                              <i className="fas fa-credit-card" />
                            </div>
                            <p className="mt-4">Payment</p>
                          </span>
                          <span className="step">
                            <div className="step-icon">
                              <i className="fas fa-check-square" />
                            </div>
                            <p className="mt-4">Confirm</p>
                          </span>
                        </div>
                        {/* One "tab" for each step in the form: */}
                        {/* ADDRESS TAB  */}
                        <div className="tab">
                          <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-10">
                              <div className="checkout-form">
                                <h3> ADDRESS</h3>
                                {/* Personal info */}
                                <div className="row mb-4">
                                  <div className="col-12">
                                    <h4>PERSONAL INFORMATION</h4>
                                  </div>
                                  <div className="col mb-4">
                                    <label>Email Address*</label>
                                    <input type="email" className="form-control" placeholder="abs@email.com" />
                                  </div>
                                  <div className="col mb-4">
                                    <label>Phone Number</label>
                                    <input type="tel" className="form-control" placeholder="Enter Phone Number" />
                                  </div>
                                </div>
                                {/* Billing Address */}
                                <div className="row mb-4">
                                  <div className="col-12 mb-4">
                                    <h4>Billing Address</h4>
                                  </div>
                                  <div className="col-12 mb-4">
                                    <label>Name*</label>
                                    <input type="text" className="form-control" placeholder="Enter Name" />
                                  </div>
                                  <div className="col-12 mb-4">
                                    <label>Address*</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Address" rows={5} defaultValue={""} />
                                  </div>
                                </div>
                                <div className="row mb-4">
                                  <div className="col-6 mb-4">
                                    <label>City*</label>
                                    <input type="text" className="form-control" placeholder="Enter City" />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Zip Code*</label>
                                    <input type="number" className="form-control" placeholder="Enter Zip Code" />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Country*</label>
                                    <input type="text" className="form-control" placeholder="Enter Country" />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>State*</label>
                                    <input type="number" className="form-control" placeholder="Enter State" />
                                  </div>
                                  <div className="col-12">
                                    <div className="ship-to-different">
                                      <div className="checkbox-group">
                                        <input type="checkbox" id="html" />
                                        <label htmlFor="html">Ship To A Different Location </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Shipping Address */}
                                <div className="row mb-4">
                                  <div className="col-12 mb-4">
                                    <h4>Shipping Address</h4>
                                  </div>
                                  <div className="col-12 mb-4">
                                    <label>Name*</label>
                                    <input type="text" className="form-control" placeholder="Enter Name" />
                                  </div>
                                  <div className="col-12 mb-4">
                                    <label>Address*</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Address" rows={5} defaultValue={""} />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>City*</label>
                                    <input type="text" className="form-control" placeholder="Enter City" />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Zip Code*</label>
                                    <input type="number" className="form-control" placeholder="Enter Zip Code" />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Country*</label>
                                    <input type="text" className="form-control" placeholder="Enter Country" />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>State*</label>
                                    <input type="number" className="form-control" placeholder="Enter State" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-lg-4 col-md-7 offset-lg-1">
                              <div className="order-summary has-margin">
                                <div className="order-summary-head">
                                  <p>Order Summary</p>
                                </div>
                                <div className="summary-details">
                                  <div className="product-cart-summary">
                                    <div className="row align-items-center justify-content-center">
                                      <div className="col-4 mb-3">
                                        <img src="images/summary-product-image.png" alt="" className="img-fluid" />
                                      </div>
                                      <div className="col-8 mb-3">
                                        <h4>Abc Product</h4>
                                        <p>$100.00</p>
                                      </div>
                                      <div className="col-4 mb-3">
                                        <img src="images/summary-product-image.png" alt="" className="img-fluid" />
                                      </div>
                                      <div className="col-8 mb-3">
                                        <h4>Abc Product</h4>
                                        <p>$100.00</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row justify-content-between align-items-start">
                                    <div className="col-12 border-top border-grey mt-4 pb-4" />
                                    {/* sub total */}
                                    <div className="col-7 mb-3">
                                      <p className="summary-title">Subtotal</p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="summary-value">$100.00</p>
                                    </div>
                                    {/* tax */}
                                    <div className="col-7 mb-3">
                                      <p className="summary-title">Tax 0%</p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="summary-value">$100.00</p>
                                    </div>
                                    {/* Shipping rates */}
                                    <div className="col-7 mb-3">
                                      <p className="summary-title">Shipping rates</p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="summary-value">$100.00</p>
                                    </div>
                                    <div className="col-12 border-top border-grey mb-2" />
                                    {/* grand total */}
                                    <div className="col-7 mb-3">
                                      <p className="grand-total">Grand Total</p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="grand-total-value">$100.00</p>
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-12 text-center">
                                      <a href="#" className="btn red-btn-solid mt-lg-4 mt-3 mx-auto py-2 px-4 text-capitalize">Proceed to Checkout</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="ship-to-different mt-4 text-center">
                                  <div className="checkbox-group">
                                    <input type="checkbox" id="html" />
                                    <label htmlFor="html">I Agree To The Terms And Conditions </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* PAYMENT TAB */}
                        <div className="tab">
                          <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-10">
                              <div className="checkout-form">
                                <h3>CHOOSE PAYMENT METHOD</h3>
                                <form>
                                  <div className="row my-4">
                                    <div className="col-lg-2 col-md-3 col-4">
                                      <div className="payment-method">
                                        <input type="radio" name="emotion" id="paypal" className="input-hidden" />
                                        <label htmlFor="paypal">
                                          <img src="images/paypal.png" alt="" className="img-fluid" />
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-4">
                                      <div className="payment-method">
                                        <input type="radio" name="emotion" id="apple" className="input-hidden" />
                                        <label htmlFor="apple">
                                          <img src="images/applepay.png" alt="" className="img-fluid" />
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-4">
                                      <div className="payment-method">
                                        <input type="radio" name="emotion" id="visa" className="input-hidden" />
                                        <label htmlFor="visa">
                                          <img src="images/visa.png" alt="" className="img-fluid" />
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-12 mt-5">
                                      <h4>Payment</h4>
                                    </div>
                                    <div className="col-6 mb-4">
                                      <label>Card Holder Name*</label>
                                      <input type="text" className="form-control" placeholder="Enter Card Holder Name" />
                                    </div>
                                    <div className="col-6 mb-4">
                                      <label>Card Number*</label>
                                      <input type="number" className="form-control" placeholder="Enter Card Number" />
                                    </div>
                                    <div className="col-6 mb-4">
                                      <label>CVV Number*</label>
                                      <input type="text" className="form-control" placeholder="Enter CVV" />
                                    </div>
                                    <div className="col-6 mb-4">
                                      <label>Expiry date*</label>
                                      <input type="date" className="form-control" placeholder="Enter Expiry Date" />
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="col-lg-3 col-lg-4 col-md-7 offset-lg-1">
                              <div className="order-summary has-margin">
                                <div className="order-summary-head">
                                  <p>Order Summary</p>
                                </div>
                                <div className="summary-details">
                                  <div className="product-cart-summary">
                                    <div className="row align-items-center justify-content-center">
                                      <div className="col-4 mb-3">
                                        <img src="images/summary-product-image.png" alt="" className="img-fluid" />
                                      </div>
                                      <div className="col-8 mb-3">
                                        <h4>Abc Product</h4>
                                        <p>$100.00</p>
                                      </div>
                                      <div className="col-4 mb-3">
                                        <img src="images/summary-product-image.png" alt="" className="img-fluid" />
                                      </div>
                                      <div className="col-8 mb-3">
                                        <h4>Abc Product</h4>
                                        <p>$100.00</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row justify-content-between align-items-start">
                                    <div className="col-12 border-top border-grey mt-4 pb-4" />
                                    {/* sub total */}
                                    <div className="col-7 mb-3">
                                      <p className="summary-title">Subtotal</p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="summary-value">$100.00</p>
                                    </div>
                                    {/* tax */}
                                    <div className="col-7 mb-3">
                                      <p className="summary-title">Tax 0%</p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="summary-value">$100.00</p>
                                    </div>
                                    {/* Shipping rates */}
                                    <div className="col-7 mb-3">
                                      <p className="summary-title">Shipping rates</p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="summary-value">$100.00</p>
                                    </div>
                                    <div className="col-12 border-top border-grey mb-2" />
                                    {/* grand total */}
                                    <div className="col-7 mb-3">
                                      <p className="grand-total">Grand Total</p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="grand-total-value">$100.00</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="ship-to-different mt-4 text-center">
                                  <div className="checkbox-group">
                                    <input type="checkbox" id="html" />
                                    <label htmlFor="html">I Agree To The Terms And Conditions </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* CONFIRMATION TAB */}
                      <div className="tab">
                        <div className="row">
                          <div className="col-xl-7 col-lg-7 col-md-10">
                            <div className="checkout-form">
                              <div className="table-responsive mb-5">
                                <table className="table table-borderless text-center" id="cart-table">
                                  <thead>
                                    <tr>
                                      <th>IMAGE</th>
                                      <th>PRODUCT</th>
                                      <th>QUANTITY</th>
                                      <th>UNIT PRICE</th>
                                      <th>Sub Total</th>
                                      <th>TAX</th>
                                      <th>  </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="cart-product">
                                          <img src="images/product-in-table.png" alt="" className="img-fluid mx-auto" />
                                        </div>
                                      </td>
                                      <td>Abc Product</td>
                                      <td>
                                        <div id="field1">
                                          <div className="quantifier ml-0">
                                            <button type="button" id="sub" className="minus"><i className="fas fa-minus" /></button>
                                            <input type="number" id={1} defaultValue={1} min={1} className="quantity p-md-2 p-0" max={10} />
                                            <button type="button" id="add" className="plus"><i className="fas fa-plus" /></button>
                                          </div>
                                        </div>
                                      </td>
                                      <td>£100.00</td>
                                      <td>£100.00</td>
                                      <td>£05.00</td>
                                      <td>
                                        <button type="button" className="btn trash-btn"><i className="far fa-trash-alt" /></button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="cart-product">
                                          <img src="images/product-in-table.png" alt="" className="img-fluid mx-auto" />
                                        </div>
                                      </td>
                                      <td>Abc Product</td>
                                      <td>
                                        <div id="field1">
                                          <div className="quantifier ml-0">
                                            <button type="button" id="sub" className="minus"><i className="fas fa-minus" /></button>
                                            <input type="number" id={1} defaultValue={1} min={1} className="quantity p-md-2 p-0" max={10} />
                                            <button type="button" id="add" className="plus"><i className="fas fa-plus" /></button>
                                          </div>
                                        </div>
                                      </td>
                                      <td>£100.00</td>
                                      <td>£100.00</td>
                                      <td>£05.00</td>
                                      <td>
                                        <button type="button" className="btn trash-btn"><i className="far fa-trash-alt" /></button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="cart-product">
                                          <img src="images/product-in-table.png" alt="" className="img-fluid mx-auto" />
                                        </div>
                                      </td>
                                      <td>Abc Product</td>
                                      <td>
                                        <div id="field1">
                                          <div className="quantifier ml-0">
                                            <button type="button" id="sub" className="minus"><i className="fas fa-minus" /></button>
                                            <input type="number" id={1} defaultValue={1} min={1} className="quantity p-md-2 p-0" max={10} />
                                            <button type="button" id="add" className="plus"><i className="fas fa-plus" /></button>
                                          </div>
                                        </div>
                                      </td>
                                      <td>£100.00</td>
                                      <td>£100.00</td>
                                      <td>£05.00</td>
                                      <td>
                                        <button type="button" className="btn trash-btn"><i className="far fa-trash-alt" /></button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-lg-4 col-md-7 offset-lg-1">
                            <div className="order-summary has-margin">
                              <div className="order-summary-head">
                                <p>Order Summary</p>
                              </div>
                              <div className="summary-details">
                                <div className="product-cart-summary">
                                  <div className="row align-items-center justify-content-center">
                                    <div className="col-4 mb-3">
                                      <img src="images/summary-product-image.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-8 mb-3">
                                      <h4>Abc Product</h4>
                                      <p>$100.00</p>
                                    </div>
                                    <div className="col-4 mb-3">
                                      <img src="images/summary-product-image.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-8 mb-3">
                                      <h4>Abc Product</h4>
                                      <p>$100.00</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="row justify-content-between align-items-start">
                                  <div className="col-12 border-top border-grey mt-4 pb-4" />
                                  {/* sub total */}
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">Subtotal</p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">$100.00</p>
                                  </div>
                                  {/* tax */}
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">Tax 0%</p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">$100.00</p>
                                  </div>
                                  {/* Shipping rates */}
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">Shipping rates</p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">$100.00</p>
                                  </div>
                                  <div className="col-12 border-top border-grey mb-2" />
                                  {/* grand total */}
                                  <div className="col-7 mb-3">
                                    <p className="grand-total">Grand Total</p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="grand-total-value">$100.00</p>
                                  </div>
                                </div>
                                <div className="row mt-4">
                                  <div className="col-12 text-center">
                                    <a href="#" className="btn red-btn-solid mt-lg-4 mt-3 mx-auto py-2 px-4 text-capitalize" data-toggle="modal" data-target="#confirmOrder">Place Order</a>
                                  </div>
                                </div>
                              </div>
                              <div className="ship-to-different mt-4 text-center">
                                <div className="checkbox-group">
                                  <input type="checkbox" id="html" />
                                  <label htmlFor="html">I Agree To The Terms And Conditions </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-left ml-3 ml-lg-0">
                        <button type="button" className="red-btn-outline" id="prevBtn" onclick="nextPrev(-1)">Back</button>
                        <button type="button" className="red-btn-solid" id="nextBtn" onclick="nextPrev(1)">
                          <a href="#" className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0">Continue</a>
                        </button>
                      </div>
                    </div></form>
                </div>
              </div>
            </div>
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
      </section>
      
    )
}

export default Checkout
