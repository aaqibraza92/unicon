import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Location from "./Location";
import { Col, Container, Row } from "reactstrap";

const ContactUs = () => {
  return (
    <>
      <BreadCrumb
        title="Contact Us"
        subTitle="We’re Here to Help. Let’s Connect."
        items={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "" },
        ]}
      />

      <section className="formSection">
        <Container>
          <div className="wrapperContact">
            <Row className="justify-content-center">
              <Col lg={7}>
              <div className="text-center mb30">
              <h2 className="fBold colorBlue fs36 ">Get In touch</h2>
                <p className="colorPara fs17">
                  Whether You’re A Professional Looking For A Job Or A Business
                  Seeking Highly Skilled Talent, The Team At Unicon Are Here For
                  You.
                </p>
              </div>
           
              </Col>
            </Row>

            <div className="text-center mb20">
              <ul className="noUl d-inline-flex tabbStyle justify-content-center">
                <li>
                  <button className={`transition active colorGreen`} onClick={() => {}}>
                    LOOKING FOR A JOB?
                  </button>
                </li>
                <li>
                  <button className={`transition colorGreen`} onClick={() => {}}>
                    LOOKING FOR TALENT?
                  </button>
                </li>
              </ul>
            </div>

            <Row>
              <Col lg={4} md={4}>
              <div className="mb25">
              <input
                  type="text"
                  className="inputTheme w-100"
                  placeholder="Choose your nearest office *"
                />
              </div>
           
              </Col>
              <Col lg={4} md={4}>
              <div className="mb25">
              <input
                  type="text"
                  className="inputTheme w-100"
                  placeholder="Title"
                />
              </div>
              
              </Col>
              <Col lg={4} md={4}>
              <div className="mb25">
              <input
                  type="text"
                  className="inputTheme w-100"
                  placeholder="First Name *"
                />
              </div>
             
              </Col>
              <Col lg={4} md={4}>
              <div className="mb25">
              <input
                  type="text"
                  className="inputTheme w-100"
                  placeholder="Last Name *"
                />
              </div>
              
              </Col>
              <Col lg={4} md={4}>
              <div className="mb25">
              <input
                  type="text"
                  className="inputTheme w-100"
                  placeholder="Contact Number *"
                />
              </div>
             
              </Col>
              <Col lg={4} md={4}>
              <div className="mb25">
              <input
                  type="text"
                  className="inputTheme w-100"
                  placeholder="E-mail *"
                />
              </div>
              
              </Col>
              <Col lg={12} md={12}>
              <div className="mb25">
              <input
                  type="text"
                  className="inputTheme w-100"
                  placeholder="What role are you looking for? *"
                />
              </div>
              
              </Col>

              <Col lg={6} md={6}></Col>
              <Col lg={6} md={6}>
                <Row className="align-items-center">
                  <Col lg={3} md={3}>
                    <div className="fs14 fBold colorBlue">Upload Resume</div>
                  </Col>

                  <Col lg={9} md={9}>
                    <label
                      htmlFor="fileUpload"
                      className="cursor fileUploadTheme w-100 d-flex justify-content-between"
                    >
                      <span className="colorPara">No file chosen</span>{" "}
                      <span className="chooseFile">Choose File</span>
                    </label>
                    <input id="fileUpload" className="d-none" type="file" />
                  </Col>
                </Row>
              </Col>

              <Col lg={12}>
                <p className="fs14 colorBlue">
                  By Registering, You Confirm That You Agree To The Processing
                  Of Your Personal Data As Described In Our Privacy Policy
                </p>

                <div className="mt30 d-flex justify-content-between">
                  <div></div>
                  <button className="noBtn btnTheme">Submit</button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <Location />
    </>
  );
};

export default ContactUs;
