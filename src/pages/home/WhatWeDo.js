import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { checkSvg } from "../../assets/svg/Svg";

let data = [
  "Temporary/Contract",
  "Contract-to-permanent / Full-Time",
  "Permanent/Full-Time",
  "Functional services (FSP)",
];
const WhatWeDo = () => {
  return (
    <section className="pt80 pb80">
      <Container>
        <Row className="align-items-center mobilereverse">
          <Col lg={6}>
            <img src={require('../../assets/img/what_we.jpg')} className='img-fluid' alt="what we do" />
          </Col>
          <Col lg={6} className="intro-content">
            <h2 className="colorBlue fs36 mobFs28 fBold mb30">What We Do</h2>
            <hr className="wp-block-separator has-alpha-channel-opacity"></hr>
            <p className="fs16 colorPara">
              At Unicon Pharma, we focus exclusively on Life Sciences—nothing
              else. From our inception, we’ve maintained a singular focus on
              working with Life Science companies and the industry’s leading
              candidates.
            </p>
            <p className="fs16 colorPara mb20">
              Contact us today, stop settling for subpar talent, and instead
              partner with the industry experts and focus more on what you do
              best: growing your business in an effort to improve the quality of
              life for communities around the world.
            </p>
            <h4 className="colorBlue fs20 fBold mb30">
              Our service offerings include:
            </h4>
            <ul className="noUl mb30">
              {data.map((e, i) => (
                <li className="d-flex align-items-center mb12" key={i}>
                  <span className="mr10">{checkSvg}</span>
                  <span className="colorPara fs16">{e}</span>
                </li>
              ))}
            </ul>

            <Link to="/about-us" className="btnTheme bgGreen mr12">
            Find Out More About Us
            </Link>
            <Link to="/contact-us" className="btnTheme bgBlue ">
            Contact Us
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeDo;
