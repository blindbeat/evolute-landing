import { Swiper } from "modules/swiper";
import { useState } from "react";
import { MorphingEntity } from "../modules/MorphingEntity";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  console.log(activeSlide);
  return (
    <div>
      <Swiper onActiveIndexChange={setActiveSlide} />
      <MorphingEntity state={activeSlide} />
    </div>
  );
};

export default Home;
