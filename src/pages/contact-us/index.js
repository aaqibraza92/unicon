import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Location from "./Location";
import { Col, Container, Row } from "reactstrap";

import { Helmet } from "react-helmet";
import LookingForJob from "./LookingForJob";
import LookingForTalent from "./LookingForTalent";
const ContactUs = () => {
  const [switcher, setswitcher] = useState(false);

  return (
    <>
      <Helmet>
        <title>Contact Us | Unicon</title>
      </Helmet>
      <BreadCrumb
        title="Contact Us"
        subTitle="We’re here to help. let’s connect."
        items={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "" },
        ]}
      />

      <section className="formSection">
        <Container>
          <div className="wrapperContact radius20">
            <Row className="justify-content-center">
              <Col lg={7}>
                <div className="text-center mb30">
                  <h2 className="fBold colorBlue fs36 ">Get In touch</h2>
                  <p className="colorPara fs17">
                  Whether you’re a professional looking for a job or a business seeking highly skilled talent, the team at Unicon are here for you.
                  </p>
                </div>
              </Col>
            </Row>

            <div className="text-center mb20">
              <ul className="noUl d-inline-flex tabbStyle justify-content-center">
                <li>
                  <button
                    className={`transition  colorGreen ${
                      !switcher && "active"
                    }`}
                    onClick={() => setswitcher(false)}
                  >
                    LOOKING FOR A JOB?
                  </button>
                </li>
                <li>
                  <button
                    className={`transition colorGreen ${switcher && "active"}`}
                    onClick={() => setswitcher(true)}
                  >
                    LOOKING FOR TALENT?
                  </button>
                </li>
              </ul>
            </div>
            {!switcher && <LookingForJob />}
            {switcher && <LookingForTalent />}
          </div>
        </Container>
      </section>

      <Location />
    </>
  );
};

export default ContactUs;
