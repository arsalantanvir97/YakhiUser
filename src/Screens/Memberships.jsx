import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userMemberAction } from '../actions/userAction'
import AllHerbs from '../components/AllHerbs'
import Diseases from '../components/Diseases'
import Select from 'react-select'

import csc from 'country-state-city'
import FooterHeader from '../components/FooterHeader'
import Autocomplete from '../components/Autocomplete'
import InputNumber from '../components/InputNumber'
import InputPhone from '../components/InputPhone'
import PrivateRouteSlider from '../components/PrivateRouteSlider'
import { Signature } from '../components/Signature'
import ToggleBack from '../components/ToggleBack'
import api from '../utils/api'
import Toasty from '../utils/toast'
let filee = ''
const Memberships = ({
  pathname,
  onSubmit,
  handleStep,
  handleChange,
  setFormState,
  formState,
  history,
}) => {
  const [formData, setformData] = useState({
    country: '',
    state: null,
    city: null,
    country2: '',
    state2: null,
    city2: null,
  })
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const countries = csc.getAllCountries()

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }))
  const [address, setaddress] = useState('')
  const [geolocation, setgeolocation] = useState([])

  const updatedStates = (countryId) =>
    csc
      .getStatesOfCountry(countryId)
      .map((state) => ({ label: state.name, value: state.id, ...state }))
  const updatedCities = (stateId) =>
    csc
      .getCitiesOfState(stateId)
      .map((city) => ({ label: city.name, value: city.id, ...city }))
  const handleLocation = (
    latitude,
    longitude,
    address,
    city,
    state,
    country,
    zip_code
  ) => {
    console.log(
      'handleLocation',
      latitude,
      longitude,
      address,
      city,
      state,
      country,
      zip_code
    )

    setaddress(address)
    setgeolocation([latitude, longitude])
  }
  const [allValues, setAllValues] = useState({
    firstName: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    zipcode: '',
    country: '',

    city: '',
    state: '',
    dob: '',
    hearaboutus: '',
    termsservices: '',
    privacypolicy: '',
    membershipstatus: '',
  })
  const changeHandler = (e, namee) => {
    setAllValues({
      ...allValues,
      [namee ? namee : e.target.name]: namee ? e : e.target.value,
    })
  }
  useEffect(() => {
    console.log('allValues', allValues)
  }, [allValues])

  return (
    <>
      <FooterHeader />
      <div>
        <section className='about-page'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-11 mx-auto'>
                <ToggleBack name={`Memberships`} />
                <div className='row mb-5 pb-5'>
                  <div className='col-md-12 text-center'>
                    <h3 className='main-heading mem-head'>
                      Free Club Membership Registration
                    </h3>
                    <p className='general-para px-sm-5'>
                      Complete the form and you're in.
                    </p>
                  </div>
                </div>
                {/* MEMBERSHIP PACKAGES */}
                <div className='row'>
                  <div className='col-xl-12 col-lg-12 col-md-12'>
                    <div className='consultation-form'>
                      <div className='form-group'>
                        <div className='form-row'>
                          <div className='col-md-6'>
                            <label>
                              First Name <span className='red'>*</span>
                            </label>
                            <input
                              className='form-control'
                              placeholder='Enter First Name'
                              type='text'
                              value={allValues?.firstName}
                              onChange={changeHandler}
                              name='firstName'
                            />
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Last Name <span className='red'>*</span>
                            </label>
                            <input
                              className='form-control'
                              placeholder='Enter Last Name'
                              type='text'
                              value={allValues?.lastname}
                              onChange={changeHandler}
                              name='lastname'
                            />
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Email <span className='red'>*</span>
                            </label>
                            <input
                              className='form-control'
                              placeholder='Enter Email'
                              type='email'
                              value={allValues?.email}
                              onChange={changeHandler}
                              name='email'
                            />
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Phone <span className='red'>*</span>
                            </label>
                            <InputPhone
                              unique={true}
                              uniquevalue={allValues}
                              name={'phone'}
                              value={allValues?.phone}
                              onChange={setAllValues}
                            />
                          </div>

                          <div className='col-md-6'>
                            <label>
                              Zip Code <span className='red'>*</span>
                            </label>
                            <InputNumber
                              unique={true}
                              uniquevalue={allValues}
                              name={'zipcode'}
                              onChange={setAllValues}
                              value={allValues?.zipcode}
                              max={105}
                              className='form-control'
                            />
                          </div>
                          <div className='col-md-6'>
                            <label htmlFor className='pading-lable'>
                              Country *
                            </label>
                            <Select
                              id='country'
                              name='country'
                              label='country'
                              options={updatedCountries}
                              value={formData?.country}
                              onChange={(value) => {
                                setformData({
                                  ...formData,
                                  country: value,
                                  state: null,
                                  city: null,
                                })
                                setFormState({
                                  ...formState,
                                  sender: {
                                    ...formState.sender,
                                    country: value.name,
                                    state: '',
                                    city: '',
                                  },
                                })
                              }}
                            />{' '}
                          </div>

                          <div className='col-md-6'>
                            <label htmlFor className='pading-lable'>
                              State *
                            </label>
                            <Select
                              id='state'
                              name='state'
                              options={updatedStates(
                                formData.country ? formData.country.value : null
                              )}
                              value={formData.state}
                              onChange={(value) => {
                                setformData({
                                  ...formData,
                                  state: value,
                                  city: null,
                                })
                                setFormState({
                                  ...formState,
                                  sender: {
                                    ...formState.sender,
                                    state: value.name,
                                    city: '',
                                  },
                                })
                              }}
                            />
                          </div>
                          <div className='col-md-6'>
                            <label htmlFor className='pading-lable'>
                              City *
                            </label>
                            <Select
                              id='city'
                              name='city'
                              options={updatedCities(
                                formData.state ? formData.state.value : null
                              )}
                              value={formData.city}
                              onChange={(value) => {
                                setformData({ ...formData, city: value })
                                setFormState({
                                  ...formState,
                                  sender: {
                                    ...formState.sender,
                                    city: value.name,
                                  },
                                })
                              }}
                            />
                          </div>

                          <div className='col-md-6'>
                            <label>
                              Address
                              <span className='red'>*</span>
                            </label>
                            <Autocomplete handleLocation={handleLocation} />
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Weight in lbs
                              <span className='red'>*</span>
                            </label>
                            <InputNumber
                              // unique={true}
                              // uniquevalue={allValues}
                              // name={'yourinfoweight'}
                              // onChange={setAllValues}
                              // value={allValues?.yourinfoweight}
                              // max={1005}
                              className='form-control'
                            />
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Ethnicity <span className='red'>*</span>
                            </label>
                            <input
                              className='form-control'
                              placeholder='Enter Ethnicity'
                              type='text'
                              // value={allValues?.yourinfoethnicity}
                              // onChange={changeHandler}
                              name='yourinfoethnicity'
                            />
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Geo'Genetic For
                              <span className='red'>*</span>
                            </label>
                            <select
                              className='form-control text-left'
                              id='timeZone'
                              // value={
                              //   allValues?.yourinfoconsultaionfor
                              // }
                              // onChange={changeHandler}
                              name='yourinfoconsultaionfor'
                            >
                              <option disabled={true} value={''}>
                                Select
                              </option>
                              <Diseases />
                            </select>
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Current Medication
                              <span className='red'>*</span>
                            </label>
                            <input
                              className='form-control'
                              placeholder='Enter Current Medication'
                              type='text'
                              // value={
                              //   allValues?.yourinfosetcurrentmedication
                              // }
                              // onChange={changeHandler}
                              name='yourinfosetcurrentmedication'
                            />
                          </div>
                          <div className='col-md-12'>
                            <label>
                              Reason for Geo'Genetic{' '}
                              <span className='red'>*</span>
                            </label>
                            <input
                              className='form-control'
                              placeholder='Enter Reason for Consultation'
                              // value={allValues?.yourinforeason}
                              // onChange={changeHandler}
                              name='yourinforeason'
                            />
                          </div>
                          <div className='col-md-12'>
                            <label>
                              Current Diagnoses (provided by MD)
                              <span className='red'>*</span>
                            </label>
                            <textarea
                              className='form-control'
                              id='exampleFormControlTextarea1'
                              placeholder='Message'
                              rows={5}
                              // value={allValues?.yourinfodiagnosis}
                              // onChange={changeHandler}
                              name='yourinfodiagnosis'
                            />
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Upload Valid Government Issued ID{' '}
                              <span className='red'>*</span>
                            </label>
                            <input
                              type='file'
                              name
                              id='govt-id'
                              // accept='application/pdf,application/vnd.ms-excel'
                              // onChange={filedocsHandler2}
                              className='form-control'
                            />
                            <label
                              htmlFor='govt-id'
                              className='d-block id-upload'
                            >
                              {/* {allValues?.yourinfodoc_schedule
                                          ?.name ? (
                                          <i className='fas fa-file-upload fa-2x' />
                                        ) : (
                                          <i className='fas fa-upload fa-2x' />
                                        )} */}
                            </label>
                          </div>
                          <div className='col-12 text-right'>
                            <Link to='#' className='red-link'>
                              Redeem Coupon
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <AllHerbs />
      {/* <Footer /> */}
    </>
  )
}

export default Memberships
