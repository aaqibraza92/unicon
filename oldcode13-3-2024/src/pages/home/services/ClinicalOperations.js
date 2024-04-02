import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import { Col, Container, Row } from "reactstrap";
import { checkSvg } from "../../../assets/svg/Svg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contactType } from "../../../store/slices/UserSlices";

let data = [
  "Clinical Trial Design and Protocol Development",
  "Feasibility, Site Selection and Patient Recruitment",
  "Clinical Study Start Up",
  "Trial Master File (TMF Management)",
  "Clinical Monitoring",
  "Clinical Supplies Management",
  "Clinical Systems Implementation and Maintenance",
  "Regulatory Submissions and Audit Support",
  "Project and Budget Management.",
];

let data2 = [
  "Clinical Trial Manager ",
  "Clinical Project Manager",
  "Clinical Study Lead",
  "Study Start-up Specialist",
  "Clinical Trial Associate",
  "Clinical Research Associate ",
  "Clinical Research Scientist",
  "Clinical Document Specialist",
  "TMF Expert",
  "Clinical Supplies Manager",
];


const ClinicalOperations = () => {
  const dispatch= useDispatch();

  const contactTypeHandle=(v)=>{
    dispatch(contactType(v));
  }
  return (
    <>
       <Helmet>
        <title>Clinical Operations | Unicon</title>
      </Helmet>
      <BreadCrumb
        title="Clinical Operations"
        items={[
          { name: "Home", url: "/" },
          { name: "Practice Areas", url: "/" },
          { name: "Clinical Operations", url: "" },
        ]}
      />

      <section className="pt80 pb80">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <p className="fs22 mobFs15 colorBlue mb20">
              Unicon Pharma provides clinical operations staffing and recruiting support across a broad range of therapeutic areas and all phases of development from start up to close out.
              </p>
              <p className="fs22 mobFs15 colorBlue">
              Whether it’s contract staff augmentation, project teams, contract to hire or direct hire resources, Unicon Pharma can assist your organization to meet your goals. 
              </p>
            </Col>
            <Col lg={6} md={6}>
              <img
                src={require("../../../assets/img/clinicaloperations.jpg")}
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
                src={require("../../../assets/img/ClinicalOperations.png")}
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

export default ClinicalOperations;
