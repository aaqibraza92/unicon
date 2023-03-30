import React from 'react'
import HomeBanner from './HomeBanner'
import PractiseAreas from './PractiseAreas'
import '../../assets/css/home.css'
import WhatWeDo from './WhatWeDo'
import WhyChosseUs from './WhyChosseUs'
import Testomonial from './Testomonial'

const HomePage = () => {
  return (
    <>
    <main>
    <HomeBanner/>
    <WhatWeDo/>
    <PractiseAreas/>
    <WhyChosseUs/>
    <Testomonial/>
    </main>
    </>

     
  )
}

export default HomePage
