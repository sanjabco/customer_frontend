import { createSlice } from "@reduxjs/toolkit";
import {
    login,
    logout,
    sendCode

} from "./authActions";
import { toast } from "react-toastify";

const initialState = {
    loading: "idle",
    phoneNumber: null,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(sendCode.pending, (state) => {
                state.loading = "loading";
                state.error = null;
            })
            .addCase(sendCode.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.loading = "succeeded";
                state.phoneNumber = payload.phoneNumber;
                toast.success("کد ورود با موفقیت برای شما ارسال شد.")
            })
            .addCase(sendCode.rejected, (state, { payload }) => {
                state.loading = "failed";
                state.error = payload
                toast.error('عملیات با خطا مواجه شد.')
            })
            .addCase(login.pending, (state) => {
                state.loading = "loading";
                state.error = null;
            })
            .addCase(login.fulfilled, (state) => {
                state.loading = "succeeded";
                toast.success("به سنجاب خوش آمدید.");
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.loading = "failed";
                state.error = payload
                toast.error('عملیات با خطا مواجه شد.')
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = "idle";
                state.error = null;
                toast.success("با موفقیت از سامانه خارج شدید.");
            })
            .addCase(logout.rejected, (state, { payload }) => {
                state.loading = "failed";
                state.error = payload
                toast.error('عملیات با خطا مواجه شد.')
            })
    }
})

export default authSlice.reducer