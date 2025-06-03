import React from 'react'
import About21 from './About21'

import WorldMap from "../World Map/WorldMap";
import Counter from "./Counter";
// import GridAnimatee from '../AnimatedCheck/GridAimate'
import ThreeDMarquee from '../AnimatedCheck/ThreeDMarquee'
import OurMission from '../ourmission/OurMission'
import AboutSection from './AboutSection'
import AboutBase from './AboutBase';
import SectionHead from './AboutHead';
//wave
import Wave from '../waves/Wave'
function About() {
  return (
    <div id='about' className='bg-[#fbd6d7]' >
      <SectionHead />
      {/* <About21 /> */}
      {/* <Wave /> */}
      {/* <TextTransform /> */}
      {/* <AboutSection /> */}
      <AboutBase />
      <Counter />
      <OurMission />
      <ThreeDMarquee />
      {/* <WorldMap /> */}


      {/* <GridAnimatee /> */}
    </div>
  )
}

export default About