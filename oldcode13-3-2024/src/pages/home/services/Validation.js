import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import { Col, Container, Row } from "reactstrap";
import { checkSvg } from "../../../assets/svg/Svg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contactType } from "../../../store/slices/UserSlices";
let data = [
  "Computer Systems Validation",
  "Equipment Validation",
  "Process Validation",
  "Cleaning Validation",
];

let data2 = [
  "IT CSV Manager",
  "Validation Lead ",
  "QA Lead (QMS)",
  "Validation Analyst",
  "Data Integrity Lead",
  "Validation Engineer",
  "Qualification Engineer",
  "Process Engineer",
];


const Validation = () => {
  const dispatch= useDispatch();

  const contactTypeHandle=(v)=>{
    dispatch(contactType(v));
  }
  return (
    <>
        <Helmet>
        <title>Validation | Unicon</title>
      </Helmet>
      <BreadCrumb
        title="Validation"
        items={[
          { name: "Home", url: "/" },
          { name: "Practice Areas", url: "/" },
          { name: "Validation", url: "" },
        ]}
      />

      <section className="pt80 pb80">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <p className="fs22 mobFs15 colorBlue mb20">
              With years of combined experience and understanding of pharmaceuticals, biotechnology and medical device industries, Unicon Pharma provides best-in-class staffing and recruiting support to all validation projects, big and small. </p>
            
              <p className="fs22 mobFs15 colorBlue mb20">
              Our validation team understands the extreme importance of ensuring the reliability and integrity of business information and delivers top talent that takes your projects through completion. </p>
            
            </Col>
            <Col lg={6} md={6}>
              <img
                src={require("../../../assets/img/Validation.png")}
                className="img-fluid radius"
                alt="Preclinical"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bgTestimonial pt80 pb80">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={9} md={9}>
              <h2 className="colorBlue text-center fs36 mobFs21 fBold mb50 mobmb30">
              Our team can assist in finding best-in-class talent within the following functional areas:
              </h2>
            </Col>
          </Row>

          <Row className="align-items-center mobilereverse">
            <Col lg={6} md={6}>
              <img
                src={require("../../../assets/img/Validationsecond.png")}
                className="img-fluid radius"
                alt="Preclinical"
              />
            </Col>
            <Col lg={6} md={6}>
              <ul className="noUl mb30">
                {data.map((e, i) => (
                  <li className="d-flex align-items-center mb12" key={i}>
                    <span className="mr10">{checkSvg}</span>
                    <span className="colorPara fs18">{e}</span>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt80 pb80">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={9} md={9}>
              <h2 className="colorBlue text-center fs36 mobFs21 fBold mb50 mobmb30">
                Below is a snapshot of searches we assisted
              </h2>
            </Col>
          </Row>

          <Row className="align-items-center justify-content-center">
            <Col lg={7} md={7}>
              <Row>
                {data2.map((e, i) => (
                  <Col lg={6} key={i}>
                    <div className="d-flex align-items-center mb12" key={i}>
                      <span className="mr10">{checkSvg}</span>
                      <span className="colorBlue fs18 fBold">{e}</span>
                    </div>
                  </Col>
                ))}

                
<div className="d-flex justify-content-center mt30">
                   <Link to="/contact-us" onClick={()=>contactTypeHandle("talent")} className="btnTheme bgGreen mr12 fMedium btnMob">
                    Find Talent
                    </Link>
                    <Link to="/contact-us" onClick={()=>contactTypeHandle("job")} className="btnTheme bgBlue fMedium btnMob">
                    Find Jobs
                    </Link>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Validation;
