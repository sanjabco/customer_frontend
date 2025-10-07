
const GeneralDiscountItem = ({ discount }) => {
    return (
        <div className="bg-white rounded-3xl py-4 px-7 flex justify-between items-center overflow-hidden">
            <div>
                <img src="../../../assets/images/discount/pic-1.png" alt="" />
                <div className="my-3 flex items-center gap-1">
                    <span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.06818 0C0.925957 0 0 0.925956 0 2.06818V11.9318C0 13.074 0.925957 14 2.06818 14H11.9318C13.074 14 14 13.074 14 11.9318V2.06818C14 0.925956 13.074 0 11.9318 0H2.06818ZM0.954546 4.13827H13.0455V11.9318C13.0455 12.5469 12.5469 13.0455 11.9318 13.0455H2.06818C1.45314 13.0455 0.954546 12.5469 0.954546 11.9318V4.13827ZM10.3417 9.22817C9.90237 9.22817 9.54623 9.58431 9.54623 10.0236C9.54623 10.4629 9.90237 10.8191 10.3417 10.8191C10.781 10.8191 11.1371 10.4629 11.1371 10.0236C11.1371 9.58431 10.781 9.22817 10.3417 9.22817ZM6.99793 9.22817C6.55861 9.22817 6.20247 9.58431 6.20247 10.0236C6.20247 10.4629 6.55861 10.8191 6.99793 10.8191C7.43724 10.8191 7.79338 10.4629 7.79338 10.0236C7.79338 9.58431 7.43724 9.22817 6.99793 9.22817ZM10.3417 6.04635C9.90237 6.04635 9.54623 6.40249 9.54623 6.84181C9.54623 7.28112 9.90237 7.63726 10.3417 7.63726C10.781 7.63726 11.1371 7.28112 11.1371 6.84181C11.1371 6.40249 10.781 6.04635 10.3417 6.04635ZM6.99793 6.04635C6.55861 6.04635 6.20247 6.40249 6.20247 6.84181C6.20247 7.28112 6.55861 7.63726 6.99793 7.63726C7.43724 7.63726 7.79338 7.28112 7.79338 6.84181C7.79338 6.40249 7.43724 6.04635 6.99793 6.04635ZM3.65417 6.04635C3.21485 6.04635 2.85871 6.40249 2.85871 6.84181C2.85871 7.28112 3.21485 7.63726 3.65417 7.63726C4.09348 7.63726 4.44962 7.28112 4.44962 6.84181C4.44962 6.40249 4.09348 6.04635 3.65417 6.04635ZM2.06818 0.954545H11.9318C12.5469 0.954545 13.0455 1.45314 13.0455 2.06818V3.18373H0.954546V2.06818C0.954546 1.45314 1.45314 0.954545 2.06818 0.954545Z" fill="#6F6F9D" />
                        </svg>
                    </span>
                    <p className="text-[#6F6F9D] text-xs">تاریخ اعتبار</p>
                    <p className="text-sm font-medium">1402/06/24</p>
                </div>
                <div className="my-3 flex items-center gap-1">
                    <span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3931 4.48346C10.8894 4.48346 11.2917 4.082 11.2917 3.58677C11.2917 3.09154 10.8894 2.69008 10.3931 2.69008C9.89678 2.69008 9.49445 3.09154 9.49445 3.58677C9.49445 4.082 9.89678 4.48346 10.3931 4.48346ZM7.81331 3.8583e-05C7.33336 -0.00310068 6.87209 0.185442 6.53228 0.523656L0.528027 6.4997C-0.175376 7.19979 -0.176102 8.33655 0.526407 9.03754L4.9732 13.4747C5.67508 14.1751 6.81305 14.1751 7.51492 13.4747L13.4736 7.52893C13.8113 7.19196 14.0007 6.73472 14 6.25817L13.9934 1.81949C13.992 0.834647 13.1949 0.0352405 12.208 0.0287848L7.81331 3.8583e-05ZM7.1669 1.15852C7.33681 0.989414 7.56744 0.895142 7.80741 0.896712L12.2021 0.925458C12.6955 0.928686 13.0941 1.32839 13.0948 1.82081L13.1014 6.25949C13.1017 6.49777 13.007 6.72639 12.8382 6.89487L6.87949 12.8407C6.52855 13.1909 5.95957 13.1909 5.60863 12.8407L1.16184 8.40348C0.810583 8.05299 0.810946 7.48461 1.16265 7.13456L7.1669 1.15852Z" fill="#6F6F9D" />
                        </svg>
                    </span>
                    <p className="text-[#6F6F9D] text-xs">کد تخفیف</p>
                    <p className="text-sm font-medium">AFTGH76OP</p>
                    <p className="text-sm text-[#FF5644]">کپی</p>
                </div>
            </div>
            <div className='flex flex-col items-start relative h-full gap-2'>
                <span className='w-2.5 h-2.5 bg-[#F9FAFB] rounded-full inline-block'></span>
                <span className='w-2.5 h-2.5 bg-[#F9FAFB] rounded-full inline-block'></span>
                <span className='w-2.5 h-2.5 bg-[#F9FAFB] rounded-full inline-block'></span>
                <span className='w-2.5 h-2.5 bg-[#F9FAFB] rounded-full inline-block'></span>
                <span className='w-2.5 h-2.5 bg-[#F9FAFB] rounded-full inline-block'></span>
                <span className='w-7 h-7 bg-[#F9FAFB] rounded-full inline-block absolute -top-[42px] left-[calc(50%_-_14px)]'></span>
                <span className='w-7 h-7 bg-[#F9FAFB] rounded-full inline-block absolute -bottom-[42px] right-[calc(50%_-_14px)]'></span>
            </div>

            <div className="text-center font-bold">
                <p className="text-[#FF5644] text-2xl font-extrabold">%{discount * 10 + 5}</p>
                <p className="text-[#FF5644]">تخفیف</p>
            </div>
        </div>
    );
};

export default GeneralDiscountItem;