import React from "react";
import About from "../About/About";
import Service from "../Service/Service";
import Portfolio from "../gallary/Gallary";
import ContactUs from "../contact/ContactUs";
import Video3 from "../Hero/Video3";
import Slide from '../Slider/Slide'
import ParallaxSlider from "../Slider/ParallaxSlider";
function Home() {
  return (
    <div id="/" style={{ width: "100%" }}>
      <Video3 />

      <div id="about">
        <About />
        {/* <Slide /> */}
        {/* <ParallaxSlider /> */}
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="gallery">
        <Portfolio />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;