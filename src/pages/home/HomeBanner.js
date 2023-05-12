import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { contactType } from "../../store/slices/UserSlices";

const HomeBanner = () => {
  const dispatch= useDispatch();

  const contactTypeHandle=(v)=>{
    dispatch(contactType(v));
  }
 
  return (
    <div className="position-relative homeBanner d-flex align-items-center">
      <img
        className="img-fluid w-100"
        src={require("../../assets/img/home_banner.jpg")}
        alt="banner"
      />
      <div className="caption position-absolute w-100">
        <Container>
          <Row>
            <Col lg={5} md={8}>
              <div>
                <h1 className="fs50 tabfs24 mobFs17 mobwidth50 mobmb0 mobmr0 fSemiBold text-start colorBlue ml0">
                  Connecting the Brightest Minds In Life Sciences
                </h1>

                <div className="d-flex">
                  <Link
                    className="btnTheme bgGreen mr12 fMedium btnMob"
                    to="/contact-us"
                    onClick={()=>contactTypeHandle("talent")}
                  >
                    Find talent
                  </Link>
                  <Link
                    to="/open-industry-jobs"
                    className="btnTheme bgBlue fMedium btnMob"
                    onClick={()=>contactTypeHandle("job")}
                  >
                    Find jobs
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
