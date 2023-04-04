import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const HomeBanner = () => {
  return (
    <div className="position-relative d-flex align-items-center">
      <img
        className="img-fluid w-100"
        src={require("../../assets/img/home_banner.jpg")}
        alt="banner"
      />
      <div className="caption position-absolute w-100">
        <Container>
          <Row>
            <Col lg={5}>
              <div>
                <h1 className="fs50 fSemiBold text-start colorBlue ml0">
                  The Best & Brightest in Life Sciences. Working for You.
                </h1>

                <div className="d-flex">
                    <Link to="#" className="btnTheme bgGreen mr12 fMedium">
                    Find Talent
                    </Link>
                    <Link to="#" className="btnTheme bgBlue fMedium">
                    Find Jobs
                    </Link>
                </div>  
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeBanner;
