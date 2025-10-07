import { useLocation } from 'react-router-dom';
import PropTypes from "prop-types"
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Layout = ({ children }) => {

    const { pathname } = useLocation();

    return (
        <div className={`${pathname.includes("account") ? "bg-white" : "bg-[#F9FAFB]"}`}>
            <Header />
            <div className={`${!pathname.includes("account") && "pb-20"} pt-24`}>
                {children}
            </div>
            {
                !pathname.includes("account") &&
                <Footer />
            }
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout;