import React from 'react'
import { Link } from 'react-router-dom'

const ToggleBack = ({ name }) => {
  return (
    <>
      {' '}
      <div className='col-md-6 mt-1'>
        <ul className='crumbs'>
          <li>
            <Link to='/'>Homepage</Link>
          </li>
          <li>{name}</li>
        </ul>
        <div className='userbackbtn'>
          <Link to='/'>
            <i class='fas fa-long-arrow-alt-left'></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ToggleBack
