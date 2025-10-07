import Layout from "../layouts/Layout";
import Menu from "../../components/account/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../features/profile/profileActions";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Account = () => {

    const { profile } = useSelector(state => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile())
    }, [])
    console.log(profile);

    return (
        <Layout>
            <div >
                <div className="bg-[#EDEFF1] -mt-2 h-16"></div>
                <div className="-mt-[60px]">
                    <div className="w-[120px] h-[120px] rounded-3xl overflow-hidden mx-auto">
                        <img className="w-full h-full object-center" src="../../../assets/images/avatars/avatar.png" alt="" />
                    </div>
                    <div className="text-center mt-3">
                        <h2 className="font-extrabold text-xl">{profile.firstName} {profile.lastName}</h2>
                        <div className="flex justify-center items-center gap-1 mt-1">
                            <p className="text-[#6F6F9D]">{profile.phoneNumber || < Skeleton count={2} />}</p>
                            {profile.phoneNumber &&
                                <span>
                                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12C3.72386 12 3.5 12.2239 3.5 12.5C3.5 12.7761 3.72386 13 4 13H6C6.27614 13 6.5 12.7761 6.5 12.5C6.5 12.2239 6.27614 12 6 12H4ZM2 0C0.89543 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H8C9.10457 16 10 15.1046 10 14V2C10 0.89543 9.10457 0 8 0H2ZM1 2C1 1.44772 1.44772 1 2 1H8C8.55228 1 9 1.44772 9 2V14C9 14.5523 8.55228 15 8 15H2C1.44772 15 1 14.5523 1 14V2Z" fill="#6F6F9D" />
                                    </svg>
                                </span>
                            }
                        </div>
                    </div>
                </div>
                <div className="mt-10 px-10">
                    <Menu />
                </div>
            </div>
        </Layout>
    );
};

export default Account;