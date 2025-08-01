import React from 'react'
// import Navbar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Company from './components/Company'
import AllInOneComponent from './components/AllInOneComponent'
import WhatIsSkillineComponent from './components/WhatIsSkillineComponent'
import WhatYouCanDoWithSkilline from './components/WhatYouCanDoWithSkilline'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Integration from './components/Integration'
import Testimonial from './components/Testimonial'
import NewsAndResourcesComponent from './components/NewsAndResourcesComponent'

const App = () => {
  return (
    <>
      {/* <Navbar/> */}
      <HeroSection/>
      <Company/>
      <AllInOneComponent/>
      <WhatIsSkillineComponent/>
      <WhatYouCanDoWithSkilline/>
      <Feature/>
      <Integration/>
      <Testimonial/>
      <NewsAndResourcesComponent/>
      <Footer/>
    </>
  )
}

export default App