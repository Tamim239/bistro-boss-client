import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import { SectionTitle } from '../../../Components/SectionTitle/SectionTitle';


export const Category = () => {
  return (

        <section>
            <SectionTitle 
            heading={"Order Online"}
            subHeading={"11.00 AM - 10.00 PM "}
            ></SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='text-4xl uppercase text-center text-white -mt-20'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
            <h1 className='text-4xl uppercase text-center text-white -mt-20'>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
            <h1 className='text-4xl uppercase text-center text-white -mt-20'>Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
            <h1 className='text-4xl uppercase text-center text-white -mt-20'>Desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
            <h1 className='text-4xl uppercase text-center text-white -mt-20'>Soups</h1>
        </SwiperSlide>
      </Swiper>
        </section>

  )
}
