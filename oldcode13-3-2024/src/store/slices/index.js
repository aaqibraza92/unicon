import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlices";


const Store= configureStore({
    reducer: {
        type: UserSlice,
    },
});

export default Store;