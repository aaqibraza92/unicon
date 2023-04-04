import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import { Col, Container, Row } from "reactstrap";
import { checkSvg } from "../../../assets/svg/Svg";

let data = [
  "Research and Development (R&D)",
  "Analytical Development",
  "Quality Control",
  "Microbiology",
];

let data2 = [
  "Technical Project Manager",
  "Research Scientist",
  "Quality Control Manager",
  "Quality Control Chemist",
  "Analytical Chemist",
  "Data Review Specialist",
  "Microbiologist",
  "Research Associates",
  "Scientist",
  "Manufacturing Technician",
];


const PreclinicalScientific = () => {
  return (
    <>
      <BreadCrumb
        title="Preclinical & Scientific"
        items={[
          { name: "Home", url: "/" },
          { name: "Practice Areas", url: "/" },
          { name: "Preclinical & Scientific", url: "" },
        ]}
      />

      <section className="pt80 pb80">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <p className="fs22 colorBlue mb20">
                Unicon Pharma provides scientific staffing and recruitment
                support for Pharmaceutical, Biotech, and Medical Device
                Companies.
              </p>
              <p className="fs22 colorBlue">
                Our team of life sciences experts can assist your organization
                in finding the top talent for your critical needs.
              </p>
            </Col>
            <Col lg={6} md={6}>
              <img
                src={require("../../../assets/img/Preclinical.jpg")}
                className="img-fluid radius"
                alt="Preclinical"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bgTestimonial pt80 pb0">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={9} md={9}>
              <h2 className="colorBlue text-center fs36 fBold mb50">
                Our team can assist in finding best-in-class talent within the
                following functional areas
              </h2>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <img
                src={require("../../../assets/img/Preclinical.jpg")}
                className="img-fluid radius"
                alt="Preclinical"
              />
            </Col>
            <Col lg={6} md={6}>
              <ul className="noUl mb30">
                {data.map((e, i) => (
                  <li className="d-flex align-items-center mb12" key={i}>
                    <span className="mr10">{checkSvg}</span>
                    <span className="colorPara fs16">{e}</span>
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
              <h2 className="colorBlue text-center fs36 fBold mb50">
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
                      <span className="colorBlue fs16 fBold">{e}</span>
                    </div>
                  </Col>
                ))}

                <div className="d-flex justify-content-center mt30">
                <a className="btnTheme bgGreen mr12" href="/">Find Talent</a>
                <a className="btnTheme bgBlue" href="/">Find Jobs</a>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PreclinicalScientific;
