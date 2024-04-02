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
import { timeIcon } from "../../assets/svg/Svg";
import BreadCrumb from "../../components/BreadCrumb";

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
        <title>{postData && postData?.[0]?.x_categories} | Unicon</title>
        <meta name="Blog" content="Pixbrand Blog"></meta>
      </Helmet>

      <BreadCrumb
        title={`${postData && postData?.[0]?.x_categories}`}
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/blogs" },
          { name: postData?.[0]?.x_categories, url: "" },
        ]}
      />
 
      <Container>
        <Row className="gy-4 mt80">
        {loading && (
        <div className="text-center mb60">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}


          {postData.length > 0 &&
            postData.map((item, ind) => {
              return    <BlogListings key={ind} data={item} />
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





const BlogListings = (props) => {
  const { data } = props;

  const dateConverter = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  return (
    <Col lg={4} md={6} className="">
        <div className="blogWrapper radius12 pb15 transition">
            <div className="featuredImg">
            <Link to={`/blog/${data?.slug}`}> <img
                src={data?.x_featured_media_medium}
                className="img-fluid w-100"
                alt=""
              /></Link>
             
            </div>
            <div className="text-start pt20 pb20 pl20 pr20">
              <h3 className="lh24" title={data?.title?.rendered}>   <Link to={`/blog/${data?.slug}`} className="fs18 fBold colorBlue"> {data?.title?.rendered.slice(0,33)} ... </Link></h3>
            
              <div className="mt8 colorPara" dangerouslySetInnerHTML={{ __html: data?.excerpt?.rendered }} />
              <div className="d-flex align-items-center">
                <span>{timeIcon}</span> <span className="fs14 colorPara ml5">  {dateConverter(data?.modified)}</span>
              </div>
            </div>
          </div>
    </Col>
  );
};
