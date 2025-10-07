
const OtherShop = () => {
    return (
        <div className="mt-10">
            <h1 className="text-[#212121] text-xl font-extrabold">سایر فروشگاه ها</h1>
            <div className="my-5 grid grid-cols-3 gap-x-3 gap-y-5">
                {
                    [...Array(9)].map((_, index) => {
                        return (
                            <div key={index} className="p-5 bg-white rounded-3xl text-center">
                                <img className="mx-auto" src="../../../assets/images/category/pic-1.png" alt="Restaurant" />
                                <p className="mt-3 text-xs text-[#6F6F9D]">رستوران شماره 1</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default OtherShop;