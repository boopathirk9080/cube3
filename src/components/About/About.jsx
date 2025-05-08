import React from 'react'
import About21 from './About21'

import WorldMap from "../World Map/WorldMap";
import Counter from "../Service/Counter";
// import GridAnimatee from '../AnimatedCheck/GridAimate'
function About() {
  return (
    <div>
      <About21 />

      <WorldMap />
      <Counter />
      {/* <GridAnimatee /> */}
    </div>
  )
}

export default About