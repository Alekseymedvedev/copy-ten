import {createSlice, PayloadAction} from "@reduxjs/toolkit";




const initialState= {
  isToken: ''
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        auth(state, action: PayloadAction<string>) {
            state.isToken=action.payload
        },
    },
})

export default authSlice.reducer