import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import keywordSearchSlice from "./keywordSearchSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
        keywordSearch: keywordSearchSlice,
    },
}); 

export default store;