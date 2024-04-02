/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { callIcon, linkdinIcon, mailIcon } from "../../assets/svg/Svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { HOME_URL, TEAM_URL } from "../../helpers/apiurls";
import { Helmet } from "react-helmet";
const TeamItems = () => {
  const [postData, setPostData] = useState("");
  const [loader, setloader] = useState(true);

  useEffect(() => {
    loadAllPosts();
  }, []);

  const loadAllPosts = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    await axios.get(`${HOME_URL + TEAM_URL}`, options).then((res) => {
      if (res && res.status === 200) {
        setPostData(res?.data);
        setloader(false);
      }
    });
  };

  return (
    <>
       <Helmet>
        <title>Our Team | Unicon</title>
      </Helmet>
      {loader && (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border text-secondary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          ></div>
        </div>
      )}

      <Row className="gy-4 gx-4 mb60">
        {postData.length > 0 &&
          postData.map((e, i) => (
            <Col lg={3} md={4} xs={6} key={i}>
              <div className="teamWrapper mobileheight bgGradient radius20 pb15">
                <div>
                  <Link
                    to={{
                      pathname: "/team/" + e?.slug,
                      state: { slug: e?.slug },
                    }}
                  >
                    <img
                      src={e?.x_featured_media_medium}
                      className="img-fluid w-100"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="text-center pt25">
                  <h3>
                    <Link
                      to={{
                        pathname: "/team/" + e?.slug,
                        state: { slug: e?.slug },
                      }}
                      className="fs18 mobFs15  fBold colorBlue"
                    >
                      {e?.title?.rendered}
                    </Link>
                  </h3>
                  <p className="mt8  mobFs11 colorPara">{e?.x_metadata?.position}</p>
                  <ul className="noUl d-flex justify-content-center">
                    <li className="mr10">
                      <a
                        href={e?.x_metadata?.linkedinacc}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {linkdinIcon}
                      </a>
                    </li>
                    <li className="mr10">
                      <a href={`mailto:${e?.x_metadata?.email}`}>{mailIcon}</a>
                    </li>
                    <li>
                      <a href={`tel:${e?.x_metadata?.phone}`}>{callIcon}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default TeamItems;
