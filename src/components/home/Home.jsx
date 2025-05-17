import React from "react";
import About from "../About/About";
import Service from "../Service/Service";
import Portfolio from "../gallary/Gallary";
import ContactUs from "../contact/ContactUs";
import Video3 from "../Hero/Video3";
import Slide from '../Slider/Slide'
import ParallaxSlider from "../Slider/ParallaxSlider";
import WorldMap from "../World Map/WorldMap";
import Counter from "../About/Counter";
import Base from '../Hero/Base'
import dynamic from 'next/dynamic';
import TextTransform from "../TextTransform/TextTransform";
function Home() {

  return (
    <div id="/" className=" max-w-[100%] bg-[#e8e8e849] " >
      <Video3 />
      {/* <TextTransform /> */}

      <Base />
      <div className=" bg-[#ffff">
        <WorldMap />
      </div>

      <Counter />
      <Service />

      <Portfolio />
      <ContactUs />
    </div>
  );
}

export default Home;