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
      }
      else{
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
                <Link to="/about-us" className="colorPara">
                Our Story
                </Link>
              </li>
              <li>
                <Link to="/preclinical-scientific" className="colorPara">
                Practice Areas
                </Link>
              </li>
              <li>
              <Link
                      to="/our-team"
                      className="colorPara"
                    >
                      Our Team
                    </Link>
              </li>
              <li>
                <Link to="/our-team/xyz" className="colorPara">
                Insights
                </Link>
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
