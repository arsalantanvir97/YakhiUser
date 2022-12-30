import React, { useEffect, useState } from 'react'
import api, { baseURL, imageURL } from '../utils/api'
import { Link } from 'react-router-dom'
import { payOrder, resetOrder } from '../actions/orderAction'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import moment from 'moment'
import Loader from '../components/Loader'
import ToggleBack from '../components/ToggleBack'
const AppointmentDetails = ({ match }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [appointmentdetaills, setappointmentdetaills] = useState()
  const [loading, setloading] = useState(false)

  useEffect(() => {
    getSingleAppointment()
  }, [])

  const getSingleAppointment = async () => {
    setloading(true)
    const res = await api.get(
      `/consultationRoutes/getConsultationDetails/${match?.params?.id}`
    )

    try {
      setloading(false)

      console.log('res', res)
      setappointmentdetaills(res?.data?.consultation)
    } catch (err) {
      console.log(err)
      setloading(false)
    }
    setloading(false)
  }
  return (
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-md-11 mx-auto'>
          <ToggleBack name={'Appointment Details'} />
          <section className='my-cart'>
            {loading ? (
              <Loader />
            ) : (
              <div className='row mb-5'>
                <div className='col-12 my-4'>
                  <h2>Appointment Details</h2>
                </div>
                <div className='col-12 text-right'>
                  <p>
                    Status{' '}
                    <span className='stat-pending ml-2'>
                      {appointmentdetaills?.status}
                    </span>
                  </p>
                </div>
                {/* ORDER DETAILS */}
                <div className='col-xl-8 col-lg-10 col-12 mt-5 mt-md-0'>
                  <div className='order-details'>
                    <h3></h3>
                    <div className='row align-items-start justify-content-between mt-4'>
                      <div className='col-lg-6 col-12'>
                        <div className='row align-items-center'>
                          <div className='col-6 mb-3'>
                            <p>Appointment Date</p>
                          </div>
                          <div className='col-6 mb-3'>
                            {appointmentdetaills?.appointmentdate}
                          </div>
                          <div className='col-6 mb-3'>
                            <p>Appointment Time</p>
                          </div>
                          <div className='col-6 mb-3'>
                            {appointmentdetaills?.appointmenttime}
                          </div>
                          <div className='col-6 mb-3'>
                            <p>Valid Government Issued ID</p>
                          </div>
                          <div className='col-6 mb-3'>
                            <button
                              type='button'
                              className='btn btn-primary btn-login'
                              onClick={() =>
                                window.open(
                                  `${imageURL}${appointmentdetaills?.governmentid}`,
                                  '_blank'
                                )
                              }
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default AppointmentDetails
