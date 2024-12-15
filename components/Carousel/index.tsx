"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import {
  AngelInvesting,
  ApplicationDevelopment,
  Consulting,
  MaintanenceSupport,
  QualityTesting,
  RealEstate,
  StaffingIcon,
  Technology,
} from "@/constants/images";

export default function Carousel() {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="bg-slate-50 h-96 w-full"
      >
        <SwiperSlide>
          <Image
            src={ApplicationDevelopment}
            alt="application-development"
            fill
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={MaintanenceSupport} alt="maintanence-support" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Consulting} alt="consulting" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={QualityTesting} alt="quality-testing" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={StaffingIcon} alt="staffing" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Technology} alt="technology" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={RealEstate} alt="real-estate" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={AngelInvesting} alt="angel-investing" fill />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
