import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Landing/landing";
import SignUp from "./Auth/SignUp";
import Payment from "./Payment/Payment";
import Orders from "./Orders/Orders";
import Cart from "./Cart/Cart";
import Results from "./Results/Results";
import ProductDetail from "./ProductDetail/ProductDetail";
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="catagory/:catagory" element={<Results />} />
        <Route path="product/:id" element={<ProductDetail/>} />
      </Routes>
    </Router>
  );
}

export default Routing;

// why we uses <Router> </Router> instead of browserRouter ?
