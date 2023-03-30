import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlices";


const Store= configureStore({
    reducer: {
        users: UserSlice,
    },
});

export default Store;