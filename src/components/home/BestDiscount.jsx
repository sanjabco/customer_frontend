import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';
import BestDiscountItem from './BestDiscountItem';
// import { useSelector } from 'react-redux';

const BestDiscount = () => {
    // const { bestDiscounts } = useSelector(state => state.main)



    return (
        <section className='bg-[#E5E7EB] px-4 py-10 bestDiscount mt-10'>
            <div className='flex justify-between items-center'>
                <h3 className='font-extrabold'>بهترین تخفیف های من</h3>
                <Link to="/discount" className='font-bold text-[#6F6F9D]'>مشاهده همه</Link>
            </div>
            <div className='mt-5'>
                <Swiper
                    modules={[FreeMode, Autoplay]}
                    spaceBetween={15}
                    slidesPerView={"auto"}
                    freeMode={true}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <BestDiscountItem />
                    </SwiperSlide><SwiperSlide >
                        <BestDiscountItem />
                    </SwiperSlide><SwiperSlide >
                        <BestDiscountItem />
                    </SwiperSlide><SwiperSlide >
                        <BestDiscountItem />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default BestDiscount;