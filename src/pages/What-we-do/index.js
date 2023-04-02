import React from 'react'
import WhatWeDo from '../home/WhatWeDo'
import BreadCrumb from '../../components/BreadCrumb'
import Counter from '../home/Counter'

const WhatWeDoPage = () => {
  return (
    <>
   <BreadCrumb
    title="What We Do"
    items={[{ name: "Home", url: "/" },{ name: "Our Story", url: "/" },{ name: "What We Do", url: "" }]}
  />
    <WhatWeDo />
    <Counter />
    </>
 
  )
}

export default WhatWeDoPage