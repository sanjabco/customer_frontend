// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import BannerSliderItem from './BannerSliderItem';


const Banner = () => {
    return (
        <Swiper
            pagination={true}
            loop
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            freeMode
            className="mySwiper pb-10"
        >
            {
                [...Array(4)].map((_, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <BannerSliderItem />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

export default Banner;