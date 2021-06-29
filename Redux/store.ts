import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user.reducer";

let reducers: any = {
   user: userReducer,
}


export default configureStore({
   reducer: reducers,
})
