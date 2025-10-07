import Tabs from "../../components/discount/Tabs";
import Layout from "../layouts/Layout";

const Discount = () => {
    return (
        <Layout>
            <div className="py-5 px-5">
                <h1 className="text-[#212121] text-xl font-extrabold">تخفیف ها</h1>
                <div >
                    <Tabs />
                </div>
            </div>
        </Layout>
    );
};

export default Discount;