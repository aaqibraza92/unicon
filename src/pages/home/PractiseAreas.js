import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Helmet } from "react-helmet";
let data = [
  {
    img: require("../../assets/img/practical.svg"),
    title: "Preclinical & Scientific",
  },
  {
    img: require("../../assets/img/clinical.svg"),
    title: "Clinical Operations",
  },
  {
    img: require("../../assets/img/Biometrics.svg"),
    title: "Biometrics",
  },
  {
    img: require("../../assets/img/RegulatoryAffairs.svg"),
    title: "Regulatory Affairs",
  },
  {
    img: require("../../assets/img/drug.svg"),
    title: "Drug Safety/PV",
  },
  {
    img: require("../../assets/img/RegulatoryAffairs.svg"),
    title: "Medical Affairs",
  },
  {
    img: require("../../assets/img/qualityCompliance.svg"),
    title: "Quality & Compliance",
  },
  {
    img: require("../../assets/img/Validation.svg"),
    title: "Validation",
  },
];

const PractiseAreas = () => {
  return (
    <>
      <Helmet>
        <title>Preclinical & Scientific | Unicon</title>
      </Helmet>
      <section
        className="pt80 pb80 practicalArea"
        style={{ background: `require('../../assets/img/area_bg.jpg')` }}
      >
        <h2 className="colorBlue fs36 fBold  mobFs28 text-center mb30">
          Practice Areas
        </h2>
        <Container>
          <Row className="gy-4">
            {data.map((e, i) => (
              <Col lg={3} md={3} xs={6} key={i}>
                <div className="wrapperArea d-flex align-items-center">
                  <img src={e.img.default} alt={e.title} />
                  <span className="ml12 colorPara fs18 mobFs12">{e.title}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PractiseAreas;
