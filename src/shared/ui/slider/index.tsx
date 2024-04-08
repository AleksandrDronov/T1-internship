import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

interface SliderProps {
  children: JSX.Element[];
}

export function Slider({ children }: SliderProps) {
  const pagination = {
    clickable: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderBullet(_: number, className: string) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <Swiper
      className="swiper"
      modules={[Pagination, Keyboard, A11y]}
      keyboard
      pagination={pagination}
      slidesPerView={1}
      spaceBetween={40}
      breakpoints={{
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 2.5,
          spaceBetween: 120,
        },
      }}
    >
      {children.map((child) => (
        <SwiperSlide key={child.key}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
