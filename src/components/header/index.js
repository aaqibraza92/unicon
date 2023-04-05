import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/header.css";

const Header = () => {
  const [stickyHeader, setstickyHeader] = useState("");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY;
      if (isTop > 200) {
        setstickyHeader("topDown");
      } else {
        setstickyHeader("topUp");
      }
    });
  }, []);
  return (
    <header className={`${stickyHeader}`}>
      <Container>
        <Row>
          <Col lg={3}>
            <Link to="/">
              <img
                className="img-fluid"
                src={require("../../assets/img/logo.png")}
                alt="logo"
              />
            </Link>
          </Col>

          <Col lg={9}>
            <ul className="noUl d-flex headerMenu mb0 align-items-center justify-content-end">
              <li>
                <Link to="/" className="colorPara">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="colorPara">
                  Our Story
                </Link>
                <ul className="subMenu">
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/what-we-do">What We Do</Link>
                  </li>
                  <li>
                    <Link to="/our-team">Our Team </Link>
                  </li>
                  <li>
                    <Link to="/core-values">Core Values </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="#" className="colorPara">
                  Practice Areas
                </Link>
                <ul className="subMenu">
                  <li>
                    <Link to="/preclinical-scientific">Preclinical & Scientific</Link>
                  </li>
                  <li>
                    <Link to="/preclinical-scientific">Clinical Operations</Link>
                  </li>
                  <li>
                    <Link to="/biometrics">Biometrics </Link>
                  </li>
                  <li>
                    <Link to="/regulatory-affairs">Regulatory Affairs </Link>
                  </li>
                  <li>
                    <Link to="/drug-safety-pv">Drug Safety/PV </Link>
                  </li>
                  <li>
                    <Link to="/medical-affairs">Medical Affairs</Link>
                  </li>
                  <li>
                    <Link to="/quality-compliance">Quality & Compliance </Link>
                  </li>
                  <li>
                    <Link to="/validation">Validation</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="#" className="colorPara">
                  Join Us
                </Link>
                <ul className="subMenu">
                  <li>
                    <Link to="/open-industry-jobs">Open Industry Jobs </Link>
                  </li>
                  <li>
                    <Link to="/unicon-pharma-careers">Unicon Pharma Jobs</Link>
                  </li>
        
                </ul>
              </li>
              <li>
                <Link to="#" className="colorPara">
                Resources
                </Link>
                <ul className="subMenu">
                  <li>
                    <Link to="/blogs">Articles</Link>
                  </li>
                  <li>
                    <Link to="/unicon-pharma-careers">Unicon Pharma Jobs</Link>
                  </li>
        
                </ul>
              </li>
              <li>
                <Link to="/contact-us" className="colorPara">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
