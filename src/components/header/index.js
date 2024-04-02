import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/header.css";
import { angleDownIcon, burgerMenu, closeIcon } from "../../assets/svg/Svg";

const Header = () => {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


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
    document.getElementById('triggerToOpen')!==null && document.getElementById('triggerToOpen').addEventListener('click', event => {
      document.getElementById('myNav').classList.add('enableMobileMenu');
      
    });

    document.getElementById('closeMenu')!==null && document.getElementById('closeMenu').addEventListener('click', event => {
      document.getElementById('myNav').classList.remove('enableMobileMenu');
      
    })
    

  }, []);
  return (
    <header className={`transition ${stickyHeader}`}>
      <div id="myNav" className={`overlay`}>
        <button id='closeMenu' className="closebtn noBtn" >
          {closeIcon}
        </button>
        <div className="overlay-content">
          <Navbar />
        </div>
      </div>

      <Container>
        <Row className="align-items-center">
          <Col lg={3} md={3} xs={6}>
            <Link to="/">
              <img
                className="img-fluid mainLogo"
                src={require("../../assets/img/footer_logo.png")}
                alt="logo"
              />
            </Link>
          </Col>

          <Col lg={9} md={9} xs={6}>
            {screenWidth < 1024 && (
              <div className="d-flex justify-content-end">
                <button id="triggerToOpen"  className="noBtn triggerMenu">{burgerMenu}</button>
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

const Navbar = (props) => {

  useEffect(()=>{
    document.querySelectorAll('.clickToClose').length > 0 && document.querySelectorAll('.clickToClose').forEach(item => {
      item.addEventListener('click', event => {
        document.getElementById('myNav').classList.remove('enableMobileMenu');
        
      })
    })
  },[])

  return (
    <ul className="noUl d-flex flex-wrap headerMenu mb0 align-items-center justify-content-end">
      <li>
        <Link to="/" className="colorPara clickToClose">
          Home
        </Link>
      </li>
      <li>
        <Link to="#" className="colorPara">
          Our Story <span className="ml5 arrowDown">{angleDownIcon}</span>
        </Link>
        <ul className="subMenu">
          <li>
            <Link to="/about-us" className="clickToClose">About Us</Link>
          </li>
          <li>
            <Link to="/what-we-do" className="clickToClose">What We Do</Link>
          </li>
          <li>
            <Link to="/our-team" className="clickToClose">Our Team </Link>
          </li>
          <li>
            <Link to="/core-values" className="clickToClose">Core Values </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="#" className="colorPara">
          Practice Areas <span className="ml5 arrowDown">{angleDownIcon}</span>
        </Link>
        <ul className="subMenu">
          <li>
            <Link to="/preclinical-scientific" className="clickToClose">Preclinical & Scientific</Link>
          </li>
          <li>
            <Link to="/clinical-operations" className="clickToClose">Clinical Operations</Link>
          </li>
          <li>
            <Link to="/biometrics" className="clickToClose">Biometrics </Link>
          </li>
          <li>
            <Link to="/regulatory-affairs" className="clickToClose">Regulatory Affairs </Link>
          </li>
          <li>
            <Link to="/drug-safety-pv" className="clickToClose">Drug Safety/PV </Link>
          </li>
          <li>
            <Link to="/medical-affairs" className="clickToClose">Medical Affairs</Link>
          </li>
          <li>
            <Link to="/quality-compliance" className="clickToClose">Quality & Compliance </Link>
          </li>
          <li>
            <Link to="/validation" className="clickToClose">Validation</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="#" className="colorPara">
          Join Us <span className="ml5 arrowDown">{angleDownIcon}</span>
        </Link>
        <ul className="subMenu">
          <li>
            <Link to="/open-industry-jobs" className="clickToClose">Open Industry Jobs </Link>
          </li>
          <li>
            <Link to="/unicon-pharma-careers" className="clickToClose">Unicon Pharma Jobs</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/blogs" className="colorPara clickToClose">
          Resources
        </Link>
     
      </li>
      <li>
        <Link to="/contact-us" className="colorPara clickToClose">
          Contact Us
        </Link>
      </li>
    </ul>
  );
};
