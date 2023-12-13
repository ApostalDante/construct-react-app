import React, { useRef, useState } from "react";
// Import Swiper React components


// Import Swiper styles

import './About.css';

//import "./styles.css";

function About() {

  const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);

  // const slidePlan = <button type="button" className="about__button about__button_plan" disabled={true}>WE PLAN</button>
  const slidePlan = <li className="about__slides-item about__slides-item_plan">
    <button type="button" className="about__button" disabled={true}>WE<br />PLAN</button>
  </li>
  //const slideManage = <button type="button" className="about__button">WE MANAGE</button>
  const slideManage = <li className="about__slides-item about__slides-item_manage">
    <button type="button" className="about__button" disabled={true}>WE<br />MANAGE</button>
  </li>
  //const slideDeliver = <button type="button" className="about__button about__button_plan">WE BUILD</button>
  const slideDeliver = <li className="about__slides-item about__slides-item_deliver">
    <button type="button" className="about__button" disabled={true}>WE<br />BUILD</button>
  </li>

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
        <div className="about__slides">
          {slidePlan}
          {slideManage}
          {slideDeliver}
        </div>
      </div>
    </section>
  );
}

export default About;


/*
export default function App() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
*/