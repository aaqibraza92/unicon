import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {
  Link,
  useNavigate,
  useSearchParams,
  useParams,
} from "react-router-dom";
import Pagination, {
  bootstrap5PaginationPreset,
} from "react-responsive-pagination";
import { BLOG_URL, HOME_URL } from "../../helpers/apiurls";

const BlogCategory = () => {
  const categoryId = useParams();
  const [loading, setloading] = useState(true);
  const [postData, setPostData] = useState("");
  const navigation = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setcurrentPage] = useState(
    searchParams.get("page") ? searchParams.get("page") : 1
  );

  const setCurrentPageHandle = (val) => {
    setcurrentPage(val);
    setSearchParams({ page: val });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    postOfCategory();
  }, [categoryId?.name, currentPage]);

  const postOfCategory = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    await axios
      .get(
        HOME_URL+ BLOG_URL +
          "?categories=" +
          categoryId?.name +
          "&per_page=10&page=" +
          currentPage,
        options
      )
      .then((res) => {
        if (res && res.status === 200) {
          setPostData(res?.data);
          setloading(false);

          setTotalPage(res?.headers["x-wp-totalpages"]);
          setTotalCount(res?.headers["x-wp-total"]);
          if (currentPage !== 1) {
            navigation(`/category/4/?page=${currentPage}`);
          }
        }
      });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Category - Pixbrand</title>
        <meta name="Blog" content="Pixbrand Blog"></meta>
      </Helmet>
{
  console.log('cat',postData)
}
      <Title />
      {/* <Trophy /> */}
      <Container>
        <Row>
        {loading && (
        <div className="text-center mb60">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}


          {postData.length > 0 &&
            postData.map((item, ind) => {
              if (ind === 0) {
                return "";
              } else {
                return    <BlogListings key={ind} data={item} />
              }
            })}

          <Pagination
            {...bootstrap5PaginationPreset}
            current={Number(currentPage)}
            total={Number(totalPage)}
            onPageChange={setCurrentPageHandle}
          />
        </Row>
      </Container>
    </>
  );
};

export default BlogCategory;

// Title
const Title = () => {
  return (
    <section className="pt80 pb80 tabPt80 tabPb80 mobPt60 mobPb60">
      <Container>
        <Row className="justify-content-center ">
          <Col xl={10} lg={10} md={12}>
            <section className="text-center mobtl">
              <h1 className="fs80 tabFs60 tabLgFs60 mobFs45 fw600 colorWhite mb20">
                Some Good Reads for You!
              </h1>
              <p className="fs24 colorWhite width70 mobWidth100 tabWidth100 tabLgWidth100 mx-auto">
                Here are some of our curated blogs, fitting for a New Jersey web
                development company like us.
              </p>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Trophy
const Trophy = () => {
  return (
    <>
      <Container className="mb100 mobMb60">
        <Row className="align-items-center flexreverse">
          <Col md={6}>
            <div>
            </div>
          </Col>
          <Col md={6}>
            <section className="d-flex justify-content-between mobMl0 ml40">
              <div>
                <p className="fs16 colorLightBlack">JULY 05, 2021</p>
                <h2 className="fs40 tabFs28 tabLgFs28 mobFs24 colorWhite">
                  New jersey website design company – pix brand
                </h2>
                <p className="fs22 mobFs18 tabFs18 tabLgFs18 colorLightBlack">
                  Establishing the right visual connection with your customers
                  and users by creating eye-catching and memorable designs.
                </p>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const BlogListings = (props) => {
  const { data } = props;

  const dateConverter = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  return (
    <Col lg={4} md={4} className="">
      <section className="mb80 mobMb40">
        <div className="mb20 mobMb10">
          {data?.x_featured_media_large ? (
            <div className="postImgWrapper mb-2">
              <Link to={`/blog/${data?.slug}`}>
                <img
                  src={data?.x_featured_media_large}
                  alt=""
                />
              </Link>
            </div>
          ) : (
            <Link to={`/blog/${data?.slug}`}>
              {/* <img src={Img?.goodreads1} alt="" /> */}
            </Link>
          )}
        </div>
        <p className="fs16 colorLightBlack mb0">
          {dateConverter(data?.modified)}
        </p>
        <div className="mb20 mobMb10">
          <Link
            to={`/blog/${data?.slug}`}
            className="colorWhite fs28 tabFs20 tabLgFs20 mobFs18 lh33"
          >
            {data?.title?.rendered}
          </Link>
        </div>
        <div className="fs20 colorLightBlack mobFs16 mb0 excerptData">
          {
            <div
              dangerouslySetInnerHTML={{ __html: data?.excerpt?.rendered }}
            />
          }
        </div>
      </section>
    </Col>
  );
};
