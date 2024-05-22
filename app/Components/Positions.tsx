'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const Positions = () => {
  const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    speed: 500,
  };

  return (
    <div className="p-3 text-2xl sm:text-3xl opacity-50 h-12 overflow-hidden">
      <Slider {...settings}>
        <div>
          <p>front-end developer</p>
        </div>
        <div>
          <p>graphic designer</p>
        </div>
        <div>
          <p>video editor</p>
        </div>
        <div>
          <p>business owner</p>
        </div>
        <div>
          <p>cat owner</p>
        </div>
      </Slider>
    </div>
  );
};

export default Positions;
