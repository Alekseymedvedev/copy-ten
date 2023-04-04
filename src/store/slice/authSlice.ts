import {createSlice, PayloadAction} from "@reduxjs/toolkit";




const initialState= {
  isAuth: false
}


export const authSlice = createSlice({
    name: 'barChart',
    initialState,
    reducers: {

        auth(state, action: PayloadAction<boolean>) {
            state.isAuth=action.payload
        },
    },
})

export default authSlice.reducer