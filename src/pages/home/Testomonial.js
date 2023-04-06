import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";


let data=[
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
    img: require("../../assets/img/user.png"),
  },
  {
    para: "We are working in a niche market where there aren't a lot of pharma companies. It has been a huge challenge getting candidates to relocate but Unicon Pharma has been one of the few agencies to do so. Their communication from beginning to end has been phenomenal and they've provided us with top-level candidates in our pharmacovigilance, clinical data management, statistical programming, regulatory affairs and quality assurance space.",
    author: "A Specialty Pharmaceutical Company",
    position: "Manager, Human Resources",
    img: require("../../assets/img/user.png"),
  },
 
  

]

const Testomonial = () => {
  return (
    <section className="bgTestimonial pt80 pb80">
      <Container>
        <p className="colorBlue text-uppercase ">WHAT PEOPLE SAY</p>
        <h2 className="colorBlue fs36 fBold mb30 mobFs28"> About Unicon Pharma</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          speed={2000}
          autoplay={{ delay: 1000 }}
          spaceBetween={30}
          slidesPerView={4}
          onSlideChange={() => {}}
          onSwiper={() => {}}
          breakpoints={{
            // when window width is >= 640px
            300: {
              width: 300,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            550: {
              width: 550,
              slidesPerView: 2,
            },
            992: {
              width: 992,
              slidesPerView: 2,
            },
            1201: {
              width: 1201,
              slidesPerView: 2,
            },
            1360: {
              width: 1360,
              slidesPerView: 2,
            },
          }}
        >
          
          {
            data.map((e,i)=>(
              <div className="mx-5" key={`sli${i}`}>
              <SwiperSlide>
              <div className="radius20 bgWhite pt30 pb30 pl30 pr30 testimonialWrapper">
                <p className="colorPara fs16 lh28 mb0">
                {e.para}
                </p>
                <div className="mt-3 d-flex align-items-center">
                <div className="mr15">
                  <img
                    src={require("../../assets/img/user.png")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                <p className="colorBlue mb2">{e.author}</p>
                <p className="halfBlue fs14 mb0">
                {e.position}
                </p>
               
                </div>
              </div>
              </div>

           
            </SwiperSlide>
              </div>

             
            ))
          }
          
        </Swiper>
      </Container>
    </section>
  );
};

export default Testomonial;
