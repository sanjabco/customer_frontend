import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getShops = createAsyncThunk("shop/getShops",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get("/Customer/GetCustomerBusinesses");
            console.log(data)
            return data.businesses;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    })

