import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'

function Pricing() {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='PRICING' text='Choose your trip.'/>
        <Footer/>
    </div>
  )
}

export default Pricing