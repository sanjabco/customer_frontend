import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import SendCode from "../pages/auth/SendCode";
import Home from "../pages/home/Home";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Category from "../pages/category/Category";
import Shop from "../pages/shop/Shop";
import Discount from "../pages/discount/Discount";
import Account from "../pages/account/Account";
import Profile from "../pages/profile/Profile";
import ShopRequest from "../pages/shop/ShopRequest";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Credit from "../pages/credit/Credit";


export const router = createBrowserRouter([
    {
        path: "/",
        element:
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>,
    },
    {
        path: "/",
        element:
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>,
    },
    {
        path: "/account",
        element:
            <ProtectedRoute>
                <Account />
            </ProtectedRoute>,
    },
    {
        path: "/account/profile",
        element:
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>,
    },
    {
        path: "/account/shop-request",
        element:
            <ShopRequest>
                <Profile />
            </ShopRequest>,
    },
    {
        path: "/account/about",
        element:
            <About>
                <Profile />
            </About>,
    },
    {
        path: "/account/contact",
        element:
            <Contact>
                <Profile />
            </Contact>,
    },
    {
        path: "/category",
        element:
            <ProtectedRoute>
                <Category />
            </ProtectedRoute>,
    },
    {
        path: "/credit",
        element:
            <ProtectedRoute>
                <Credit />
            </ProtectedRoute>,
    },
    {
        path: "/discount",
        element:
            <ProtectedRoute>
                <Discount />
            </ProtectedRoute>,
    },
    {
        path: "/shop",
        element:
            <ProtectedRoute>
                <Shop />
            </ProtectedRoute>,
    },
    {
        path: "/login",
        element: < Login />,
    },
    {
        path: "/send-code",
        element: < SendCode />,
    }
]);