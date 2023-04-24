import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Features/Slice'

const store =  configureStore({
    reducer : {
        cart : cartReducer
    }

})
 export default store