import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IBarChartState {
    id: number;
    name: string;
    pv: number;
    uv: any;
}

interface ISwitchData {
    id: string;
    name: string;
    value: number;
}

interface IBarChartData {
    barChartData: IBarChartState[]
    // switchData: ISwitchData[]
}

const initialState: IBarChartData = {
    barChartData: [],
}


export const barChartSlice = createSlice({
    name: 'barChart',
    initialState,
    reducers: {

        fetchBarChart(state, action: PayloadAction<any>) {
            state.barChartData=action.payload
        },
        addBarChart(state, action: PayloadAction<any>) {
            state.barChartData.splice(action.payload - 1, 0,
                {
                    id: action.payload.id,
                    name: `INST${action.payload - 1}`,
                    pv: action.payload.pv,
                    uv: 0
                },
            )
        },
        deleteBarChart(state, action: PayloadAction<number>) {
            state.barChartData.splice(action.payload - 1, 1)
        },
    },
})

export default barChartSlice.reducer