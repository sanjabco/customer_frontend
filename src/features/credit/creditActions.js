import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getCredits = createAsyncThunk("credit/getCredits",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get("/Customer/GetCustomerCredits");
            console.log(data)
            return data.models;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    })

