import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { checkSvg } from "../../assets/svg/Svg";

let data = [
  "Unparalleled understanding of the life sciences industry",
  "Extensive database of screened, qualified candidates (180,000+)",
  "Dedicated Client Services and Recruiting Teams",
  "Proven Success",
  "Best in class recruiting tools and technology",
  "Industry's leading network",
];
const WhyChosseUs = () => {
  return (
    <section className="pt80 pb80">
      <Container>
        <Row>
          <Col lg={6}>
            <img src={require('../../assets/img/whyChoose.jpg')} className='img-fluid' alt="what we do" />
          </Col>
          <Col lg={6}>
            <h2 className="colorBlue fs36 fBold mb30">Why Choose Us</h2>
            <ul className="noUl mb30">
              {data.map((e, i) => (
                <li className="d-flex align-items-center mb15" key={i}>
                  <span className="mr10">{checkSvg}</span>
                  <span className="colorPara fs16">{e}</span>
                </li>
              ))}
            </ul>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChosseUs;
