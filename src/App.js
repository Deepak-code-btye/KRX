import "./App.css";
import Navbar from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Service from "./Service";
import Portfolio from "./Portfolio";
import Developer from "./Developer";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import Carousel from "./Carousel";
import Contacts from "./Contacts";
function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Routes>
        <Route exact path="/product" element={<Products />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/studies" element={<Portfolio />} />
        <Route exact path="/developer" element={<Developer />} />
        <Route exact path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
