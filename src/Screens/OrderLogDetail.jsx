import React from 'react'

const OrderLogDetail = () => {
    return (
        <div className="container-fluid mt-5">
  <div className="row">
    <div className="col-md-11 mx-auto">
      <section className="my-cart">
        <div className="row mb-5">
          <div className="col-12 my-4">
            <h2>Order Log</h2>
          </div>
          <div className="col-12 text-right">
            <p>Status <span className="stat-pending ml-2">Pending</span></p>
          </div>
          {/* ORDER DETAILS */}
          <div className="col-xl-8 col-lg-10 col-12 mt-5 mt-md-0">
            <div className="order-details">
              <h3>ORDER DETAILS</h3>
              <div className="row align-items-start justify-content-between mt-4">
                <div className="col-lg-6 col-12">
                  <div className="row align-items-center">
                    <div className="col-6 mb-3">
                      <p>Name</p>
                    </div>
                    <div className="col-6 mb-3">
                      <p>Abc</p>
                    </div>
                    <div className="col-6 mb-3">
                      <p>Email Address</p>
                    </div>
                    <div className="col-6 mb-3">
                      <p>abc@xyz.com</p>
                    </div>
                    <div className="col-6 mb-3">
                      <p>Date</p>
                    </div>
                    <div className="col-6 mb-3">
                      <p>mm/dd/yyyy</p>
                    </div>
                    <div className="col-6 mb-3">
                      <p>Phone Number</p>
                    </div>
                    <div className="col-6 mb-3">
                      <p>+012 345 6789</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="row align-items-center">
                    <div className="col-6 mb-3">
                      <p>ORDER ID</p>
                    </div>
                    <div className="col-6 mb-3">
                      <p>Abt 001</p>
                    </div>
                    <div className="col-6 mb-3">
                      <p>Payment Method</p>
                    </div>
                    <div className="col-6 mb-3">
                      <p>ads</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-start justify-content-between mt-5">
                <div className="col-lg-6 col-12 mt-3">
                  <h3 className="mb-3">Billing Address</h3>
                  <p className="adrs">Abc Street Here</p>
                  <p className="adrs">City</p>
                  <p className="adrs">Country</p>
                  <p className="adrs">State</p>
                  <p className="adrs">Zipcode</p>
                </div>
                <div className="col-lg-6 col-12 mt-3">
                  <h3 className="mb-3">SHIPPING Address</h3>
                  <p className="adrs">Abc Street Here</p>
                  <p className="adrs">City</p>
                  <p className="adrs">Country</p>
                  <p className="adrs">State</p>
                  <p className="adrs">Zipcode</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-start">
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
                  <div className="col-12 text-center mt-4">
                    <a href="#" className="btn red-btn-solid mt-lg-4 mt-3 mx-auto py-2 px-4 text-capitalize">Proceed to Checkout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center mt-5">
          <div className="about-bottom-banner">
            <h3>All Herbs Are Organic Alkaline and Are Naturally Wildcrafted from the Land of their Origin</h3>
            <p>All herbs used in our products are 100% naturally organic and are selectively picked and tested by a laboratory before use. Each herbal compound is personally prepared with gratification for the purpose of restoring health to our clients.</p>
          </div>
        </div>
      </section></div>
  </div>
</div>

    )
}

export default OrderLogDetail
