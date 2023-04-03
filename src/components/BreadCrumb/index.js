import React from "react";
import { Link } from "react-router-dom";
import { angleRight } from "../../assets/svg/Svg";

const BreadCrumb = (props) => {
  return (
    <section className="breadCrumb text-center d-flex align-items-center justify-content-center pt80 pb80">
      <div className="contentArea">
        <h2 className="colorBlue fs36 fBold">{props?.title}</h2>
        {props.subTitle && (
          <p className="mt15 colorGreen fs20">{props.subTitle}</p>
        )}

        <ul className="noUl d-flex justify-content-center">
          {props?.items.map((e, i) => (
            <li key={i} className="mr10 colorPara">
              {e.url === "" ? (
                <span>{e.name}</span>
              ) : (
                <Link className="colorPara" to={e.url}>
                  {" "}
                  {e.name} <span className="ml5">{angleRight}</span>{" "}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BreadCrumb;
