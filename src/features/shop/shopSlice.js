import { createSlice } from "@reduxjs/toolkit";
import { getShops } from "./shopActions";

const initialState = {
    shops: [],
    loading: false,
    error: null,
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getShops.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getShops.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.shops = payload;
            })
            .addCase(getShops.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload
            })
    }
})

export default shopSlice.reducer