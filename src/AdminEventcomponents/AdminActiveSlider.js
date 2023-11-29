import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { AdminServiceData } from './AdminIndexevent';
import './AdminActiveSlider.css';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'; 



const AdminActiveSlider = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col h-screen bg-[#6c34af]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {AdminServiceData.map((item) => (
          <SwiperSlide key={item.title} className="swiper-slide-container">
            <div className="active-slider-container relative shadow-lg overflow-hidden cursor-pointer">
              <div className="slide-image relative h-[100%] lg:h-[70%] xl:h-[50%]">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src={item.backgroundImage}
                  alt={item.title}
                />
              </div>
              <div className="overlay absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="content-container relative flex flex-col gap-3 p-4 rounded-md bg-white">
                <div className="icon-container text-blue-600 w-8 h-8 lg:w-6 lg:h-6">{item.icon}</div>
                <h1 className="title text-xl lg:text-2xl">{item.title}</h1>
                <p className="content lg:text-[18px]">{item.content}</p>
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>

  );
};

export default AdminActiveSlider;