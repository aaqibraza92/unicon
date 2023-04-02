/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Col, Row } from "reactstrap";
import { callIcon, linkdinIcon, mailIcon } from "../../assets/svg/Svg";
import { Link } from "react-router-dom";

const TeamItems = () => {
  return (
    <Row className="gy-4 gx-4 mb60">
      {Array(14)
        .fill()
        .map((e, i) => (
          <Col lg={3} md={3} xs={6}>
            <div className="teamWrapper bgGradient radius20 pb15">
              <div>
              <Link to="#"> <img
                  src={require("../../assets/img/team.png")}
                  className="img-fluid w-100"
                  alt=""
                /></Link>
               
              </div>
              <div className="text-center pt25">
                <h3>   <Link to="#" className="fs18 fBold colorBlue"> Ravi K Kollipara </Link></h3>
                <p className="mt8 colorPara">
                C.E.O.
                </p>
                <ul className="noUl d-flex justify-content-center">
                <li className="mr10">
                    <a href="#" target="_blank">
                        {linkdinIcon}
                    </a>
                </li>
                <li className="mr10">
                    <a href="#" target="_blank">
                        {mailIcon}
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        {callIcon}
                    </a>
                </li>
                </ul>
              </div>
            </div>
          </Col>
        ))}
    </Row>
  );
};

export default TeamItems;
