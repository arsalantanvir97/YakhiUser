import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import React, { lazy, Suspense, useEffect } from 'react'
import Loaderr from './components/Loaderr'

import PrivateRoute from './components/PrivateRoute'
const Login = lazy(() => import('./Screens/Login'))
const Signup = lazy(() => import('./Screens/Signup'))
const Index = lazy(() => import('./Screens/Index'))
const PasswordRecovery = lazy(() => import('./Screens/PasswordRecovery'))
const VerificationCode = lazy(() => import('./Screens/VerificationCode'))
const ResetPassword = lazy(() => import('./Screens/ResetPassword'))
const MyCart = lazy(() => import('./Screens/MyCart'))
const WishList = lazy(() => import('./Screens/WishList'))
const Checkout = lazy(() => import('./Screens/Checkout'))
const AboutCompany = lazy(() => import('./Screens/AboutCompany'))
const BodySystem = lazy(() => import('./Screens/BodySystem'))
const Capsules = lazy(() => import('./Screens/Capsules'))
const Consultation = lazy(() => import('./Screens/Consultation'))
const Contactus = lazy(() => import('./Screens/Contactus'))
const DamageClaims = lazy(() => import('./Screens/DamageClaims'))
const DetoxHome = lazy(() => import('./Screens/DetoxHome'))
const Document = lazy(() => import('./Screens/Document'))
const Donate = lazy(() => import('./Screens/Donate'))
const Faqs = lazy(() => import('./Screens/Faqs'))
const GeoGenetics = lazy(() => import('./Screens/GeoGenetics'))
const Instruction = lazy(() => import('./Screens/Instruction'))
const MasterHerbalist = lazy(() => import('./Screens/MasterHerbalist'))
const MeettheTeam = lazy(() => import('./Screens/MeettheTeam'))
const EattoLive = lazy(() => import('./Screens/EattoLive'))
const OrderandPayment = lazy(() => import('./Screens/OrderandPayment'))
const PrivacyPolicy = lazy(() => import('./Screens/PrivacyPolicy'))
const OrderLog = lazy(() => import('./Screens/OrderLog'))
const OrderLogDetail = lazy(() => import('./Screens/OrderLogDetail'))
const ProductResource = lazy(() => import('./Screens/ProductResource'))
const ProductView = lazy(() => import('./Screens/ProductView'))
const ProductViewOutStock = lazy(() => import('./Screens/ProductViewOutStock'))
const ReturnsandRefund = lazy(() => import('./Screens/ReturnsandRefund'))
const ShippingandPickup = lazy(() => import('./Screens/ShippingandPickup'))
const ViewCollection = lazy(() => import('./Screens/ViewCollection'))
const CardioSystem = lazy(() => import('./Screens/CardioSystem'))
const DigestiveSystem = lazy(() => import('./Screens/DigestiveSystem'))
const EndocrineSystem = lazy(() => import('./Screens/EndocrineSystem'))
const IntegumentarySystem = lazy(() => import('./Screens/IntegumentarySystem'))
const LymphaticSystem = lazy(() => import('./Screens/LymphaticSystem'))
const MuscularSystem = lazy(() => import('./Screens/MuscularSystem'))
const NervousSystem = lazy(() => import('./Screens/NervousSystem'))
const OralSystem = lazy(() => import('./Screens/OralSystem'))
const ReproductiveSystem = lazy(() => import('./Screens/ReproductiveSystem'))
const RespiratorySystem = lazy(() => import('./Screens/RespiratorySystem'))
const SkeletalSystem = lazy(() => import('./Screens/SkeletalSystem'))
const UrinarySystem = lazy(() => import('./Screens/UrinarySystem'))
const ProductViewByName = lazy(() => import('./Screens/ProductViewByName'))
const GeoGeneticsCheckout = lazy(() => import('./Screens/GeoGeneticsCheckout'))
const AppointmentLogs = lazy(() => import('./Screens/AppointmentLogs'))
const AppointmentDetails = lazy(() => import('./Screens/AppointmentDetails'))
const Notification = lazy(() => import('./Screens/Notification'))
const Memberships = lazy(() => import('./Screens/Memberships'))
const ApprovedHerb = lazy(() => import('./Screens/ApprovedHerb'))
const DeVaxxedHerbalTherapy = lazy(() =>
  import('./Screens/DeVaxxedHerbalTherapy')
)
const PackageLevelOne = lazy(() => import('./Screens/PackageLevelOne'))
const PackageLevelTwo = lazy(() => import('./Screens/PackageLevelTwo'))
const PackageLevelThree = lazy(() => import('./Screens/PackageLevelThree'))
const Week12Protocol = lazy(() => import('./Screens/Week12Protocol'))
const Week56Protocol = lazy(() => import('./Screens/Week56Protocol'))
const Week34Protocol = lazy(() => import('./Screens/Week34Protocol'))
const Week78Protocol = lazy(() => import('./Screens/Week78Protocol'))
const Week910Protocol = lazy(() => import('./Screens/Week910Protocol'))
const Week1112Protocol = lazy(() => import('./Screens/Week1112Protocol'))
const Week1314Protocol = lazy(() => import('./Screens/Week1314Protocol'))
const EditProfile = lazy(() => import('./Screens/EditProfile'))
const Events = lazy(() => import('./Screens/Events'))
const MemberAgreement = lazy(() => import('./Screens/MemberAgreement'))
const TermsofService = lazy(() => import('./Screens/TermsofService'))

