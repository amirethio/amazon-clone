import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Auth from "./Pages/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51R01bQCtnZsL3TbOHaxr9307Wybh2K55Qum5AV1byGrXNAZQsWryDVPVoeNs1SKd2b6mcLUGUVIq8kstMlN5Cmri002u4W9zKT"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        <Route
          path="/payment"
          element={
            <ProtectedRoute msg={"you must login to pay"} redirect={"/payment"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute msg={"you must login to access your order"} redirect={"/orders"}>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="catagory/:catagory" element={<Results />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routing;
