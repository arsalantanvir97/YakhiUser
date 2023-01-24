import React from 'react'
import { Link } from 'react-router-dom'

const ToggleBack = ({ name }) => {
  return (
    <>
      {' '}
      <div className='col-md-12 mt-1'>
        <ul class='crumbs'>
          <div class='userbackbtn'>
            <Link to='/'>
              <i class='fas fa-long-arrow-alt-left'></i>
            </Link>
          </div>{' '}
          <li>
            <Link to='/'>Homepage</Link>
          </li>
          <li>{name}</li>
        </ul>
      </div>
    </>
  )
}

export default ToggleBack
