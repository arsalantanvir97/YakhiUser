import React from 'react'

const MyCart = () => {
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <section className="my-cart mt-5">
              <div className="row align-items-start">
                <div className="col-12 my-4">
                  <h2>My Cart</h2>
                </div>
                <div className="col-xl-9 col-md-12">
                  {/* cart table */}
                  <div className="table-responsive">
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
                <div className="col-xl-3 col-md-6 mt-lg-0 mt-5">
                  <div className="order-summary">
                    <div className="order-summary-head">
                      <p>Order Summary</p>
                    </div>
                    <div className="summary-details">
                      <div className="row justify-content-between align-items-start">
                        <div className="col-7 mb-3">
                          <p className="summary-title">Subtotal</p>
                        </div>
                        <div className="col-5 mb-3 text-right">
                          <p className="summary-value">$100.00</p>
                        </div>
                        <div className="col-7 mb-3">
                          <p className="summary-title">Tax 0%</p>
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
                        <div className="col-12 border-top border-grey mt-4" />
                      </div>
                      <div className="row mt-4">
                        <div className="col-12">
                          <h4 className="coupon-heading">Apply Coupon</h4>
                          <div className="input-group mb-3">
                            <input type="text" className="form-control coupon-field" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                              <span className="input-group-text" id="basic-addon2">Apply</span>
                            </div>
                          </div>
                          <a href="#" className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0 py-2 px-4 text-capitalize">Proceed to Checkout</a>
                        </div>
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

export default MyCart
