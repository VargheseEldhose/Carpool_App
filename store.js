import { configureStore } from '@reduxjs/toolkit'
import navreducer from "./slices/navSlice"

export const store=configureStore({
    reducer:{
        nav:navreducer
    }
});