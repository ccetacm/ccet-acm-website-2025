import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Add icons
import "../styles/acmwstyles.css";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { events } from '../data/events';
import Section from './Section';
import "../styles/CompSlider.css"

const CompetitionsSlider = () => {
  const latestEvents = events.slice(0, 7);

  return (
    <Section>
      <div className="container comp-section">
        <h2 className="h2 mt-5 text-center">Our Latest Events</h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ 
            el: '.swiper-pagination', 
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          {latestEvents.map((event, index) => (
            <SwiperSlide key={index}>
              <img src={event.image} alt={event.title} />
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx>{`
          .swiper-pagination {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            width: 100%;
          }
        `}</style>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FaChevronLeft size={20} />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FaChevronRight size={20} />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </Section>
  );
}

export default CompetitionsSlider;