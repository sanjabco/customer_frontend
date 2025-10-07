import { Link, useLocation } from "react-router-dom";
import Notification from "./Notification";
import ProfileDropDown from "./ProfileDropDown";

const Header = () => {

    const { pathname } = useLocation();
    console.log(pathname.includes("account"))

    return (
        <header className='bg-[#EDEFF1] flex items-center justify-between px-4 py-5 fixed top-0 z-50 w-full max-w-md'>
            <Link to="/" className="flex items-start gap-3 rounded-3xl">
                <img className='w-10' src="../../assets/images/logo.png" alt="" />
                <div >
                    <h3 className="font-bold text-lg">سنجاب</h3>
                    <p className="text-sm">سامانه اعتبار خرید</p>
                </div>
            </Link>
            {
                pathname.includes("account") ?
                    <Notification /> :
                    <ProfileDropDown />
            }
        </header>
    );
};

export default Header;