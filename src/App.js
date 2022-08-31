import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Index from "./Screens/Index";
import PasswordRecovery from "./Screens/PasswordRecovery";
import VerificationCode from "./Screens/VerificationCode";
import ResetPassword from "./Screens/ResetPassword";
import MyCart from "./Screens/MyCart";
import WishList from "./Screens/WishList";
import Checkout from "./Screens/Checkout";
import AboutCompany from "./Screens/AboutCompany";
import BodySystem from "./Screens/BodySystem";
import Capsules from "./Screens/Capsules";
import Consultation from "./Screens/Consultation";
import Contactus from "./Screens/Contactus";
import DamageClaims from "./Screens/DamageClaims";
import DetoxHome from "./Screens/DetoxHome";
import Document from "./Screens/Document";
import Donate from "./Screens/Donate";
import Faqs from "./Screens/Faqs";
import GeoGenetics from "./Screens/GeoGenetics";
import Instruction from "./Screens/Instruction";
import MasterHerbalist from "./Screens/MasterHerbalist";
import MeettheTeam from "./Screens/MeettheTeam";
import EattoLive from "./Screens/EattoLive";

import OrderandPayment from "./Screens/OrderandPayment";
import PrivacyPolicy from "./Screens/PrivacyPolicy";
import OrderLog from "./Screens/OrderLog";
import OrderLogDetail from "./Screens/OrderLogDetail";
import ProductResource from "./Screens/ProductResource";
import ProductView from "./Screens/ProductView";
import ProductViewOutStock from "./Screens/ProductViewOutStock";
import ReturnsandRefund from "./Screens/ReturnsandRefund";
import ShippingandPickup from "./Screens/ShippingandPickup";
import ViewCollection from "./Screens/ViewCollection";
import CardioSystem from "./Screens/CardioSystem";
import DigestiveSystem from "./Screens/DigestiveSystem";
import EndocrineSystem from "./Screens/EndocrineSystem";
import IntegumentarySystem from "./Screens/IntegumentarySystem";
import LymphaticSystem from "./Screens/LymphaticSystem";
import MuscularSystem from "./Screens/MuscularSystem";
import NervousSystem from "./Screens/NervousSystem";
import OralSystem from "./Screens/OralSystem";
import ReproductiveSystem from "./Screens/ReproductiveSystem";
import RespiratorySystem from "./Screens/RespiratorySystem";
import SkeletalSystem from "./Screens/SkeletalSystem";
import UrinarySystem from "./Screens/UrinarySystem";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import ProductViewByName from "./Screens/ProductViewByName";
import GeoGeneticsCheckout from "./Screens/GeoGeneticsCheckout";
import AppointmentLogs from "./Screens/AppointmentLogs";
import AppointmentDetails from "./Screens/AppointmentDetails";
import Notification from "./Screens/Notification";
import Memberships from "./Screens/Memberships";
import ApprovedHerb from "./Screens/ApprovedHerb";
import DeVaxxedHerbalTherapy from "./Screens/DeVaxxedHerbalTherapy";
import PackageLevelOne from "./Screens/PackageLevelOne";
import PackageLevelTwo from "./Screens/PackageLevelTwo";
import PackageLevelThree from "./Screens/PackageLevelThree";
import Week12Protocol from "./Screens/Week12Protocol";
import Week56Protocol from "./Screens/Week56Protocol";
import Week34Protocol from "./Screens/Week34Protocol";
import Week78Protocol from "./Screens/Week78Protocol";
import Week910Protocol from "./Screens/Week910Protocol";
import Week1112Protocol from "./Screens/Week1112Protocol";
import Week1314Protocol from "./Screens/Week1314Protocol";
import EditProfile from "./Screens/EditProfile";

