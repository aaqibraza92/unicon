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
        <title>Home | Unicon</title>
        {/* <link rel="icon"
            type="image/png"
              href="https://favicon.io/assets/static/index-generate-from-emoji.2f2d982.a63b2d23076ae3098ef8b64b550e2753.png"
        /> */}
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
