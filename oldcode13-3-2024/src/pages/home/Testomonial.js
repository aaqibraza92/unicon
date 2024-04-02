import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { arrowLeft, arrowRight } from "../../assets/svg/Svg";

let dataTest = [
  {
    para: "I've worked with Unicon Pharma for the last few years. They've been thoroughly professional in their approach and very accommodative. They know the pharmacovigilance business and provide clear, open communication and set precise expectations. I would highly recommend them if you are looking for qualified pharmacovigilance resources.",
    author: "Global Oncology Company",
    position: "Associate Director of Pharmacovigilance / Medical Safety",
    img: require("../../assets/img/user.png"),
  },
  {
    para: "Unicon Pharma provides strong resources for our computer systems validation engagements. They have supported us in a BIG way and always were professional. Their recruitment team understands all aspects of validation and offered candidates within 24 hours. I look forward to many more years of working with them !",
    author: "Global Pharmaceutical Company",
    position: "Project Manager - Validation",
    img: require("../../assets/img/user2.jpg"),
  },
  {
    para: "We are working in a niche market where there aren't a lot of pharma companies. It has been a huge challenge getting candidates to relocate but Unicon Pharma has been one of the few agencies to do so. Their communication from beginning to end has been phenomenal and they've provided us with top-level candidates in our pharmacovigilance, clinical data management, statistical programming, regulatory affairs and quality assurance space.",
    author: "A Specialty Pharmaceutical Company",
    position: "Manager, Human Resources",
    img: require("../../assets/img/user3.jpg"),
  },
];

const Testomonial = () => {
  var SliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: arrowLeft,
    nextArrow: arrowRight,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 10,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="bgTestimonial pt80 pb80">
      <Container>
        <p className="colorBlue text-uppercase ">WHAT PEOPLE SAY</p>
        <h2 className="colorBlue fs36 fBold mb30 mobFs28">
          About Unicon Pharma
        </h2>

        <Slider className="parentSl" {...SliderSettings}>
          {dataTest.map((e, i) => (
            <div key={i} className="pr15 pl15">
              <div className="radius20 bgWhite pt30 pb30 pl30 pr30 testimonialWrapper">
                <p className="colorPara fs16 lh28 mb0">{e.para}</p>
                <div className="mt-3 d-flex align-items-center">
                  <div className="mr15">
                    <img
                      src={e.img}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="colorBlue mb2">{e.author}</p>
                    <p className="halfBlue fs14 mb0">{e.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testomonial;
