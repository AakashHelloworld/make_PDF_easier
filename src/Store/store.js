import { configureStore } from "@reduxjs/toolkit";
import {tabReducer} from "./tabSlice";

export const store=configureStore({
    reducer: { tab: tabReducer}
})
