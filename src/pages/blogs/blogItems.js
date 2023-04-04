/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Col, Row } from "reactstrap";
import { callIcon, linkdinIcon, mailIcon } from "../../assets/svg/Svg";
import { Link } from "react-router-dom";

const BlogItems = () => {
  return (
    <Row className="gy-4 gx-4 mb60">
      {Array(14)
        .fill()
        .map((e, i) => (
          <Col lg={4} md={4} xs={6}>
            <div className="teamWrapper radius20 pb15">
              <div>
              <Link to="/team/xyz"> <img
                  src={require("../../assets/img/team.png")}
                  className="img-fluid w-100"
                  alt=""
                /></Link>
               
              </div>
              <div className="text-start pt20 pb20 pl20 pr20">
                <h3>   <Link to="#" className="fs18 fBold colorBlue"> Where Are Today Drug Safety Methods </Link></h3>
                <p className="mt8 colorPara">
                As new drugs enter the market seemingly on a daily basis, the importance of pharmacovigilance is increasing....
                </p>
           
              </div>
            </div>
          </Col>
        ))}
    </Row>
  );
};

export default BlogItems;
