import React from "react";
import { Col, Container, Row } from "reactstrap";

let data = [
  {
    img: require("../../assets/img/jersey.png"),
    title: "New Jersey",
    mob: "848.666.0101",
    email: "info@uniconpharma.com",
  },
  {
    img: require("../../assets/img/boston.png"),
    title: "Boston",
    mob: "617.362.6262",
    email: "info@uniconpharma.com",
  },
  {
    img: require("../../assets/img/chicago.png"),
    title: "Chicago",
    mob: "848.666.0101",
    email: "info@uniconpharma.com",
  },
  {
    img: require("../../assets/img/corolina.png"),
    title: "North Carolina",
    mob: "443.582.9797",
    email: "info@uniconpharma.com",
  },
];

const Location = () => {
  return (
    <section className="pt80 pb80">
      <Container>
        <h2 className="text-center fBold colorBlue mobFs28 fs36 mb36">Our Office Locations</h2>
        <Row className="gy-3"> 
          {data.map((e, i) => (
            <Col key={i} lg={3} md={6} xs={12}>
              <div className="teamWrapper bgGradient radius20 pb15">
                <div>
                  <img src={e.img} className="img-fluid w-100" alt="" />
                </div>
                <div className="text-center pt25 pb20">
                  <h3 className="fs18 fBold colorBlue"> {e.title} </h3>

                  <p className="mb0">
                    <a className="mt8 colorPara fs14" href={`tel:${e.mob}`}>{e.mob}</a>
                  </p>
                  <p className="mb0">
                    <a className="mt8 colorPara fs14"  href={`mailto:${e.email}`}>{e.email}</a>
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Location;
