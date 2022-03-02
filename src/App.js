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
import EattotLive from "./Screens/EattotLive";
import Faqs from "./Screens/Faqs";
import GeoGenetics from "./Screens/GeoGenetics";
import Instruction from "./Screens/Instruction";
import MasterHerbalist from "./Screens/MasterHerbalist";
import MeettheTeam from "./Screens/MeettheTeam";
import OrderandPayment from "./Screens/OrderandPayment";
import PrivacyPolicy from "./Screens/PrivacyPolicy";
import IntegumentarySystem from "./Screens/IntegumentarySystem";

import OrderLog from "./Screens/OrderLog";
import OrderLogDetail from "./Screens/OrderLogDetail";
import ProductResource from "./Screens/ProductResource";
import ProductView from "./Screens/ProductView";
import ProductViewOutStock from "./Screens/ProductViewOutStock";
import ReturnsandRefund from "./Screens/ReturnsandRefund";
import ShippingandPickup from "./Screens/ShippingandPickup";
import ViewCollection from "./Screens/ViewCollection";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";

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
      <Route path="/VerificationCode:email" component={VerificationCode} exact />
      <Route path="/ResetPassword" component={ResetPassword} exact />
      <Route exact path="/GeoGenetics" component={GeoGenetics} />{" "}
      <Route exact path="/AboutCompany" component={AboutCompany} />{" "}
      <Route exact path="/Document" component={Document} />{" "}
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
      <Route exact path="/Capsules" component={Capsules} />{" "}
      <Route exact path="/ProductResource" component={ProductResource} />{" "}
      <Route
        exact
        path="/IntegumentarySystem"
        component={IntegumentarySystem}
      />{" "}
      <Route exact path="/BodySystem" component={BodySystem} />{" "}
      <Route exact path="/EattotLive" component={EattotLive} />{" "}
      <PrivateRoute exact path="/MyCart/:id?" component={MyCart} />{" "}
      <PrivateRoute exact path="/WishList" component={WishList} />{" "}
      <PrivateRoute exact path="/Checkout" component={Checkout} />{" "}
      <PrivateRoute exact path="/OrderLog" component={OrderLog} />{" "}
      <PrivateRoute
        exact
        path="/ViewCollection"
        component={ViewCollection}
      />{" "}
      <PrivateRoute
        exact
        path="/ProductViewOutStock"
        component={ProductViewOutStock}
      />{" "}
      <PrivateRoute exact path="/ProductView/:id" component={ProductView} />{" "}
      <PrivateRoute
        exact
        path="/OrderLogDetail/:id"
        component={OrderLogDetail}
      />{" "}
      <PrivateRoute exact path="/DamageClaims" component={DamageClaims} />{" "}
    </Router>
  );
}

export default App;
