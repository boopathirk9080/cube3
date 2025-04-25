import React from 'react'
import Hero from './Hero'
import About from '../About/About'
import Service from '../Service/Service'
import Portfolio from '../portfolio/Portfolio'
import ContactUs from '../contact/ContactUs'
import Video3 from '../Hero/Video3'
function Home() {
  return (
    <div style={{ width: "100%" }} >
      <Video3 />
      <Hero />

      <About />
      <Service />
      <Portfolio />
      <ContactUs />

    </div>
  )
}

export default Home
