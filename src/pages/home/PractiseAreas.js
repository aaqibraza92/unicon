import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
let data = [
  {
    url: '/preclinical-scientific',
    img: require("../../assets/img/practical.svg"),
    title: "Preclinical & Scientific",
  },
  {
    url: '/clinical-operations',
    img: require("../../assets/img/clinical.svg"),
    title: "Clinical Operations",
  },
  {
    url: '/biometrics',
    img: require("../../assets/img/Biometrics.svg"),
    title: "Biometrics",
  },
  {
    url: '/regulatory-affairs',
    img: require("../../assets/img/RegulatoryAffairs.svg"),
    title: "Regulatory Affairs",
  },
  {
    url: '/drug-safety-pv',
    img: require("../../assets/img/drug.svg"),
    title: "Drug Safety/PV",
  },
  {
    url: '/medical-affairs',
    img: require("../../assets/img/MedicalAffairs.svg"),
    title: "Medical Affairs",
  },
  {
    url: '/quality-compliance',
    img: require("../../assets/img/qualityCompliance.svg"),
    title: "Quality & Compliance",
  },
  {
    url: '/validation',
    img: require("../../assets/img/Validation.svg"),
    title: "Validation",
  },
];

const PractiseAreas = () => {
  return (
    <>
      {/* <Helmet>
        <title>Preclinical & Scientific | Unicon</title>
      </Helmet> */}
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
              <Col lg={3} md={4} xs={6} key={i}>
                <div className="wrapperArea d-flex align-items-center">
                <Link to={e?.url}  className="d-flex align-items-center">
                <img src={e.img.default} alt={e.title} />
                  <span className="ml12 colorPara fs18 mobFs12">{e.title}</span>
                </Link>
             
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
