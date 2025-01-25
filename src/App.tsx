import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import PageNotFound from "./Pages/PageNotFound";
import Profile from "./Pages/Profile";
import Custom from "./Pages/Custom";
import About from "./Pages/About";
import Payment from "./Pages/Payment";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import DeliveryFood from "./Pages/DeliveryFood";
import Pay from "./Pages/Pay";
import BurgerBuilder from "./Pages/BurgerBuilder";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom-order" element={<Custom />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/delivery" element={<DeliveryFood />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/burger-builder" element={<BurgerBuilder />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
