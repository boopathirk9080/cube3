import React from "react";
import About from "../About/About";
import Service from "../Service/Service";
import Portfolio from "../gallary/Gallary";
import ContactUs from "../contact/ContactUs";
import Video3 from "../Hero/Video3";
// import Slide from '../Slider/Slide'
import WorldMap from "../World Map/WorldMap";
import Counter from "../About/Counter";
import Base from '../Hero/Base'
import ALogoAnimat from "../ALogoAnimate/LogoAnimat";
import CompanyLogo from "../CompanyLogo/CompanyLogo";

function Home() {

  return (
    <div id="/" className=" max-w-[100%] bg-[#e8e8e849] " >
      <Video3 />
      {/* <ALogoAnimat/> */}
      <Base />

      <WorldMap />
<CompanyLogo/>

      <Counter />
      <Service />

      <Portfolio />
      <ContactUs />
    </div>
  );
}

export default Home;