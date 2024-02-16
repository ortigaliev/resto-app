import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

export function Events() {
  const events_list = [
    {
      title: "Boyin Foodga marahamat",
      desc: "Yangicha uslubda Yangicha Tam va Yangicha hissiyot",
      author: "Abdurahmon Mufid",
      date: "2022/09/01",
      location: "Toshkent, Nurafshon ko'cha",
      img: "images/baraka.jpg",
    },
    {
      title: "Katta Chegirma endi Belissimoda",
      desc: "Faqat 25 ~ 31-iyul kunlari antiqa Pitsa yegani tashrif buyuring!",
      author: "BelissimodUz",
      date: "2022/07/25",
      location: "Toshkent, Chilonzor",
      img: "images/baraka.jpg",
    },
    {
      title: "Yangi hissiyotni his qilib ko'rmoqchimisiz?",
      desc: "Merhaba promokodi orqali 50% skidkani qo'lga kiriting",
      author: "Chicken House",
      date: "2022/09/10",
      location: "Toshkent, Qo'yliq",
      img: "images/baraka.jpg",
    },
    {
      title: "Yangicha Yondashuv Endi O'zbekistonda",
      desc: "O'zbekistondagi eng yirik ulgurji bozor.\n",
      author: "Food City",
      date: "2022/08/01",
      location: "Toshkent, Yangi Qo'yliq bozori",
      img: "/images/baraka.jpg",
    },
  ];
  return (
    <div className="events_frame">
      <Container sx={{ overflow: "hidden" }}>
        <Stack className="events_main">
          <Box className="events_text">
            <span className="category_title">Events</span>
          </Box>
          <Box className="prev_next_frame">
            <img
              src="/icons/arrow.svg"
              alt="arror"
              className="swiper-button-prev"
            />
            <div className="dot_frame_pagination swiper-pagination"></div>
            <img
              src={"/icons/arrow.svg"}
              className="swiper-button-next"
              style={{ transform: "rotate(-180deg)" }}
            />
          </Box>
          <Swiper
            className={"events_info swiper-wrapper"}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {events_list.map((value, number) => {
              return (
                <SwiperSlide className={"events_info_frame"}>
                  <div className={"events_img"}>
                    <img src={value.img} className={"events_img"} />
                  </div>
                  <Box className={"events_desc"}>
                    <Box className={"events_bott"}>
                      <Box className={"bott_left"}>
                        <div className={"event_title_speaker"}>
                          <strong>{value.title}</strong>
                          <div className={"event_organizator"}>
                            <img
                              src={"/icons/callCenter.svg"}
                              style={{ width: "20px", marginRight: "10px" }}
                            />
                            <p className={"spec_text_author"}>{value.author}</p>
                          </div>
                        </div>

                        <p
                          className={"text_desc"}
                          style={{ marginTop: "10px" }}
                        >
                          {" "}
                          {value.desc}{" "}
                        </p>

                        <div
                          className={"bott_info"}
                          style={{ marginTop: "10px" }}
                        >
                          <div className={"bott_info_main"}>
                            <img
                              src={"/icons/calendar.svg"}
                              style={{ marginRight: "10px" }}
                            />
                            {value.date}
                          </div>
                          <div className={"bott_info_main"}>
                            <img
                              src={"/icons/map.svg"}
                              style={{ marginRight: "10px" }}
                            />
                            {value.location}
                          </div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
