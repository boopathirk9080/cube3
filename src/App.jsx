import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/Nav/Header";
import Footer from "./components/footer/Footer";
import GalleryAll from "./components/gallary/GalleryAll";
import About from "./components/About/About";
import ServicesAll from "./components/Service/ServicesAll";
import ContactAll from "./components/contact/ContactAll";
import ScrollToTop from "./components/scrollTop/ScrollToTop";
import BlogAll from "./components/Blog/BlogAll";
import HomeNavbar from "./components/HomeNavebar/HomeNavebar";
import BlogDetails from "./components/Blog/BlogDetails";
function App() {
  return (
    <Router>

      <Header />
      {/* <HomeNavbar /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesAll />} />

        <Route path="/gallery" element={<GalleryAll />} />
        <Route path="/blog" element={<BlogAll />} />
          {/* <Route path="/blog/:id" element={<BlogDetails/>} /> */}
        <Route path="/contact" element={<ContactAll />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;