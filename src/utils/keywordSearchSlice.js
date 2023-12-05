import { createSlice } from "@reduxjs/toolkit";

const keywordSearchSlice = createSlice({
    name: "keywordSearch",
    initialState : {
        keyword: ""
   },
   reducers: {
        keyword: (state, action) => {
            state.keyword = action.payload
        },
   },
});

export const { keyword } = keywordSearchSlice.actions;
export default keywordSearchSlice.reducer;