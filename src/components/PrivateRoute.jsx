import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import PrivateRouteSlider from './PrivateRouteSlider'

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('window', window)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  return (
    <Route
      {...rest}
      render={(props) =>
        !userInfo ? (
          <Redirect to='/' />
        ) : (
          <>
            <Header />
            {window?.location?.pathname.includes('Memberships') ? null : (
              <PrivateRouteSlider />
            )}
            {/* <Sidebar /> */}
            <Component {...props} />

            <Footer />
          </>
        )
      }
    />
  )
}

export default PrivateRoute
