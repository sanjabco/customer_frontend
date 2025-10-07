// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';
import GeneralDiscountItem from './GeneralDiscountItem';

const GeneralDiscount = () => {
    return (
        <div className='bestDiscount'>
            <Swiper
                modules={[FreeMode, Autoplay]}
                spaceBetween={10}
                slidesPerView={"auto"}
                freeMode={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='border border-[#6F6F9D] px-5 py-2 rounded-full w-fit cursor-pointer'>
                        <p className='text-[#6F6F9D] text-sm'>همه</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border border-[#6F6F9D] px-5 py-2 rounded-full w-fit cursor-pointer'>
                        <p className='text-[#6F6F9D] text-sm'>خرید روزانه</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border border-[#FF5644] bg-[#FF5644] px-5 py-2 rounded-full w-fit cursor-pointer'>
                        <p className='text-white text-sm'>کافه و رستوران</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border border-[#6F6F9D] px-5 py-2 rounded-full w-fit cursor-pointer'>
                        <p className='text-[#6F6F9D] text-sm'>آرایشی بهداشتی</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border border-[#6F6F9D] px-5 py-2 rounded-full w-fit cursor-pointer'>
                        <p className='text-[#6F6F9D] text-sm'>مد و پوشاک</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='mt-7 grid gap-5'>
                {
                    [...Array(5)].map((discount, index) => <GeneralDiscountItem key={discount} discount={index} />)
                }
            </div>
        </div>
    );
};

export default GeneralDiscount;