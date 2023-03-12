import "./Reviews.css";
import Swiper from "swiper";
import "swiper/css";
import { useRef, useEffect } from "react";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  // SWIPER SETTINGS
  const reviewSwiperRef = useRef(null);

  useEffect(() => {
    const swiper2 = new Swiper(".swiper-contain", {
      slidesPerView: 1,
      spaceBetween: 500,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    reviewSwiperRef.current = swiper2;
  }, []);
  return (
    <div className="reviews-container">
      <div className="wrapper reviews-wrapper">
        <div className="swiper-contain">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <ReviewItem reviewSwiperRef={reviewSwiperRef} />
            </div>
            <div className="swiper-slide">
              <ReviewItem reviewSwiperRef={reviewSwiperRef} />
            </div>
            <div className="swiper-slide">
              <ReviewItem reviewSwiperRef={reviewSwiperRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
