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
      <div className="relative px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <h2 className="h2 text-center mb-8 md:mb-12">Our Latest Events</h2>
        
        <div className="relative w-full max-w-6xl mx-auto">
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
            className="w-full py-12"
          >
            {latestEvents.map((event, index) => (
              <SwiperSlide key={index} className="w-64 md:w-80 lg:w-96">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </SwiperSlide>
            ))}

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 flex justify-between pointer-events-none px-2 md:px-4">
              <button className="swiper-button-prev !static !mt-0 !w-10 !h-10 md:!w-12 md:!h-12 flex items-center justify-center bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg transition-all duration-300 pointer-events-auto">
                <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="swiper-button-next !static !mt-0 !w-10 !h-10 md:!w-12 md:!h-12 flex items-center justify-center bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg transition-all duration-300 pointer-events-auto">
                <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Pagination */}
            <div className="swiper-pagination !bottom-0 !-mb-6" />
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default CompetitionsSlider;