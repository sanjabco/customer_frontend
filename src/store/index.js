import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
// import mainReducer from "../features/home/mainSlice"
import creditReducer from "../features/credit/creditSlice"
import shopReducer from "../features/shop/shopSlice"
import profileReducer from "../features/profile/profileSlice"

export default configureStore({
    reducer: {
        auth: authReducer,
        // main: mainReducer,
        credit: creditReducer,
        shop: shopReducer,
        profile: profileReducer,
    }
})