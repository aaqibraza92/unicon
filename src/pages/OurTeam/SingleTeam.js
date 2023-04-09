/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Counter from "../home/Counter";
import { Col, Container, Row } from "reactstrap";
import { callIcon, linkdinIcon, mailIcon } from "../../assets/svg/Svg";
import { Link, useLocation } from "react-router-dom";
import { HOME_URL, TEAM_URL_SINGLE } from "../../helpers/apiurls";
import axios from "axios";

const SingleTeam = () => {
  let location = useLocation();
  location = location.pathname.slice(6, 100);

  const [data, setdata] = useState("");
  const [loader, setloader] = useState(true);

  useEffect(() => {
    fetchData();
  }, [location]);
  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        // if file upload "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    };

    await axios
      .get(`${HOME_URL + TEAM_URL_SINGLE + location}`, options)
      .then((res) => {
        setdata(res.data?.[0]);
        setloader(false);
      });
  };
  return (
    <>
      {loader && (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border text-secondary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          ></div>
        </div>
      )}

      <section className="breadCrumb singleTeam d-flex align-items-center pt80 pb80 he">
        <Container>
          <Row className="align-items-center">
            <Col lg={3}>
              <div className="teamImgWrp Mobileteamimage">
                <img
                  src={data?.x_featured_media_medium}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </Col>
            <Col lg={9} >
              <h2 className="colorBlue fs36 mobFs21 fBold mb10">
                {data?.title?.rendered}
              </h2>
              <p className="colorGreen ">{data?.x_metadata?.position}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt50 pb80 bgGrey">
        <Container>
          <Row className="align-items-center">
            <Col lg={3}></Col>
            <Col lg={9} className="mt80Tab">
              <div className="colorPara">
                {
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.content?.rendered,
                    }}
                  />
                }
              </div>

              <ul className="noUl mt20 d-flex mobileList">
                <li className="mr20">
                  <a href={`mailto:${data?.x_metadata?.email}`}>
                    {mailIcon}{" "}
                    <span className="colorPara ml5 fs14">
                      {data?.x_metadata?.email}
                    </span>
                  </a>
                </li>
                <li className="mr20">
                  <a href={`tel:${data?.x_metadata?.phone}`}>
                    {callIcon}{" "}
                    <span className="colorPara ml5 fs14">
                      {data?.x_metadata?.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={data?.x_metadata?.linkedinacc}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {linkdinIcon}{" "}
                    <span className="colorPara ml5 fs14">Follow Linkedin</span>
                  </a>
                </li>
              </ul>

              <div className="mt40">
                <Link to="/our-team" className="colorBlue fs16 fMedium line">
                  Back to Team
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Counter />
    </>
  );
};

export default SingleTeam;
