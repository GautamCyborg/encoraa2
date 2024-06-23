import React from 'react'

import Banner from '../components/landing/Banner';
import AboutUs from '../components/landing/AboutUs';
import BlogArea from '../components/landing/BlogArea';
import Services from '../components/landing/Services';
import Achievements from '../components/landing/Achievements';
import Participate from '../components/landing/Participate';
import AssesmentsAndAudits from '../components/landing/AssesmentsAndAudits';


import Gallery from '../components/features/Gallery';
import Countdown from '../components/features/Countdown';


const Landing = () => {
    const targetDate = '2024-12-31T00:00:00';
  return (
    <div>  
    <Banner/>
    <AboutUs/>
    <BlogArea/>
    <Services/>
    <Achievements/>
    <AssesmentsAndAudits/>
    <Participate/>
    <Gallery/>
    <Countdown targetDate={targetDate}/> 
</div>
  )
}

export default Landing