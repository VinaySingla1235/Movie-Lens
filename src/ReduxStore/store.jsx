import {configureStore} from "@reduxjs/toolkit"
import categoryFilterReducer from "../Features/categoryFilterReducer"
export const store=configureStore({
    reducer:categoryFilterReducer
})