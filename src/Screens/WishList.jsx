import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { baseURL, imageURL } from '../utils/api'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import AllHerbs from '../components/AllHerbs'
import ToggleBack from '../components/ToggleBack'
import EmptyWishList from '../components/EmptyWishList'
import ImageLazyLoad from '../components/ImageLazyLoad'

const WishList = ({ history }) => {
  const [wishtlistuser, setwishtlistuser] = useState([])
  const [quantity, setquantity] = useState([])
  const [rerenderWishList, setrerenderWishList] = useState()
  const [loading, setloading] = useState(false)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    getUsersWishList()
  }, [rerenderWishList])

  const getUsersWishList = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    setloading(true)

    const res = await axios.get(`${baseURL}/wishList/userWishList`, config)
    setloading(false)

    console.log('res', res)
    setwishtlistuser(res?.data?.wishListofUser)
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
  const addToCartHandler = async (productId, qty) => {
    history.push(`/MyCart/${productId}?qty=${qty}`)
  }
  return (
    <>
      <div className='container-fluid pb-5'>
        <div className='row'>
          <div className='col-md-11 mx-auto'>
            <ToggleBack name={'WishList'} />

            <div className='my-cart '>
              <div className='row align-items-start'>
                <div className='col-12 my-4'>
                  {wishtlistuser?.length > 0 && <h2>Wishlist</h2>}
                  {/* {wishtlistuser?.length > 0 ? (
                ) : (
                  <h2>
                    Your Wishlist is Empty <Link to="/">Go Back</Link>
                  </h2>
                )} */}
                </div>
                {loading ? (
                  <Loader />
                ) : wishtlistuser?.length > 0 ? (
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
                          {wishtlistuser?.length > 0 &&
                            wishtlistuser?.map((wish, index) => (
                              <tr>
                                <td>
                                  <div className='cart-product'>
                                    <ImageLazyLoad
                                      src={
                                        wish?.product?.productimage?.length >
                                          0 &&
                                        `${imageURL}${wish?.product?.productimage[0]}`
                                      }
                                      classname='img-fluid mx-auto'
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
                                <td>
                                  <span className='instock-label'>
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
                                      addToCartHandler(wish?.product?._id, 1)
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
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <EmptyWishList />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllHerbs />
    </>
  )
}

export default WishList
