import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import { Col, Container, Row } from "reactstrap";
import { checkSvg } from "../../../assets/svg/Svg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contactType } from "../../../store/slices/UserSlices";
let data = [
  "Medical Communications",
  "Scientific Publications",
  "Therapeutic Area",
  "Medical Writing ",
];

let data2 = [
  "Global Director, Medical Affairs",
  "Therapeutic Area Head",
  "Subject Matter Expert",
  "Medical Advisor",
  "Publications Manager",
  "Scientific Communications Manager",
  "Medical Information Manager",
  "Medical Science Liaison (MSL)",
  "Accounts Director",
  "Medical Writers  ",
];

const MedicalAffairs = () => {
  const dispatch= useDispatch();

  const contactTypeHandle=(v)=>{
    dispatch(contactType(v));
  }
  return (
    <>
      <Helmet>
        <title>Medical Affairs | Unicon</title>
      </Helmet>
      <BreadCrumb
        title="Medical Affairs"
        items={[
          { name: "Home", url: "/" },
          { name: "Practice Areas", url: "/" },
          { name: "Medical Affairs", url: "" },
        ]}
      />

      <section className="pt80 pb80">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <p className="fs22 mobFs15 colorBlue mb20">
                With years of experience, Unicon Pharma has gained reputation as
                niche resource to medical affairs and communications groups at
                various companies, big and small.{" "}
              </p>
              <p className="fs22 mobFs15 colorBlue">
                Whether it’s contract staff augmentation, project teams,
                contract to hire or direct hire resources, Unicon Pharma can
                assist your organization to meet your goals.{" "}
              </p>
            </Col>
            <Col lg={6} md={6}>
              <img
                src={require("../../../assets/img/Medical.png")}
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
                Our team can assist in finding best-in-class talent within the
                following functional areas:
              </h2>
            </Col>
          </Row>

          <Row className="align-items-center mobilereverse">
            <Col lg={6} md={6}>
              <img
                src={require("../../../assets/img/Medicalsecond.png")}
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

export default MedicalAffairs;
