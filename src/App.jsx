import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/Nav/Header";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallary/Gallary";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import ContactUs from "./components/contact/ContactUs";
import ScrollToTop from "./components/scrollTop/ScrollToTop";
import ValueAddition from "./components/Value Addition/ValueAddition";
import HomeNavbar from "./components/HomeNavebar/HomeNavebar";
function App() {
  return (
    <Router>

      <Header />
      {/* <HomeNavbar /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/valueaddition" element={<ValueAddition />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;