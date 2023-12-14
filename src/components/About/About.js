import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './About.css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

function About() {
  const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);


  const slidePlan = <div className="about__slides-item about__slides-item_plan">
    <button type="button" className="about__button" disabled={true}>WE<br />PLAN</button>
  </div>
  const slideManage = <div className="about__slides-item about__slides-item_manage">
    <button type="button" className="about__button" disabled={true}>WE<br />MANAGE</button>
  </div>
  const slideDeliver = <div className="about__slides-item about__slides-item_deliver">
    <button type="button" className="about__button" disabled={true}>WE<br />BUILD</button>
  </div>

  const slider = clientWidth <= 483 ?
    <Swiper
      className="mySwiper"
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop
    >
      <SwiperSlide>{slidePlan}</SwiperSlide>
      <SwiperSlide>{slideManage}</SwiperSlide>
      <SwiperSlide>{slideDeliver}</SwiperSlide>
    </Swiper> :
    <div className="about__slides"> {slidePlan} {slideManage} {slideDeliver}</div>;


  React.useEffect(() => {
    const handleResize = () => {
      setClientWidth(document.documentElement.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="about">
      <article className="about__article">
        <h2 className="about__title">OUR STORY</h2>
        <span className="about__border" />
      </article>
      <div className="about__row">
        <div className="about__description">
          <p className="about__title-description">
            Founded in 2011 by John Mathew Smith, <span className="about__span">Konstruct</span> has become the number one construction management firm
          </p>
          <p className="about__subtitle-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
          </p>
        </div>
        {slider}
      </div>
    </section>
  );
}

export default About;