function App() {
  useEffect(() => {
    return <ScrollToTop />
  }, [])
  return (
    <Suspense fallback={<Loaderr />}>
      <Router basename='/yakhi/user'>
        <ScrollToTop />
        <Route exact path='/' component={Index} />{' '}
        <Route path='/Login' component={Login} exact />
        <Route path='/Signup' component={Signup} exact />
        <Route path='/PasswordRecovery' component={PasswordRecovery} exact />
        <Route
          path='/VerificationCode:email'
          component={VerificationCode}
          exact
        />
        <Route path='/ResetPassword' component={ResetPassword} exact />
        <Route path='/Events' component={Events} exact />
        <Route path='/Memberships' component={Memberships} exact />
        <PrivateRoute path='/EditProfile' component={EditProfile} exact />
        <Route path='/ApprovedHerb' component={ApprovedHerb} exact />
        <Route exact path='/GeoGenetics' component={GeoGenetics} />{' '}
        <Route exact path='/CardioSystem' component={CardioSystem} />{' '}
        <Route exact path='/DigestiveSystem' component={DigestiveSystem} />{' '}
        <Route exact path='/EndocrineSystem' component={EndocrineSystem} />{' '}
        <Route exact path='/LymphaticSystem' component={LymphaticSystem} />{' '}
        <Route exact path='/MuscularSystem' component={MuscularSystem} />{' '}
        <Route exact path='/NervousSystem' component={NervousSystem} />{' '}
        <Route exact path='/OralSystem' component={OralSystem} />{' '}
        <Route
          exact
          path='/ReproductiveSystem'
          component={ReproductiveSystem}
        />{' '}
        <Route exact path='/RespiratorySystem' component={RespiratorySystem} />{' '}
        <Route exact path='/SkeletalSystem' component={SkeletalSystem} />{' '}
        <Route exact path='/UrinarySystem' component={UrinarySystem} />{' '}
        <Route exact path='/AboutCompany' component={AboutCompany} />{' '}
        <Route exact path='/Document' component={Document} />{' '}
        <Route exact path='/EattotLive' component={EattoLive} />{' '}
        <Route exact path='/Instruction' component={Instruction} />{' '}
        <Route exact path='/OrderandPayment' component={OrderandPayment} />{' '}
        <Route exact path='/ShippingandPickup' component={ShippingandPickup} />{' '}
        <Route exact path='/ReturnsandRefund' component={ReturnsandRefund} />{' '}
        <Route exact path='/Faqs' component={Faqs} />{' '}
        <Route exact path='/PrivacyPolicy' component={PrivacyPolicy} />{' '}
        <Route exact path='/Donate' component={Donate} />{' '}
        <Route exact path='/DetoxHome' component={DetoxHome} />{' '}
        <Route exact path='/TermsofService' component={TermsofService} />{' '}
        <Route exact path='/MemberAgreement' component={MemberAgreement} />{' '}
        <Route exact path='/MasterHerbalist' component={MasterHerbalist} />{' '}
        <Route exact path='/MeettheTeam' component={MeettheTeam} />{' '}
        <Route exact path='/Consultation' component={Consultation} />{' '}
        <Route exact path='/Contactus' component={Contactus} />{' '}
        <Route exact path='/Capsules/:id?' component={Capsules} />{' '}
        <Route exact path='/ProductResource' component={ProductResource} />{' '}
        <Route
          exact
          path='/IntegumentarySystem'
          component={IntegumentarySystem}
        />{' '}
        <Route exact path='/BodySystem' component={BodySystem} />{' '}
        <Route exact path='/ProductView/:id' component={ProductView} />{' '}
        <Route
          exact
          path='/ProductViewByName/:id'
          component={ProductViewByName}
        />{' '}
        <PrivateRoute exact path='/MyCart/:id?' component={MyCart} />{' '}
        <PrivateRoute
          exact
          path='/GeoGeneticsCheckout/:id?'
          component={GeoGeneticsCheckout}
        />{' '}
        <PrivateRoute exact path='/WishList' component={WishList} />{' '}
        <PrivateRoute exact path='/Notification' component={Notification} />{' '}
        <PrivateRoute exact path='/Checkout' component={Checkout} />{' '}
        <PrivateRoute exact path='/OrderLog' component={OrderLog} />{' '}
        <PrivateRoute
          exact
          path='/AppointmentLogs'
          component={AppointmentLogs}
        />{' '}
        <PrivateRoute exact path='/ViewCollection' component={ViewCollection} />{' '}
        <Route exact path='/PackageLevelOne/:id' component={PackageLevelOne} />{' '}
        <Route exact path='/PackageLevelTwo/:id' component={PackageLevelTwo} />{' '}
        <Route
          exact
          path='/PackageLevelThree/:id'
          component={PackageLevelThree}
        />{' '}
        <Route exact path='/Week12Protocol/:id' component={Week12Protocol} />{' '}
        <Route exact path='/Week34Protocol/:id' component={Week34Protocol} />{' '}
        <Route exact path='/Week56Protocol/:id' component={Week56Protocol} />{' '}
        <Route exact path='/Week78Protocol/:id' component={Week78Protocol} />{' '}
        <Route exact path='/Week910Protocol/:id' component={Week910Protocol} />{' '}
        <Route
          exact
          path='/Week1112Protocol/:id'
          component={Week1112Protocol}
        />{' '}
        <Route
          exact
          path='/Week1314Protocol/:id'
          component={Week1314Protocol}
        />{' '}
        <Route
          exact
          path='/DeVaxxedHerbalTherapy/:id'
          component={DeVaxxedHerbalTherapy}
        />{' '}
        <PrivateRoute
          exact
          path='/ProductViewOutStock'
          component={ProductViewOutStock}
        />{' '}
        <PrivateRoute
          exact
          path='/OrderLogDetail/:id'
          component={OrderLogDetail}
        />{' '}
        <PrivateRoute
          exact
          path='/AppointmentDetails/:id'
          component={AppointmentDetails}
        />{' '}
        <PrivateRoute exact path='/DamageClaims' component={DamageClaims} />{' '}
      </Router>
    </Suspense>
  )
}

export default App
