import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./slide";

function SwiperComponent({ currentProjects }) {
  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            // width: 576,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 2,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={2}
        navigation={{ prevEl: ".prev-slide", nextEl: ".next-slide" }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {currentProjects.map((item) => {
          return (
            <SwiperSlide
              style={{
                height: "100%",
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            >
              <Slide
                name={item.projectName}
                projectWork={item.projectWork}
                attach={item.attach}
                time={item.time}
                members={item.members}
                comments={item.comments}
                progress={item.progress}
                timeLeft={item.timeLeft}
                icon={item.icon}
              />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide
          style={{
            height: "100%",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          <Slide />
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "100%",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          <Slide />
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "100%",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          <Slide />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default SwiperComponent;
