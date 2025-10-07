
const BestDiscountItem = () => {
    return (
        <div className='bg-white py-3 rounded-3xl text-center overflow-hidden'>
            <div className='px-7'>
                <img className='mx-auto w-20' src="../../../assets/images/category/pic-2.png" alt="" />
            </div>
            <div>
                <h3 className='font-bold text-[#6F6F9D] text-sm tracking-[-1px] mt-2'>رستوران گودفود</h3>
                <div className='flex justify-between my-5 relative px-6'>
                    <span className='w-2.5 h-2.5 bg-[#E5E7EB] rounded-full inline-block'></span>
                    <span className='w-2.5 h-2.5 bg-[#E5E7EB] rounded-full inline-block'></span>
                    <span className='w-2.5 h-2.5 bg-[#E5E7EB] rounded-full inline-block'></span>
                    <span className='w-2.5 h-2.5 bg-[#E5E7EB] rounded-full inline-block'></span>
                    <span className='w-2.5 h-2.5 bg-[#E5E7EB] rounded-full inline-block'></span>
                    <span className='w-7 h-7 bg-[#E5E7EB] rounded-full inline-block absolute -left-[14px] top-[calc(50%_-_14px)]'></span>
                    <span className='w-7 h-7 bg-[#E5E7EB] rounded-full inline-block absolute -right-[14px] top-[calc(50%_-_14px)]'></span>
                </div>
                <p className='text-[#FF5644] flex justify-center font-bold gap-1'>
                    <span className='text-[#FF5644] font-extrabold'>25 %</span>
                    تخفیف
                </p>
            </div>
        </div>
    );
};

export default BestDiscountItem;