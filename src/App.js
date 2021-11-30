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
import OrderLog from "./Screens/OrderLog";
import OrderLogDetail from "./Screens/OrderLogDetail";
import ProductResource from "./Screens/ProductResource";
import ProductView from "./Screens/ProductView";
import ProductViewOutStock from "./Screens/ProductViewOutStock";
import ReturnsandRefund from "./Screens/ReturnsandRefund";
import ShippingandPickup from "./Screens/ShippingandPickup";
function App() {
  return (
    <Router>
      <Route path="/" component={Login} exact />
      <Route path="/Signup" component={Signup} exact />
      <Route path="/PasswordRecovery" component={PasswordRecovery} exact />
      <Route path="/VerificationCode" component={VerificationCode} exact />
      <Route path="/ResetPassword" component={ResetPassword} exact />
      <PrivateRoute exact path="/Home" component={Index} />{" "}
      <PrivateRoute exact path="/MyCart/:id?" component={MyCart} />{" "}
      <PrivateRoute exact path="/WishList" component={WishList} />{" "}
      <PrivateRoute exact path="/Checkout" component={Checkout} />{" "}
      <PrivateRoute exact path="/GeoGenetics" component={GeoGenetics} />{" "}
      <PrivateRoute exact path="/EattotLive" component={EattotLive} />{" "}
      <PrivateRoute exact path="/Capsules" component={Capsules} />{" "}
      <PrivateRoute exact path="/DetoxHome" component={DetoxHome} />{" "}
      <PrivateRoute exact path="/Donate" component={Donate} />{" "}
      <PrivateRoute exact path="/AboutCompany" component={AboutCompany} />{" "}
      <PrivateRoute exact path="/Document" component={Document} />{" "}
      <PrivateRoute exact path="/Instruction" component={Instruction} />{" "}
      <PrivateRoute exact path="/OrderLog" component={OrderLog} />{" "}
      <PrivateRoute
        exact
        path="/ShippingandPickup"
        component={ShippingandPickup}
      />{" "}
      <PrivateRoute
        exact
        path="/ReturnsandRefund"
        component={ReturnsandRefund}
      />{" "}
      <PrivateRoute
        exact
        path="/ProductViewOutStock"
        component={ProductViewOutStock}
      />{" "}
      <PrivateRoute exact path="/ProductView/:id" component={ProductView} />{" "}
      <PrivateRoute exact path="/ProductResource" component={ProductResource} />{" "}
      <PrivateRoute exact path="/OrderLogDetail/:id" component={OrderLogDetail} />{" "}
      <PrivateRoute exact path="/OrderandPayment" component={OrderandPayment} />{" "}
      <PrivateRoute exact path="/MeettheTeam" component={MeettheTeam} />{" "}
      <PrivateRoute exact path="/MasterHerbalist" component={MasterHerbalist} />{" "}
      <PrivateRoute exact path="/Faqs" component={Faqs} />{" "}
      <PrivateRoute exact path="/DamageClaims" component={DamageClaims} />{" "}
      <PrivateRoute exact path="/Contactus" component={Contactus} />{" "}
      <PrivateRoute exact path="/Consultation" component={Consultation} />{" "}
      <PrivateRoute exact path="/BodySystem" component={BodySystem} />{" "}
    </Router>
  );
}

export default App;
