/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/footer.css";
import { callSvg, envelopSvg, fb, linkdin, linkdinColor, locationSvg, twitter } from "../../assets/svg/Svg";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="gy-5">
          <Col lg={2}>
            <Link to="/">
              <img
                className="img-fluid"
                src={require("../../assets/img/footer_logo.png")}
                alt="logo"
              />
            </Link>
          </Col>
          <Col lg={7} >
            <Row className="gy-3">
              <Col lg={3} sm={4} xs={6}>
                <h3 className="colorWhite fs20 fMedium mb15">Useful Links</h3>

                <ul className="noUl">
                  <li className="mb8">
                    <Link
                      to="/about-us"
                      className="colorWhite fs15 fRegular itemLightwhite"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li className="mb8">
                    <Link
                      to="/preclinical-scientific"
                      className="colorWhite fs15 fRegular itemLightwhite"
                    >
                      Practice Areas
                    </Link>
                  </li>
                  <li className="mb8">
                    <Link
                      to="/our-team"
                      className="colorWhite fs15 fRegular itemLightwhite"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li className="mb8">
                    <Link
                      to="/blogs"
                      className="colorWhite fs15 fRegular itemLightwhite"
                    >
                      Resources 
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact-us"
                      className="colorWhite fs15 fRegular itemLightwhite"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col lg={3} sm={4} xs={6}>
                <h3 className="colorWhite fs20 fMedium mb15">Our Locations</h3>

                <ul className="noUl">
                  <li className="mb8">
                    <Link
                      to="#"
                      className="colorWhite fs15 fRegular itemLightwhite"
                    >
                      New Jersey
                    </Link>
                  </li>
                  <li className="mb8">
                    <Link
                      to="#"
                      className="colorWhite fs15 fRegular itemLightwhite"
                    >
                      Boston
                    </Link>
                  </li>
                  <li className="mb8">
                    <Link
                      to="#"
                      className="colorWhite fs15 fRegular itemLightwhite"
                    >
                      Chicago
                    </Link>
                  </li>
                  <li className="mb8">
                    <Link
                      to="#"
                      className="colorWhite fs15 fRegular itemLightwhite"
                    >
                       North Carolina 
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col sm={4} lg={6}>
                <h3 className="colorWhite fs20 fMedium mb15">Contact Us</h3>

                <ul className="noUl">
                  <li className="mb12">
                    <div className="d-flex">
                      <span className="mr12">{locationSvg}</span>
                      <span className="colorWhite fs15 fRegular itemLightwhite">
                        51 Cragwood Rd Suite 101<br></br> South Plainfield, New Jersey
                        07080
                      </span>
                    </div>
                  </li>

                  <li className="mb12">
                    <div className="d-flex">
                      <span className="mr12">{envelopSvg}</span>
                      <a
                        href="mailto:info@uniconpharma.com"
                        className="colorWhite fs15 fRegular itemLightwhite"
                      >
                        info@uniconpharma.com
                      </a>
                    </div>
                  </li>

                  <li className="mb0">
                    <div className="d-flex">
                      <span className="mr12">{callSvg}</span>
                      <a
                        href="tel:848-666-0101"
                        className="colorWhite fs15 fRegular itemLightwhite"
                      >
                        848-666-0101
                      </a>
                    </div>
                  </li>
                </ul>

                <ul className="noUl socailMedia d-flex">
                  <li className="mr20">
                    <a href="https://www.facebook.com/uniconpharma/" target="_blank">
                      {fb}
                    </a>
                  </li>
                  <li className="mr20">
                    <a href="https://twitter.com/uniconpharma" target="_blank">
                      {twitter}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/unicon-pharma/?viewAsMember=true" target="_blank">
                      {linkdin}
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col lg={3}>
          <h3 className="colorWhite fs20 fMedium mb15">{linkdinColor} <span className="ml5">Linkedin Feed</span></h3>
            <img
              className="img-fluid"
              src={require("../../assets/img/linkd.png")}
              alt="logo"
            />
          </Col>
        </Row>
      </Container>

      <div className="copyright text-center mt50">
          <p className="colorWhite fs14 fRegular itemLightwhite mb0 opacity55">
          © Unicon Pharma {new Date().getFullYear()}. All Rights Reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;
