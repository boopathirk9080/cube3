import React from "react";
import About from "../About/About";
import Service from "../Service/Service";
import Portfolio from "../gallary/Gallary";
import ContactUs from "../contact/ContactUs";
import Video3 from "../Hero/Video3";
import Slide from '../Slider/Slide'
import ParallaxSlider from "../Slider/ParallaxSlider";
import WorldMap from "../World Map/WorldMap";
import Counter from "../Service/Counter";
import Base from '../Hero/Base'
function Home() {
  return (
    <div id="/" className=" bg-[#e8e8e849] " style={{ width: "100%" }}>
      <Video3 />
      <Base />
      <WorldMap />
      <Counter />
      <Service />
      <Portfolio />
      <ContactUs />
    </div>
  );
}

export default Home;