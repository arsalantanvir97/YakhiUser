import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartAction'
import { useDispatch, useSelector } from 'react-redux'
import { imageURL } from '../utils/api'
import Toasty from '../utils/toast'
import AllHerbs from '../components/AllHerbs'
import ToggleBack from '../components/ToggleBack'
let qtybool = false
const MyCart = ({ match, location, history }) => {
  const productId = match?.params?.id

  const qty = location?.search ? Number(location?.search?.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state?.cart)
  const { cartItems } = cart
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    console.log('removeFromCartHandler', removeFromCartHandler)
    dispatch(removeFromCart(id))
  }

  const subQuantity = async (prod, qty) => {
    console.log('cart?.product', prod, qty)
    qty == 0 || qty <= 0
      ? dispatch(addToCart(prod, Number(qty + 0)))
      : dispatch(addToCart(prod, Number(qty - 1)))
  }
  const checkCartQty = () => {
    let arr = []
    cartItems?.length > 0 &&
      cartItems?.map((cart) => {
        cart?.qty > 0 ? arr.push(0) : arr.push(1)
      })
    console.log('arr', arr)
    if (arr?.includes(1)) {
      Toasty('error', `Quantity of all items must be greater than 0`)
    } else {
      history?.push('/Checkout')
    }
  }
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-11 mx-auto'>
            <ToggleBack name={`My Cart`} />
            <section className='my-cart mt-5'>
              <div className='row align-items-start'>
                <div className='col-12 my-4'>
                  {cartItems?.length > 0 ? (
                    <h2>My Cart</h2>
                  ) : (
                    <h2>
                      Your Cart is Empty <Link to='/'>Go Back</Link>
                    </h2>
                  )}
                </div>

                {cartItems?.length > 0 && (
                  <div className='col-xl-9 col-md-12'>
                    {/* cart table */}
                    <div className='table-responsive'>
                      <table
                        className='table table-borderless text-center'
                        id='cart-table'
                      >
                        <thead>
                          <tr>
                            <th>IMAGE</th>
                            <th>PRODUCT</th>
                            <th>QUANTITY</th>
                            <th>UNIT PRICE</th>
                            <th>Sub Total</th>

                            <th> </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* <tr>
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
                          <td>$100.00</td>
                          <td>$100.00</td>
                          <td>$05.00</td>
                          <td>
                            <button type="button" className="btn trash-btn"><i className="far fa-trash-alt" /></button>
                          </td>
                        </tr> */}
                          {/* <tr>
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
                          <td>$100.00</td>
                          <td>$100.00</td>
                          <td>$05.00</td>
                          <td>
                            <button type="button" className="btn trash-btn"><i className="far fa-trash-alt" /></button>
                          </td>
                        </tr> */}
                          {cartItems?.length > 0 &&
                            cartItems?.map((cart) => (
                              <tr>
                                <td>
                                  <div className='cart-product'>
                                    <img
                                      src={`${imageURL}${cart?.image[0]}`}
                                      alt=''
                                      className='img-fluid mx-auto'
                                      style={{ width: 96, height: 83 }}
                                    />
                                  </div>
                                </td>
                                <td>{cart?.name}</td>
                                <td>
                                  <div id='field1'>
                                    <div className='quantifier ml-0'>
                                      <button
                                        type='button'
                                        id='sub'
                                        className='minus'
                                        value={cart?.qty}
                                        onClick={() =>
                                          // dispatch(
                                          //   addToCart(
                                          //     cart?.product,
                                          //     Number(cart?.qty - 1)
                                          //   )
                                          // )
                                          subQuantity(cart?.product, cart?.qty)
                                        }
                                      >
                                        <i className='fas fa-minus' />
                                      </button>
                                      <input
                                        type='number'
                                        id={1}
                                        value={cart?.qty}
                                        onChange={(e) =>
                                          dispatch(
                                            addToCart(
                                              cart?.product,
                                              Number(e.target.value)
                                            )
                                          )
                                        }
                                        min={1}
                                        className='quantity p-md-2 p-0'
                                        max={cart?.countInStock}
                                      />
                                      <button
                                        type='button'
                                        id='add'
                                        className='plus'
                                        value={cart?.qty}
                                        onClick={() =>
                                          dispatch(
                                            addToCart(
                                              cart?.product,
                                              Number(cart?.qty + 1)
                                            )
                                          )
                                        }
                                      >
                                        <i className='fas fa-plus' />
                                      </button>
                                    </div>
                                  </div>
                                </td>
                                <td>${cart?.price}</td>
                                <td>${cart?.qty * cart?.price}</td>

                                <td>
                                  <button
                                    type='button'
                                    className='btn trash-btn'
                                    onClick={() =>
                                      removeFromCartHandler(cart?.product)
                                    }
                                  >
                                    <i className='far fa-trash-alt' />
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {cartItems?.length > 0 && (
                  <div className='col-xl-3 col-md-6 mt-lg-0 mt-5'>
                    <div className='order-summary'>
                      <div className='order-summary-head'>
                        <p>Order Summary</p>
                      </div>
                      <div className='summary-details'>
                        <div className='row justify-content-between align-items-start'>
                          <div className='col-7 mb-3'>
                            <p className='summary-title'>Subtotal</p>
                          </div>
                          <div className='col-5 mb-3 text-right'>
                            <p className='summary-value'>
                              ${' '}
                              {cartItems
                                .reduce(
                                  (acc, item) => acc + item.qty * item.price,
                                  0
                                )
                                .toFixed(2)}
                            </p>
                          </div>
                          <div className='col-7 mb-3'>
                            <p className='summary-title'>Tax </p>
                          </div>
                          <div className='col-5 mb-3 text-right'>
                            <p className='summary-value'>to be counted</p>
                          </div>
                          <div className='col-12 border-top border-grey mb-2' />
                          {/* grand total */}
                          <div className='col-7 mb-3'>
                            <p className='grand-total'>Grand Total</p>
                          </div>
                          <div className='col-5 mb-3 text-right'>
                            <p className='grand-total-value'>
                              $
                              {cartItems
                                .reduce(
                                  (acc, item) => acc + item.qty * item.price,
                                  0
                                )
                                .toFixed(2)}
                            </p>
                          </div>
                          <div className='col-12 border-top border-grey mt-4' />
                        </div>
                        <div className='row mt-4'>
                          <div className='col-12'>
                            {/* <h4 className="coupon-heading">Apply Coupon</h4> */}
                            <div className='input-group mb-3'>
                              {/* <input
                              type="text"
                              className="form-control coupon-field"
                              aria-describedby="basic-addon2"
                            /> */}
                              {/* <div className="input-group-append">
                              <span
                                className="input-group-text"
                                id="basic-addon2"
                              >
                                Apply
                              </span>
                            </div> */}
                            </div>
                            <Link
                              to='#'
                              onClick={() => {
                                checkCartQty()
                              }}
                              className='btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0 py-2 px-4 text-capitalize'
                            >
                              Proceed to Checkout
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
      <AllHerbs />
    </>
  )
}

export default MyCart
