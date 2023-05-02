import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState= {
    accountId: 0,
    accountName: '',
}


export const accountIdSlice = createSlice({
    name: 'accountNumber',
    initialState,
    reducers: {
        changeAccountId(state:any, action: PayloadAction<number>){
            state.accountId=action.payload
        },
        changeAccountName(state:any, action: PayloadAction<string>){
            state.accountName=action.payload
        },
    },
})

export default accountIdSlice.reducer