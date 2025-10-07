import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { deleteCookie, getCookie, setCookie } from "../../helper";

export const sendCode = createAsyncThunk("auth/sendCode",
    async (phoneNumber, { rejectWithValue }) => {
        try {
            const { data } = await axios.post("/Auth/CreateOtp", phoneNumber);
            console.log(data)
            setCookie("expireDate", data.expireDate.split(" ")[1], 0.5);
            let phone = JSON.parse(phoneNumber)
            return {
                phoneNumber: phone.otp.phoneNumber,
                data
            };
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    })

export const login = createAsyncThunk("auth/login",
    async ({ phoneNumber, code }, { rejectWithValue }) => {
        try {
            const query = `Otp.PhoneNumber=${phoneNumber}&Otp.Code=${code}`;
            const { data } = await axios.get("/Auth/OtpCheckResult?" + query);
            // store user's token in cookie
            setCookie("jwt", data.authorization, 1);
            axios.defaults.headers.common["authorization"] = "Bearer " + getCookie("jwt");
            return data;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const logout = createAsyncThunk("auth/logout",
    async () => {
        try {
            await axios.post("/Auth/Logout");
            deleteCookie("jwt");
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return error.response.data.message
            } else {
                return error.message
            }
        }
    }
)
