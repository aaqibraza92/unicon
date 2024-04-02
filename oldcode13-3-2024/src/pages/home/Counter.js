import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { Col, Container, Row } from "reactstrap";

let data = [
  {
    img: require("../../assets/img/heart.png"),
    end: 50,
    title: "Clients",
  },
  {
    img: require("../../assets/img/lappy.png"),
    end: 1200,
    title: "Project Completed",
  },
  {
    img: require("../../assets/img/camera.png"),
    end: 225,
    title: "Active Consultants",
  },
  {
    img: require("../../assets/img/users_all.png"),
    end: 180,
    title: "Screened & Qualified Life Sciences Candidates",
  },

];
const Counter = (props) => {
  const [counterOn, setcounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setcounterOn(true)}
      className={`counterSection ${props.class && props.class}`}
    >
      {counterOn && (
        <Container>
          <Row className="gy-5">
            {data.map((e, i) => (
              <Col className="subc" lg={3} md={6}  key={i}>
                <div className="d-flex align-items-center counterData">
                  <div className="mr15">
                    <img src={e.img} alt="" />
                  </div>
                  <div>
                    <CountUp
                      start={0}
                      end={e.end}
                      duration={3}
                      // suffix="+"
                      delay={0}
                      className="colorBlue fs30 fBold mb0 lh24 position-relative countersub"
                    />
                    <p className="mb0 colorPara">{e.title}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </ScrollTrigger>
  );
};

export default Counter;
