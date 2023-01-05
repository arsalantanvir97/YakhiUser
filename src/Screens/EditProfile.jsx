import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ImageSelector from '../components/ImageSelector'
import { updateUserInfoAction } from '../actions/userAction'
import Toasty from '../utils/toast'
import { validateEmail } from '../utils/ValidateEmail'
import { baseURL, imageURL } from '../utils/api'
import axios from 'axios'
import Swal from 'sweetalert2'
import moment from 'moment'
import ToggleBack from '../components/ToggleBack'

const EditProfile = ({ history }) => {
  const [loading, setloading] = useState(false)
  const [orderslogs, setorderslogs] = useState('')

  const [firstName, setfirstName] = useState()
  const [lastName, setlastName] = useState()

  const [email, setemail] = useState()
  const [wishtlistuser, setwishtlistuser] = useState([])
  const [rerenderWishList, setrerenderWishList] = useState()

  const [image, setimage] = useState()
  const [is_edit, setIsEdit] = useState(false)

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const cart = useSelector((state) => state?.cart)
  const { cartItems } = cart
  useEffect(() => {
    getUsersWishList()
  }, [rerenderWishList])

  const getUsersWishList = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const res = await axios.get(`${baseURL}/wishList/userWishList`, config)

    console.log('res', res)
    setwishtlistuser(res?.data?.wishListofUser)
  }
  useEffect(() => {
    if (userInfo) {
      setfirstName(userInfo?.firstName)
      setlastName(userInfo?.lastName)
      setimage(userInfo?.userImage)
      setemail(userInfo?.email)
    }
  }, [userInfo])

  const updateProfileData = async () => {
    const emailvalidation = validateEmail(email)
    console.log('emmmm', emailvalidation)
    console.log('addEmployeeHandler')
    console.log('image', image)
    if (emailvalidation == true) {
      if (firstName?.length > 0 && email.length > 0) {
        setloading(true)
        const formData = new FormData()
        formData.append('user_image', image)
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        formData.append('email', email)

        const body = formData
        await dispatch(updateUserInfoAction(body, history))
        setloading(false)

        setIsEdit(false)
      } else {
        setloading(false)
        Toasty('error', `Please fill out all the required fields`)
      }
    } else {
      setloading(false)
      Toasty('error', `Please enter a valid email`)
    }
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
  const addToCartHandler = async (productId, qty) => {
    history.push(`/MyCart/${productId}?qty=${qty}`)
  }
  const deleteWishHandler = async (id, del) => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const res = await axios.get(`${baseURL}/wishList/deleteAWish/${id}`, config)
    if (res?.status == 200) {
      let existing = localStorage.getItem('wishlist')
        ? JSON.parse(localStorage.getItem('wishlist'))
        : []
      console.log('existing', existing, del)
      existing = existing.filter((exe) => {
        console.log('exos', exe, del)
        return exe !== del
      })
      console.log('existing2', existing)
      localStorage.setItem('wishlist', JSON.stringify(existing))
      setrerenderWishList(!rerenderWishList)
      Swal.fire({
        icon: 'success',
        title: '',
        text: 'Removed Successfully',
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }
  useEffect(() => {
    getSchedules()
  }, [])

  const getSchedules = async () => {
    setloading(true)
    try {
      const res = await axios({
        url: `${baseURL}/order/orderlogs/${userInfo?._id}`,
        method: 'GET',
        params: {
          page: 1,
          perPage: 10,
          searchString: '',
          from: '',
          to: '',
          status: true,
        },
      })
      setloading(false)

      console.log('res', res)
      setorderslogs(res.data?.order)
    } catch (err) {
      setloading(false)

      console.log('err', err)
    }
    setloading(false)
  }
  return (
    <>
      <div className='app-content content dashboard'>
        <div className='content-wrapper'>
          <div className='content-body'>
            {/* Basic form layout section start */}
            <section id='configuration' className='edit-profile'>
              <div className='row'>
                <div className='col-12'>
                  <ToggleBack name={'My Account'} />
                  <div className='card rounded pad-20'>
                    <div className='card-body p-md-2 p-lg-3 p-xl-4'>
                      <div className='page-title'>
                        <div className='row'>
                          {/* <div className="col-12">
                          <h1>
                            <Link to="/Dashboard">
                              <i className="fa fa-angle-left" />
                            </Link>
                            {is_edit ? "Edit profile" : "My Profile"}
                          </h1>
                        </div> */}
                        </div>
                      </div>
                      <div className='user-block'>
                        <div className='row justify-content-center'>
                          <div className='col-12 col-lg-10 col-md-8 col-xl-5 light-primary-bg text-center'>
                            <div className='d-flex justify-content-center mb-3'>
                              <div className='main-over-box'>
                                <ImageSelector
                                  setImage={setimage}
                                  image={image}
                                  is_edit={is_edit}
                                />
                              </div>
                            </div>
                            {/* {!is_edit && (
                            <div className="col-12 mb-3">
                              <Link to="/UpdatePassword">Change Password</Link>
                            </div>
                          )} */}
                            <div className='row detail-row d-flex align-items-center justify-content-around px-3'>
                              <div className='col-md-6 col-12 text-left mb-3 lablename'>
                                <label htmlFor>First Name:</label>
                              </div>
                              <div className='col-md-6 col-12 text-left mb-3'>
                                {is_edit ? (
                                  <input
                                    type='text'
                                    className='form-control cutum-input'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Full Name'
                                    value={firstName}
                                    onChange={(e) => {
                                      setfirstName(e.target.value)
                                    }}
                                  />
                                ) : (
                                  <p>{firstName}</p>
                                )}
                              </div>
                              <div className='col-md-6 col-12 text-left mb-3 lablename'>
                                <label htmlFor>Last Name:</label>
                              </div>
                              <div className='col-md-6 col-12 text-left mb-3'>
                                {is_edit ? (
                                  <input
                                    type='text'
                                    className='form-control cutum-input'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Last Name'
                                    value={lastName}
                                    onChange={(e) => {
                                      setlastName(e.target.value)
                                    }}
                                  />
                                ) : (
                                  <p>{lastName}</p>
                                )}
                              </div>
                              <div className='col-md-6 col-12 text-left mb-3 lablename'>
                                <label htmlFor>Email Address:</label>
                              </div>
                              <div className='col-md-6 col-12 text-left mb-3'>
                                {is_edit ? (
                                  <input
                                    type='email'
                                    className='form-control cutum-input'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => {
                                      setemail(e.target.value)
                                    }}
                                  />
                                ) : (
                                  <p>{email}</p>
                                )}
                              </div>
                              <div className='col-md-6 col-12 text-left mb-3 lablename'>
                                <label htmlFor>Account Created At:</label>
                              </div>
                              <div className='col-md-6 col-12 text-left mb-3'>
                                <p>
                                  {' '}
                                  {moment.utc(userInfo?.createdAt).format('LL')}
                                </p>
                              </div>
                            </div>

                            <div className='row detail-row d-flex align-items-center mb-1'>
                              <div className='col-12'>
                                {!loading ? (
                                  <Link
                                    to='#'
                                    onClick={() => {
                                      if (!is_edit) {
                                        setIsEdit(true)
                                      } else {
                                        updateProfileData()
                                      }
                                    }}
                                    className='btn btn-primary btn-fixed-190 update-btn-profile'
                                  >
                                    Update
                                  </Link>
                                ) : (
                                  <i className='fas fa-spinner fa-pulse'></i>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>{' '}
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-11 mx-auto'>
                  <section className='my-cart mt-5'>
                    <div className='row align-items-start'>
                      <div className='col-12 my-4'>
                        <h2>Cart</h2>
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
                                      <td>{cart?.qty}</td>

                                      <td>${cart?.price}</td>
                                      <td>${cart?.qty * cart?.price}</td>
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
                                        (acc, item) =>
                                          acc + item.qty * item.price,
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
                                        (acc, item) =>
                                          acc + item.qty * item.price,
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
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-11 mx-auto'>
                  <section className='my-cart mt-5'>
                    <div className='row align-items-start'>
                      <div className='col-12 my-4'>
                        <h2>Wishlist</h2>
                        {/* {wishtlistuser?.length > 0 ? (
                ) : (
                  <h2>
                    Your Wishlist is Empty <Link to="/">Go Back</Link>
                  </h2>
                )} */}
                      </div>

                      <div className='col-xl-11 col-md-12'>
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
                                {/* <th>QUANTITY</th> */}
                                <th>UNIT PRICE</th>
                                <th>Availability</th>
                                <th>Add to Cart</th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              {wishtlistuser?.length > 0 ? (
                                wishtlistuser?.map((wish, index) => (
                                  <tr>
                                    <td>
                                      <div className='cart-product'>
                                        <img
                                          src={
                                            wish?.product?.productimage
                                              ?.length > 0 &&
                                            `${imageURL}${wish?.product?.productimage[0]}`
                                          }
                                          alt=''
                                          className='img-fluid mx-auto'
                                        />
                                      </div>
                                    </td>
                                    <td>{wish?.product?.name}</td>
                                    {/* <td>
                              <div id="field1">
                                <div className="quantifier ml-0">
                                  <button
                                    type="button"
                                    id="sub"
                                    className="minus"
                                    value={quantity[index]}
                                    onClick={() =>
                                      setquantity(quantity[index] - 1)
                                    }
                                  >
                                    <i className="fas fa-minus" />
                                  </button>
                                  <input
                                    type="number"
                                    id={1}
                                    min={1}
                                    className="quantity p-md-2 p-0"
                                    max={10}
                                    value={quantity[index]}
                                    onChange={(e) => {
                                      setquantity(Number(e.target.value));
                                    }}
                                    max={wish?.countInStock}
                                  />
                                  <button
                                    type="button"
                                    id="add"
                                    className="plus"
                                    value={quantity[index]}
                                    onClick={() => {}}
                                  >
                                    <i className="fas fa-plus" />
                                  </button>
                                </div>
                              </div>
                            </td> */}
                                    <td>${wish?.product?.price}</td>
                                    <td style={{ minWidth: '100%' }}>
                                      <span
                                        className='instock-label'
                                        style={{ minWidth: '100%' }}
                                      >
                                        {wish?.product?.countInStock > 0
                                          ? 'In Stock'
                                          : 'Out of Stock'}
                                      </span>
                                    </td>
                                    <td>
                                      <button
                                        type='button'
                                        className='btn cart-button'
                                        onClick={() => {
                                          addToCartHandler(
                                            wish?.product?._id,
                                            1
                                          )
                                        }}
                                        // onClick={() => {
                                        //   !userInfo
                                        //     ? UnauthorizedAlert()
                                        //     : history?.push(
                                        //         `/GeoGeneticsCheckout/${geo?._id}?qty=${1}`
                                        //       )
                                        // }}
                                        title='Add to cart'
                                      >
                                        <i className='fal fa-shopping-cart' />
                                      </button>
                                    </td>
                                    <td>
                                      <button
                                        type='button'
                                        className='btn trash-btn'
                                        onClick={() => {
                                          deleteWishHandler(
                                            wish?._id,
                                            wish?.product?._id
                                          )
                                        }}
                                      >
                                        <i className='far fa-trash-alt' />
                                      </button>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <p
                                  style={{ textAlign: 'center' }}
                                  className='mt-4'
                                >
                                  {' '}
                                  WishList Empty
                                </p>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-11 mx-auto'>
                  <div className='row align-items-start'>
                    <div className='col-12 my-4'>
                      <h2 className='mb-2'>Orders</h2>
                      <div className='table-responsive'>
                        <table className='table table-borderless'>
                          <thead>
                            <tr>
                              <th scope='col'>S.No.</th>
                              <th scope='col'>Order ID.</th>
                              <th scope='col'>Order Date</th>

                              <th scope='col'>Quantity</th>
                              <th scope='col'>Amount Paid</th>
                              <th scope='col'>Order Status</th>
                              <th scope='col'>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orderslogs?.docs?.length > 0 ? (
                              orderslogs?.docs?.map((ord, index) => (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>{ord?._id}</td>
                                  <td>
                                    {' '}
                                    {moment.utc(ord?.createdAt).format('LL')}
                                  </td>

                                  <td>{ord?.orderItems?.length}</td>
                                  <td>
                                    $
                                    {ord?.isPaid == false ? 0 : ord?.totalPrice}
                                  </td>
                                  <td>
                                    <span className='stat-pending'>
                                      {ord?.status}
                                    </span>
                                  </td>
                                  <td>
                                    <div className='dropdown'>
                                      <button
                                        className='btn dropdown-toggle action-btn'
                                        type='button'
                                        id='dropdownMenuButton'
                                        data-toggle='dropdown'
                                        aria-expanded='false'
                                      >
                                        <i className='fas fa-ellipsis-v' />
                                      </button>
                                      <div
                                        className='dropdown-menu action-menu'
                                        aria-labelledby='dropdownMenuButton'
                                      >
                                        <Link
                                          className='dropdown-item'
                                          to={`/OrderLogDetail/${ord._id}`}
                                        >
                                          <i className='fas fa-eye mr-2 grey' />
                                          View
                                        </Link>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <p
                                style={{ textAlign: 'center' }}
                                className='mt-4'
                              >
                                {' '}
                                No Orders
                              </p>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile
