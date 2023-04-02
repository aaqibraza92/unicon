/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Counter from '../home/Counter'
import { Col, Container, Row } from 'reactstrap'
import { callIcon, linkdinIcon, mailIcon } from '../../assets/svg/Svg'
import { Link } from 'react-router-dom'

const SingleTeam = () => {
  return (
    <>
        <section className="breadCrumb singleTeam d-flex align-items-center pt80 pb80 he">
            <Container>
            <Row className='align-items-center'>
            <Col lg={3}>
            <div className='teamImgWrp'>
            <img src={require('../../assets/img/team_demo.jpg')} className='img-fluid' alt="" />
            </div>
           
            </Col>
            <Col lg={9}>
            <h2 className="colorBlue fs36 fBold mb10">Raju Lakkamraju</h2>
            <p className='colorGreen '>
            Director
            </p>
            </Col>
            </Row>
            </Container>
        </section>

        <section className='pt50 pb80 bgGrey'>
        <Container>
            <Row className='align-items-center'>
            <Col lg={3}>
                    
            </Col>
            <Col lg={9}>
            <p className='colorPara'>
            Raju has over 19 years of experience in business management, strategy, accounting, and finance. He plays a strategic role in corporate growth and development, including guidance to the Finance, HR, Compliance, and Business development teams. He focuses on ensuring sustainable growth and driving long-term shareholder value. He is a member of our management committee and chair our corporate growth and Finance and CSR committees. 
            </p>
            <p className='colorPara'>
            Mr. Lakkamraju is a Chartered Accountant and holds a CA degree from the Institute of Chartered Accountants of India. Besides work, he enjoys playing sports, reading books, and investing.
            </p>

            <ul className="noUl mt20 d-flex">
                <li className="mr20">
                    <a href="#" target="_blank">
                    {mailIcon}   <span className='colorPara ml5 fs14'>raju@uniconpharma.com</span>
                    </a>
                </li>
                <li className="mr20">
                    <a href="#" target="_blank">
                    {callIcon}   <span className='colorPara ml5 fs14'>(848) 666-0101</span>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                    {linkdinIcon}  <span className='colorPara ml5 fs14'>Follow Linkedin</span>
                    </a>
                </li>
                </ul>

                <div className='mt40'>
                    <Link to="#" className="colorBlue fs16 fMedium line">Back to Team</Link>
                </div>
            </Col>
            </Row>
            </Container>
        </section>
        <Counter/>
    </>
  )
}

export default SingleTeam