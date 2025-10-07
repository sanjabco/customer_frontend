import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';

const Toastify = () => {
    const notify = ({ type, text }) => {
        const options = {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
        switch (type) {
            case "success":
                toast.success(text, options);
                break;
            case "error":
                toast.error(text, options);
                break;
            case "info":
                toast.info(text, options);
                break;
            case "warning":
                toast.warning(text, options);
                break;
        }
    };
    notify();
    return (
        <div>
            <ToastContainer />
        </div>
    );
};
export default Toastify;
