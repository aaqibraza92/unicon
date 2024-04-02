import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BLOG_URL, HOME_URL } from "../../helpers/apiurls";
import { timeIcon } from "../../assets/svg/Svg";
import "../../assets/css/blog.css";

const BlogSingle = () => {
  const id = useParams();
  const [postData, setPostData] = useState("");
  const [acfData, setacfData] = useState("");
  const [loader, setloader] = useState(true);
  useEffect(() => {
    getAllPosts();

    window.scrollTo(0, 0);
  }, [id?.slug]);

  const getAllPosts = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    await axios
      .get(HOME_URL + BLOG_URL + "?slug=" + id?.slug, options)
      .then((res) => {
        if (res && res.status === 200) {
          setPostData(res?.data?.[0]);
          setacfData(
            res?.data?.[0]?.acf === false
              ? ""
              : res?.data?.[0]?.acf?.blogs_data?.[0]?.repeater_for_paragraph
          );
          setloader(false);
        }
      });
  };

  const dateConverter = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  return (
    <>
      <Helmet>
        <title> {postData && postData?.title?.rendered} | Unicon</title>
      </Helmet>
      <section className="single_bg text-center bgcover d-flex align-items-center justify-content-center pt80 flex-wrap position-relative">
        <div className="contentArea">
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="colorBlue lh48 fs36 fBold">
                {postData && postData?.title?.rendered}
              </h2>

              <div className="mt15 d-flex align-items-center justify-content-center">
                <span>{timeIcon}</span>
                <span className="ml5 colorPara fs14">
                  {dateConverter(postData?.modified)}
                </span>
              </div>
            </Col>
          </Row>
        </div>

        <div className="mt36 mb40 singleImg w-100">
          {/* <Container>
            <img
              className="radius12 w-100"
              src={
                postData?.x_featured_media_original
                  ? postData?.x_featured_media_original
                  : require("../../assets/img/placeholder.jpg")
              }
              alt={postData && postData?.title?.rendered}
            />
          </Container> */}
        </div>
      </section>

      <Container>
        {loader && (
          <div className="text-center mb60">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        <Row className="justify-content-center mb50 mt50">
          <Col lg={10}>
            {acfData.length > 0 &&
              acfData?.map((e, i) => {
                return (
                  <div className="mb30" key={i}>
                  {
                    e.title !== "" &&    <h3 className="fs20 colorBlue fBold">
                      {e.title !== "" && e.title}
                    </h3>
                  }
                 
                    {e.paragraph && <div className="colorPara contentUnder" dangerouslySetInnerHTML={{ __html: e.paragraph}} />}
                  </div>
                );
              })}

   
          </Col>
        </Row>

     
      </Container>
    </>
  );
};

export default BlogSingle;
