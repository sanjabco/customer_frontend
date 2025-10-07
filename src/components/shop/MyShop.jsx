// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';
import MyShopItem from './MyShopItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getShops } from '../../features/shop/shopActions';
import { SyncLoader } from "react-spinners"

const MyShop = () => {

    const { shops } = useSelector(state => state.shop);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShops())
    }, [])

    console.log(shops)

    return (
        <div className='bestDiscount'>
            <h1 className="text-[#212121] text-xl font-extrabold">فروشگاه های من</h1>
            <div className='mt-5 relative'>
                {shops.length == 0 ?
                    <SyncLoader color="#FF5644" className="text-center" /> :
                    <Swiper
                        modules={[FreeMode, Autoplay]}
                        spaceBetween={15}
                        slidesPerView={"auto"}
                        freeMode={true}
                        className="mySwiper"
                    >
                        {
                            shops.map(shop => {
                                return (
                                    <SwiperSlide key={shop.id}>
                                        <MyShopItem shop={shop} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                }
            </div>
        </div>
    );
};

export default MyShop;