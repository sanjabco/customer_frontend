import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authActions";

const ProfileDropDown = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        await dispatch(logout());
        navigate("/send-code")
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={toggleDropdown}
            >
                <img
                    className="w-14 h-14 rounded-3xl"
                    src="../../assets/images/avatars/avatar.png" />

            </div>
            {isOpen && (
                <div
                    className="origin-top-right absolute left-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="py-1" role="none">
                        <Link
                            to="/account"
                            className="text-gray-700 w-full px-4 py-2 text-sm hover:bg-gray-100"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                        >
                            حساب کاربری
                        </Link>
                        <button
                            className="text-gray-700 w-full px-4 py-2 text-sm hover:bg-gray-100"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                            onClick={handleLogout}
                        >
                            خروج
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};


export default ProfileDropDown;