import React from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../components/BreadCrumb";
import TeamItems from "./TeamItems";

const OurTeam = () => {
  return (
    <>
      <BreadCrumb
    title="Our Team"
    items={[{ name: "Home", url: "/" },{ name: "Our Story", url: "/" },{ name: "Our Team", url: "" }]}
  />
    <section className="pt80">
        <Container>
        <Row className="justify-content-center mb30">
            <Col lg={7}>
            <div className="text-center">
        <h2 className="colorBlue fs36 fBold mb20">
          Meet Your Industry Experts
        </h2>
        {/* <p className="colorPara">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p> */}
      </div>
            </Col>
        </Row>
    
        <TeamItems/>
        </Container>
    </section>
   
    </>
  );
};

export default OurTeam;
