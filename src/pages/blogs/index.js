import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import BlogItems from "./blogItems";
import { Col, Container, Row } from "reactstrap";
import { Helmet } from "react-helmet";
const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Articles | Unicon</title>
      </Helmet>
      <BreadCrumb
        title="Blogs Articles"
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/" },
          { name: "Articles", url: "" },
        ]}
      />

      <section className="mt80">
        <Container>
          <Row>
            <Col lg={8} md={8}></Col>
            <Col lg={4} md={4}>
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="Search keyword"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt30">
        <Container>
          <BlogItems />
        </Container>
      </section>
    </>
  );
};

export default Blogs;