function App() {
  useEffect(() => {
    return <ScrollToTop />;
  }, []);
  return (
    <Router basename="/yakhi/user">
      <ScrollToTop />
      <Route exact path="/" component={Index} />{" "}
      <Route path="/Login" component={Login} exact />
      <Route path="/Signup" component={Signup} exact />
      <Route path="/PasswordRecovery" component={PasswordRecovery} exact />
      <Route
        path="/VerificationCode:email"
        component={VerificationCode}
        exact
      />
      <Route path="/ResetPassword" component={ResetPassword} exact />
      <Route path="/Memberships" component={Memberships} exact />
      <PrivateRoute path="/EditProfile" component={EditProfile} exact />

      <Route path="/ApprovedHerb" component={ApprovedHerb} exact />
      <Route exact path="/GeoGenetics" component={GeoGenetics} />{" "}
      <Route exact path="/CardioSystem" component={CardioSystem} />{" "}
      <Route exact path="/DigestiveSystem" component={DigestiveSystem} />{" "}
      <Route exact path="/EndocrineSystem" component={EndocrineSystem} />{" "}
      <Route exact path="/LymphaticSystem" component={LymphaticSystem} />{" "}
      <Route exact path="/MuscularSystem" component={MuscularSystem} />{" "}
      <Route exact path="/NervousSystem" component={NervousSystem} />{" "}
      <Route exact path="/OralSystem" component={OralSystem} />{" "}
      <Route exact path="/ReproductiveSystem" component={ReproductiveSystem} />{" "}
      <Route exact path="/RespiratorySystem" component={RespiratorySystem} />{" "}
      <Route exact path="/SkeletalSystem" component={SkeletalSystem} />{" "}
      <Route exact path="/UrinarySystem" component={UrinarySystem} />{" "}
      <Route exact path="/AboutCompany" component={AboutCompany} />{" "}
      <Route exact path="/Document" component={Document} />{" "}
      <Route exact path="/EattotLive" component={EattoLive} />{" "}
      <Route exact path="/Instruction" component={Instruction} />{" "}
      <Route exact path="/OrderandPayment" component={OrderandPayment} />{" "}
      <Route exact path="/ShippingandPickup" component={ShippingandPickup} />{" "}
      <Route exact path="/ReturnsandRefund" component={ReturnsandRefund} />{" "}
      <Route exact path="/Faqs" component={Faqs} />{" "}
      <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />{" "}
      <Route exact path="/Donate" component={Donate} />{" "}
      <Route exact path="/DetoxHome" component={DetoxHome} />{" "}
      <Route exact path="/MasterHerbalist" component={MasterHerbalist} />{" "}
      <Route exact path="/MeettheTeam" component={MeettheTeam} />{" "}
      <Route exact path="/Consultation" component={Consultation} />{" "}
      <Route exact path="/Contactus" component={Contactus} />{" "}
      <Route exact path="/Capsules/:id?" component={Capsules} />{" "}
      <Route exact path="/ProductResource" component={ProductResource} />{" "}
      <Route
        exact
        path="/IntegumentarySystem"
        component={IntegumentarySystem}
      />{" "}
      <Route exact path="/BodySystem" component={BodySystem} />{" "}
      <Route exact path="/ProductView/:id" component={ProductView} />{" "}
      <Route
        exact
        path="/ProductViewByName/:id"
        component={ProductViewByName}
      />{" "}
      <PrivateRoute exact path="/MyCart/:id?" component={MyCart} />{" "}
      <PrivateRoute
        exact
        path="/GeoGeneticsCheckout/:id?"
        component={GeoGeneticsCheckout}
      />{" "}
      <PrivateRoute exact path="/WishList" component={WishList} />{" "}
      <PrivateRoute exact path="/Notification" component={Notification} />{" "}
      <PrivateRoute exact path="/Checkout" component={Checkout} />{" "}
      <PrivateRoute exact path="/OrderLog" component={OrderLog} />{" "}
      <PrivateRoute exact path="/AppointmentLogs" component={AppointmentLogs} />{" "}
      <PrivateRoute exact path="/ViewCollection" component={ViewCollection} />{" "}
      <Route
        exact
        path="/PackageLevelOne/:id"
        component={PackageLevelOne}
      />{" "}
      <Route
        exact
        path="/PackageLevelTwo/:id"
        component={PackageLevelTwo}
      />{" "}
      <Route
        exact
        path="/PackageLevelThree/:id"
        component={PackageLevelThree}
      />{" "}
      <Route
        exact
        path="/Week12Protocol/:id"
        component={Week12Protocol}
      />{" "}
      <Route
        exact
        path="/Week34Protocol/:id"
        component={Week34Protocol}
      />{" "}
      <Route
        exact
        path="/Week56Protocol/:id"
        component={Week56Protocol}
      />{" "}
      <Route
        exact
        path="/Week78Protocol/:id"
        component={Week78Protocol}
      />{" "}
      <Route
        exact
        path="/Week910Protocol/:id"
        component={Week910Protocol}
      />{" "}
      <Route
        exact
        path="/Week1112Protocol/:id"
        component={Week1112Protocol}
      />{" "}
      <Route
        exact
        path="/Week1314Protocol/:id"
        component={Week1314Protocol}
      />{" "}
      <Route
        exact
        path="/DeVaxxedHerbalTherapy/:id"
        component={DeVaxxedHerbalTherapy}
      />{" "}
      <PrivateRoute
        exact
        path="/ProductViewOutStock"
        component={ProductViewOutStock}
      />{" "}
      <PrivateRoute
        exact
        path="/OrderLogDetail/:id"
        component={OrderLogDetail}
      />{" "}
      <PrivateRoute
        exact
        path="/AppointmentDetails/:id"
        component={AppointmentDetails}
      />{" "}
      <PrivateRoute exact path="/DamageClaims" component={DamageClaims} />{" "}
    </Router>
  );
}

export default App;
