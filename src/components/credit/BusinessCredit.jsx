import PropTypes from "prop-types"

const BusinessCredit = ({ credit }) => {
    return (
        <div className="bg-white rounded-3xl py-4 px-7 flex justify-between items-center overflow-hidden">
            <div className='w-3/5'>
                <img src="../../../assets/images/discount/pic-1.png" alt="" />
                <div className="my-4 flex items-end gap-1">
                    <span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.06818 0C0.925957 0 0 0.925956 0 2.06818V11.9318C0 13.074 0.925957 14 2.06818 14H11.9318C13.074 14 14 13.074 14 11.9318V2.06818C14 0.925956 13.074 0 11.9318 0H2.06818ZM0.954546 4.13827H13.0455V11.9318C13.0455 12.5469 12.5469 13.0455 11.9318 13.0455H2.06818C1.45314 13.0455 0.954546 12.5469 0.954546 11.9318V4.13827ZM10.3417 9.22817C9.90237 9.22817 9.54623 9.58431 9.54623 10.0236C9.54623 10.4629 9.90237 10.8191 10.3417 10.8191C10.781 10.8191 11.1371 10.4629 11.1371 10.0236C11.1371 9.58431 10.781 9.22817 10.3417 9.22817ZM6.99793 9.22817C6.55861 9.22817 6.20247 9.58431 6.20247 10.0236C6.20247 10.4629 6.55861 10.8191 6.99793 10.8191C7.43724 10.8191 7.79338 10.4629 7.79338 10.0236C7.79338 9.58431 7.43724 9.22817 6.99793 9.22817ZM10.3417 6.04635C9.90237 6.04635 9.54623 6.40249 9.54623 6.84181C9.54623 7.28112 9.90237 7.63726 10.3417 7.63726C10.781 7.63726 11.1371 7.28112 11.1371 6.84181C11.1371 6.40249 10.781 6.04635 10.3417 6.04635ZM6.99793 6.04635C6.55861 6.04635 6.20247 6.40249 6.20247 6.84181C6.20247 7.28112 6.55861 7.63726 6.99793 7.63726C7.43724 7.63726 7.79338 7.28112 7.79338 6.84181C7.79338 6.40249 7.43724 6.04635 6.99793 6.04635ZM3.65417 6.04635C3.21485 6.04635 2.85871 6.40249 2.85871 6.84181C2.85871 7.28112 3.21485 7.63726 3.65417 7.63726C4.09348 7.63726 4.44962 7.28112 4.44962 6.84181C4.44962 6.40249 4.09348 6.04635 3.65417 6.04635ZM2.06818 0.954545H11.9318C12.5469 0.954545 13.0455 1.45314 13.0455 2.06818V3.18373H0.954546V2.06818C0.954546 1.45314 1.45314 0.954545 2.06818 0.954545Z" fill="#6F6F9D" />
                        </svg>
                    </span>
                    <p className="text-[#6F6F9D] text-xs">فروشگاه</p>
                    <p className="text-sm font-medium">{credit.businessName}</p>
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
                <p className="text-[#FF5644] text-2xl font-extrabold">{credit.credit.toLocaleString()}</p>
                <p className="text-[#FF5644]">تومان</p>
            </div>
        </div>
    );
};

BusinessCredit.propTypes = {
    credit: PropTypes.object
}

export default BusinessCredit;