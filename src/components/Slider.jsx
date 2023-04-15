import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';

export const Slider = ({ slides, quant }) => {
  return (
    <Swiper
      modules={[A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={quant}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Link to={`/fullItem/${slide.id}`}>
            <h4>{slide.title}</h4>
            <img src={slide.imageUrl} alt={slide.title} className="slider__image" />
            <h5>{slide.price} Br</h5>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
