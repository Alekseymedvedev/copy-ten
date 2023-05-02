import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IType {
    value: string
}

const initialState = {
    risk: 0,
    maxLot: 0,
    minLot: false,
    excludeSymbols: [],
    excludeDays: [],
    excludeHours: []
}


export const setParametersSlice = createSlice({
    name: 'setParametersSlice',
    initialState,
    reducers: {
        addRisk(state: any, action: PayloadAction<any>) {
            state.risk = action.payload
        },
        addMaxLot(state: any, action: PayloadAction<any>) {
            state.maxLot = action.payload
        },
        addMinLot(state: any, action: PayloadAction<any>) {
            state.minLot = action.payload
        },
        addExcludeSymbols(state: any, action: PayloadAction<string>) {
            state.excludeSymbols = action.payload
        },
        addExcludeDays(state: any, action: PayloadAction<string>) {
            state.excludeDays = action.payload
        },
        addExcludeHours(state: any, action: PayloadAction<string>) {
            state.excludeHours = action.payload
        },
    },
})

export default setParametersSlice.reducer