import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import BlogItems from "./blogItems";
import { Col, Container, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import '../../assets/css/blog.css'
const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Articles | Unicon</title>
      </Helmet>
      <BreadCrumb
        title="Resources"
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/blogs" },
          { name: "Resources", url: "" },
        ]}
      />
      <section className="mt30">
        <Container>
          <BlogItems />
        </Container>
      </section>
    </>
  );
};

export default Blogs;
