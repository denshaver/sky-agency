import React from "react";

const ReviewItem = ({ reviewSwiperRef }) => {
  const goNextReview = () => {
    reviewSwiperRef.current.slideNext();
  };

  const goPrevReview = () => {
    reviewSwiperRef.current.slidePrev();
  };
  return (
    <div className="review-item">
      <div className="review-name">
        <img src="./img/reviews/logo-review.png" alt="logo" />
        <h5>Махфуза</h5>
        <span>Менеджер “Taksim”</span>
      </div>
      <div className="review-divider"></div>
      <div className="review-text">
        <p>
          Ребят спасибо за Ваш труд и проделанную работу. Было очень приятно
          сотрудничать с вами😉☺️
        </p>
        <div className="review-buttons">
          <button onClick={goPrevReview} className="swiper-button-prev">
            <img src="./img/reviews/left.svg" alt="prev" />
          </button>
          <button onClick={goNextReview} className="swiper-button-next">
            <img src="./img/reviews/right.svg" alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
