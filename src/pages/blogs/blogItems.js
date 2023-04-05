/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { callIcon, linkdinIcon, mailIcon, timeIcon } from "../../assets/svg/Svg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { BLOG_URL, HOME_URL } from "../../helpers/apiurls";
import Pagination, {
  bootstrap5PaginationPreset,
} from "react-responsive-pagination";


const BlogItems = () => {

  const navigation = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [postData, setPostData] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setcurrentPage] = useState(
    searchParams.get("page") ? searchParams.get("page") : 1
  );


  const dateConverter = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  const [loading, setloading] = useState(true);
  useEffect(() => {
    loadAllPosts();
    // loadCategory();
  }, [currentPage]);

  const setCurrentPageHandle = (val) => {
    setcurrentPage(val);
    setSearchParams({ page: val });
    window.scrollTo(0, 0);
  };

  // const loadCategory = async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   };

  //   await axios
  //     .get(category,
  //       options
  //     )
  //     .then((res) => {
  //       if (res?.status === 200) {
  //         setAllCategory(res?.data);
  //       }
  //     });
  // };

  const loadAllPosts = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios.get(`${HOME_URL+BLOG_URL}?per_page=12&page=${currentPage}`, options).then((res) => {
      if (res && res.status === 200) {
        setPostData(res?.data);
        setloading(false);
        setTotalPage(res?.headers["x-wp-totalpages"]);
        setTotalCount(res?.headers["x-wp-total"]);
        if (currentPage !== 1) {
          navigation(`/blogs/?page=${currentPage}`);
        }

      }
    });
  };

  return (
    <>
   <Row className="gy-4 gx-4 mb60">
      {postData.length > 0 && postData?.map((e, i) => (
          <Col lg={4} md={4} xs={6} key={i}>
            <div className="blogWrapper radius12 pb15 transition">
              <div className="featuredImg">
              <Link to={`/blog/${e?.slug}`}> <img
                  src={e?.x_featured_media_medium}
                  className="img-fluid w-100"
                  alt=""
                /></Link>
               
              </div>
              <div className="text-start pt20 pb20 pl20 pr20">
                <h3 className="lh24">   <Link to={`/blog/${e?.slug}`} className="fs18 fBold colorBlue"> {e?.title?.rendered} </Link></h3>
              
                <div className="mt8 colorPara" dangerouslySetInnerHTML={{ __html: e?.excerpt?.rendered }} />
                <div className="d-flex align-items-center">
                  <span>{timeIcon}</span> <span className="fs14 colorPara ml5">  {dateConverter(e?.modified)}</span>
                </div>
              </div>
            </div>
          </Col>
        ))}
    </Row>

           <Pagination
          {...bootstrap5PaginationPreset}
          current={Number(currentPage)}
          total={Number(totalPage)}
          onPageChange={setCurrentPageHandle}
       
        />
    </>
 
  );
};

export default BlogItems;
