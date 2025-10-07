import SearchBar from '../../components/home/SearchBar';
import Layout from '../layouts/Layout';
import Banner from '../../components/home/Banner';
import DiscountButton from '../../components/home/DiscountButton';
import BestDiscount from '../../components/home/BestDiscount';
import GeneralDiscount from '../../components/home/GenealDiscount';
import PwaInstallModal from '../../components/PwaInstallModal';
// import ShowToken from '../../components/showToken';


const Home = () => {

    return (
        <Layout >
            {/* <Notification /> */}
            <div className='w-full flex items-center gap-3 bg-[#EDEFF1] px-4 pb-24 pt-2'>
                <div className='w-3/5'>
                    <SearchBar />
                </div>
                <div className='w-2/5'>
                    <DiscountButton />
                </div>
            </div>
            <div className='-mt-16 px-4'>
                <Banner />
            </div>
            <div>
                <BestDiscount />
            </div>
            {/* <div className='py-5 w-full'>
                <ShowToken />
            </div> */}
            <div>
                <GeneralDiscount />
            </div>
            <PwaInstallModal />
            {/* <Toaster /> */}
        </Layout>
    );
};

export default Home;