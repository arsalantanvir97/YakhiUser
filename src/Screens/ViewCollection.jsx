import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { baseURL, imageURL } from '../utils/api'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Pagination from '../components/Padgination'
import InnerPageBanner from './InnerPageBanner'
import UnauthorizedAlert from '../components/UnauthorizedAlert'
import InputNumber from '../components/InputNumber'
import { CreateWishList } from '../hooks/WishList'
import AllHerbs from '../components/AllHerbs'
let allcategoryofProducts = []
const ViewCollection = ({ history, match }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [searchString, setSearchString] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [status, setStatus] = useState('')
  const [category, setcategory] = useState('')
  const [latestfilter, setlatestfilter] = useState('')
  const [sort, setsort] = useState('')
  const [pricefrom, setpricefrom] = useState()
  const [priceto, setpriceto] = useState()
  const [productlogs, setproductlogs] = useState('')
  const [renderproductcategories, setrenderproductcategories] = useState([])

  useEffect(() => {
    getProducts()
  }, [
    page,
    perPage,
    from,
    to,
    status,
    searchString,
    category,
    sort,
    priceto,
    pricefrom,
  ])

  const categoryid =
    match?.params?.id == 'HerbalTea'
      ? 'Herbal Tea'
      : match?.params?.id == 'HerbalCapsules'
      ? 'Herbal Capsules'
      : match?.params?.id == 'Herbal'
      ? 'Herbal'
      : null
  console.log('categoryid', categoryid)

  const getProducts = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/product/productbycategorylogs/${categoryid}`,
        method: 'GET',
        params: {
          page,
          perPage,
          searchString,
          from,
          to,
          status,
          category,
          sort,
          priceto,
          pricefrom,
        },
      })

      console.log('res', res)
      setproductlogs(res.data?.product)
      if (allcategoryofProducts?.length == 0) {
        res.data?.product?.docs?.map((prod) => {
          console.log('prod', prod)
          if (allcategoryofProducts?.includes(prod.categoryz)) {
            console.log('blockkk')
          } else {
            allcategoryofProducts.push(prod.category)
            console.log('allcategoryofProducts', allcategoryofProducts)
          }
          setrenderproductcategories([...allcategoryofProducts])
        })
      }
    } catch (err) {
      console.log('err', err)
    }
  }
  const addToCartHandler = async (productId, qty) => {
    history.push(`/MyCart/${productId}?qty=${qty}`)
  }

  useEffect(() => {
    console.log('allcategoryofProducts', allcategoryofProducts)
  }, [allcategoryofProducts])
  return (
    <>
      <section className='capsules'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-11 mx-auto'>
              <div className='row justify-content-center my-5 py-5'>
                <div className='col-lg-3 col-md-10'>
                  <button
                    className='btn btn-categories'
                    type='button'
                    data-toggle='collapse'
                    data-target='#waterFilters'
                    aria-expanded='true'
                    aria-controls='waterFilters'
                  >
                    Product Categories
                  </button>
                  <div className='collapse' id='waterFilters'>
                    <div className='card card-body categories-body px-0'>
                      {/* categories */}
                      <ul className='px-4'>
                        {renderproductcategories?.length > 0 &&
                          renderproductcategories?.map((prod, index) => (
                            <li className='mb-4'>
                              <Link
                                to='#'
                                onClick={() => {
                                  setcategory(prod)
                                }}
                              >
                                {prod}
                              </Link>
                            </li>
                          ))}
                      </ul>
                      {/* Sorted By */}
                      <h4 className='border-bottom border-grey sidebar-heading px-4'>
                        Sorted By
                      </h4>
                      <ul className='px-4 pt-3'>
                        <li className='mb-4'>
                          <Link to='#'>Popularity</Link>{' '}
                        </li>
                        <li className='mb-4'>
                          <Link to='#'>Avg. Rating</Link>{' '}
                        </li>
                        <li className='mb-4'>
                          <Link
                            to='#'
                            onClick={() => {
                              setsort('latest')
                            }}
                          >
                            Latest
                          </Link>
                        </li>
                        <li className='mb-4'>
                          <Link
                            to='#'
                            onClick={() => {
                              setsort('asc')
                            }}
                          >
                            Price Low To High
                          </Link>
                        </li>
                        <li className='mb-4'>
                          <Link
                            to='#'
                            onClick={() => {
                              setsort('des')
                            }}
                          >
                            Price High To Low
                          </Link>
                        </li>
                      </ul>
                      {/* Price Range */}
                      <h4 className='border-bottom border-grey sidebar-heading px-4'>
                        Price Range
                      </h4>
                      <form className='form-inline mt-3'>
                        <InputNumber
                          value={pricefrom}
                          onChange={setpricefrom}
                          max={12}
                          className='form-control mb-2 mr-sm-2 range-field'
                        />

                        <label htmlFor>To</label>
                        <InputNumber
                          value={priceto}
                          onChange={setpriceto}
                          max={12}
                          className='form-control mb-2 mr-sm-2 range-field'
                        />
                      </form>
                      {/* Rating */}
                      <h4 className='border-bottom border-grey sidebar-heading px-4 my-4'>
                        Rating
                      </h4>
                      <ul className='list-inline px-4 py-2'>
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
                      <ul className='list-inline px-4  py-2'>
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
                      <ul className='list-inline px-4  py-2'>
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
                      <ul className='list-inline px-4  py-2'>
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
                      <ul className='list-inline px-4 py-2'>
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
                    </div>
                  </div>
                </div>
                <div className='col-lg-9 col-md-10 my-4 my-lg-0'>
                  <div className='row justify-content-between align-items-center mb-4'>
                    <div className='col-12 mb-3'>
                      <div className='search'>
                        <input
                          type='text'
                          className='searchTerm form-control'
                          placeholder='What are you looking for?'
                          value={searchString}
                          onChange={(e) => {
                            setSearchString(e.target.value)
                            setPage(1)
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              getProducts()
                            }
                          }}
                        />
                        <button type='submit' className='clearBtn'>
                          <i className='fas fa-times' />
                        </button>
                      </div>
                    </div>
                    <div className='col-md-6 col-4'>
                      <form action className='form-inline'>
                        <label htmlFor='sortBy' className='sortby-label'>
                          Sorted By
                        </label>
                        <select
                          className='form-control ml-md-4'
                          id='sortBy'
                          value={sort}
                          onChange={(e) => {
                            setsort(e.target.value)
                          }}
                        >
                          <option value={'nameasc'}>A - Z</option>
                          <option value={'namedes'}>Z - A</option>
                        </select>
                      </form>
                    </div>
                    {/* <div className="col-md-6 col-8 text-right">
                      <p className="showing-results">
                        Showing 1–09 of 50 results
                      </p>
                    </div> */}
                  </div>
                  {/* products grid */}
                  <div className='row'>
                    {productlogs?.docs?.length > 0 &&
                      productlogs?.docs?.map((prod, index) => (
                        <div className='col-xl-4 col-md-6'>
                          <div className='product-card'>
                            <button
                              type='button'
                              className='wishlist-btn'
                              onClick={() => {
                                CreateWishList(prod, history)
                              }}
                            >
                              <i className='wishlist-icon fas fa-heart maroon' />
                            </button>
                            <Link to={`/ProductView/${prod?._id}`}>
                              {' '}
                              <img
                                style={{
                                  height: 242,
                                  width: 242,
                                }}
                                src={`${imageURL}${prod?.productimage}`}
                                alt=''
                                className='img-fluid'
                              />{' '}
                            </Link>
                            <h5 className='product-name'>
                              <Link to='#'> {prod?.name}</Link>
                            </h5>
                            <ul className='list-inline py-2'>
                              <li className='list-inline-item'>
                                <i
                                  style={{ color: '#F3DE43' }}
                                  className={
                                    prod?.rating >= 1
                                      ? 'fas fa-star'
                                      : prod?.rating >= 0.5
                                      ? 'fas fa-star-half-alt'
                                      : 'far fa-star'
                                  }
                                />
                              </li>
                              <li className='list-inline-item'>
                                <i
                                  style={{ color: '#F3DE43' }}
                                  className={
                                    prod?.rating >= 2
                                      ? 'fas fa-star'
                                      : prod?.rating >= 1.5
                                      ? 'fas fa-star-half-alt'
                                      : 'far fa-star'
                                  }
                                />
                              </li>
                              <li className='list-inline-item'>
                                <i
                                  style={{ color: '#F3DE43' }}
                                  className={
                                    prod?.rating >= 3
                                      ? 'fas fa-star'
                                      : prod?.rating >= 2.5
                                      ? 'fas fa-star-half-alt'
                                      : 'far fa-star'
                                  }
                                />
                              </li>
                              <li className='list-inline-item'>
                                <i
                                  style={{ color: '#F3DE43' }}
                                  className={
                                    prod?.rating >= 4
                                      ? 'fas fa-star'
                                      : prod?.rating >= 3.5
                                      ? 'fas fa-star-half-alt'
                                      : 'far fa-star'
                                  }
                                />
                              </li>
                              <li className='list-inline-item'>
                                <i
                                  style={{ color: '#F3DE43' }}
                                  className={
                                    prod?.rating >= 5
                                      ? 'fas fa-star'
                                      : prod?.rating >= 4.5
                                      ? 'fas fa-star-half-alt'
                                      : 'far fa-star'
                                  }
                                />
                              </li>
                            </ul>
                            <div className='row justify-content-between align-items-center mt-3'>
                              <div className='col-4'>
                                <p className='p-price'>Price</p>
                                <span>${prod?.price}</span>
                              </div>
                              <div className='col-8 text-right'>
                                <Link
                                  to='#'
                                  className='btn maroon-btn-solid '
                                  onClick={() => {
                                    userInfo
                                      ? addToCartHandler(prod?._id, 1)
                                      : UnauthorizedAlert()
                                  }}
                                >
                                  <img
                                    src='images/add-to-cart.png'
                                    alt=''
                                    className='img-fluid mr-2 pt-1'
                                  />
                                  Add to cart
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* pagination */}
                </div>
                <div
                  style={{
                    width: '100%',
                    height: 100,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {productlogs?.docs?.length > 0 && (
                    <Pagination
                      totalDocs={productlogs?.totalDocs}
                      totalPages={productlogs?.totalPages}
                      currentPage={productlogs?.page}
                      setPage={setPage}
                      hasNextPage={productlogs?.hasNextPage}
                      hasPrevPage={productlogs?.hasPrevPage}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AllHerbs />
    </>
  )
}

export default ViewCollection
