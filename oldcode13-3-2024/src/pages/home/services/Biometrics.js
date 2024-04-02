import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../../components/BreadCrumb";
import { Col, Container, Row } from "reactstrap";
import { checkSvg } from "../../../assets/svg/Svg";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { contactType } from "../../../store/slices/UserSlices";
let data = [
  "Case Report Form (CRF/eCRF) Design ",
  "Database Design, Development, Deployment, and Maintenance",
  "Data cleaning and query management",
  "Medical coding using WHODrug & MedDRA dictionaries",
  "Serious adverse event (SAE) reconciliation",
  "CDISC and ADaM Submission-ready Dataset Development ",
  "Analysis Dataset Development and Quality Control for Integrated Summaries of Safety (ISS) and Integrated Summaries of Efficacy (ISE)",
  "Tables, Listings, and Figures Development ",
  "ables, Listings, and Figures Development and Quality Control for ISS and ISE.",
];

let data2 = [
  "Clinical Database Designer",
  "Clinical Data Manager ",
  "Clinical Data Analyst",
  "SAS Programmer",
  "Statistical Programmer",
  "Biostatistician",
  "EDC Programmer",
  "Clinical Database Programmer",
];


const Biometrics = () => {
  const dispatch= useDispatch();

  const contactTypeHandle=(v)=>{
    dispatch(contactType(v));
  }
  return (
    <>
      <Helmet>
        <title>Biometrics | Unicon</title>
      </Helmet>
      <BreadCrumb
        title="Biometrics"
        items={[
          { name: "Home", url: "/" },
          { name: "Practice Areas", url: "/" },
          { name: "Biometrics", url: "" },
        ]}
      />

      <section className="pt80 pb80">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <p className="fs22 mobFs15 colorBlue mb20">
              Unicon Pharma provides biometric staffing and recruiting support to help you collect, analyze, and report your clinical trial data to the regulatory agencies.</p>
              <p className="fs22 mobFs15 colorBlue">
              Whether it’s contract staff augmentation, project teams, contract to hire or direct hire resources, Unicon Pharma can assist your organization to meet your goals. </p>
            </Col>
            <Col lg={6} md={6}>
              <img
                src={require("../../../assets/img/Biometrics.png")}
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
                src={require("../../../assets/img/Biometricssecond.png")}
                className="img-fluid radius"
                alt="Preclinical"
              />
            </Col>
            <Col lg={6} md={6}>
              <ul className="noUl mb30">
                {data.map((e, i) => (
                  <li className="d-flex align-items-center mb12" key={i}>
                    <span className="mr10">{checkSvg}</span>
                    <span className="colorPara fs17">{e}</span>
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
                   <Link to="/contact-us" onClick={()=>contactTypeHandle("talent")}  className="btnTheme bgGreen mr12 fMedium btnMob">
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

export default Biometrics;
