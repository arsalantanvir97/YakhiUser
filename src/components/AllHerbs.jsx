import React from 'react'

const AllHerbs = () => {
  return (
    <div
      className='about-bottom-banner'
      style={{
        width: '100% !important',
        height: '100% !important',
        padding: '0px !important',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {' '}
      <div className='container'>
        <div className='row '>
          <div className='col-12 text-center'>
            <div>
              <h3>
                All Herbs Are Organic, Alkaline, and Naturally Wildcrafted from
                the Land of their Origin
              </h3>
              <p>
                All herbs used in our products are 100% naturally organic and
                are selectively chosen for our protocols. Most of our herbs are
                also tested by a laboratory before use. Each herbal compound is
                personally prepared with absolute gratitude for the purpose of
                restoring health to our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllHerbs
