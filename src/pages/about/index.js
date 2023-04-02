import React from "react";
import Counter from "../home/Counter";
import Testomonial from "../home/Testomonial";
import BreadCrumb from "../../components/BreadCrumb";
import { Col, Container, Row } from "reactstrap";

const AboutUs = () => {
  return (
    <>
      <BreadCrumb
        title="About Unicon Pharma"
        items={[{ name: "Home", url: "/" },{ name: "Our Story", url: "/" },{ name: "About Us", url: "" }]}
      />

      <section className="pt80 pb80">
        <Container>
        <Row className="gy-3 gx-5">
        <Col lg={7} md={7}>
        <h2 className="colorBlue fs36 fBold mb30"> The Best and Brightest in Life Sciences. Working for You.</h2>
        <p className="colorPara">
        At Unicon Pharma, we know you want to be a successful, innovative leader in your industry, capable of bringing life-changing medicines, therapies, and products to market. In order to do that, you need the best and brightest talent in Life Sciences working for you. But the problem is, these candidates are difficult to identify, whether in-house or externally. We believe you deserve a hiring partner who truly understands your business and who empowers you to hire with confidence.
        </p>
      <p className="colorBlue fontItalic">
      We focus exclusively on Life Sciences—nothing else.
      </p>
        <p className="colorPara">
        From our inception, we’ve maintained a singular focus on working with Life Science companies and the industry’s leading candidates. We leverage our experienced, customer-facing team, vast network of 90,000+ Life Sciences professionals, and relationship-first approach to become your trusted advisor and empower you to achieve your hiring and business goals. We’ll work closely with you to listen to your needs, consult you on the most strategic solution, and partner with you to deliver that solution. So, contact us today, stop settling for subpar talent and instead partner with the industry experts and focus more on what you do best: growing your business in an effort to improve quality of life for communities around the world.
        </p>
        </Col>

        <Col lg={5} md={5}>
        <img src={require('../../assets/img/about.png')} className="img-fluid" alt="" />
        </Col>
        </Row>
       
        </Container>
      </section>
      <Testomonial />
      <Counter />
    </>
  );
};

export default AboutUs;
