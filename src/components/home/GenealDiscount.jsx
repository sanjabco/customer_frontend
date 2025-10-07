import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';
import GeneralDiscountItem from './GeneralDiscountItem';
// import { useSelector } from 'react-redux';

const GeneralDiscount = () => {

    // const { publicDiscounts } = useSelector(state => state.main)



    return (
        <section className='bg-[#F9FAFB] px-4 py-10 bestDiscount mt-5'>
            <div className='flex justify-between items-center'>
                <h3 className='font-extrabold'>تخفیف های عمومی</h3>
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
                        <GeneralDiscountItem />
                    </SwiperSlide>
                    <SwiperSlide >
                        <GeneralDiscountItem />
                    </SwiperSlide>
                    <SwiperSlide >
                        <GeneralDiscountItem />
                    </SwiperSlide>
                    <SwiperSlide >
                        <GeneralDiscountItem />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default GeneralDiscount;