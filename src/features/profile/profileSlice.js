import { createSlice } from "@reduxjs/toolkit";
import { getProfile, setProfile } from "./profileActions";


// initialize userToken from cookie

const initialState = {
    profile: [],
    loading: false,
    error: null,
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProfile.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProfile.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.profile = payload;
            })
            .addCase(getProfile.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload
            })
            .addCase(setProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(setProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.profile = action.payload;
            })
            .addCase(setProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default profileSlice.reducer