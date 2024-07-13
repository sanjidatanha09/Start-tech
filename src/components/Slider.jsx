
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner1.jpg"
import banner3 from "../assets/banner1.jpg"
import banner4 from "../assets/banner1.jpg"


// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-full' src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full' src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full' src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full' src={banner4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
