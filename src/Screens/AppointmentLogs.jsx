import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { baseURL, imageURL } from '../utils/api'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Pagination from '../components/Padgination'
import Loader from '../components/Loader'
import AllHerbs from '../components/AllHerbs'
import ToggleBack from '../components/ToggleBack'
import EmptyAppointment from '../components/EmptyAppointment'

const AppointmentLogs = () => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [searchString, setSearchString] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [status, setStatus] = useState('')
  const [orderslogs, setorderslogs] = useState('')
  const [loading, setloading] = useState(false)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    getSchedules()
  }, [page, perPage, from, to, status, searchString])

  const getSchedules = async () => {
    setloading(true)
    try {
      const res = await axios({
        url: `${baseURL}/consultationRoutes/userlogs`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
        params: {
          page,
          perPage,
          id: userInfo?._id,
          searchString,
          from,
          to,
          status,
        },
      })
      setloading(false)

      console.log('res', res)
      setorderslogs(res.data?.consultation)
    } catch (err) {
      console.log('err', err)
      setloading(false)
    }
    setloading(false)
  }
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-11 mx-auto'>
            <ToggleBack name={'Appointments'} />

            <section className='my-cart mt-5'>
              {orderslogs?.docs?.length > 0 ? (
                <div className='row align-items-start'>
                  <div className='col-12 my-4'>
                    <h2>My Appointments</h2>
                  </div>
                  <div className='col-md-12'>
                    <div className='order-log'>
                      <div className='log-sort'>
                        {orderslogs?.docs?.length > 0 && (
                          <div className='row'>
                            <div className='col'>
                              <label>Show Entries:</label>
                              <select className='form-control logSelect'>
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                              </select>
                            </div>
                            <div className='col'>
                              <label>Sort By:</label>
                              <div className>
                                <div className='form-group mr-2 my-1'>
                                  <label htmlFor>From</label>
                                  <DatePicker
                                    selected={from}
                                    onChange={(from) => setFrom(from)}
                                    className='sort-date customdate form-control'
                                  />{' '}
                                </div>
                              </div>
                            </div>
                            <div className='col'>
                              <label>Sort By:</label>
                              <div className>
                                <div className='form-group my-1'>
                                  <label htmlFor>To</label>
                                  <DatePicker
                                    selected={to}
                                    onChange={(to) => setTo(to)}
                                    className='sort-date customdate form-control'
                                  />{' '}
                                </div>
                              </div>
                            </div>
                            {/* <div className="col">
                        <label>Status:</label>
                        <select
                          className="form-control logSelect"
                          value={status}
                          onChange={(e) => {
                            setStatus(e.target.value);
                            setPage(1);
                          }}
                        >
                          <option value={""}>All</option>
                          <option value={"Pending"}>Pending</option>
                          <option value={"Refunded"}>Refunded</option>
                          <option value={"Delivered"}>Delivered</option>
                          <option value={"In Process"}>In Process</option>
                          <option value={"Paid"}>Paid</option>
                        </select>
                      </div> */}
                            <div className='col-5'>
                              <label>Search here</label>
                              <input
                                type='text'
                                className='searchbox form-control logSelect'
                                placeholder='Search'
                                value={searchString}
                                onChange={(e) => {
                                  setSearchString(e.target.value)
                                  setPage(1)
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    getSchedules()
                                  }
                                }}
                              />
                            </div>
                          </div>
                        )}
                        {loading ? (
                          <Loader />
                        ) : (
                          <div className='row px-2'>
                            <div className='col-12'>
                              <div className='log-table'>
                                <div className='table-responsive'>
                                  <table className='table table-borderless'>
                                    <thead>
                                      <tr>
                                        <th className>S. No.</th>

                                        <th scope='col'>Appointment Date</th>
                                        <th scope='col'>Appointment Time</th>
                                        <th scope='col'>Status</th>
                                        <th scope='col'>ACTION</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {orderslogs?.docs?.length > 0 ? (
                                        orderslogs?.docs?.map((ord, index) => (
                                          <tr>
                                            <td>{index + 1}</td>

                                            <td>{ord?.appointmentdate}</td>
                                            <td>{ord?.appointmenttime}</td>
                                            <td>{ord?.status}</td>
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
                                                    to={`/AppointmentDetails/${ord._id}`}
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
                                        <p>No Appointments</p>
                                      )}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: 100,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {orderslogs?.docs?.length > 0 && (
                        <Pagination
                          totalDocs={orderslogs?.totalDocs}
                          totalPages={orderslogs?.totalPages}
                          currentPage={orderslogs?.page}
                          setPage={setPage}
                          hasNextPage={orderslogs?.hasNextPage}
                          hasPrevPage={orderslogs?.hasPrevPage}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <EmptyAppointment />
              )}
            </section>
          </div>
        </div>
      </div>
      <AllHerbs />
    </>
  )
}

export default AppointmentLogs
