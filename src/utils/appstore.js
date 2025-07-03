import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "./userlice";

const appstore=configureStore({
    reducer:{
        user:useReducer
    }
})
export default appstore;