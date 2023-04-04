import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import Counter from '../home/Counter'
import { Col, Container, Row } from 'reactstrap'
import '../../assets/css/about.css'
const CoreValuesPage = () => {
  return (
    <>
   <BreadCrumb
    title="Core Values"
    items={[{ name: "Home", url: "/" },{ name: "Our Story", url: "/" },{ name: "Core Values", url: "" }]}
  />

  <section className="pt80 pb80">
    <Container>
        <Row className='m-auto justify-content-center'>
           <Col md="2">
              <div className='coreValue text-center'>
                 <img src={require('../../assets/img/integrity.png')} className='img-fluid' alt="integrity" />
                 <p className="fs18 mb-0 mt-2 colorPara fMedium">
                 Integrity
                 </p>
              </div>
           </Col>
           <Col md="2">
              <div className='coreValue text-center'>
                 <img src={require('../../assets/img/clientfocus.png')} className='img-fluid' alt="clientfocus" />
                 <p className="fs18 mb-0 mt-2 colorPara fMedium">
                 Client Focus
                 </p>
              </div>
           </Col>
           <Col md="2">
              <div className='coreValue text-center'>
                 <img src={require('../../assets/img/excellence.png')} className='img-fluid' alt="excellence" />
                 <p className="fs18 mb-0 mt-2 colorPara fMedium">
                 Excellence
                 </p>
              </div>
           </Col>
           <Col md="2">
              <div className='coreValue text-center'>
                 <img src={require('../../assets/img/accountability.png')} className='img-fluid' alt="accountability" />
                 <p className="fs18 mb-0 mt-2 colorPara fMedium">
                 Accountability
                 </p>
              </div>
           </Col>
           <Col md="2">
              <div className='coreValue text-center'>
                 <img src={require('../../assets/img/teamspiritcollaboration.png')} className='img-fluid' alt="teamspiritcollaboration" />
                 <p className="fs18 mb-0 mt-2 colorPara fMedium">
                 Team Spirit & Collaboration
                 </p>
              </div>
           </Col>
        </Row>
    </Container>
  </section>

     <section className="breadCrumb">
       <Counter />
     </section>
   
    </>
 
  )
}

export default CoreValuesPage