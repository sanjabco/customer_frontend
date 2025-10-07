import Layout from "../layouts/Layout";

const Category = () => {
    return (
        <Layout>
            <div className="py-5 px-5">
                <h1 className="text-[#212121] text-xl font-extrabold"> دسته بندی ها</h1>
                <div className="my-5 grid grid-cols-3 gap-x-3 gap-y-5">
                    {
                        [...Array(12)].map((_, index) => {
                            return (
                                <div key={index} className="p-5 bg-white rounded-3xl text-center">
                                    <img className="mx-auto" src="../../../assets/images/category/Restaurant.png" alt="Restaurant" />
                                    <p className="mt-3 text-xs text-[#6F6F9D]">رستوران و تهیه  غذا</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    );
};

export default Category;