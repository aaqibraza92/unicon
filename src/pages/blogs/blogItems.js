/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { timeIcon } from "../../assets/svg/Svg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { BLOG_URL, CAT_URL, HOME_URL } from "../../helpers/apiurls";
import Pagination, {
  bootstrap5PaginationPreset,
} from "react-responsive-pagination";


const BlogItems = () => {
  const [allCategory, setAllCategory] = useState("");
  const [catHandle, setcatHandle] = useState("");
  const navigation = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [postData, setPostData] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setcurrentPage] = useState(
    searchParams.get("page") ? searchParams.get("page") : 1
  );

  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const resizeScreen = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    resizeScreen();
    window.addEventListener("resize", resizeScreen);
    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  });

  const dateConverter = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  const [loading, setloading] = useState(true);
  useEffect(() => {

    loadCategory();
    if (catHandle !== "") {
      postOfCategory()
    } else {
      loadAllPosts();
    }

  }, [currentPage, catHandle]);

  const setCurrentPageHandle = (val) => {
    setcurrentPage(val);
    setSearchParams({ page: val });
    window.scrollTo(0, 0);
  };

  const loadCategory = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios
      .get(HOME_URL + CAT_URL,
        options
      )
      .then((res) => {
        if (res?.status === 200) {
          setAllCategory(res?.data);
        }
      });
  };

  const loadAllPosts = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios.get(`${HOME_URL + BLOG_URL}?per_page=18&page=${currentPage}`, options).then((res) => {
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

  const postOfCategory = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    setloading(true);
    await axios
      .get(
        HOME_URL + BLOG_URL +
        "?categories=" +
        catHandle +
        "&per_page=18&page=" +
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


      {/* <section className="mt80">

        {
          currentPage === 1 && <Row>
            <Col lg={8} md={8}>
              {
                screenWidth > 992 && <div className="blogWrapper mb30 d-flex align-items-center radius12 position-relative pb0 transition">
                  <div className="featuredImg0">
                    <Link to={`/blog/${postData?.[0]?.slug}`}>
                      <img
                        src={postData?.[0]?.x_featured_media_large}
                        className="img-fluid w-100 radius12"
                        alt=""
                      /></Link>

                  </div>
                  <div className="overlaypText radius text-start pt20 pb20 pl20 pr20">
                    <h3 className="lh24" title={postData?.[0]?.title?.rendered}>   <Link to={`/blog/${postData?.[0]?.slug}`} className="fs18 fBold colorBlue"> {postData?.[0]?.title?.rendered.slice(0, 33)} ... </Link></h3>

                    <div className="mt8 colorPara" dangerouslySetInnerHTML={{ __html: postData?.[0]?.excerpt?.rendered }} />
                    <div className="d-flex align-items-center">
                      <span>{timeIcon}</span> <span className="fs14 colorPara ml5">  {dateConverter(postData?.[0]?.modified)}</span>
                    </div>
                  </div>
                </div>
              }

            </Col>
            <Col lg={4} md={12}>
              <div className="mb30">
                <input
                  type="text"
                  className="inputTheme w-100"
                  placeholder="Search keyword"
                />
                <div className="d-flex justify-content-end mt20">
                  <button className="btnTheme bgBlue fMedium btnMob">
                    Search
                  </button>
                </div>
              </div>


              <div className="insight radius12 mb30">
                <h4 className="fs20 colorBlue fBold pt20 pb20 pl20 pr20 mb0 borderBottom">
                  Insights
                </h4>
                <ul className="catUl pt20 pb20 pl20 pr20 ">
                  {
                    allCategory.length > 0 && allCategory.map((e, i) => (
                      e.name !== 'Uncategorized' &&
                      <li key={i} className="mb10">
                        <Link className="fs15 colorBlue" to={`/category/${e?.id}`}>{e?.name}</Link>
                      </li>
                    ))
                  }
                </ul>


              </div>
            </Col>
          </Row>
        }


      </section> */}
         <Row>
              <Col lg={4} md={6} xs={12}>
                <div className="mb30 mt30 position-relative selBox">
                  <select name="Data" id="" className="form-control" onChange={(e) => setcatHandle(e.target.value)}>
                  <option value="">All Topics</option>
                    {
                      allCategory.length > 0 && allCategory.map((e, i) => (
                        e.name !== 'Uncategorized' &&
                        <option key={i} value={e?.id}>{e?.name}</option>
                      ))
                    }

                  </select>
                </div>

              </Col>
            </Row>

      {
        loading ? <Row className="gy-4 mb-5"> {Array(8).fill().map((e, i) => (
          <Col key={i} lg={4} md={4} sm={4}><div className="skeleton" style={{ height: "300px" }}></div></Col>

        ))}</Row> :
          <>

         

            <Row className="gy-4 gx-4 mb60">
              {postData.length > 0 && postData?.map((e, i) => (

                <Col lg={4} md={6} xs={12} key={i}>
                  <div className="blogWrapper radius12 pb15 transition position-relative" style={{borderColor: e?.acf?.choose_color}}>
                    {/* <div className="featuredImg">
              <Link to={`/blog/${e?.slug}`}> <img
                  src={e?.x_featured_media_medium}
                  className="img-fluid w-100"
                  alt=""
                /></Link>
               
              </div> */}

                    <div className="text-start pt20 pb20 pl20 pr20">
                      <div className="iconCat d-flex align-items-center mb20">
                        <img src={e?.acf?.icon?.url} className="img-fluid" alt="category" />
                        {
                          e?.x_categories && <span className="colorBlue fs21 fw600 ml15" style={{color: e?.acf?.choose_color}}>
                            {e?.x_categories}
                          </span>
                        }
                      </div>
                      <h3 className="lh24" title={e?.title?.rendered}>   <Link to={`/blog/${e?.slug}`} className="fs18 fBold colorBlue" style={{color: e?.acf?.choose_color}}> {e?.title?.rendered.slice(0, 33)} ... </Link> </h3>

                      <div className="mt8 colorPara" dangerouslySetInnerHTML={{ __html: e?.excerpt?.rendered.slice(0, 200) }} />


                      {/* <div className="d-flex align-items-center">
                  <span>{timeIcon}</span> <span className="fs14 colorPara ml5">  {dateConverter(e?.modified)}</span>
                </div> */}
                    </div>

                    <div className="buttonAct position-absolute pl20 pr20 w-100"  >
                      <Link to={`/blog/${e?.slug}`} style={{backgroundColor: e?.acf?.choose_color}}  className="btnGreenLight text-white transition" >
                        Read More
                      </Link>
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
      }

    </>

  );
};

export default BlogItems;
