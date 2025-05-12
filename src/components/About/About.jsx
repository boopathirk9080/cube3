import React from 'react'
import About21 from './About21'

import WorldMap from "../World Map/WorldMap";
import Counter from "../Service/Counter";
// import GridAnimatee from '../AnimatedCheck/GridAimate'
import ThreeDMarquee from '../AnimatedCheck/ThreeDMarquee'
import TextTransform from '../About/TextTransform/TextTransform'
import OurMission from '../ourmission/OurMission'
import AboutSection from './AboutSection'
import AboutBase from './AboutBase';
import SectionHead from '../SectionHead/SectionHead';
//wave
import Wave from '../waves/Wave'
function About() {
  return (
    <div id='about' >
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