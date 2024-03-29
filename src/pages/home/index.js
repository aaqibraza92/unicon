import React from 'react'
import HomeBanner from './HomeBanner'
import PractiseAreas from './PractiseAreas'
import '../../assets/css/home.css'
import WhatWeDo from './WhatWeDo'
import WhyChosseUs from './WhyChosseUs'
import Testomonial from './Testomonial'
import Counter from './Counter'
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Unicon Pharma - Life Sciences Staffing & Recruitment</title>
      </Helmet>
    <main>
    <HomeBanner/>
    <WhatWeDo/>
    <PractiseAreas/>
    <WhyChosseUs/>
    <Testomonial/>
    <Counter/>
    </main>
    </>

     
  )
}

export default HomePage
