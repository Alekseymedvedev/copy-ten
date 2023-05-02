import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const userToken = localStorage.getItem('token')
export const chartApi = createApi({
    reducerPath: 'chartApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/user/forex`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", "application/json")
            headers.set("Accept", "application/json")
            headers.set("Authorization", `Bearer ${userToken}`)
        },
    }),

    endpoints: (build) => ({
        getChartBalance: build.query({
            query: ({id, url}) => ({
                url: `/${id}/graph/balance/${url}`
            }),
        }),

        getChartBalanceGain: build.query({
            query: ({id, url}) => ({
                url: `/${id}/graph/balance-gain/${url}`
            }),
        }),
         getChartTraders: build.query({
            query: ({id, url}) => ({
                url: `/${id}/graph/traders/${url}`
            }),
        }),
        getChartDrawdown: build.query({
            query: ({id, url}) => ({
                url: `/${id}/graph/dropdown/${url}`
            }),
        }),
        getChartDrawdownAndGain: build.query({
            query: ({id, url}) => ({
                url: `/${id}/graph/balance-with-dropdown/${url}`
            }),
        }),
        getChartSymbol: build.query({
            query: ({id, url}) => ({
                url: `/${id}/graph/symbol-profit-losing-ratio/${url}`
            }),
        }),
        getChartDay: build.query({
            query: ({id, url}) => ({
                url: `/${id}/graph/days-profit-losing-ratio/${url}`
            }),
        }),
        getChartHours: build.query({
            query: ({id, url}) => ({
                url: `/${id}/graph/hours-profit-losing-ratio/${url}`
            }),
        }),
        getChartMonths: build.query({
            query: ({id, url}) => ({
                url: `/${id}/graph/months/${url}`
            }),
        }),

    })
});

export const {
    useGetChartBalanceQuery,
    useGetChartTradersQuery,
    useGetChartBalanceGainQuery,
    useGetChartSymbolQuery,
    useGetChartDayQuery,
    useGetChartHoursQuery,
    useGetChartDrawdownQuery,
    useGetChartDrawdownAndGainQuery,
    useGetChartMonthsQuery,
} = chartApi;

export const {} = chartApi.endpoints;