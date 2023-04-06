import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/header.css";
import { angleDownIcon, burgerMenu, closeIcon } from "../../assets/svg/Svg";

const Header = () => {
  const [mobToggle, setmobToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const resizeScreen = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    resizeScreen();
    window.addEventListener("resize", resizeScreen);
    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  });

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
    <header className={`transition ${stickyHeader}`}>
      <div id="myNav" className={`overlay ${mobToggle ? 'enableMobileMenu' : ''}`}>
        <button className="closebtn noBtn" onClick={()=>setmobToggle(false)}>
          {closeIcon}
        </button>
        <div class="overlay-content">
          <Navbar />
        </div>
      </div>

      <Container>
        <Row className="align-items-center">
          <Col lg={3} md={3} xs={6}>
            <Link to="/">
              <img
                className="img-fluid mainLogo"
                src={require("../../assets/img/logo.png")}
                alt="logo"
              />
            </Link>
          </Col>

          <Col lg={9} md={9} xs={6}>
            {screenWidth < 1024 && (
              <div className="d-flex justify-content-end">
                <button onClick={()=>setmobToggle(true)} className="noBtn triggerMenu">{burgerMenu}</button>
              </div>
            )}
            {screenWidth > 1024 && <Navbar />}
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

const Navbar = () => {
  return (
    <ul className="noUl d-flex flex-wrap headerMenu mb0 align-items-center justify-content-end">
      <li>
        <Link to="/" className="colorPara">
          Home
        </Link>
      </li>
      <li>
        <Link to="#" className="colorPara">
          Our Story <span className="ml5 arrowDown">{angleDownIcon}</span>
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
          Practice Areas <span className="ml5 arrowDown">{angleDownIcon}</span>
        </Link>
        <ul className="subMenu">
          <li>
            <Link to="/preclinical-scientific">Preclinical & Scientific</Link>
          </li>
          <li>
            <Link to="/clinical-operations">Clinical Operations</Link>
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
          Join Us <span className="ml5 arrowDown">{angleDownIcon}</span>
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
          Resources <span className="ml5 arrowDown">{angleDownIcon}</span>
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
  );
};
