import MyShop from "../../components/shop/MyShop";
import OtherShop from "../../components/shop/OtherShop";
import Layout from "../layouts/Layout";

const Shop = () => {
    return (
        <Layout>
            <div className="py-5 px-5">
                <MyShop />
                <OtherShop />
            </div>
        </Layout>
    );
};

export default Shop;