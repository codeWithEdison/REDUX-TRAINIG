import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import AuthSlice from "./AuthSlice";
 const store =  configureStore({
    reducer:{
        user: userSlice,
        auth: AuthSlice
    }
});
export default store;