import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./AboutLoop.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper";
import LoopRow from "./LoopRow";
import Divider from "../Shared/Divider";

const list = [
  { year: "1985", title: "Begining of Journey" },
  { year: "1987", title: "Introduction of Revolutional Technology" },
  { year: "2000", title: "New Factory Production" },
  { year: "2007", title: "Agreement Signed with PPFGH" },
  { year: "2008", title: "GoldenTex Award" },
  { year: "2012", title: "Collaboration with OOKLPL" },
];

const AboutLoop = () => {
  return (
    <>
     <Divider text={'success'} />

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {list.map((ele, index) => {
          return (
            <SwiperSlide key={index}>
              <LoopRow ele={ele} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default AboutLoop;
