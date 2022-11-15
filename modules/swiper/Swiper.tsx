import { Swiper as BaseSwiper, SwiperSlide } from "swiper/react";
import universe from "./images/universe.png";
import satellite from "./images/satellite.png";
import people from "./images/people.png";
import Image from "next/image";
import styles from "./Swiper.module.css";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import { Mousewheel } from "swiper";

const images = [universe, satellite, people];

interface Props {
  onActiveIndexChange: (index: number) => void;
}

export const Swiper = ({ onActiveIndexChange }: Props) => {
  return (
    <BaseSwiper
      direction="vertical"
      modules={[Mousewheel]}
      speed={1000}
      mousewheel
      className={styles.swiper}
      onActiveIndexChange={(e) => onActiveIndexChange(e.activeIndex)}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <Image src={src} alt="universe" fill className={styles.image} />
        </SwiperSlide>
      ))}
    </BaseSwiper>
  );
};
