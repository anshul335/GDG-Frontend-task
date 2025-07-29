import React from 'react'
// import Navbar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Company from './components/Company'
import AllInOneComponent from './components/AllInOneComponent'
import WhatIsSkillineComponent from './components/WhatIsSkillineComponent'
import WhatYouCanDoWithSkilline from './components/WhatYouCanDoWithSkilline'
import Feature from './components/Feature'
import Footer from './components/Footer'


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
      <Footer/>
    </>
  )
}

export default App