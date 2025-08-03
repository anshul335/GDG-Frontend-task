import React, { useEffect, useState } from 'react'
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
import Discussion from './components/Discussion'
import AssignmentAndQuizComponent from './components/AssignmentAndQuizComponent'
import FeatureUserInterface from './components/FeatureUserInterface'
import Loader from './components/Loader'
import ClassMangement from './components/ClassMangement'
import Tools from './components/Tools'


const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
        const t = setTimeout(() => setShowLoader(false), 4500);
        return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* <Navbar/> */}
      <Loader show={showLoader} />
      <HeroSection/>
      <Company/>
      <AllInOneComponent/>
      <WhatIsSkillineComponent/>
      <WhatYouCanDoWithSkilline/>
      <Feature/>
      <FeatureUserInterface/>
      <Tools/>
      <AssignmentAndQuizComponent/>
      <ClassMangement/>
      <Discussion/>
      <Integration/>
      <Testimonial/>
      <NewsAndResourcesComponent/>
      <Footer/>
    </>
  )
}

export default App