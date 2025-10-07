import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getProfile = createAsyncThunk("credit/getProfile",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get("/Customer/GetCustomerInfo");
            console.log(data)
            return data.customerDto;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    })

export const setProfile = createAsyncThunk("auth/setProfile",
    async (profile, { rejectWithValue }) => {
        try {
            const { data } = await axios.put("/Customer/UpdateCustomer", profile);
            return data;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    })


