
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../src/components/home/Home'
import Header from './components/Nav/Header';
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import ContactUs from "./components/contact/ContactUs";
import Video3 from "./components/Hero/Video3";
function App() {

  return (
    <>

      <Router>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
         
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App


