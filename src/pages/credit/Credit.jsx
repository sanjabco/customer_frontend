import { useDispatch, useSelector } from "react-redux";
import BusinessCredit from "../../components/credit/BusinessCredit";
import Layout from "../layouts/Layout";
import { useEffect } from "react";
import { getCredits } from "../../features/credit/creditActions";
import { SyncLoader } from "react-spinners"

const Credit = () => {
    const dispatch = useDispatch();
    const { credits } = useSelector(state => state.credit);
    useEffect(() => {
        dispatch(getCredits())
    }, [])
    console.log(credits)
    return (
        <Layout>
            <div className="py-5 px-5">
                <h1 className="text-[#212121] text-xl font-extrabold">اعتبار ها</h1>
                <div className="mt-7 grid gap-5">
                    {
                        credits.length == 0 ?
                            <SyncLoader color="#FF5644" className="rotate-90" /> :
                            credits.map((credit, index) => {
                                return <BusinessCredit key={index} credit={credit} />
                            })
                    }
                </div>
            </div>
        </Layout>
    );
};


export default Credit;