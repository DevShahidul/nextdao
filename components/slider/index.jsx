
  import React, { useEffect, useRef } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import styles from './Slider.module.css';

  const Gallery = () => {
    const gallerySwiperRef = useRef(null);

    const thumbnailSwiperRef = useRef(null);

    const gallerySwiperParams = {
      spaceBetween: 10,
      effect: 'fade',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    };

    const thumbnailSwiperParams = {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 'auto',
      effect: 'fade',
      touchRatio: 0.2,
      slideToClickedSlide: true
    };

    useEffect(() => {
      const gallerySwiper = gallerySwiperRef.current.swiper;

      const thumbnailSwiper = thumbnailSwiperRef.current.swiper;

      if (gallerySwiper.controller && thumbnailSwiper.controller
      ) {
        gallerySwiper.controller.control = thumbnailSwiper;
        thumbnailSwiper.controller.control = gallerySwiper;
      }
    }, []);

    return (
      <div className={styles.slider_section}>
        <Swiper {...gallerySwiperParams} ref={gallerySwiperRef}>
          <div className={styles.slide_item} style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/1)' }} />
          <div className={styles.slide_item} style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/2)' }} />
          <div className={styles.slide_item} style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/3)' }} />
          <div className={styles.slide_item} style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/4)' }} />
          <div className={styles.slide_item} style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/5)' }} />
        </Swiper>
        <Swiper {...thumbnailSwiperParams} ref={thumbnailSwiperRef}>
          <div className={styles.slide_thumb} style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/1)' }} />
          <div className={styles.slide_thumb} style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/2)' }} />
          <div className={styles.slide_thumb} style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/3)' }} />
          <div className={styles.slide_thumb} style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/4)' }} />
          <div className={styles.slide_thumb} style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/5)' }} />
        </Swiper>
      </div>
    );
  };

  export default Gallery;
    