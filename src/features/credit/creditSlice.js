import { createSlice } from "@reduxjs/toolkit";
import { getCredits } from "./creditActions";

const initialState = {
    credits: [],
    loading: "idle",
    error: null,
}

const creditSlice = createSlice({
    name: "credit",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getCredits.pending, state => {
                state.loading = "loading";
                state.error = null;
            })
            .addCase(getCredits.fulfilled, (state, { payload }) => {
                state.loading = "succeeded";
                state.credits = payload;
            })
            .addCase(getCredits.rejected, (state, { payload }) => {
                state.loading = "failed";
                state.error = payload;
            })
    }
})

export default creditSlice.reducer