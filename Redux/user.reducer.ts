import { createSlice } from '@reduxjs/toolkit'

export const userslice = createSlice({
   name: 'user',
   initialState: {
      currentUser: "Ilyas",
   },
   reducers: {
      setCurrentUser: (state, action) => {
         state.currentUser = action.payload
      },
   },
})

export const {
   setCurrentUser,
} = userslice.actions

export const getCurrentUser = (state:any) => {
   return state.user.currentUser || null
}

export default userslice.reducer
