import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { Col, Container, Row } from "reactstrap";
import { checkSvg } from "../../assets/svg/Svg";
import Counter from "../home/Counter";
import { Helmet } from "react-helmet";
import AccordionUI from "../../components/Accordion";
import AlertModal from "../../components/AlertModal/AlertModal";
import LookingForTalent from "../contact-us/LookingForTalent";
import { HOME_URL, UNICON_PHARMA_FAQ } from "../../helpers/apiurls";
import axios from "axios";
let data = [
  "Competitive hourly rate",
  "Contributory medical, dental, and vision insurance",
  "Continuous Placement Assistance aligned with your career goals",
  "Employee Referral Bonus",
];
const UniconPharmaCareers = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(()=>{
    loadFaq()
  },[])
  const loadFaq = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios.get(`${UNICON_PHARMA_FAQ}`, options).then((res) => {
      if (res && res.status === 200) {
        setPostData(res?.data?.acf?.faq_repeater);
        setloading(false);

      }
    });
  };

  return (
    <>
       <Helmet>
        <title>Unicon Pharma Careers | Unicon</title>
      </Helmet>
     
      <BreadCrumb
        title="Unicon Pharma Careers"
        items={[
          { name: "Home", url: "/" },
          { name: "Join Us", url: "/" },
          { name: "Unicon Pharma Careers", url: "" },
        ]}
      />
      <section className="pt80 pb80">
        <Container>
          <Row className="align-items-center mobilereverse ">
            <Col lg={6}>
              <img
                src={require("../../assets/img/what_we.jpg")}
                className="img-fluid"
                alt="what we do"
              />
            </Col>
            <Col lg={6} className="intro-content">
              <h2 className="colorBlue fs36 mobFs28  fBold mb30">
                Working With Unicon Pharma
              </h2>
              <hr className="wp-block-separator has-alpha-channel-opacity"></hr>
              <p className="fs16 colorPara">
                At Unicon Pharma, we leverage our experienced sales and
                recruiting teams, vast client network, and relationship-first
                approach to become your trusted advisor and empower you to
                achieve your goals. We’ll work closely with you, understand your
                needs, identify the best suitable roles, and partner with you to
                find the one that you really love.
              </p>

              <h4 className="colorBlue fs20 fBold mb30">
                Our positions include Temporary/Contract, Contract-to-
                permanent, Permanent/Full-Time​ and offers:
              </h4>
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

      <section className="pt20 pb20">
        <Container>
          <h2 className="colorBlue fs36  mobFs28  fBold mb30">We Are Currently Hiring</h2>
          <p className="fs16 colorPara">
            Unicon Pharma seeks talent from diverse backgrounds and invests
            heavily in your training and development to ensure you succeed in
            our customer-focused culture. We treat our employees like family and
            value their personal and professional happiness. If you have the
            skills and talents to contribute to our in-house life science
            consulting team, view the opportunities below and send your
            resume/CV to:
            <a
              href="mailto:careers@uniconpharma.com"
              className="colorBlue"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              careers@uniconpharma.com
            </a>
          </p>
          <p className="fs16 colorPara">
            We also rely on our employees to help us identify top talent. To
            encourage your efforts, all employees are eligible for our employee
            referral program. You will receive a one-time referral bonus if the
            candidate is hired by the company.
          </p>
        </Container>
      </section>
      <section className="text-center pt80 pb80">
        <Container>
          {
            loading && <h3>Loading...</h3>
          }
        <AccordionUI
        data={postData}
      />

      <section className="mt60">
        <button className="btnTheme bgGreen mr12 fMedium btnMob" onClick={()=>AlertModal.show(<LookingForTalent/>,'Looking for talent?',()=>{},'xl')}>
        Apply Now
        </button>
      </section>
        </Container>
      </section>
      <Counter className="breadCrumb"/>
    </>
  );
};

export default UniconPharmaCareers;
