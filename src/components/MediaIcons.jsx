import React from 'react'
import { Link } from 'react-router-dom'

const MediaIcons = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer')
  }
  return (
    <>
      <ul className='mt-4 list-inline'>
        <li className='list-inline-item'>
          <div className='social-icon face-icon'>
            <Link
              to='#'
              onClick={() => openInNewTab('https://www.facebook.com/YahkiEl')}
            >
              <i className='fab fa-facebook-f ' />
            </Link>
          </div>
        </li>
        <li className='list-inline-item'>
          <div className='social-icon  msg-icon'>
            <Link
              to='#'
              onClick={() =>
                openInNewTab('https://mobile.twitter.com/YahkiAwakened')
              }
            >
              <i className='fab fa-twitter' />
            </Link>
          </div>
        </li>
        <li className='list-inline-item'>
          <div className='social-icon insta-icon'>
            <Link
              to='#'
              onClick={() =>
                openInNewTab('https://www.instagram.com/yahkiawakened/?hl=en')
              }
            >
              <i className='fab fa-instagram' />
            </Link>
          </div>
        </li>
        <li className='list-inline-item'>
          <div className='social-icon youtube-icon'>
            <Link
              to='#'
              onClick={() =>
                openInNewTab('https://www.youtube.com/@yahkiawakened')
              }
            >
              <i className='fab fa-youtube' />
            </Link>
          </div>
        </li>
        <li className='list-inline-item'>
          <div className='social-icon envelope-icon'>
            <Link
              to='#'
              onClick={() =>
                openInNewTab('https://www.tiktok.com/@yahkiawakened?lang=en')
              }
            >
              <img src='/images/tiktok.png' alt='' className='img-fluid' />{' '}
              {/* <i class='fab fa-tiktok'></i> */}
            </Link>
          </div>
        </li>
      </ul>
    </>
  )
}

export default MediaIcons
